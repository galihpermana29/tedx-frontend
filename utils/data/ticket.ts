export const data = (presale: number) => [
  {
    name: 'Main Event - Normal Price',
    price: 'Rp. 79.000-',
    dateOrder: '26 November - 2 Desember 2023',
    venue: '',
    dateEvent: '03 Desember 2023',
    theme: 'Memantik Baskara',
    capacity: `${presale}/80`,
    statusActive: true,
    statusSold: true,
    route: '/main-event',
  },
  {
    name: 'Main Event - Early Bird',
    price: 'Rp. 49.000-',
    dateOrder: '18 November - 20 November 2023',
    venue: '',
    dateEvent: '03 Desember 2023',
    theme: 'Memantik Baskara',
    capacity: `15/15`,
    statusActive: true,
    statusSold: true,
    route: '/main-event',
  },
  {
    name: 'Main Event - Pre Sale ',
    price: 'Rp. 69.000-',
    dateOrder: '22 November - 24 November 2023',
    venue: '',
    dateEvent: '03 Desember 2023',
    theme: 'Memantik Baskara',
    capacity: `35/35`,
    statusActive: true,
    statusSold: true,
    route: '/main-event',
  },

  {
    name: 'Propaganda 2',
    price: 'Rp. 25.000-',
    dateOrder: '27 Oktober - 29 Oktober 2023',
    venue: 'Nyore',
    dateEvent: '27 Oktober - 29 Oktober 2023',
    theme: 'Semayam Asa',
    capacity: 'SOLD OUT',
    statusActive: false,
    statusSold: true,
    route: '/semayam-asa',
  },
  {
    name: 'Pre Event',
    price: 'Rp. 0-',
    dateOrder: '16 September - 19 September 2023',
    venue: 'Suaco',
    dateEvent: '23 September 2023',
    theme: 'Swara Insan',
    capacity: 'SOLD OUT',
    statusActive: false,
    statusSold: true,
    route: '/pre-event',
  },
];
