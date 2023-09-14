// Kalkulator Diskon
function hitungDiskon() {
  var hargaAwal = parseFloat(document.getElementById("hargaAwalDiskon").value);
  var diskon = parseFloat(document.getElementById("totalDiskon").value);
  var errorElement = document.getElementById("totalDiskonError");
  // perhitungan diskon
  let mulai1 = (diskon / 100) * hargaAwal;
  document.getElementById("total1").innerHTML = "<b></b>" + mulai1;
  // perhitungan hemat
  let hemat1 = hargaAwal - mulai1;
  document.getElementById("hemat").innerHTML = hemat1;
}
// Kalkulator Denda
function hitungDenda() {
  var hargaDenda = parseFloat(document.getElementById("hargaAwalDenda").value);
  var denda1 = parseFloat(document.getElementById("totalDenda").value);
  // Perhitungan Denda
  let mulai2 = (denda1 / 100) * hargaDenda;
  document.getElementById("total2").innerHTML = mulai2;
  // perhitungan bayar
  let kontol = hargaDenda + mulai2;
  document.getElementById("denda").innerHTML = kontol;
}
// Definisi Diskon
function defDiskon() {
  document.getElementById("tampilDefDiskon").innerHTML = "Diskon adalah  potongan harga yang diberikan oleh penjual kepada pembeli sebagai penghargaan atas aktivitas tertentu dari pembeli yang menyenangkan bagi penjual";
}
// Cara Menghitung Diskon
function carahitungDiskon() {
  document.getElementById("tampilCaraDiskon").innerHTML =
    "<p>Cara menghitung diskon sebagai berikut :</p><br><p>1. Tentukan harga awal dan banyak diskon%</p><p>2. Hitung diskon dengan harga awal dengan cara diskon% x harga awal</p><p>3. Setelah menghitung total diskon, lalu hitunglah harga setelah diskon dengan harga awal dengan cara harga setelah diskon - harga awal </p>";
}
// Definisi Denda
function defDenda() {
  document.getElementById("tampilDefDenda").innerHTML = "Denda dalam kamus Bahasa Indonesia diartikan dengan hukuman berupa membayar sejumlah uang apabila lalai dalam membayar kewajibannya";
}
// Cara Menghitung Denda
function carahitungDenda() {
  document.getElementById("tampilCaraDenda").innerHTML =
    "<p>Cara menghitung denda sebagai berikut :</p><br><p>1. Tentukan harga awal dan banyak denda%</p><p>2. Hitung denda dengan harga awal dengan cara denda% x harga awal</p><p>3. Setelah menghitung total denda, lalu hitunglah harga setelah denda dengan harga awal dengan cara harga setelah denda + harga awal </p>";
}
