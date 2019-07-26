import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AllcoursedetailsService} from '../allcoursedetails.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //@Input() name: string;
  term:string = "";
  AllCourses = [
    { id: 1, name: 'Java'},
    { id: 2, name: 'Nodejs'},
    { id: 3, name: 'Angular'},
    { id: 4, name: 'Reactjs'},
    { id: 6, name: 'AWS'},
    { id: 7, name: 'UI/UX'},
    { id: 8, name: 'Springs'},
    { id: 11, name: 'Spark'},
    { id: 12, name: 'C'},
    { id: 10, name: 'Hadoop'}
  ];
  
  alltechnologies=[];
  all;
  SearchForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, public ser:AllcoursedetailsService) { }

  ngOnInit() {
    this.SearchForm = this.formBuilder.group({
      Name: ''
  });
  this.alltechnologies=this.ser.getallcoursedetails();
  this.all=this.alltechnologies[0];
  console.log('--',this.all.java)
  }
  get f() { return this.SearchForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.SearchForm.invalid) {
        return;
    }
    console.log(this.SearchForm.value)
  }
}
