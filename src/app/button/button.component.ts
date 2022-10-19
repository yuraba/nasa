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
  selectedValue: string = '';
  selectedValueRover: string = '';

  cameras: Camera[] = [
    {value: 'Front Hazard Avoidance Camera', viewValue: 'Front Hazard Avoidance Camera'},
    {value: 'Mast Camera', viewValue: 'Mast Camera'},
    {value: 'Rear Hazard Avoidance Camera', viewValue: 'Rear Hazard Avoidance Camera'},
  ];
  rovers: Rover[] = [
    {value: 'Curiosity', viewValue: 'Curiosity'},
    {value: 'Opportunity', viewValue: 'Opportunity'},
    {value: 'Spirit', viewValue: 'Spirit'},
  ];



  constructor( private loadService: LoadService,) { }

  ngOnInit(): void {
    this.loadArticle()
  }

  loadArticle(): void {

    this.loadService.get().pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
        console.log(data.photos);
        this.adminImage = data.photos;
      },
      error => {
        console.log(error);
      })


  }
  loadMore(){
    for(let i = 0; i<10; i++) {
      this.tenImage.push(this.adminImage[i+this.currentIndex]);
    }
    this.filterImage = this.adminImage.filter(t => t.camera.full_name === this.selectedValue);
    for(let i = 0; i<10; i++) {
      if(this.filterImage[i] === undefined){
        continue
      }
      this.OnlyfilterImage.push(this.filterImage[i+this.currentIndex]);
    }
    this.filterImage = [];
    this.filterImage = this.adminImage.filter(t => t.rover.name === this.selectedValueRover);
    for(let i = 0; i<10; i++) {
      if(this.filterImage[i] === undefined){
        continue
      }
      this.OnlyfilterImage.push(this.filterImage[i+this.currentIndex]);
    }
    console.log(this.OnlyfilterImage)
    this.currentIndex+=10;
  }

}
