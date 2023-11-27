function hitung() {
  let angka = document.getElementById('angka').value;

  if (angka >= 0 && angka <= 70) {
    document.getElementById('hasil').innerHTML = 'remedial';
  } else if (angka >= 71 && angka <= 80) {
    document.getElementById('hasil').innerHTML = 'Nilai C';
  } else if (angka >= 81 && angka <= 90) {
    document.getElementById('hasil').innerHTML = 'Nilai B';
  } else if (angka >= 91 && angka <= 100) {
    document.getElementById('hasil').innerHTML = 'Nilai A';
  } else {
    document.writeln('Input salah').innerHTML = 'salah';
  }
}
