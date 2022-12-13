import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowdataComponent } from './showdata/showdata.component';

const routes: Routes = [

  {path: '', component: ShowdataComponent},
  {path: '**',redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
