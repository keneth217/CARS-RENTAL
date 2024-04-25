import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../../../auth/services/storage/storage.service';
import { Observable } from 'rxjs';
const BASE_URL=["http://localhost:8080"]
@Injectable({
  providedIn: 'root'
})
export class AdminService {
 

  constructor(private http: HttpClient,private service:StorageService) { }
  postCar(carDto: any) {
    return this.http.post(BASE_URL + "/api/admin/car", carDto, {
      ...Option,
      responseType: 'json', 
      headers: this.createAuthorizationHeaders()
    });
  }
  updateCar(carId: number, carDto: any) {
    return this.http.put(BASE_URL + "/api/admin/car/" + carId, carDto, {
      ...Option,
      responseType: 'json', 
      headers: this.createAuthorizationHeaders()
    })
  }

  getAllCars(): Observable<any> {
    return this.http.get<any>(BASE_URL + "/api/admin/cars", {
      ...Option,
      responseType: 'json', 
      headers: this.createAuthorizationHeaders()
    })
  }
  delteCar(id: number): Observable<any> {
    return this.http.delete(BASE_URL + "/api/admin/car/" + id, {
      headers: this.createAuthorizationHeaders()
    })
  }
  getCarById(id: number): Observable<any> {
    return this.http.get(BASE_URL + "/api/admin/car/" + id, {
      ...Option,
      responseType: 'json', 
      headers: this.createAuthorizationHeaders()
    })
  }

  getAllBookings() : Observable<any> {
    return this.http.get(BASE_URL + "/api/admin/car/bookings", {
      headers: this.createAuthorizationHeaders()
    })
  }
  changeBookingStatus(bookingId:number,status:string) : Observable<any> {
    return this.http.get(BASE_URL + `/api/admin/booking/${bookingId}/${status}`, {
      headers: this.createAuthorizationHeaders()
    })
  }
  searchCar(searchCarDto: any) {
    return this.http.post(BASE_URL + "/api/admin/car/search", searchCarDto, {
      headers: this.createAuthorizationHeaders()
    })
  }

//   createAuthorizationHeaders(): HttpHeaders {
//     const token = StorageService.getToken();
//     if (!token) {
//       // Handle case when token is not available
//       console.error('Token not available,no headers');
//       return new HttpHeaders(); // Return empty HttpHeaders
//     }
//   console.log("header available")
//     return new HttpHeaders({
//       'Authorization': 'Bearer ' + token
//     });
//   }
// }
createAuthorizationHeaders(): HttpHeaders {
  let authHeaders: HttpHeaders = new HttpHeaders();
  // Assuming getToken() retrieves the authorization token from storage
  const token = StorageService.getToken(); // Make sure this method is correctly implemented
  if (token) {
    authHeaders = authHeaders.set('Authorization', 'Bearer ' + token);
    console.log("this my header 1"+authHeaders)
    console.log(token+"in the header")
  }
  console.log("this my header 2"+authHeaders)
  return authHeaders;
}
}
