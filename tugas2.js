function pijarFood(harga, voucher, jarak, pajak) {
    let total = 0;
    let biayaAntar = 5000;
    let potongan = 0;
    let pajakAmount = 0;

    if (voucher.toLowerCase() === "pijarfood5") {
        if (harga >= 50000) {
            potongan = harga * 0.5;
        } else {
            potongan = 50000;
        }
    }
    if (voucher.toLowerCase() === "ditraktirpijar") {
        if (harga >= 25000) {
            potongan = harga * 0.6;
        } else {
            potongan = 30000;
        }
    }
    if (jarak <3 ) {
        biayaAntar = 5000;
    } else {
        biayaAntar = ((jarak -2) * 3000) + 5000;
    }
    if (pajak === true) {
        pajakAmount = (5 / 100) * harga;
    } else {
        pajakAmount = 0
    }

    total = harga - potongan + pajakAmount + biayaAntar;

    console.log(`Harga: ${harga}`);
    console.log(`Potongan: ${potongan}`);
    console.log(`Biaya Antar: ${biayaAntar}`);
    console.log(`Pajak: ${pajakAmount}`);
    console.log("Total biaya:", total);
}

pijarFood( 75000,"pijarFood5", 5, true)