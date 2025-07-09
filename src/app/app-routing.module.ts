import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OldHomeComponent } from './old-home/old-home.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
