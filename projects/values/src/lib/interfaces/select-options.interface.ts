import { ElementRef, EventEmitter } from "@angular/core"
import { FormGroup } from "@angular/forms"
import Tooltip from "./tooltip.interface"
import { ActionHandler } from "./action-handler.interface"

export type TSelectData<SelectionData> = {
    label: string,
    data: SelectionData
}
export type TSelectType = 'ButtonSelect' | 'DropdownSelect'
export default interface SelectOptions<SelectionData> {
    element: ElementRef;
    data: TSelectData<SelectionData>;
    selectType: TSelectType;
    onItemClick: (handler: ActionHandler<SelectionData>) => void;
    // value: () => TSelectData;
    isDisabled: boolean;
    isVisible: boolean;
    isSelected: boolean;
    tooltip?: Tooltip<unknown>;
    label: string;
    emitAction: EventEmitter<SelectionData>;
}