import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=fjNrCMhApDWlE0aoP8ebpDqdUMbF3jeAEnr1sBsk'

  }

  get(rover: string, sol: string): Observable<any> {
    return this.http.get<any>(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=fjNrCMhApDWlE0aoP8ebpDqdUMbF3jeAEnr1sBsk`);
  }


}
