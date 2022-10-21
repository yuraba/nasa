import { Component, OnInit } from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {LoadService} from "../service/load.service";

interface Camera {
  value: string;
  viewValue: string;
}
interface Rover {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  public adminImage: Array<any> = [];
  public tenImage: Array<any> = [];
  public filterImage: Array<any> = [];
  public OnlyfilterImage: Array<any> = [];


  public currentIndex = 0;
  private readonly unsubscribe$ = new Subject<void>();
  selectedValue: string = 'Mast Camera';
  selectedValueRover: string = 'curiosity';
  public sol = '1';
  public check = false;
  public isLoadMore = true;
  public noContent = false;

  cameras: Camera[] = [
    {value: 'Front Hazard Avoidance Camera', viewValue: 'Front Hazard Avoidance Camera'},
    {value: 'Mast Camera', viewValue: 'Mast Camera'},
    {value: 'Rear Hazard Avoidance Camera', viewValue: 'Rear Hazard Avoidance Camera'},
    {value: 'Panoramic Camera', viewValue: 'Panoramic'},
    {value: 'Chemistry and Camera Complex', viewValue: 'Chemistry and Camera Complex'},
    {value: 'Mars Hand Lens Imager', viewValue: 'Mars Hand Lens Imager'},
    {value: 'Mars Descent Imager', viewValue: 'Navigation Camera'},
    {value: 'Miniature Thermal Emission Spectrometer (Mini-TES)', viewValue: 'Miniature Thermal Emission Spectrometer (Mini-TES)'}
  ];
  rovers: Rover[] = [
    {value: 'Curiosity', viewValue: 'Curiosity'},
    {value: 'Opportunity', viewValue: 'Opportunity'},
    {value: 'Spirit', viewValue: 'Spirit'},
  ];
  constructor( private loadService: LoadService,) { }
  ngOnInit(): void {
    // this.loadArticle()
  }

  loadArticle(): void {
    this.check = true;
    console.log(this.selectedValueRover.toLowerCase());
    this.loadService.get(this.selectedValueRover.toLowerCase(), this.sol).pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
        console.log(data);
        this.adminImage = data.photos;
        this.check = true;
        this.loadMore()
      },
      error => {
        console.log(error);
      })
  }



  loadMore(){
    console.log(this.adminImage);

    for(let i = 0; i<10; i++) {
      console.log(this.selectedValue!='' || this.selectedValueRover!='')
      if (this.adminImage[i+this.currentIndex]){
        this.tenImage.push(this.adminImage[i+this.currentIndex]);
      }
    }
    console.log(this.selectedValue)
    this.filterImage = this.adminImage.filter(t => t.camera.full_name === this.selectedValue);
    for(let i = 0; i<10; i++) {
      if(this.filterImage[i+this.currentIndex]){
        this.OnlyfilterImage.push(this.filterImage[i+this.currentIndex]);
      }
      else{
        this.isLoadMore = false
      }
    }
    this.currentIndex+=10;
    if (!this.OnlyfilterImage.length){
      this.noContent = true
    }
    console.log(this.OnlyfilterImage)
  }

}
