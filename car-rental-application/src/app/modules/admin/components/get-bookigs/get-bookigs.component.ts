import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-bookigs',
  standalone: true,
  imports: [NzSpinModule, NzSwitchModule, NzFormModule, NzSelectModule, NzInputModule, NzLayoutModule,
    NzFormModule, NzButtonModule, CommonModule, NzDatePickerModule, FormsModule, ReactiveFormsModule, NzTableModule],
  templateUrl: './get-bookigs.component.html',
  styleUrl: './get-bookigs.component.scss'
})
export class GetBookigsComponent {
  isSpinning: boolean = false
  bookings: any;
small: any;
  constructor(private adminService: AdminService,
    private notification:NzMessageService,
    private router:Router) {
    // this.getBookings();
  }
  ngOnInit(){
    this.getBookings()
    
    
   }
  getBookings() {
    this.isSpinning = true; // Set spinner to true before making the request
    this.adminService.getAllBookings().subscribe(
      (res) => {
        console.log(res);
        this.bookings = res;
        this.isSpinning = false; // Set spinner to false after receiving the response
      },
      (error) => {
        console.error(error);
        this.isSpinning = false; // Set spinner to false if there's an error
      }
    );
  }
  
  changeBookingStatus(bookingId:number,status:string){
    console.log(bookingId,status )
    this.adminService.changeBookingStatus(bookingId,status).subscribe((res) => {
      this.isSpinning = false;
      this.getBookings();
      this.notification.success("status changed  successfully", { nzDuration: 5000 });
      this.router.navigateByUrl("/admin/dashboard");
      console.log(res);
  }, error => {
      this.isSpinning = false;
      this.notification.error("Something went wrong", { nzDuration: 5000 });
      console.error("Error:", error);
  });
  }

}
