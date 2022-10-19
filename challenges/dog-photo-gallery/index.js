//initialisation
let container = document.getElementById("container");
let btnEl = document.getElementById("btn1");
//make api call
btnEl.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      //create img
      let li = document.createElement("li");
      dogImage = document.createElement("img");
      console.log(data);
      dogImage.src = data.message;
      dogImage.alt = "dog";
      dogImage.width = "400";
      li.appendChild(dogImage);
      container.append(li);
    })
    //error
    .catch((error) => {
      console.log("See Error Here:", error);
    });
    document.body.style.background = "#FFE4B5";
});
