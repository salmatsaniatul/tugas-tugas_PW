///looping meningkat
function cek() {
  let x = document.getElementById('kesatu').value;
  let y = document.getElementById('kedua').value;
  let text = '';
  for (let u = x; u <= y; u++) {
    text += u + '<br>';
  }
  document.getElementById('hasil').innerHTML = text;
}

///looping menurun
function cek1() {
  let y = document.getElementById('kesatua').value;
  let x = document.getElementById('keduab').value;
  let text1 = '';
  for (let z = y; z >= x; z--) {
    text1 += z + '<br>';
  }
  document.getElementById('hasilan').innerHTML = text1;
}
