import { TemplateRef } from "@angular/core";
import Dropdown, { TPosition } from "../../interfaces/dropdown.interface";
import { ActionHandler } from "../../interfaces/action-handler.interface";

export class DropdownDao<DropdownTemplate, SelectionData> implements Dropdown<DropdownTemplate, SelectionData> {
    position: TPosition = 'bottom';
    isOpen: boolean = false;
    isLoading: boolean = false
    // template: TemplateRef<DropdownTemplate>;
    show = () => {
        if(!this.isOpen) {
            this.isOpen = true;
        }
    };
    hide = () => {
        if(this.isOpen) {
            this.isOpen = true;
        }
    };
    // handleChange = (action: ActionHandler<unknown>) {
    //     this.
    // }
    // clear = () => {};

}