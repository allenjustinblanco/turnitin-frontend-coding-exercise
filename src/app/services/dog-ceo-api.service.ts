import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs-compat/Observable';
import {Dog} from "../models/dog";

@Injectable({
  providedIn: 'root'
})
export class DogCeoApiService {

    // Properties
  // set a url as a property
  dogUrl: string = "https://dog.ceo/api/breeds/image/random";

  // inject the HttpClientModule as a dependency
  constructor(private httpClient: HttpClient) { }

  // create a method that will make our GET request to the dogsUrl
  getRandomBreed(): Observable<Dog> {
    return this.httpClient.get<Dog>(this.dogUrl);
  }

}
