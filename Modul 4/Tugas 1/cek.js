function cekNilai() {
    let nilai = Number(document.getElementById("iNilai").value);
    let hasil = document.getElementById("hasil");

    if (nilai > 100) {
        hasil.innerHTML = "Nilai tidak Valid"
    } else if (nilai >= 81 && nilai <= 100) {
        hasil.innerHTML = "Nilai Anda A";
    } else if (nilai <= 80 && nilai >= 61) {
        hasil.innerHTML = "Nilai Anda B";
    } else if (nilai <= 60 && nilai >= 41) {
        hasil.innerHTML = "Nilai Anda C";
    } else if (nilai <= 40 && nilai >= 21) {
        hasil.innerHTML = "Nilai Anda D";
    } else {
        hasil.innerHTML = "NILAI ANDA E";
    }
}