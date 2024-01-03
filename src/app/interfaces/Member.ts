import {Competition} from "./Compettition";
import {Hunt} from "./Hunt";
import {IdentityDocumentType} from "../enums/IdentityDocumentType";

export interface Member {
  id: number,
  firstName: string,
  lastName: string,
  joinDate: string,
  nationality: number,
  documentType: IdentityDocumentType,
  identityNumber: string,
  // competitions: Array<Competition>,
  // hunts: Array<Hunt>

}
