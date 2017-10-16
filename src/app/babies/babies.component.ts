import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Baby } from '../baby';
import { RandomPickerService } from 'app/random-picker.service';

@Component({
  selector: 'app-babies',
  templateUrl: './babies.component.html',
  styleUrls: ['./babies.component.scss']
})
export class BabiesComponent implements OnInit {

  babiesRef: AngularFireList<Baby>;
  babies: Observable<Baby[]>;

  constructor(private db: AngularFireDatabase,
              private randomService: RandomPickerService) { }

  ngOnInit() {
    this.babiesRef = this.db.list('babies');
    this.babies = this.babiesRef.snapshotChanges().map(
      actions => {
        return actions.map(a => ({key: a.payload.key, ...a.payload.val()}));
      }
    )
  }

  /**
   * Firebase Demo Functions
   */
  // addItem(baby: Baby) {
  //   this.babiesRef.push(baby);
  // }
  // updateItem(key: string, newBaby: Baby) {
  //   this.babiesRef.update(key, newBaby);
  // }
  // deleteItem(key: string) {
  //   this.babiesRef.remove(key);
  // }
  // deleteEveryhing() {
  //   this.babiesRef.remove();
  // }




  // create new baby
  giveBirth() {
    const newBaby = new Baby(this.pickRandomName());
    const babies = this.db.list('/babies');
    babies.push(newBaby);
  }

  pickRandomName() {
    const names = ['Carlos', 'Laura', 'John', 'Augustina', 'Manuel', 'Lola', 'Isaac',
      'Georgina', 'Paolo', 'Maria', 'Ronaldo', 'Ronalda'];
    return this.randomService.pickAtRandom(names);
  }

}
