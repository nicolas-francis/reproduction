import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { detailRouting } from './detail.routing';
import {DetailComponent} from "./detail.component";
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    detailRouting,
      SharedModule
  ],
  declarations: [DetailComponent]
})
export class DetailModule { }
