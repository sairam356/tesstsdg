import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseListComponent } from './course-list/course-list.component';


const routes: Routes = [
  {
    path: '',
    component: CourseListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/