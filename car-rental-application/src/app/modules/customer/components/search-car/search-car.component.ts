import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { CustomerService } from '../../services/customer.service';
import { CommonModule } from '@angular/common';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

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
    ReactiveFormsModule, 
  ],
  templateUrl: './search-car.component.html',
  styleUrl: './search-car.component.scss'
})
export class SearchCarComponent {
  searchForm!: FormGroup;
  isSpinning = false; 
  cars: any[] = [];
listOfTransmission: any;
listOfTypes: any;
listOfColors: any;
listOfBrands: any;
  constructor(
    private fb: FormBuilder,
     private customerService: CustomerService) {
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
    this.customerService.searchCar(this.searchForm.value).subscribe((res: any) => {
      console.log(res.carDtoList.proccessedimage);
      res.carDtoList.forEach((element: any) => { // Corrected forEach method
        element.proccessedimage = 'data:image/jpeg;base64,' + element.returnedImage;
        this.cars.push(element);
      });
      this.isSpinning = false;
    });
  }
}

