import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Material Design and Flex Layout */
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';

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
import { BabyComponentComponent } from './baby-component/baby-component.component';
import { BabyStatusComponent } from './baby-status/baby-status.component';
import { StatusIndicatorComponent } from './status-indicator/status-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    BabiesComponent,
    BabyComponentComponent,
    BabyStatusComponent,
    StatusIndicatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
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
