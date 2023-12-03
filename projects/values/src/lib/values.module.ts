import { NgModule } from '@angular/core';
import { ValuesComponent } from './values.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ValuesComponent
  ],
  imports: [
    ReactiveFormsModule
  ],
  exports: [
    ValuesComponent
  ]
})
export class ValuesModule { }
