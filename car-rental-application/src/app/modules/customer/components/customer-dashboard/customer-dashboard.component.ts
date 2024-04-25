import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';


@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule,NzSpinModule,NzButtonModule],
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.scss'
})
export class CustomerDashboardComponent {
  cars:any=[];
  isSpinning: boolean=false
    constructor(private customerService:CustomerService,
      private notification:NzMessageService
      ){}
  
    ngOnInit(){
     this.getAllCars()
     
     
    }

    getAllCars() {
      this.isSpinning = true;
      this.customerService.getAllCars().subscribe(
        (res: any) => {
          console.log(res);
          console.log(res.name)
          res.forEach((element: any) => {
            // Fix the typo in 'image/jpeg'
            element.processedimage = 'data:image/jpeg;base64,' + element.returnedImage;
            this.cars.push(element);
            console.log(element)
          });
          this.isSpinning = false;
        },
        (error) => {
          console.error(error);
  
          this.notification.error(error, { nzDuration: 5000 })
          this.isSpinning = false; // Set spinner to false if there's an error
        }
      );
    }

}
