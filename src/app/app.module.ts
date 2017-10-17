import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Material Design and Flex Layout */
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatButtonModule, MatProgressBarModule } from '@angular/material';

/* Angular Fire */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from 'environments/environment';

/* Services */
import { RandomPickerService } from './random-picker.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BabiesComponent } from './babies/babies.component';
import { BabyComponent } from './baby/baby.component';
import { BabyStatusComponent } from './baby-status/baby-status.component';
import { StatusIndicatorComponent } from './status-indicator/status-indicator.component';
import { BabyCareComponent } from './baby-care/baby-care.component';
import { BabyControlRoomComponent } from './baby-control-room/baby-control-room.component';

@NgModule({
  declarations: [
    AppComponent,
    BabiesComponent,
    BabyComponent,
    BabyStatusComponent,
    StatusIndicatorComponent,
    BabyCareComponent,
    BabyControlRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [RandomPickerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
