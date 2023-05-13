// Menu superior de categorias
import CountriesForRegion from "./CountriesForRegion"

const categoriesMenu = [

  {
    id: 0,
    name: 'Destinations',
    link: '/',
    subcategories:[ 
      {
        id: 0,
        name: 'Europe',
        link: '/',
        subLevel1: CountriesForRegion('europe')
      },
      {
        id: 1,
        name: 'America',
        link: '/',
        subLevel1: CountriesForRegion('america')
      },
      {
        id: 2,
        name: 'Asia',
        link: '/',
        subLevel1: CountriesForRegion('asia')
      },
      {
        id: 3,
        name: 'Africa',
        link: '/',
        subLevel1: CountriesForRegion('africa')
      },
      {
        id: 4,
        name: 'Oceania',
        link: '/',
        subLevel1: CountriesForRegion('oceania')
      },
    ]
  },
  {
    id: 1,
    name: 'Experiencies',
    link: '/',
    subcategories: {}
  },


];

export default categoriesMenu;