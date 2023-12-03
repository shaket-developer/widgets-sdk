import { ElementRef, EventEmitter } from "@angular/core"

export interface ActionHandler<T> {
    handle: (element: ElementRef, data: T) => void
}