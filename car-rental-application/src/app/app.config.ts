import { ApplicationConfig, NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {  HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { customInterceptor } from './auth/services/custom.interceptor';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

registerLocaleData(en);
NgModule({
  declarations:[
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    NzLayoutModule
  
    //  DemoNgZorroAntdModule

    
  ]
})

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideNzI18n(en_US), importProvidersFrom(FormsModule), provideAnimationsAsync(), provideHttpClient(withInterceptors([customInterceptor]))]
};
