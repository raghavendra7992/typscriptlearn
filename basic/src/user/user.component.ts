import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../app/directive/highlight.directive';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,CommonModule,HighlightDirective],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
 user=[
  {name:'ramesh',isSingle:true,sal:10000},
  {name:'suresh',isSingle:false,sal:60000},
  {name:'mukambo',isSingle:true,sal:50000},
 ]
 red='red'
 constructor(){
  //init properties
  //dependency injection
  //event listner register
 }

 ngOnInit() {
  //init properties
  //event listner register
  //initia; api call
 }
}
