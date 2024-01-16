// seleziono gli elementi di riferimento del DOM
const saveButton = document.getElementById("save");
const cancelButton = document.getElementById("cancel");
const form = document.getElementsByTagName("form")[0];
const inputText = document.getElementById("full-name");
// non faccio avvenire il refresh della pagina
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

// aggiungo eventi ai bottoni
//1° aggiungo in memoria al click di save
saveButton.addEventListener("click", function () {
  localStorage.setItem("full-name", "wendy de luca");
});
//2° svuoto l'input al click di cancel
cancelButton.addEventListener("click", function () {
  inputText.value = "";
});
// 3° svuoto memoria al click del button cancel
cancelButton.addEventListener("click", function () {
  localStorage.removeItem("full-name");
});

// mostro al caricamento il valore salvato in precedenza
localStorage.getItem("full-name");
