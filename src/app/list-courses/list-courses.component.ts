import { Component, OnInit } from '@angular/core';
import {AllcoursedetailsService} from '../allcoursedetails.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {
  allcouseres=[
    {
      id:"1",
      courseName:"Java",
      UiCourseName:"Java Certification Training is curated by professionals as per the industrial requirements and demands. ",
      couserdescriptiom:"This training encompasses comprehensive knowledge on basic and advanced concepts of core Java & J2EE along with popular frameworks like Hibernate, Spring, & SOA. ",
      nofHourse:"10 HOURS",
      Level:"Intermediate",
      rating :"10",
      stars:"4",
      imgUrl:"../../assets/Java.png"
     },
     {
      id:"2",
      courseName:"Nodejs",
      UiCourseName:"Node.js: The Complete Guide to Build RESTful APIs (2018)",
      couserdescriptiom:"Build and deploy fullstack web apps with NodeJS, React, Redux, Express, and MongoDB.",
      nofHourse:"10 HOURS",
      Level:"Intermediate",
      rating :"8",
      stars:"4",
      imgUrl:"../../assets/nodejs3.jpg"
     },
     {
      id:"3",
      courseName:"Angular",
      UiCourseName:"Angular: Services,Routing,HttpClient",
      couserdescriptiom:"Use built-in Angular directives, Create Angular components, one-way data binding for read-only data.",
      nofHourse:"10 HOURS",
      Level:"Intermediate",
      rating :"9",
      stars:"4",
      imgUrl:"../../assets/nodejs4.jpg"
     },
     {
      id:"4",
      courseName:"AWS",
      UiCourseName:"AWS: S3 services",
      couserdescriptiom:"How to control Cache for images, To make images public.",
      nofHourse:"10 HOURS",
      Level:"Intermediate",
      rating :"7",
      stars:"3",
      imgUrl:"../../assets/AWS.png"
     },
     {
      id:"5",
      courseName:"UI/UX",
      UiCourseName:"UI/UX: Html,Css, Javascript, Photoshop",
      couserdescriptiom:"Designing websites in Web and Mobile responsive",
      nofHourse:"10 HOURS",
      Level:"Intermediate",
      rating :"10",
      stars:"4",
      imgUrl:"../../assets/UX.jpg"
     },
     {
      id:"6",
      courseName:"Reactjs",
      UiCourseName:"ReactJS ​with Redux ​course at Edureka is designed to skill you into a successful Client-Side Application Developer.",
      couserdescriptiom:"You'll master the concepts of ReactJS including its Architecture and components. The course also focuses on ​Testing Redux, React Router, React Redux, JSX, Data Flow & Usage with React​, ​​Async Actions & Flow & React Middleware",
      nofHourse:"10 HOURS",
      Level:"Intermediate",
      rating :"8",
      stars:"4",
      imgUrl:"../../assets/nodejs5.jpg"
    },
    {
      id:"7",
      courseName:"Springs",
      UiCourseName:"Spring Framework Training course is designed to make you an expert in using Spring Framework",
      couserdescriptiom:"Spring combines every framework approaches into 1 bundle making application development fast and increasing overall productivity",
      nofHourse:"10 HOURS",
      Level:"Intermediate",
      rating :"8",
      stars:"4",
      imgUrl:"../../assets/springs.png"
    },
    {
      id:"8",
      courseName:"Hadoop",
      UiCourseName:"Hadoop Training will guide you to gain expertise in maintaining complex Hadoop Clusters.",
      couserdescriptiom:"You will learn exclusive Hadoop Admin activities like Planning of the Cluster, Installation, Cluster Configuration, Cluster Monitoring and Tuning. ",
      nofHourse:"10 HOURS",
      Level:"Intermediate",
      rating :"8",
      stars:"4",
      imgUrl:"../../assets/hadoop-cloud-computing.jpg"
    },
    {
      id:"9",
      courseName:"C",
      UiCourseName:"The aspects of C Programming and make a foray into the Programming World.",
      couserdescriptiom:"This course starts from the very basics of computers and covers various aspects of C . It also provides an in-depth understanding of advanced topics in C such as pointers, stacks, linked lists and File I/O.",
      nofHourse:"10 HOURS",
      Level:"Intermediate",
      rating :"8",
      stars:"4",
      imgUrl:"../../assets/c.jpg"
    },
    {
      id:"10",
      courseName:"Spark",
      UiCourseName:" You will get an in-depth knowledge on Apache Spark and the Spark Ecosystem, which includes Spark RDD, Spark SQL, Spark MLlib and Spark Streaming.",
      couserdescriptiom:"Apache Spark will dominate the Big Data landscape by 2022 - Wikibon",
      nofHourse:"10 HOURS",
      Level:"Intermediate",
      rating :"8",
      stars:"4",
      imgUrl:"../../assets/Spark.jpg"
    }
  ]
  alltechnologies=[];
  all;
  constructor(public ser:AllcoursedetailsService) { }

  ngOnInit() {
    this.alltechnologies=this.ser.getallcoursedetails();
    this.all=this.alltechnologies[0];
  }

}
