import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzOptionComponent, NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { error } from 'console';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-post-car',
  standalone: true,
  imports: [NzSpinModule, NzSwitchModule, NzFormModule, NzSelectModule, NzInputModule,NzButtonModule , NzLayoutModule, NzFormModule, NzButtonModule, NzDatePickerModule, FormsModule, ReactiveFormsModule, NzOptionComponent, CommonModule],
  templateUrl: './post-car.component.html',
  styleUrl: './post-car.component.scss'
})
export class PostCarComponent {
  postCarForm!: FormGroup;
  isSpinning: boolean = false;
  selectedFile!: File | null;
  imagePreview!: string | ArrayBuffer | null;
  listOfOptions: Array<{ label: string; value: string }> = [];
  listOfBrands = ["BMW", "AUDI", "TESLA", "VERRARI"];
  listOfType = ["HYBRID", "DISEL", "PETROL"];
  listOfTransmission = ["Manual", "AUTOMATIC"]
  listOfColor = ["RED", "WHITE", "BLACK","YELLOW","BLUE","GRAY"];
  constructor(private fb: FormBuilder,
    private adminService: AdminService,
    private notification: NzNotificationService,
    private router: Router) { }
  ngOnInit() {
    this.postCarForm = this.fb.group({
      name: [null, [Validators.required]],
      brand: [null, [Validators.required]],
      type: [null, [Validators.required]],
      color: [null, [Validators.required]],
      transmission: [null, [Validators.required]],
      description: [null, [Validators.required]],
      year: [null, [Validators.required]],
      price: [null, [Validators.required]]
    })
  }
  postCar() {
    console.log(this.postCarForm.value);
    this.isSpinning = true;
    const formData: FormData = new FormData();
    formData.append('image', this.selectedFile);
    formData.append('name', this.postCarForm.get('name').value);
    formData.append('brand', this.postCarForm.get('brand').value);
    formData.append('type', this.postCarForm.get('type').value);
    formData.append('color', this.postCarForm.get('color').value);
    formData.append('transmission', this.postCarForm.get('transmission').value);
    formData.append('description', this.postCarForm.get('description').value);
    formData.append('year', this.postCarForm.get('year').value);
    formData.append('price', this.postCarForm.get('price').value);
    this.adminService.postCar(formData).subscribe
      (res => {
        console.log(res);
        this.notification.success(
          'SUCCESS',
          `Car posted successfully`,
          { nzDuration: 5000 });
        this.router.navigateByUrl("/admin/dashboard");
      }, error => {
        console.error("Error:", error);
        this.notification.error('ERROR', `${error.error}`, { nzDuration: 5000 });
       
      })
      this.isSpinning=false;
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]
    this.previewImage()
  }
  previewImage() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}
