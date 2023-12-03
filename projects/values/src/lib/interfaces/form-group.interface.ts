import { EventEmitter } from "@angular/core";
import { FormGroup, ValidatorFn } from "@angular/forms";


type TFormGroup = {
    name: string,
    validator?: ValidatorFn
    title: string
}

export default interface BaseGroup<T> {
    createForm: (form: TFormGroup) => void;
    addForm: (form: TFormGroup) => void;
    removeValidator: (fn: ValidatorFn) => void;
    addValidator: (fn: ValidatorFn) => void;
    valueChanges?: EventEmitter<FormGroup>;
    statusChanges?: EventEmitter<FormGroup>;
    resetForm: () => void;
    patchValue: (value: Partial<T>) => void;
    clearForm: () => void;
    getValue: () => T;
}