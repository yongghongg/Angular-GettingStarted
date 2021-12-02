import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../shared/star.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConvertToSpacesPipe,
    StarComponent,],
  imports: [
    CommonModule
  ], exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    ConvertToSpacesPipe
  ]
})
export class SharedModule { }
