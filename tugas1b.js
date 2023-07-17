function cekPalindrom(kata) {
    if (typeof kata !== "string") {
      console.log('Masukan harus berupa string');
    } else {
      const reversedKata = kata.split(' ').reverse().join(' ');
      console.log(`${reversedKata}`);
    }
  }
  
  cekPalindrom('saya belajar java script');