function getMinMax() {
  min = Math.ceil(document.getElementById("min").value);
  max = Math.floor(document.getElementById("max").value);

  if (min >= max) {
    alert("Mauvaise intervalle");
  } else {
    document.getElementById("resultat").textContent = Math.round(
      Math.random() * (max - min) + min
    );
  }
}
