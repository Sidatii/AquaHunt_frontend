import {Fish} from "./Fish";

export interface Level {
  code: number,
  description: string,
  requiredPoints: number,
  // fish: Array<Fish>
}
