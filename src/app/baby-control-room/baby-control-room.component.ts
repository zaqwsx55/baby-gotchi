import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FirebaseApp } from 'angularfire2';

@Component({
  selector: 'app-baby-control-room',
  templateUrl: './baby-control-room.component.html',
  styleUrls: ['./baby-control-room.component.scss']
})
export class BabyControlRoomComponent implements OnInit {

  babyId: string;

  constructor(private activatedRoute: ActivatedRoute,
              private firebaseApp: FirebaseApp) { }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe(
      p => this.babyId = p['id']
    );
  }

  babyHungry() {
    const statRef = this.firebaseApp.database().ref(`/babies/${this.babyId}/hunger`);
    statRef.transaction(stat => stat + 10);
  }

  babyShitty() {
    const statRef = this.firebaseApp.database().ref(`/babies/${this.babyId}/shittiness`);
    statRef.transaction(stat => stat + 10);
  }

  babySleepy() {
    const statRef = this.firebaseApp.database().ref(`/babies/${this.babyId}/sleepiness`);
    statRef.transaction(stat => stat + 10);
  }

}
