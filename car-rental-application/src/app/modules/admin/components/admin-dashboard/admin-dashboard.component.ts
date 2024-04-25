import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule,NzSpinModule,NzButtonModule ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  cars:any=[];
isSpinning: boolean=false
  constructor(private adminService:AdminService,
    private notification:NzMessageService
    ){}

  ngOnInit(){
   this.getAllCars()
   
   
  }


  getAllCars() {
    this.isSpinning = true;
    this.adminService.getAllCars().subscribe(
      (res: any) => {
        console.log(res);
        console.log(res.name)
        console.log(res.returnedImage)
        res.forEach((element: any) => {
          // Fix the typo in 'image/jpeg'
          element.processedimage = 'data:image/jpeg;base64,' + element.returnedImage;
          this.cars.push(element);
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
  
deleteCar(id:number){
  console.log(id)
  this.adminService.delteCar(id).subscribe((res)=>{
    this.getAllCars();
    this.notification.success("car deleted succesfully",{nzDuration:5000})
  })
}
}


