import { ElementRef, TemplateRef } from "@angular/core";
import { TSelectData } from "./select-options.interface";
import { ActionHandler } from "./action-handler.interface";

export type TTooltipContent = string | ElementRef
export type TPosition = 'top' | 'bottom' | 'left' | 'right'
export default interface Dropdown<DropdownTemplate, SelectionData> {
    position: TPosition;
    isOpen: boolean;
    isLoading: boolean;
    template?: TemplateRef<DropdownTemplate>;
    handleChange?: (action: ActionHandler<SelectionData>) => void;
    show: () => void;
    hide: () => void;
    clear?: () => void;
}