const button = document.getElementById("button");
function alertButtonClick(event) {
  alert(`Button was clicked which id is: ${event.target.id}`);
}
button.addEventListener("click", alertButtonClick);

const textButton = document.getElementById('element-add-button');

function addElement(){
    const para = document.createElement('p');
    const body = document.querySelector('body');
    para.textContent = "This is the text";
    body.append(para);
  };
  textButton.addEventListener("click", addElement);