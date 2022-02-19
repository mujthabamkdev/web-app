import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home.routes';
import { HomeService } from 'src/app/api-service/home/home.service';
import { HttpClientModule } from "@angular/common/http";
import { MasterDataService } from 'src/app/shared/services/master-data.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  declarations: [HomeComponent],
  providers: [
    HomeService,
    MasterDataService
  ]
})
export class HomeModule { }
