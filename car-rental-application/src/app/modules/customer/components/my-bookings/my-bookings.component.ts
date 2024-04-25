import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [NzSpinModule, NzSwitchModule, NzFormModule, NzSelectModule, NzInputModule, NzLayoutModule, 
    NzFormModule, NzButtonModule,CommonModule, NzDatePickerModule,FormsModule,ReactiveFormsModule,NzTableModule],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.scss'
})
export class MyBookingsComponent {
  isSpining:boolean=true;
  bookings:any;
  constructor(private customerService:CustomerService){
    this.getMyBookings();
  }
  getMyBookings(){
    this.isSpining=true;
    this.customerService.getBookingsByUserd().subscribe((res)=>{
      this.bookings=res;
      console.log(res)
    })
    this.isSpining=false
  }
  
}
