import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { StorageService } from './auth/services/storage/storage.service';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { HomepageComponent } from "./modules/homepage/homepage.component";
const imageUrls = [
  'https://www.pexels.com/photo/red-mercedes-benz-convertible-1335077/',
  'https://www.pexels.com/photo/black-convertible-coupe-977003/',
  'https://www.pexels.com/photo/white-mercedes-benz-convertible-coupe-136872/',
  // Add more image URLs as needed
];
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, NzFormModule, NzButtonModule, NzInputModule, NzCarouselModule, NzRadioModule,
        NzSpinModule, RouterModule, HomepageComponent]
})
export class AppComponent {
  imageUrls = imageUrls;
  title = 'car-rental-application';
  array = [1, 2, 3, 4];

  isCustomerLoggedIn:boolean=StorageService.iscCustomerLoggedIn();
  isAdminLoggedIn:boolean=StorageService.isAdminLoggedIn()

  constructor(private router:Router){}
  ngOnInit(){
    this.router.events.subscribe(event=>{
       if (event.constructor.name=="NavigationEnd") {
        this.isAdminLoggedIn=StorageService.isAdminLoggedIn();
        this.isCustomerLoggedIn=StorageService.iscCustomerLoggedIn();
        
      }
    })
  }
  logout(){
    StorageService.logout();
    this.router.navigateByUrl("/login")

  }
}
