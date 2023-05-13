// 5 Random countries for region

const CountriesForRegion = (region) => {

  let countries = []

  fetch(`https://restcountries.com/v3.1/region/${region}`)
    .then(data => data.json())
    .then(data => {

      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      
      for (let i = 0; i < 5; i++) {
        const randomNumber = getRandomInt(data.length - 1)
        const countryName = data[randomNumber].name.common;
        
        data.splice(randomNumber, 1);
        
        countries.push({
          id: i,
          name: countryName,
          link: `/countries/${countryName}`
        })
        
      }

    })

    return countries;

}

export default CountriesForRegion;