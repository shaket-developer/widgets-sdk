import { EventEmitter } from "@angular/core";
import { FormControl, FormGroup, ValidatorFn } from "@angular/forms";

type Control<T> = {
    name: string,
    validator: ValidatorFn,
    isEditable: boolean,
    isVisible: boolean
    defaultValue: T,
    class: string
}

export default interface BaseControl<T> {
    property:string;
    addValue?: (value:T) => void;
    setValue?: (value:T) => void;
    removeValue?: (value:T) => void;
    getValue: () => T;
    removeAt?: (index: number) => void;
    addControlToForm: (form: FormGroup) => void;
    addValidators?: (fn: ValidatorFn) => void;
    removeValidator?: (fn: ValidatorFn) => void;
    valueChanges?: EventEmitter<FormControl>;
    statusChanges?: EventEmitter<FormControl>;
    isEditable?: boolean;
    isVisible?: boolean;
}