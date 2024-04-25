import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-car',
  standalone: true,
  imports: [
    CommonModule,
    NzSpinModule,
    NzSwitchModule,
    NzFormModule,
    NzSelectModule,
    NzInputModule,
    NzLayoutModule,
    NzFormModule,
    NzButtonModule,
    NzDatePickerModule,
    ReactiveFormsModule, // Only import ReactiveFormsModule once
  ],
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent {
  searchForm!: FormGroup;
  isSpinning = false; // Corrected property name
  cars: any[] = []; // Initialize cars as an empty array
listOfColors: any;
listOfTransmission: any;
listOfTypes: any;
listOfBrands: any;
  constructor(private fb: FormBuilder, private adminService: AdminService) {
    this.searchForm = this.fb.group({
      brand: [null],
      transmission: [null],
      color: [null],
      type: [null],
      name: [null]
    });
  }

  searchCar() {
    this.isSpinning = true;
    console.log(this.searchForm.value);
    this.adminService.searchCar(this.searchForm.value).subscribe((res: any) => {
      console.log(res);
      res.carDtoList.forEach((element: any) => { // Corrected forEach method
        element.proccessedimage = 'data:image/jpeg;base64,' + element.returnedImage;
        this.cars.push(element);
      });
      this.isSpinning = false;
    });
  }
}
