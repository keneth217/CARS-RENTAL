import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/services/storage/storage.service';
const BASE_URL=["http://localhost:8080"]
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

 

  constructor(private http: HttpClient) { }


  getAllCars(): Observable<any> {
    return this.http.get(BASE_URL + "/api/customer/cars", {
      headers: this.createAuthorizationHeaders()
    })
  }
 
  getCarById(carId: number): Observable<any> {
    return this.http.get(BASE_URL + "/api/customer/car/" + carId, {
      headers: this.createAuthorizationHeaders()
    })
  }

  // bookCar(carId:any,bookCarDto: any): Observable<any> {
  //   return this.http.post<[]>(BASE_URL + `/api/customer/car/book/${carId}` , bookCarDto, {
  //     headers: this.createAuthorizationHeaders(),
  //     // responseType: 'json' // Ensure responseType is outside the headers object
  //   });
  // }
  bookCar(carId:any,bookCarDto: any): Observable<any> {
    return this.http.post(BASE_URL + "/api/customer/car/book/"+carId, bookCarDto, {
      headers: this.createAuthorizationHeaders(),
    });
  }

  getBookingsByUserd(): Observable<any> {
    return this.http.get(BASE_URL + "/api/customer/car/bookings" + StorageService.getUserId, {
      headers: this.createAuthorizationHeaders()
    })
  }


  searchCar(searchCarDto: any) {
    return this.http.post(BASE_URL + "/api/customer/car/search", searchCarDto, {
      headers: this.createAuthorizationHeaders()
    })
  }
  createAuthorizationHeaders(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + StorageService.getToken()
    )
  }
}
