import {Component, OnInit} from '@angular/core';
import {CompetitionService} from "../../services/competitionService/competition.service";
import {RankingService} from "../../services/rankingService/ranking.service";
import {FishService} from "../../services/fishService/fish.service";
import {Fish} from "../../interfaces/Fish";
import {Member} from "../../interfaces/Member";
import {MemberService} from "../../services/memberService/member.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  selectedCompetition: any = "MS-23-12-2023";

  public competitions: any = [];
  headers: Array<string> = ['code', 'date', 'startTime', 'endTime', 'location', 'maxParticipants', 'participationFee'];
  public props: Array<any> = [this.headers];

  public ranking: any = [];

  public fish: Fish[] = [];
  public fishHeaders: Array<string> = ['name', 'averageWeight', 'points'];
  public fishProps: Array<any> = [this.fishHeaders];

  public members: Member[] = [];
  public membersHeaders: Array<string> = ['firstName', 'familyName', 'nationality'];
  public membersProps: Array<any> = [this.membersHeaders];

  constructor(
    private competitionService: CompetitionService,
    private rankingService: RankingService,
    private fishService: FishService,
    private memberService: MemberService) {
  }

  ngOnInit(): void {
    this.competitionService.GetCompetitions().subscribe((data: any) => {
      this.competitions = data.content;
      this.props.push(this.competitions);
      // console.log(this.props)
    });
    this.getRanking(this.selectedCompetition);
    this.rankingService.getRankingByCompetition("IMS-23-12-2023").subscribe((data: any) => {
      this.ranking = data;
      // console.log(this.ranking)
    });
    this.getFish(6, 0);
    this.getMembersByCompetition("IMS-23-12-2023");

  }

  public getRanking(id: string): void {
    this.rankingService.getRankingByCompetition(id).subscribe((data: any) => {
      this.ranking = data;
    });
  }

  public getFish(size: number | null, page: number | null): void {
    this.fishService.getFish(size, page).subscribe((data: any) => {
      this.fish = data.content;
      for (let i = 0; i < this.fish.length; i++) {
        this.fish[i].points = data.content[i].level.points;
      }
      // this.fish = data.content.level["points"];
      this.fishProps.push(this.fish);
      console.log(this.fishProps)
    });
  }

  public getMembersByCompetition(code: string): void {
    this.memberService.getMembersPerCompetition(code).subscribe((data: any) => {
      this.members = data;
      this.membersProps.push(this.members);
      console.log(this.membersProps)
    } );
  }

}
