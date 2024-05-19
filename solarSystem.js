const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of 'planets'.
    Use string templates to construct the DOM elements.
*/
const outEl = document.querySelector('#planets')
outEl.innerHTML = '<h1>Planets in Our Solar System</h1>'

planets.forEach(planet => {
  outEl.innerHTML += `
    <h2>${planet.element}</h2>
  `
  outEl.innerHTML += '<hr/>'
});
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const planetEl = document.getElementById('planets')
const bigPlanet = planets.map(planet => {
  return planet.charAt(0).toUpperCase() + planet.slice(1);
});
bigPlanet.forEach((planet) => {
  planetEl.innerHTML += `
  <h2>${planet}</h2>
   `;
  planetEl.innerHTML += '<hr/>';
});
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const findPlanet = planets.filter(planet => {
  let includesE = false;

  if (planet.includes('e')) {
    includesE = true;
  };

  return includesE;
});


ePlanets.forEach((planet) => {
  planetEl.innerHTML += `
  <h2>${planet}</h2>
`;
  planetEl.innerHTML += '<hr/>';
});
