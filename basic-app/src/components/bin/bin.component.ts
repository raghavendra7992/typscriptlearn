import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-bin',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './bin.component.html',
  styleUrl: './bin.component.css'
})
export class BinComponent {
  tittle=new FormControl("",[
    Validators.required,
  
  ]);
  code=new FormControl('',[
    Validators.required,
    
  ])
  binForm=new FormGroup({
    tittle : this.tittle,
    code:this.code
  })
  save(){
    
  }
 
}
