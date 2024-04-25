import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators, FormBuilder, FormControlName, } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from '../../services/storage/storage.service';
import { Router, RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NzLayoutModule, NzIconModule, NzFormModule, NzInputNumberModule, NzInputModule, NzSpinModule, ReactiveFormsModule,RouterModule,NzButtonModule, NzButtonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isSpinning: boolean = false;
  loginForm !: FormGroup;
  // validateForm: any;
  // submitForm() {
  // throw new Error('Method not implemented.');
  // }
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notification: NzMessageService,
    private router: Router,
   
  ) { }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    })
  }


  login() {
    console.log(this.loginForm.value);
    this.isSpinning = true;
    this.authService.login(this.loginForm.value).subscribe((res) => {
  
      console.log(res);
      // localStorage.setItem('TOKEN', JSON.stringify(res.jwt))
      this.isSpinning = false;
      if (res.userId != null) {
        const user = {
          id: res.userId,
          role: res.role,
          name:res.userName
        };
        StorageService.saveUser(user);
        StorageService.saveToken(res.jwt);
        console.log(res.jwt)
        // alert(StorageService.getToken())
        // // this.router.navigateByUrl("admin/dashboard")
        this.notification.success("login succes",{nzDuration:5000});
        if (StorageService.isAdminLoggedIn()) {
          console.log("this admin",res.role)
          
          this.router.navigateByUrl("/admin/dashboard");
        } else if (StorageService.iscCustomerLoggedIn()) {
          console.log("this customer")
         
          this.router.navigateByUrl("/customer/dashboard");
        } else {
          this.notification.error("bad credentials", { nzDuration: 5000 });
        }
      }

    });
  }

}
