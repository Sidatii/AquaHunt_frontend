import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LandingComponent} from "./landing/landing.component";
import { PagesRoutingModule} from "./pages-routing.module";
import {ComponentsModule} from "../components/components.module";
import {CompetitionService} from "../services/competitionService/competition.service";
import {RankingService} from "../services/rankingService/ranking.service";
import {FormsModule} from "@angular/forms";
import {FishService} from "../services/fishService/fish.service";
import {MemberService} from "../services/memberService/member.service";

@NgModule({
  declarations: [
    LandingComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    FormsModule
  ],
  providers: [
    CompetitionService,
    RankingService,
    FishService,
    MemberService

  ]
})
export class PagesModule { }
