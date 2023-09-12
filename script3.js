const countryInfo = document.querySelector('.country-info p');
async function fetchCountryData() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching country data:', error);
  }
}
function updateRandomCountryInfo(data) {
  const randomIndex = Math.floor(Math.random() * data.length);
  const country = data[randomIndex];
  countryInfo.textContent = `Country Name: ${country.name.common}\nCapital: ${country.capital}\nPopulation: ${country.population}\nRegion: ${country.region}\nSubregion: ${country.subregion}`;
  
}
document.addEventListener('DOMContentLoaded', () => {
  fetchCountryData().then((data) => {
    updateRandomCountryInfo(data);
  });
});