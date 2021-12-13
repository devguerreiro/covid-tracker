export interface IGlobalSummary {
  NewConfirmed: number,
  TotalConfirmed: number,
  NewDeaths: number,
  TotalDeaths: number,
  NewRecovered: number,
  TotalRecovered: number
}

export interface ICountrySummary {
  Country: string,
  CountryCode: string,
  Slug: string,
  NewConfirmed: number,
  TotalConfirmed: number,
  NewDeaths: number,
  TotalDeaths: number,
  NewRecovered: number,
  TotalRecovered: number,
  Date: string
}

export interface ISummary {
  Global: IGlobalSummary,
  Countries: Array<ICountrySummary>,
  Date: string,
}

export type TSummaryDetail = IGlobalSummary | ICountrySummary
