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

  // babies: AngularFireList<Baby>;
  babies: Observable<Baby[]>;

  constructor(private db: AngularFireDatabase,
              private randomService: RandomPickerService) { }

  ngOnInit() {
    /** TODO
     * to jest do sprawdzenia
     */
    // this.babies = this.db.list('babies').snapshotChanges();
    // this.babies = this.db.list('/babies');
    const itemsRef: AngularFireList<Baby> = this.db.list('babies');
    this.babies = itemsRef.valueChanges();
  }

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
