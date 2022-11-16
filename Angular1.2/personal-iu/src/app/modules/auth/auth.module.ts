import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiginComponent } from './pages/sigin/sigin.component';
import { materialModules } from 'src/app/types/material.modules';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SiginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ...materialModules,
  ],
  exports: [SiginComponent],
})
export class AuthModule { }
