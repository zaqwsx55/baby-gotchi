import { Injectable } from '@angular/core';

@Injectable()
export class RandomPickerService {

  constructor() { }

  pickAtRandom(items: any[]) {
    // select a random element from an array
    // that is passed as an argument
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }

}
