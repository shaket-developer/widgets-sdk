import { FormGroup } from "@angular/forms";
import Dropdown from "./dropdown.interface";
import SelectOptions, {TSelectData, TSelectType} from "./select-options.interface";
import BaseControl from "./form-control.interface";

export default interface DropdownSelect<SelectionData, DropdownTemplate> /* extends Dropdown<DropdownTemplate>, BaseControl<SelectionData> */ {
    isMultiSelect: boolean;
    isSearchable: boolean;
    placeholder: string;
    options: Map<string, SelectOptions<'DropdownSelect'>>;
    dropdown: Dropdown<DropdownTemplate, SelectionData>
}