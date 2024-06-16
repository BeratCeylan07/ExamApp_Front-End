import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const appGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isToken = localStorage.getItem("_APIToken");
  if (isToken === null) {
    router.navigate(['login']);
      return false;
  }else{
      return true;
  }
};
