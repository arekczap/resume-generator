export const initialState = {
  profile: {
    sectionName: 'Dane osobowe',
    firstName: '',
    secondName: '',
    lastName: '',
    subtitle: '',
    photograph: '',
    address: '',
    phoneNumber: '',
    email: '',
    birthDate: '',
    website: '',
    linkedinLink: '',
    githubLink: '',
  },
  experience: {
    sectionName: 'Doświadczenie',
    items: [
      {
        position: 'Front-End Developer',
        companyName: 'Pyramid Games SA.',
        city: 'Lublin aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        startDate: '14-03-2021',
        endDate: '14-12-1999',
        summary: 'Robienie gier komputerowych',
      },
    ],
  },
}
