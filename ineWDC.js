(function () {
  var myConnector = tableau.makeConnector();

  myConnector.getSchema = function (schemaCallback) {
    var cols = [
      {
        id: "ID",
        dataType: tableau.dataTypeEnum.string,
      },
      {
        id: "Fecha",
        dataType: tableau.dataTypeEnum.date,
      },
      {
        id: "Periodo",
        dataType: tableau.dataTypeEnum.string,
      },
      {
        id: "Anyo",
        dataType: tableau.dataTypeEnum.string,
      },
      {
        id: "Valor",
        dataType: tableau.dataTypeEnum.float,
      },
      {
        id: "Codigo_INE",
        dataType: tableau.dataTypeEnum.string,
      },
      {
        id: "Variable",
        dataType: tableau.dataTypeEnum.string,
      },
    ];

    var tableSchema = {
      id: "Datos_INE_Tempus3",
      alias: "Datos del INE Tempus3",
      columns: cols,
    };

    schemaCallback([tableSchema]);
  };

  // Grab data from INE Tempus 3
  myConnector.getData = function (table, doneCallback) {
    let value = tableau.connectionData;

    $.getJSON(value, function (resp) {
      var feat = resp;
      var tableData = [];
      // Iterate over the JSON object
      for (var i = 0, len = feat.length; i < len; i++) {
        var cod = feat[i].COD;
        var nombre = feat[i].Nombre;
        for (var j = 0; j < feat[i].Data.length; j++) {
          var Anyo = feat[i].Data[j].Anyo;
          var Valor = feat[i].Data[j].Valor;
          var f = feat[i].Data[j].Fecha;
          var fecha = f.substring(0, 10);
          var Periodo = feat[i].Data[j].T3_Periodo;
          tableData.push({
            ID: "" + i + j,
            Periodo: Periodo,
            Anyo: Anyo,
            Valor: Valor,
            Codigo_INE: cod,
            Fecha: fecha,
            Variable: nombre,
          });
        }

        console.log(tableData);
      }

      table.appendRows(tableData);
      doneCallback();
    });
  };

  tableau.registerConnector(myConnector);
})();

// Create event listeners for when the user submits the form
$(document).ready(function () {
  $("#submitButton").click(function () {
    tableau.connectionName = "Datos INE Tempus3"; // This will be the data source name in Tableau
    const urlInput = document.getElementById("selectURL").value;

    const nInput = document.getElementById("numberofPeriods").value;
    const newUrl = `${urlInput}&nult=${nInput}&tip=A`;
    if (!nInput) {
      tableau.connectionData = `${urlInput}&nult=1&tip=A`;
    } else {
      tableau.connectionData = newUrl;
    }

    tableau.submit(); // This sends the connector object to Tableau
  });
});
