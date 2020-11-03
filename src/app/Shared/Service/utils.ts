export interface ISalesData {
  salesDetails : ISalesDetails[],
  customerStatistics : ICustomerStatistics[],
}

export interface ISalesDetails {
  id: number,
  leadIn: number,
  contactMade: number,
  needsDefined: number,
  proposalMade: number,
  negotiationsStrated: number,
  won: number,
  call: string,
  win: string,
  revenue: string
}

export interface ICustomerStatistics {
  cardLabel: string,
  cardStatistics: ICardStatistics[],
}

export interface ICardStatistics {
  name: string,
  newMmr: number,
  newLogos: number,
  demoCalls: number
}

export interface ICustomer {
  id: number,
  salesRep: string,
  date: string,
  client: string,
  contactPerson: string,
  title: string,
  verticle: string,
  meetingLocation: string,
  perposeOfInteraction: string,
  remarks: string,
  engagementStatus: string
}
