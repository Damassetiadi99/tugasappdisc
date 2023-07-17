function cekPalindrom(kata) {
    kata = kata.toLowerCase();
    const reversedKata = kata.split('').reverse().join('');
  
    if (kata === reversedKata) {
      console.log(`${kata} Kata palindrom`);
    } else {
      console.log(`${kata} Kata bukan palindrom`);
    }
  }
  
  cekPalindrom('bukan');