import { Directive, Inject } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors, AsyncValidatorFn, AsyncValidator } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

export function emailExistValidator(authorizationService: AuthorizationService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return authorizationService.checkAdminEmail(control.value).pipe(map(
      response => {
        //console.log(response);
        if(response.success){
          return {"noEmailExist": true};
        }
        else if(!response.success){
          return null;
        }
        else{
          return null;
        }
      }
    ));
  };
}

@Directive({
  selector: '[noEmailExist][formControlName],[noEmailExist][formControl],[noEmailExist][ngModel]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS, 
      useExisting: EmailExistDirective, 
      multi: true
    }
  ]
})
export class EmailExistDirective implements AsyncValidator {

  constructor(@Inject('authorizationService') private authorizationService: AuthorizationService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return emailExistValidator(this.authorizationService)(control);
  }
}
