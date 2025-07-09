import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './home/home.component';
import { OldHomeComponent } from './old-home/old-home.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OldHomeComponent,
  ],
  imports: [
    // other imports...
    BrowserModule,
    AppRoutingModule,
    MatIconModule, // <-- here
    FormsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
