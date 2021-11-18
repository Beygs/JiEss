const entrepreneursList = document.querySelector('.entrepreneurs-list');
const filter = document.getElementById('filter');

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

function display(arr, y= true, a = false) {
  entrepreneursList.innerHTML = '';

  arr.forEach(e => {
    const li = document.createElement('li');
    const name = document.createElement('p');

    name.innerHTML = `${e.first} ${e.last}`;

    li.appendChild(name);
    
    if (y) {
      const year = document.createElement('p');
      year.innerHTML = e.year;
      li.appendChild(year);
    }

    if (a) {
      const age = document.createElement('p');
      age.innerHTML = (new Date().getFullYear() - e.year) + ' ans';
      li.appendChild(age);
    }

    entrepreneursList.appendChild(li);
  })
}

filter.addEventListener('change', () => {
  switch (filter.value) {
    case 'seventies':
      display(entrepreneurs.filter(e => e.year >= 1970 && e.year < 1980));
      break;
    case 'name':
      display(entrepreneurs, false);
      break;
    case 'age':
      display(entrepreneurs, false, true);
      break;
    case 'alpha':
      const sortedArray = [...entrepreneurs];
      display(sortedArray.sort((a, b) => a.last.localeCompare(b.last)));
      break;
    default:
      display(entrepreneurs);
      break;
  }
})

display(entrepreneurs);