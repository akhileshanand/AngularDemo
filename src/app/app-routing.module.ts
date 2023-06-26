import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginForm } from './formsExample/LoginForm.component';
import { AsyncAwaitDemo } from './Demos/RsjxLib/ayncAwaitDemo';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/home', 
    pathMatch: 'full'
   },
  {
    path:'home',
    component:HomeComponent,
   },
 {
  path:'reactiveFormsDemo',
  component:LoginForm,
 },
 {path: 'asyncAwaitDemos', component: AsyncAwaitDemo}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
