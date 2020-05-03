var changedText = document.getElementById("textToChange");
function listQ() {
  if (
    this.value ===
    "https://servicios.ine.es/wstempus/js/ES/DATOS_METADATAOPERACION/EPA?g1=115:&g2=3:283910&g3=18:452&g3=18:453&g3=18:454&p=3"
  ) {
    changedText.textContent =
      "Incluye el detalle de la tasa de paro entre hombres, entre mujeres y para ambos sexos. Una de las columnas generadas por el INE llamada 'Variable', contiene la provincia y el sexo, por lo que requerirá dividir dicha variable en columnas. El INE ofrece datos trimestrales para esta serie.";
  } else if (
    this.value ===
    "https://servicios.ine.es/wstempus/js/ES/DATOS_METADATAOPERACION/HPT?g1=240:12365&g2=247:12417&g3=429:19947&g4=115:&p=1"
  ) {
    changedText.textContent =
      "Número total de hipotecas de viviendas constituidas en cada provincia. Es importante tener en cuenta que sólo se incluyen las hipotecas de viviendas, excluyéndose otro tipo de fincas. El INE ofrece datos mensuales para esta serie estadística. Podría utilizarse junto con el importe de las hipotecas a través de una fuente de datos adicional en Tableau para calcular el importe medio. Requerirá limpiar la columna del ine 'Variable' para separar el nombre de la provincia.";
  } else if (
    this.value ===
    "https://servicios.ine.es/wstempus/js/ES/DATOS_METADATAOPERACION/HPT?g1=240:12365&g2=247:12418&g3=429:19947&g4=115:&p=1"
  ) {
    changedText.textContent =
      "Importe total de hipotecas de viviendas constituidas en cada provincia en miles de euros. Es importante tener en cuenta que se trata de el importe TOTAL, es decir la suma del importe de todas las hipotecas en cada mes y en cada provincia, y que sólo se incluyen las hipotecas de viviendas excluyéndose otro tipo de fincas. El INE ofrece datos mensuales para esta serie estadística. Requerirá limpiar la columna del ine 'Variable' para separar el nombre de la provincia.";
  }
}
document.getElementById("selectURL").onchange = listQ;
