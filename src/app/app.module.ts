import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AllcoursedetailsService} from './allcoursedetails.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { HomeComponent } from './home/home.component';
import { ThreecardcarouselComponent } from './threecardcarousel/threecardcarousel.component';
import { SinglecoursepageComponent } from './singlecoursepage/singlecoursepage.component';
import { ScrollspycontentComponent } from './scrollspycontent/scrollspycontent.component';
import { ContactadsComponent } from './contactads/contactads.component';
import { TrainerregistrationComponent } from './trainerregistration/trainerregistration.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { DomSanitizerImpl } from '@angular/platform-browser/src/security/dom_sanitization_service';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkshopsComponent } from './workshops/workshops.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';
import {FilterPipe} from './filterPipe'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    CardCarouselComponent,
    ListCoursesComponent,
    HomeComponent,
    ThreecardcarouselComponent,
    SinglecoursepageComponent,
    ScrollspycontentComponent,
    ContactadsComponent,
    TrainerregistrationComponent,
    StudentregistrationComponent,
    WorkshopsComponent,
    AboutusComponent,
    TermsconditionsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AllcoursedetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
