import { Component, OnInit } from '@angular/core';
import { DogCeoApiService } from 'src/app/services/dog-ceo-api.service';
import {Dog} from '../../models/dog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dogs: Dog[] = [];

  constructor(private dogService: DogCeoApiService) { }

  ngOnInit(): void {
    for ( let i = 0; i <= 10; i++) {
      this.getRandomDog();
    }
  }

  getRandomDog(): void {
    this.dogService.getRandomBreed().subscribe( (d: any) => {
      console.log(d)
      this.dogs.push(d)
      console.log(this.dogs)
    })
  }

}
