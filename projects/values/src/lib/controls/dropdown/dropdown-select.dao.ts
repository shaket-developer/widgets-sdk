import { TemplateRef } from "@angular/core";
import DropdownSelect from "../../interfaces/dropdown-select.interface";
import SelectOptions from "../../interfaces/select-options.interface";
import Dropdown, { TPosition } from "../../interfaces/dropdown.interface";
import { BaseControlImpl } from "../base-control.impl";
import { ControlValueAccessor, DefaultValueAccessor } from "@angular/forms";
import { DropdownDao } from "./dropdown.dao";

export abstract class DropdownSelectDao<SelectionData, DropdownTemplate> /* extends BaseControlImpl<SelectionData> */ implements DropdownSelect<SelectionData, DropdownTemplate> {
    abstract isMultiSelect : boolean;
    abstract isSearchable : boolean;
    abstract placeholder: string;
    abstract options: Map<string, SelectOptions<'DropdownSelect'>>;
    dropdown!: Dropdown<DropdownTemplate, SelectionData>
    constructor(params: unknown) {
        this.dropdown = new DropdownDao<DropdownTemplate, SelectionData>()
    }
}