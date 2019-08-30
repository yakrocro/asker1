import { AbstractControl } from '@angular/forms';

export function passwordValidator(control: AbstractControl) : { [key: string] : any } | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  if(password.pristine || confirmPassword.pristine) return null ;
  //if password is not blank and if confirmPassword is not blank and password.value is different of
  //confirmPassword.value so return misMatch = true, otherwise return null ;
  return password && confirmPassword && password.value !== confirmPassword.value ?
         { 'misMatch': true } : null ;
}
