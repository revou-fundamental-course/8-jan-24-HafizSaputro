function hitung() {
  var sisi = document.getElementById("sisi").value;
  var luas = sisi * sisi;
  var keliling = sisi * 4;
  document.getElementById("hasilLuas").innerHTML = "Luas     =  " + luas + "cm<sup>2</sup>";
  document.getElementById("hasilKeliling").innerHTML = "Keliling =  " + keliling + "cm";
}
function resetForm() {
  document.getElementById("sisi").value = "";
  document.getElementById("hasilLuas").innerHTML = "";
  document.getElementById("hasilKeliling").innerHTML = "";
}
