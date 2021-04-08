import { BaseModel } from '@models/base-model'

export interface IAdministrativeArea {
  CountryId?:     string;
  EnglishName?:   string;
  EnglishType?:   string;
  ID?:            string;
  Level?:         number;
  LocalizedName?: string;
  LocalizedType?: string;
}
export class AdministrativeArea extends BaseModel {
  public countryId:     string;
  public englishName:   string;
  public englishType:   string;
  public level:         number;
  public localizedName: string;
  public localizedType: string;
  constructor(args?: IAdministrativeArea) {
    super(args);
  }
}
