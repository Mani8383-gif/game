import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('form');


  if (!token) {
    return next(req);
  }


  const authReq = req.clone({
    setHeaders: {
      Authorization: `${token}`
    }
  });
  if(req.url.includes('/login')){
    return next(req)
  }

  return next(authReq);
};
