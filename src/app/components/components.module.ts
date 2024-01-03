import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {CardComponent} from "./card/card.component";
import {TableComponent} from "./table/table.component";
import {PopupComponent} from "./popup/popup.component";
import {FormComponent} from "./form/form.component";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    TableComponent,
    TableComponent,
    PopupComponent,
    FormComponent
  ],
  exports: [
    NavbarComponent,
    CardComponent,
    TableComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class ComponentsModule { }
