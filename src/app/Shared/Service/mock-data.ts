
export const columDefinitions = ['salesRep', 'date', 'client', 'contactPerson', 'title', 'verticle', 'meetingLocation', 'perposeOfInteraction', 'remarks', 'engagementStatus']

export const columHeaders = ['Sales rep', 'Date', 'Client', 'Primary Contact Person', 'Title', 'Vertical', 'Meeting Location', 'Purpose of Interaction', 'Outcome and Remarks', 'Engagement Status']

export const funnelChartLabels = ['Lead In', 'Contact Made', 'Needs Defined', 'Proposal Made', 'Negotiations Started', 'WON']
export const funnelChartColumDefs = ['leadIn', 'contactMade', 'needsDefined', 'proposalMade', 'negotiationsStrated', 'won']

export const salesData = {
  salesDetails: [
    {
      id: 0,
      leadIn: 25,
      contactMade: 18,
      needsDefined: 12,
      proposalMade: 8,
      negotiationsStrated: 5,
      won: 3,
      call: '10/15',
      win: '1/3',
      revenue: '80K/100K'
    },
    {
      id: 1,
      leadIn: 210,
      contactMade: 118,
      needsDefined: 2,
      proposalMade: 800,
      negotiationsStrated: 52,
      won: 13,
      call: '10/15',
      win: '2/4',
      revenue: '80K/100K'
    }
  ],
  customerStatistics: [
    {
      cardLabel: 'TOP',
      cardStatistics: [
        {
          name: 'John Doe',
          newMmr: 5230,
          newLogos: 102,
          demoCalls: 30
        },
        {
          name: 'Jane Smith',
          newMmr: 4586,
          newLogos: 95,
          demoCalls: 23
        },
        {
          name: 'Ethan Hunt',
          newMmr: 3500,
          newLogos: 82,
          demoCalls: 10
        }
      ]
    },
    {
      cardLabel: 'BOTTOM',
      cardStatistics: [
        {
          name: 'James Bond',
          newMmr: 1234,
          newLogos: 112,
          demoCalls: 99
        },
        {
          name: 'Pearly Tocher',
          newMmr: 1213,
          newLogos: 454,
          demoCalls: 45
        },
        {
          name: 'Ethan Bob',
          newMmr: 5899,
          newLogos: 87,
          demoCalls: 56
        }
      ]
    }
  ]
}

export const customerDetails = [
  {
    id: 0,
    salesRep: 'John Doe',
    date: 'July 20th, 2018',
    client: 'Oberio Group of Hotels',
    contactPerson: 'Mahmud Ritelli',
    title: 'C level',
    verticle: 'Marketing',
    meetingLocation: 'Goto Meeting',
    perposeOfInteraction: 'Understand their current ecosystem',
    remarks: 'Send first cut of proposed solution',
    engagementStatus: 'Needs defined'
  },
  {
    id: 1,
    salesRep: 'Ethan Hunt',
    date: 'July 20th, 2018',
    client: 'Taj Group of Hotels',
    contactPerson: 'Avie Peasegood',
    title: 'C level',
    verticle: 'Sales',
    meetingLocation: 'Video',
    perposeOfInteraction: 'Demo the product',
    remarks: 'She will get back with availibility',
    engagementStatus: 'Contact Made'
  }, {
    id: 2,
    salesRep: 'John Doe',
    date: 'July 20th, 2018',
    client: 'Accenture',
    contactPerson: 'Dew Tilbey',
    title: 'C level',
    verticle: 'Senior Management',
    meetingLocation: 'Face to face',
    perposeOfInteraction: 'Negotiations',
    remarks: 'He needs to get final approval by the board. Will happen by today EOD',
    engagementStatus: 'Negotiations started'
  },
  {
    id: 3,
    salesRep: 'Julia Cruise',
    date: 'July 20th, 2018',
    client: 'Google',
    contactPerson: 'Mahmud Ritelli',
    title: 'C level',
    verticle: 'Marketing',
    meetingLocation: 'Goto Meeting',
    perposeOfInteraction: 'Understand their current ecosystem',
    remarks: 'Send first cut of proposed solution',
    engagementStatus: 'Needs defined'
  },
  {
    id: 4,
    salesRep: 'Tom Roberts',
    date: 'July 20th, 2018',
    client: 'Microsoft',
    contactPerson: 'Avie Peasegood',
    title: 'C level',
    verticle: 'Sales',
    meetingLocation: 'Video',
    perposeOfInteraction: 'Demo the product',
    remarks: 'She will get back with availibility',
    engagementStatus: 'Contact Made'
  }, {
    id: 5,
    salesRep: 'John Doe',
    date: 'July 20th, 2018',
    client: 'Accenture',
    contactPerson: 'Dew Tilbey',
    title: 'C level',
    verticle: 'Senior Management',
    meetingLocation: 'Face to face',
    perposeOfInteraction: 'Negotiations',
    remarks: 'He needs to get final approval by the board. Will happen by today EOD',
    engagementStatus: 'Negotiations started'
  },
  {
    id: 6,
    salesRep: 'Ethan Hunt',
    date: 'July 20th, 2018',
    client: 'Oberio Group of Hotels',
    contactPerson: 'Mahmud Ritelli',
    title: 'C level',
    verticle: 'Marketing',
    meetingLocation: 'Goto Meeting',
    perposeOfInteraction: 'Understand their current ecosystem',
    remarks: 'Send first cut of proposed solution',
    engagementStatus: 'Needs defined'
  },
  {
    id: 7,
    salesRep: 'Jane Doe',
    date: 'July 20th, 2018',
    client: 'Taj Group of Hotels',
    contactPerson: 'Avie Peasegood',
    title: 'C level',
    verticle: 'Sales',
    meetingLocation: 'Video',
    perposeOfInteraction: 'Demo the product',
    remarks: 'She will get back with availibility',
    engagementStatus: 'Contact Made'
  }, {
    id: 8,
    salesRep: 'Julia Cruise',
    date: 'July 20th, 2018',
    client: 'Accenture',
    contactPerson: 'Dew Tilbey',
    title: 'C level',
    verticle: 'Senior Management',
    meetingLocation: 'Face to face',
    perposeOfInteraction: 'Negotiations',
    remarks: 'He needs to get final approval by the board. Will happen by today EOD',
    engagementStatus: 'Negotiations started'
  },
  {
    id: 9,
    salesRep: 'Tom Roberts',
    date: 'July 20th, 2018',
    client: 'Oberio Group of Hotels',
    contactPerson: 'Mahmud Ritelli',
    title: 'C level',
    verticle: 'Marketing',
    meetingLocation: 'Goto Meeting',
    perposeOfInteraction: 'Understand their current ecosystem',
    remarks: 'Send first cut of proposed solution',
    engagementStatus: 'Needs defined'
  }
]


