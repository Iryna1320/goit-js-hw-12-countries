import countryList from '../templates/countryList.hbs';
import countryCardTpl from '../templates/country.hbs';
import refs from './refs';
import nameCountry from './nameCountry';
import error from './notifications';
import { debounce } from 'debounce';

refs.input.addEventListener('input', debounce(onSearch, 500));

function onSearch() {
  clearCard();

  const nameInput = refs.input.value;

  if (!nameInput) {
    return;
  }

  nameCountry
    .fetchNameCountries(nameInput)
    .then(renderCountry)
    .catch(error.errorMsg);
}

function renderCountry(country) {
  if (country.length > 1 && country.length <= 10) {
    const markup = countryList(country);
    refs.cardInput.insertAdjacentHTML('afterbegin', markup);
  }
  if (country.length > 10) {
    refs.input.value = '';
    error.errorMsg();
    return;
  }
  if (country.length > 0 && country.length < 2) {
    const markup = countryCardTpl(country);
    refs.cardInput.insertAdjacentHTML('afterbegin', markup);
  }
}

function clearCard() {
  refs.cardInput.innerHTML = '';
}
