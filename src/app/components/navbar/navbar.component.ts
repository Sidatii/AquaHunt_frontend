import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {assets} from "../../environments/assets";

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public AQUAHUNT_LOGO_BLUE: string = "../../../assets/aquahuntlogoblue.png";
  public AQUAHUNT_LOGO_WHITE: string = "assets/aquahuntlogo.png";
  isOpen: boolean = false;
}
