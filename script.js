let textcontent = document.querySelector("#textarea");


function loadText() {
  const savedText = localStorage.getItem("autosave-text");
  if (savedText) {
    textcontent.value = savedText;
  }
}

function saveText() {
  localStorage.setItem("autosave-text", textcontent.value);
}
textcontent.addEventListener("input", saveText);


window.addEventListener("load", loadText);