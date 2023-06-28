import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GifsService } from '../gifs/services/gifs.service';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports:[
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    GifsService
  ]
})
export class SharedModule { }
