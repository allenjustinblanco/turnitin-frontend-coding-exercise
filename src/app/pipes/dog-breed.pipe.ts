import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dogBreed'})
export class DogBreedPipe implements PipeTransform {
    transform(value: string): string {
        let newStr = `${value.split('/')[4]}`;
        console.log(newStr)
        return newStr;
      }
}
