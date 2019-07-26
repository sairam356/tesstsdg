import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {ListCoursesComponent} from './list-courses/list-courses.component';
import {HomeComponent} from './home/home.component';
import { SinglecoursepageComponent } from './singlecoursepage/singlecoursepage.component';
import {StudentregistrationComponent} from './studentregistration/studentregistration.component';
import {TrainerregistrationComponent} from './trainerregistration/trainerregistration.component';
import {WorkshopsComponent} from './workshops/workshops.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {TermsconditionsComponent} from './termsconditions/termsconditions.component';
const routes: Routes = [
  {path: '' ,redirectTo: '/home', pathMatch: 'full'},
  {path: 'home',component:HomeComponent},
  {
    path: 'Workshops',
    loadChildren: () => import('./orders/orders.module').then(mod => mod.OrdersModule)
  },
  {
    path: 'Courses',
    loadChildren: () => import('./courses/courses.module').then(mod => mod.CoursesModule)
  },
  {
    path: 'AboutUs',
    loadChildren: () => import('./customers/customers.module').then(mod => mod.CustomersModule)
  },
  {path: 'ListCourses', component:ListCoursesComponent},
  {path: 'singleCourse/:courseName', component:SinglecoursepageComponent},
  {path: 'studentRegister', component:StudentregistrationComponent},
  {path: 'TrainerRegister', component:TrainerregistrationComponent},
  
  {path: 'termsconditions', component:TermsconditionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
