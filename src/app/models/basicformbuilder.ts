import { FormGroup } from "@angular/forms";

export abstract class BasicFormBuilder{
    constructor(){
        
    }
    abstract createForm(); void;
    abstract sendForm(): void;
    resetForm(Form: FormGroup): void {
        Object.keys(Form.controls).forEach(key => {
            Form.controls[key].setErrors(null)
        });
        Form.reset();
    }
}
