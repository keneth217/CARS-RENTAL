import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {

  // let userData;
  // const localdata=localStorage.getItem('jwt')
  // if(localdata !=null){
  //   userData=JSON.parse(localdata);
  // }

  // const cloneRequest=req.clone({
  //   setHeaders:{
  //     Authorization: `Bearer ${userData.jwt}`
  //   }
  // })
  return next(req);

};
