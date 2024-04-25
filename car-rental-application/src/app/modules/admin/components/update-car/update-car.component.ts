import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-update-car',
  standalone: true,
  imports: [NzButtonModule,NzDatePickerModule,NzInputModule,
    NzFormModule,NzSelectModule,NzSpinModule,NzLayoutModule,NzInputModule,ReactiveFormsModule,FormsModule,NzSwitchModule,CommonModule],
  templateUrl: './update-car.component.html',
  styleUrl: './update-car.component.scss'
})
export class UpdateCarComponent {
  isSpinning: boolean = false;
  carId: number = this.activatedRoute.snapshot.params["id"];
  existingCar: string | null = null;
  updateForm!:FormGroup;
  imgChanged:boolean= false;
  selectedFile:any;
  imagePreview!: string | ArrayBuffer | null;
  existingImage!: null;
  listOfOptions: Array<{ label: string; value: string }> = [];
  listOfBrands = ["BMW", "AUDI", "TESLA", "VERRARI"];
  listOfType = ["HYBRID", "DISEL", "PETROL"];
  listOfTransmission = ["Manual", "AUTOMATIC"]
  listOfColor = ["RED", "WHITE", "BLACK","YELLOW","BLUE","GRAY"];


  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private fb:FormBuilder,
    private router:Router,
    private notification:NzMessageService
  ) { }
  ngOnInit() {
    this.updateForm=this.fb.group({
      name: [null, Validators.required],
      brand: [null, Validators.required],
      type: [null, Validators.required],
      color: [null, Validators.required],
      transmission: [null, Validators.required],
      description: [null, Validators.required],
      year: [null, Validators.required],
      price: [null, Validators.required]
    })
    this.getCarByid();
  }
  getCarByid() {
    this.isSpinning=true;
    this.adminService.getCarById(this.carId).subscribe((res) => {
      this.isSpinning=false;
    //   console.log(res);
    //  console.log("car with id"+this.carId)
      const cardto = res;
      this.existingCar = 'data:image/jpeg;base64,' + cardto.returnedImage;
      console.log("car dto:"+res)
      console.log("existing image:"+this.existingCar)
      this.updateForm.patchValue(cardto)
    })
     
  }
  updateCar(){
      console.log(this.updateForm.value);
      this.isSpinning = true;
      const formData: FormData = new FormData();
      if (this.imgChanged && this.selectedFile) {
        formData.append('image', this.selectedFile);
    }
      formData.append('name', this.updateForm.get('name').value);
      formData.append('brand', this.updateForm.get('brand').value);
      formData.append('type', this.updateForm.get('type').value);
      formData.append('transmission', this.updateForm.get('transmission').value);
      formData.append('description', this.updateForm.get('description').value);
      formData.append('year', this.updateForm.get('year').value);
      formData.append('color', this.updateForm.get('color').value);
      formData.append('price', this.updateForm.get('price').value);
      console.log(formData)
      // Use the correct service method for updating the car
      this.adminService.updateCar(this.carId, formData).subscribe((res:any) => {
        this.isSpinning = false;
        this.notification.success("Car updated successfully", { nzDuration: 5000 });
        this.router.navigateByUrl("/admin/dashboard");
        console.log(res);
      }, error => {
       
        this.notification.error("Something went wrong", { nzDuration: 5000 });
        console.error("Error:", error);
        this.isSpinning = false;
      });
    }
  
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]
    this.imgChanged=true;
    this.existingImage=null;
    this.previewImage()
  }
  previewImage() {
    if (this.selectedFile) {
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(this.selectedFile);
    }
  }
}
