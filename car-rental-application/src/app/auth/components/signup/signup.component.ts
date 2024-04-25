import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { AuthService } from '../../services/auth/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NzSpinModule,NzSwitchModule,NzFormModule,ReactiveFormsModule,CommonModule,RouterModule,NzInputNumberModule, NzInputModule,NzButtonModule ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  isSpinning: boolean =false;
  signupForm!:FormGroup;
  constructor(
     private fb: FormBuilder,
     private authService:AuthService,
     private notification:NzMessageService,
     private router:Router
     ){
   
  }
  ngOnInit(){
    this.signupForm=this.fb.group({
      name:[null,[Validators.required]],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required]],
      confirmPassword:[null,[Validators.required,this.confirmationValidation]],
    })
  }
  confirmationValidation=(control:FormControl):{[s:string]:boolean}=>{
    if(!control.value){
      return{required:true}
    }else if(control.value!==this.signupForm.controls['password'].value){
      return{confirm:true,error:true}
    }
    return{}
  };
  register(){
    this.authService.register(this.signupForm.value).subscribe((res)=>{
      console.log(res)
      if(res.id !=null){
        this.notification.success("signup succes",{nzDuration:5000});
        this.router.navigateByUrl("/login")
      }else{
        
        this.notification.error("signup error",{nzDuration:5000});
      }
    })
  }

}
