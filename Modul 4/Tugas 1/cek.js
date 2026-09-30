function cekNilai() {
    let nilai = Number(document.getElementById("iNilai").value);
    let hasil = document.getElementById("hasil");

    if (nilai > 100) {
        hasil.innerHTML = "Nilai anda tidak Valid"
    } else if (nilai >= 81 && nilai <= 100) {
        hasil.innerHTML = "Nilai anda A";
    } else if (nilai <= 80 && nilai >= 61) {
        hasil.innerHTML = "Nilai anda B";
    } else if (nilai <= 60 && nilai >= 41) {
        hasil.innerHTML = "Nilai anda C";
    } else if (nilai <= 40 && nilai >= 21) {
        hasil.innerHTML = "Nilai anda D";
    } else {
        hasil.innerHTML = "NILAI ANDA E";
    }
}