import Dropdown from "./dropdown.interface";
import SelectOptions, {TSelectData, TSelectType} from "./select-options.interface";

export default interface ButtonSelect<SelectionData> extends Dropdown {
    selectedValue: SelectionData;
    placeholder: string
    options: SelectOptions<'ButtonSelect'>[]
}