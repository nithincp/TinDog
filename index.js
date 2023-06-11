// Remember to import the data and Dog class!
import dogs from "./data.js";
import Dog from "./Dog.js";

const dogObjectEl = document.getElementById("dog-object");
const iconCross = document.getElementById("icon-cross");
const iconheart = document.getElementById("icon-heart");
let count = 2;
let dogObject = new Dog(dogs[count]);
render();

iconCross.addEventListener("click", function () {
  if (
    iconCross.classList.contains("disabled") ||
    iconheart.classList.contains("disabled")
  ) {
    return; // Exit the function if the button is already disabled
  }

  iconCross.classList.add("disabled");
  iconheart.classList.add("disabled");
  document.getElementById("badge-nope").style.display = "inline";
  setTimeout(() => {
    count--;
    if (count >= 0) {
      dogObject = new Dog(dogs[count]);
      dogObjectEl.style.backgroundImage = `url('${dogObject.avatar}')`;
      render();
      iconCross.classList.remove("disabled");
      iconheart.classList.remove("disabled");
    }
  }, 2000);
});

iconheart.addEventListener("click", function () {
  if (
    iconCross.classList.contains("disabled") ||
    iconheart.classList.contains("disabled")
  ) {
    return; // Exit the function if the button is already disabled
  }
  iconCross.classList.add("disabled");
  iconheart.classList.add("disabled");
  document.getElementById("badge-like").style.display = "inline";
  setTimeout(() => {
    count--;
    if (count >= 0) {
      dogObject = new Dog(dogs[count]);
      dogObjectEl.style.backgroundImage = `url(${dogObject.avatar})`;
      render();
      iconCross.classList.remove("disabled");
      iconheart.classList.remove("disabled");
    }
  }, 2000);
});

function render() {
  const bioHtml = `
    <div>
        <img id="badge-like" class="badge-like" src="./images/badge-like.png" />
        <img id="badge-nope" class="badge-nope" src="./images/badge-nope.png" />
    </div>
    <div>
        <h2>${dogObject.name}, ${dogObject.age}</h2>
        <p>${dogObject.bio}</p>
    </div>
`;

  dogObjectEl.innerHTML = bioHtml;
}
