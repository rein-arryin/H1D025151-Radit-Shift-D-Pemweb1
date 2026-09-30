const form = document.getElementById("idForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("fNama").value.trim();
    const email = document.getElementById("fEmail").value.trim();
    const komentar = document.getElementById("fKomentar").value.trim();

    if (nama === "" || email === "" || komentar === "") {
        alert("Semua field wajib diisi!");
        return;
    }

    const polaNama = /^[A-Za-z\s]+$/;

    if (!polaNama.test(nama)) {
        alert("Nama hanya boleh mengandung huruf dan spasi!");
        return;
    }

    alert("Form berhasil dikirim!");
    
    form.submit();
});