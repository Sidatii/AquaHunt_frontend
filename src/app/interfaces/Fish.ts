import {Level} from "./Level";
import {Hunt} from "./Hunt";

export interface Fish {
  name: string,
  averageWeight: number,
  level: Level,
  hunts: Array<Hunt>
  points: number
}
