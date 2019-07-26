import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  declarations: [CourseListComponent]
})
export class CoursesModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/