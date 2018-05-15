const url =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const searchBox = document.getElementsByTagName("input")[0];
const suggestionsList = document.getElementsByClassName("suggestions")[0];

let cities = [];
let search;

// generate cities array
fetch(url)
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    cities.push(...data);
  });

searchBox.addEventListener("keyup", () => {
  search = searchBox.value;
  suggestionsList.innerHTML = "";
  if (search.length > 1) populateSuggestions(filterCities());
});

function filterCities() {
  return cities.filter(city => {
    return (
      city.city.toLowerCase().includes(search) ||
      city.state.toLowerCase().includes(search)
    );
  });
}

function populateSuggestions(results) {
  results.map(result => {
    let li =
      "<li>" +
      generateName(result) +
      "<span class='population'>" +
      parseInt(result.population).toLocaleString() +
      "</span></li>";
    suggestionsList.innerHTML += li;
  });
}

function generateName(location) {
  const regex = new RegExp(search, 'gi');
  const unformatted = location.city + ", " + location.state;
  return "<span class='name'>" + unformatted.replace(regex, "<span class='hl'>$&</span>") + "</span>";
}