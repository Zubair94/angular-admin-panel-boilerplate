import { Directive, Inject } from "@angular/core";
import { NG_VALIDATORS, ValidationErrors, AbstractControl, Validator, ValidatorFn, FormControl } from "@angular/forms";

export function validateMatchPassword(self: string, matchWith: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} | null => {
        
        var password = control.get(self) as FormControl;
        var passwordtoMatch = control.get(matchWith) as FormControl;
        if(password.value !== passwordtoMatch.value){
            passwordtoMatch.setErrors({ matchPassword: true });
        }
        
        if(password.value === passwordtoMatch.value){
            passwordtoMatch.setErrors(null);
        }
        return null;
    };
}

@Directive({
    selector: '[matchPassword][formControlName],[matchPassword][formControl],[matchPassword][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: PasswordMatcherDirective,
            multi: true
        }
    ]
})

export class PasswordMatcherDirective implements Validator {

    constructor(@Inject('self') private self: string, @Inject('matchWith') private matchWith: string){
    }

    validate(control: AbstractControl): ValidationErrors| null{
        return validateMatchPassword(this.self, this.matchWith)(control);
    }
}
