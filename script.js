const btn = document.getElementById("btn-generate");
const resultsContainer = document.querySelector(".results");
const resultEl = Array.from(document.querySelectorAll(".result"));
const resultEl1 = document.getElementById("result-1");
const resultEl2 = document.getElementById("result-2");
const icons = document.querySelectorAll(".icon");
const icon1 = document.getElementById("icon-box-1");
const icon2 = document.getElementById("icon-box-2");
const copy1 = document.querySelector(".copy-1");
const copy2 = document.querySelector(".copy-2");

const switchTheme = document.querySelector(".switch");
console.log(switchTheme);

// prettier-ignore
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordLength = 15;

const getChar = function () {
  const randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
};

const getRandomPassword = function () {
  let randomPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += getChar();
  }
  return randomPassword;
};

const copyToClipboard = async function (e) {
  try {
    if (!navigator.clipboard) {
      throw new Error(`navigator.clipboard is NOT SUPPORTED IN THIS BROWSER`);
    }
    const click = e.target;
    const newStyle = `
        opacity: 1;
        transform: translate(-50%, -100%);
        `;

    setTimeout(() => {
      copy1.style = "";
      copy2.style = "";
    }, 1500);

    if (click.classList.contains("icon-1")) {
      const text = await navigator.clipboard.writeText(resultEl1.textContent);
      copy1.style = newStyle;
    }

    if (click.classList.contains("icon-2")) {
      const text = await navigator.clipboard.writeText(resultEl2.textContent);
      copy2.style = newStyle;
    }
  } catch (error) {
    alert(error.message);
  }
};

const showPassword = function () {
  resultEl1.textContent = getRandomPassword();
  resultEl2.textContent = getRandomPassword();

  icon1.addEventListener("click", copyToClipboard);
  icon2.addEventListener("click", copyToClipboard);
};

btn.addEventListener("click", showPassword);
