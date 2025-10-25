// import { TestBed } from '@angular/core/testing';
// import { HttpInterceptorFn } from '@angular/common/http';

// import { authInterceptor } from './auth.interceptor';

// describe('authInterceptor', () => {
//   const interceptor: HttpInterceptorFn = (req, next) => 
//     TestBed.runInInjectionContext(() => authInterceptor(req, next));

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//   });

//   it('should be created', () => {
//     expect(interceptor).toBeTruthy();
//   });
// });
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token'); // ou sessionStorage si tu l’utilises

  if (token) {
    // clone la requête et ajoute le header Authorization
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }

  // sinon, envoie la requête normale
  return next(req);
};

