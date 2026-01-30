import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question-component/question-component';

const routes: Routes = [
{path: '', redirectTo: '/question-component', pathMatch: 'full'},
  {path:"question-component" , component: QuestionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
