import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 
import { IonicModule } from '@ionic/angular';

import { AddroomPageRoutingModule } from './addroom-routing.module';

import { AddroomPage } from './addroom.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    AddroomPageRoutingModule
  ],
  declarations: [AddroomPage]
})
export class AddroomPageModule {}
