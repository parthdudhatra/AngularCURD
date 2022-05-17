import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmoployeeDashboardComponent } from './emoployee-dashboard/emoployee-dashboard.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  {path:'', redirectTo : "login", pathMatch:"full"},
  {path :'login' , component : LoginComponent},
  { path : 'signup' , component: SingupComponent},
  { path: 'dashborad', component: EmoployeeDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
