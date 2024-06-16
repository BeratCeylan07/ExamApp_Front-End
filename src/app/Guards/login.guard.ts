import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isToken = localStorage.getItem("_APIToken");
  if (isToken === null) {
    router.navigate(['examapp']);
      return true;
  }else{
      return false;
  }};
