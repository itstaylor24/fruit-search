const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruits = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

const search = (str) => {
  str = str.toLowerCase();

  return fruits.filter((val) => val.toLowerCase().includes(str));
};

function searchHandler(e) {
  const results = search(input.value);
  //the results will populate based on what is in the input.value
  showSuggestions(results, input.value);
}

function showSuggestions(results, inputVal) {
  suggestions.innerText = "";
  // the innerText of the results will be reset whenever the showSuggestions function is run

  // function titleCase(str) {
  //   str = str.toLowerCase().split(' ');
  //   for (let i = 0; i < str.length; i++) {
  //       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  //   }
  //   return str.join(' ');

  results.forEach(function (val) {
    let li = document.createElement("li");

    newVal = val.replace(inputVal, `<strong>${inputVal}</strong>`);

    li.innerHTML = newVal;

    suggestions.append(li);
  });

  if (inputVal === "") {
    suggestions.innerText = "";
  }
}

function useSuggestion(e) {
  suggestions.innerText = "";
  input.value = e.target.innerText;
}

input.addEventListener("keyup", searchHandler);

suggestions.addEventListener("click", useSuggestion);
