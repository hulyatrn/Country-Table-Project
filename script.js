const request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  console.log(data);
  setCountry(data);
});

function setCountry(data) {
  $("#example").DataTable({
    data: data,
    columns: [
      { data: "name.common" },
      { data: "capital" },
      { data: "cca2" },
      { data: "startOfWeek" },
      { data: "population" },
      { data: "region" },
    ],
    dom: "Bfrtip",
    buttons: ["copy", "csv", "excel", "pdf", "print"],
  });
}
