// VARIABLES

const namesOne = {
  0: "Code",
  1: "Learning",
  2: "Coding",
  3: "Program",
  4: "Coder",
  5: "Programming",
  6: "Dev",
  7: "WebDev",
  8: "Web",
  9: "Tech",
};

const namesTwo = {
  0: "Life",
  1: "MadeEasy",
  2: "Programmer",
  3: "Simplified",
  4: "Development",
  5: "World",
  6: "Media",
  7: "Developer",
  8: "Stacker",
  9: "WebDev",
};

const display = document.getElementById("suggestionSection");
const list = document.querySelector(".suggestionSection ol");

// FUNCTIONS

const initializeApp = () => {
  document.getElementById("submitForm").addEventListener("submit", (e) => {
    e.preventDefault();
    clearSuggestions();
    const namesArray = generateNames();
    displayNames(namesArray);
  });
};

const clearSuggestions = () => {
  if (!display.classList.contains("hidden")) {
    display.classList.toggle("hidden");
  }
  list.innerHTML = "";
};

const generateNames = () => {
  const randomNumberArray = [];
  for (let i = 0; i < 4; ) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumberArray.includes(randomNumber)) {
      continue;
    }
    randomNumberArray.push(randomNumber);
    i++;
  }

  const suggestionOne =
    namesOne[randomNumberArray[0]] + namesTwo[randomNumberArray[3]];
  const suggestionTwo =
    namesOne[randomNumberArray[1]] + namesTwo[randomNumberArray[0]];
  const suggestionThree =
    namesOne[randomNumberArray[2]] + namesTwo[randomNumberArray[2]];
  const suggestionFour =
    namesOne[randomNumberArray[3]] + namesTwo[randomNumberArray[1]];

  return [suggestionOne, suggestionTwo, suggestionThree, suggestionFour];
};

const displayNames = (namesArray) => {
  const rawfirstName = document.getElementById(
    "submitSection__textInput"
  ).value;
  const firstName = cleanInput(rawfirstName);
  namesArray.forEach((nameEl) => {
    list.innerHTML += `<li>
    <a href="https://youtube.com/${nameEl}" target="_blank">${nameEl}</a>
    </li>`;
    list.innerHTML += `<ul>
    <li>
    <a href="https://youtube.com/${firstName}'s${nameEl}" target="_blank">
    ${firstName}'s${nameEl}
    </a>
    </li>
    <li>
    <a href="https://youtube.com/${nameEl}with${firstName}" target="_blank">
    ${nameEl}with${firstName}
    </li>
    </ul>`;
  });
  if (display.classList.contains("hidden")) {
    display.classList.toggle("hidden");
  }
};

const cleanInput = (inputValue) => {
  const div = document.createElement("div");
  div.textContent = inputValue;
  return div.innerHTML;
};

// EVENT LISTENER

document.addEventListener("DOMContentLoaded", initializeApp);
