import { Injectable } from '@angular/core';
const TOKEN = "token";
const USER = "user";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
 ) { }
  static saveToken(token: string) {
   localStorage.removeItem(TOKEN);
    localStorage.setItem(TOKEN, token);
  }
  static saveUser(user: any) {
    localStorage.removeItem(USER);
   localStorage.setItem(USER, JSON.stringify(user));
  }
  static getToken():string {
    try {
      const token = localStorage.getItem(TOKEN); // Retrieve the token from localStorage
      if (!token) {
        console.log("No token found");
      }
      return token; // Return the token if it exists, otherwise null
    } catch (error) {
      console.error(error); // Log any errors that occur during retrieval
      return null; // Return null in case of error
    }
  }
  
  static getUser() {
    const userData = localStorage.getItem(USER);
    return userData ? JSON.parse(userData) : null;
  }
 
  static getUserRole(): string {
    const user = this.getUser();
    if (user == null) return "";
    return user.role;
  }

  static getUserId(): string {
    const user = this.getUser();
    if (user == null) { return '' }
    return user.id;
  }

  static isAdminLoggedIn(): boolean {
    if (this.getToken() == null) return false;
    const role: string = this.getUserRole();
    return role == "ADMIN"
  };
  static iscCustomerLoggedIn(): boolean {
    if (this.getToken() == null) return false;
    const role: string = this.getUserRole();
    return role == "CUSTOMER"
  }

  static logout(): void {
    window.localStorage.removeItem(TOKEN)
    window.localStorage.removeItem(USER)
  }
}