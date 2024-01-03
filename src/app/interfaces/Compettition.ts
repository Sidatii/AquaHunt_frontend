import {Member} from "./Member";

export interface Competition {
  code: string,
  date: String,
  startTime: string,
  endTime: string,
  location: string,
  description: string,
  maxParticipants: number,
  participationFee: number,
  // members: Array<Member>
}
