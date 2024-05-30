const OpenButton = document.getElementById('openpopup');
const overlay = document.getElementById('overlay');
const ParentContainer = document.querySelector(".main");
const BGblur = document.querySelector(".bgBlur");
let popupCount = 0;
let bgcolor = "rgb(164, 164, 164)";
//open button logic
OpenButton.addEventListener('click', () => {
  const popup = createPopup();
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.appendChild(popup);
  BGblur.style.backgroundColor = bgcolor;


});


//creating a pop here

const createPopup = () => {
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <p>Box ${popupCount + 1}</p>
    <button class="close">Close</button>
    <button class="Add">Add More</button>
  `;

//   close button//
  const closeButton = popup.querySelector('.close');
  closeButton.addEventListener('click', () => {
    popup.remove();
    if (overlay.children.length === 0) {
      overlay.style.display = 'none';
      BGblur.style.backgroundColor = 'transparent';
    }
    
  });

  //   add button//
  const addMoreButton = popup.querySelector('.Add');
  addMoreButton.addEventListener('click', () => {
    const newPopup = createPopup();
    overlay.appendChild(newPopup);
  });

  popupCount++;
  return popup;
}