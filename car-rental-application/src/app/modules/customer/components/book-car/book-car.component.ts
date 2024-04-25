import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzMessageService } from 'ng-zorro-antd/message';
import { StorageService } from '../../../../auth/services/storage/storage.service';

@Component({
  selector: 'app-book-car',
  standalone: true,
  imports: [NzSpinModule,CommonModule, NzSwitchModule, NzFormModule, NzSelectModule, NzInputModule, NzLayoutModule, 
    NzFormModule, NzButtonModule,CommonModule, NzDatePickerModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './book-car.component.html',
  styleUrl: './book-car.component.scss'
})
export class BookCarComponent {
  carId: number = this.activatedRoute.snapshot.params["id"];
  car:any;
  processedImage:any;
  validateForm!: FormGroup;
  isSpinning:boolean=false;
  dateFormat: "DD-MM-YYYY";


  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private fb:FormBuilder,
    private notification:NzMessageService,
    private router:Router
  ) { }
  ngOnInit() {
    this.validateForm=this.fb.group({
      toDate: [null, [Validators.required]],
      fromDate: [null, [Validators.required]],
    })
    this.getCarById();
  }
  getCarById() {
    this.customerService.getCarById(this.carId).subscribe((res) => {
      console.log(res)
      // this.processedImage = 'data:image/jpeg;bas64,' + res.returnedImage;
      this.processedImage = 'data:image/jpeg;base64,' +res.returnedImage;
      this.car=res;
      console.log("booked image"+res.returnedImage)
     
    })
  }
  bookCar(data:any){
    console.log("this my data"+ data)
    this.isSpinning=true;
    let bookCarDto={
      toDate:data.toDate,
      formDate:data.fromDate,
      userId:StorageService.getUserId(),
      carId:this.carId
     
    }
    alert(bookCarDto)
    // console.log(this.carId)
    // console.log(bookCarDto.userId)
    this.isSpinning=true
    this.customerService.bookCar(this.carId,bookCarDto).subscribe(res=>{
      this.isSpinning = false;
      console.log(res);
      alert(res)
     
        this.notification.success("Booking  successfully", { nzDuration: 5000 });
        this.router.navigateByUrl("/admin/customer/dashboard");
      }, error => {
        alert(error)
     
        this.notification.error("Something went wrong", { nzDuration: 5000 });
        console.error("Error:", error);
    })
    this.isSpinning = false;

  }

}
