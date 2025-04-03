import { NgModule } from '@angular/core';
import { EnviromentComponent } from './enviroment.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ResizableModule } from 'angular-resizable-element';
import { SettingsComponent } from 'src/app/settings/settings.component';
import { LlamaService } from 'src/app/llama.service';

@NgModule({
  declarations: [
    EnviromentComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule, 
    ResizableModule,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    EnviromentComponent,
  ],
  providers: [
    LlamaService,
  ],
  bootstrap: [
  ]
})
export class EnviromentModule { }
