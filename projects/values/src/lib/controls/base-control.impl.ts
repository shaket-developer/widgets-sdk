import { FormControl, FormGroup } from "@angular/forms";
import BaseControl from "../interfaces/form-control.interface";

export class BaseControlImpl<Value> implements BaseControl<Value> {
    property!: string;
    control!: FormControl;
    addControlToForm = (form: FormGroup) => {
        form.addControl(this.property, new FormControl())
    }
    private createControl() {
        this.control = new FormControl()
    }
    getValue = () => <Value>{

    }
    constructor() {

    }
}