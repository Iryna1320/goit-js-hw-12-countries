// import countryCardTpl from './country.hbs';

// const refs = {
//   cardInput: document.querySelector('.inputConteiner'),
//   input: document.querySelector('.input'),
// };

// refs.input.addEventListener('input', onSearch);

// function onSearch(e) {
//   e.preventDefault();

//   const nameInput = refs.input.value;

//   fetchNameCountries(nameInput).then(renderCountry).catch(onFetchError);
//   // .finally(() => input.reset());
// }

// function fetchNameCountries(name) {
//   return fetch(`https://restcountries.eu/rest/v2/name/${name}`).then(response =>
//     response.json(),
//   );
// }

// function renderCountry(country) {
//   const markup = countryCardTpl(country);
//   refs.cardInput.innerHTML = markup;
// }

// function onFetchError(error) {
//   alert(
//     // PNotify.error({
//     //   title: 'Uh Oh!',
//     //   text:
//     //     "Something really terrible happened. You really need to read this, so I won't close automatically.",
//     //   hide: false,
//     // });
//     'Too many matches found. Please enter a more specific qyery!',
//   );
// }
