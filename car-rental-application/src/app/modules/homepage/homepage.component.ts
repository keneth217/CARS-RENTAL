import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NzCarouselModule,NzLayoutModule,CommonModule ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  carouselImages: string[] = [
    // 'https://images.pexels.com/photos/2050244/pexels-photo-2050244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://imgs.search.brave.com/Fxwf7LX71_Yhnuqfq5hyhGzYKI9VxBBbD9ugWKs1PXQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXItaG91c2Uu/Y29tL2RhdGEvb3V0/Lzgvd2FsbHBhcGVy/MnlvdV8yOTI1MDku/anBn',
    'https://imgs.search.brave.com/CG5Qdjfn9T3dBzUlOn5jnJysLTXaUTWP8ftPNaTzQTQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMzMx/MzguanBn',
    // Add more image URLs as needed
  ];

}
