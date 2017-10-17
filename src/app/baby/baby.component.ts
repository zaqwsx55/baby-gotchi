import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Baby } from 'app/baby';

@Component({
  selector: 'app-baby-component',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.scss']
})
export class BabyComponent implements OnInit {

  babyRef: AngularFireObject<Baby>;
  baby: Observable<Baby>;

  constructor(private activatedRoute: ActivatedRoute,
              private db: AngularFireDatabase) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      p => {
        const key = p['id'];
        this.baby = this.db.object(`/babies/${key}`).valueChanges();
      }
    )
  }

}
