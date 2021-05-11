import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }
//Calls HTTP client and allows the grabbing of data from a URL
  GetMovieData():Observable<any>{
    return this.httpClient.get('http://www.omdbapi.com/?apikey=6462cf83&s=%27war%27%27');
  }
}
