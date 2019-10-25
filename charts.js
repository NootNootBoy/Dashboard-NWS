google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["travail dans le numérique", 5],
    ["Non renseigne", 3],
    ["travail dans le numérique d'un entreprise non-numérique", 7]
  ]);

  var options = {
    title: "Etudiant 3ème années",
    is3D: true,
    colors: ["#f4e31e", "#52b999", "#eb554f"],
    backgroundColor: "transparent",
    titleTextStyle: {
      color: "#ddd",
      fontSize: "12",
      fontName: "MontSerrat"
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById("piechart_3d"));
  chart.draw(data, options);
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Oui", 13],
    ["Non", 79]
  ]);

  var options = {
    title: "étudiants NWS dans les entreprises de NWX",
    is3D: true,
    colors: ["#f4e31e", "#52b999", "#eb554f"],
    backgroundColor: "transparent",
    titleTextStyle: {
      color: "#ddd",
      fontSize: "12",
      fontName: "MontSerrat"
    }
  };

  var chart2 = new google.visualization.PieChart(document.getElementById("piechart_3d2"));
  chart2.draw(data, options);
}
