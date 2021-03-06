import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatSnackBar } from '@angular/material';
import { FirebaseApp } from 'angularfire2';

import { RandomPickerService } from 'app/random-picker.service';

const messages = ['Awesome Dad!', 'You rock Buddy!', 'Hell yeah!', 'Good job!', 'Saaavyyy!', 'Dad of the Year!',
                  'Go get a beer, you deserve it!', 'Sweeet!'];

@Component({
  selector: 'app-baby-care',
  templateUrl: './baby-care.component.html',
  styleUrls: ['./baby-care.component.scss']
})
export class BabyCareComponent implements OnInit {

  babyId;

  constructor(private activatedRoute: ActivatedRoute,
              private firebaseApp: FirebaseApp,
              private matSnackBar: MatSnackBar,
              private randomPicker: RandomPickerService) { }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe(
      p => this.babyId = p['id']
    );
  }

  feedBaby() {
    this.showMessage();
    const statRef = this.firebaseApp.database().ref(`/babies/${this.babyId}/hunger`);
    statRef.transaction(stat => stat - 10 < 0 ? 0 : stat - 10);
  }

  cleanBaby() {
    this.showMessage();
    const statRef = this.firebaseApp.database().ref(`/babies/${this.babyId}/shittiness`);
    statRef.transaction(stat => stat - 10 < 0 ? 0 : stat - 10);
  }

  sleepBaby() {
    this.showMessage();
    const statRef = this.firebaseApp.database().ref(`/babies/${this.babyId}/sleepiness`);
    statRef.transaction(stat => stat - 10 < 0 ? 0 : stat - 10);
  }

  cuddleBaby() {
    this.showMessage();
    const statRef = this.firebaseApp.database().ref(`/babies/${this.babyId}`);
    statRef.transaction(baby => {
      if (baby) {
        baby.hunger = this.getDecreasedStat({statGetter: () => baby.hunger, modifier: 10});
        baby.shittiness = this.getDecreasedStat({statGetter: () => baby.shittiness, modifier: 10});
        baby.sleepiness = this.getDecreasedStat({statGetter: () => baby.sleepiness, modifier: 10});
        baby.life = this.getIncreasedStat({statGetter: () => baby.life, modifier: 1});
      }
      return baby;
    });
  }

  getDecreasedStat({statGetter, modifier}) {
    return statGetter() > modifier ? statGetter() - modifier : 0;
  }

  getIncreasedStat({statGetter, modifier}) {
    return statGetter() + modifier > 100 ? 100 : statGetter() + modifier;
  }

  showMessage() {
    this.matSnackBar.open(this.randomPicker.pickAtRandom(messages), null, {duration: 3000});
  }

}
