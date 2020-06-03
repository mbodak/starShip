/**
 * @returns <div class="image"><img src="img/starship.png" alt="starShip"></div>
 */
function createStarShipImageDiv() {
  // create  <img src="img/starship.png" alt="starShip"> html element
  const img = document.createElement('img');
  img.src = "img/starship.png";
  img.alt = "starShip"

  // create <div class="image"></div> html element
  const imageDiv = document.createElement('div');
  imageDiv.setAttribute('class', 'image');

  // put <img> element inside <div> and finally we get <div class="image"><img src="img/starship.png" alt="starShip"></div>
  imageDiv.appendChild(img);
  return imageDiv;
}

/**
 * @returns <div class="name"><h2>{{name}}</h2></div>
 */
function createStarShipNameDiv(name) {
  // create <h1>{{name}}</h1> html element
  const h2 = document.createElement('h2');
  h2.textContent = name;

  // create <div class="name"></div> html element
  const nameDiv = document.createElement('div');
  nameDiv.setAttribute('class', 'name');

  // put <h1> element inside <div> and finally we get <div class="name"><h1>{{name}}</h1></div>
  nameDiv.appendChild(h2);
  return nameDiv;
}

/**
 * @returns Return generated html element
              <div class="star-ship">
                <div class="image">
                  <img src="img/starship.png" alt="starShip">
                </div>
                <div class="name">
                  <h2>{{name}}</h2>
                </div>
              </div>
 */
function createStarShipDiv(name) {
  // create <div class="star-ship"></div> html element
  const starShipDiv = document.createElement('div');
  starShipDiv.setAttribute('class', 'star-ship');

  // put generated image div inside starShip div
  const imageDiv = createStarShipImageDiv()
  starShipDiv.appendChild(imageDiv);

  // put generated name div inside starShip div
  const nameDiv = createStarShipNameDiv(name)
  starShipDiv.appendChild(nameDiv);

  return starShipDiv;
}

function launch(theForm) {
  const name = theForm.name.value
  if (!name || !name.length) {
    return
  }
  const starShipsDiv = document.getElementById('starships');
  const starShipDiv = createStarShipDiv(name);
  starShipsDiv.appendChild(starShipDiv);
  theForm.reset()
}
