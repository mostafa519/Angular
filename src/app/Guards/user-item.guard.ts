import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthenService } from '../Service/user-authen.service';

export const userItemGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserAuthenService);
  const router = inject(Router);

  if(authService.userStatus){
    return true;
  }
  else{
    alert('Please Login First');
    router.navigate(['/login']);
    return false;
  }
};
