import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesModule} from "../pages/pages.module";
import {HomeComponent} from "./home/home.component";
import {ComponentsModule} from "../components/components.module";
import { LayoutsRoutingModule } from './layouts-routing.module';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    LayoutsRoutingModule,
    HttpClientModule
  ],
})
export class LayoutsModule {
}
