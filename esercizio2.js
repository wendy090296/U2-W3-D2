// all'avvio della pagina recupero il valore di sessionStorage :
document.addEventListener("DOMContentLoaded", function () {
  let counterValue = sessionStorage.getItem("counter");

  // se non ho nessun valore, lo imposto a partire da 0
  if (!counterValue) {
    counterValue = 0;
  }
  updateCounter(counterValue);

  // Aggiorno il contatore ogni secondo
  setInterval(function () {
    counterValue++;
    updateCounter(counterValue);

    // Salvo il  valore in sessionStorage
    sessionStorage.setItem("counter", counterValue);
  }, 1000);
});

// creo la funzione:

const updateCounter = function (value) {
  const counter = document.getElementById("counter");
  counter.textContent = value;
};
