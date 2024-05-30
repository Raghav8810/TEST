const OpenButton = document.getElementById('openpopup');
const overlay = document.getElementById('overlay');
const ParentContainer = document.querySelector(".main");
let popupCount = 0;

//open button logic
OpenButton.addEventListener('click', () => {
  const popup = createPopup();
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.appendChild(popup);
  


});


//creating a pop here

function createPopup() {
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <p>Box ${popupCount + 1}</p>
    <button class="close">Close</button>
    <button class="Add">Add More</button>
  `;

  const closeButton = popup.querySelector('.close');
  closeButton.addEventListener('click', () => {
    popup.remove();
    if (overlay.children.length === 0) {
      overlay.style.display = 'none';
    }
    var popBlur = overlay;
    popBlur.classList.toggle('active');
  });

  const addMoreButton = popup.querySelector('.Add');
  addMoreButton.addEventListener('click', () => {
    const newPopup = createPopup();
    overlay.appendChild(newPopup);
  });

  popupCount++;
  return popup;
}