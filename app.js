// masala 1;

function masala1(a, b, c)  {
    if (a < b && a < c) {
        console.log(`a : ${a} soni eng kichigi`)
    } else if (b < a && b < c) {
        console.log(`b : ${b} soni eng kichigi`)
    } else if (c < a && c < b) {
        console.log(`c : ${c} soni eng kichigi`)
    } else if (c == a && c < b) {
        console.log(`c : ${c} va a : ${a} sonlari eng kichigi`)
    } else if (c == b && c < a) {
        console.log(`c : ${c} va b : ${b} sonlari eng kichigi`)
    } else if (a == b && a < c) {
        console.log(`a : ${a} va b : ${b} sonlari eng kichigi`)
    } else {
        console.log(`sonlar o'zaro teng`)
    }
} 
masala1(10, 30, 430)

// masala 2

function masala2(a, b, c)  {
    if ((a < b && b < c) || (c < b && b < a)) {
        console.log(`b : ${b} soni o'rtachasi`)
    } else if ((b < a && a < c) || (c < a && a < b)) {
        console.log(`a : ${a} soni o'rtachasi`)
    } else if ((a < c && c < b) || (b < c && c < a)) {
        console.log(`c : ${c} soni o'rtachasi`)
    } else if (c == a && c < b) {
        console.log(`c : ${c} va a : ${a} sonlari teng va kichigi, o'rtanchasi yo'q`)
    } else if (c == b && c < a) {
        console.log(`c : ${c} va b : ${b} sonlari teng va kichigi, o'rtanchasi yo'q`)
    } else if (a == b && a < c) {
        console.log(`a : ${a} va b : ${b} sonlari teng va kichigi, o'rtanchasi yo'q`)
    } else {
        console.log(`sonlar o'zaro teng`)
    }
} 
masala2(20, 30, 430)


// masala 3

function masala3(a, b)  {
    if (a !== b) {
        let katta = a < b ? b : a;
        console.log(`${katta} soni kattasi`)
    } else {
        console.log(`0, sonlar o'zaro teng`)
    }
} 
masala3(20, 20)


// masala 4

function masala4(x, y)  {
    if (x > 0 && y > 0) {
        console.log(`I - chorak`)
    } else if (x < 0 && y > 0) {
        console.log('II - chorak');
    } else if (x < 0 && y < 0) {
        console.log('III - chorak');
    } else if (x > 0 && y < 0) {
        console.log('IV - chorak');
    } else if (x == 0){
        console.log('koordinata y chiziqda yotadi')
    } else if (y == 0){
        console.log('koordinata x chiziqda yotadi')
    }
} 
masala4(-10,-10)

// masala 5;

function masala5(x)  {
    if (x > 0) {
        let result = 2 * Math.sin(x)
        console.log(result);
    } else if (x <= 0) {
        console.log(`x-6 = ${x - 6}`)
    }
}
masala5(-5);

// masala 6;

function masala6(x)  {
    if (x > 2 || x < -2) {
        console.log(`2 * ${x} = ${2 * x}`);
    } else {
        console.log(`-3 * ${x} = ${-3 * x}`)
    }
}
masala6(10);

// masala 7

function masala7(x)  {
    if (x <= 0) {
        console.log(`J: ${-x}`);
    } else if (x > 0 && x < 2) {
        console.log(`J: ${x**2}`)
    } else {
        console.log(`J: 4`)
    }
}
masala7(10);

// masala 8

function masala8(a, b, c)  {
    if ((a + b > c && Math.abs(a - b ) < c) || (a + c > b && Math.abs(a - c ) < b) || (c + b > a && Math.abs(c - b ) < a)) {
        console.log(`Yes`);
    } else {
        console.log(`No`)
    }
}
masala8(2, 4, 3);

// masala 9

function masala9(c)  {
    if (c < 0) {
        console.log(`Freezing`);
    } else if (c >= 1 && c <= 10) {
        console.log(`Very Cold`)
    } else if (c >= 11 && c <= 20) {
        console.log(`Cold`)
    } else if (c >= 21 && c <= 30) {
        console.log(`Normal`)
    } else if (c >= 31 && c <= 40) {
        console.log(`Hot`)
    } else  {
        console.log(`Very Hot`)
    } 
}
masala9(2);

// masala 10


function masala10(a)  {
    let result = Math.abs(a) % 2 == 1 ? "Toq": "Juft";
    if (a < 0) {
        console.log(`a : ${a} soni Manfiy ${result} son`);
    } else if (a > 0)  {
        console.log(`a : ${a} soni Musbat ${result} son`);
    } else {
        console.log(`a = ${a}, son nolga teng`)
    }
}
masala10(11);

// masala 11

function masala11(a)  {
    let result = Math.abs(a) % 2 == 1 ? "Toq": "Juft";
    if (a >= 10 && a <= 99) {
        console.log(`a : ${a} soni Ikki xonali ${result} son`);
    } else if (a >= 100 && a <= 999)  {
        console.log(`a : ${a} soni Uch xonali ${result} son`);
    } else {
        console.log(`To'g'ri son kiriting`)
    }
}
masala11(120);

// masala 12

function masala12(n)  {
    if (n > 0) {
        console.log(`${n} - modelda ${n ** 2} ta kub kerak bo'ladi`)
    } else {
        console.log(`musbat son kiriting`)
    }
}
masala12(5);

// masala 13

function masala13(s, bool)  {
    if (s >= 20 && bool) {
        console.log(`o'quvchi daftar olishi mumkin`);
    } else {
        console.log(`o'quchiga daftar sotilmaydi`)
    }
}
masala13(100, true);

// masala 14

function masala14(n)  {
    let birlar = n % 10;
    let onlar = (n - birlar) / 10;
    let teskarisi = '' + birlar + onlar;
    if (n >= +teskarisi) {
        console.log(`True`);
    } else {
        console.log(`False`)
    }
}
masala14(41);

// masala 15

function masala15(n)  {
    if(n >= 10 && n < 100) {
        console.log(`${n} soni ikki xonali`)
    } else if (n >= 100 && n < 1000) {
        console.log(`${n} soni uch xonali`)
    } else if (n >= 1000 && n < 10000) {
        console.log(`${n} soni to'rt xonali`)
    } else if (n >= 10000 && n < 100000) {
        console.log(`${n} soni besh xonali`)
    } else {
        console.log(`To'g'ri son kiriting`)
    }
}
masala15(41);

// masala 16

function masala16(n)  {
    let birlar = n % 10;
    let onlar = (n % 100 - birlar) / 10;
    let yuzlar = (n - n % 100) / 100 % 10;
    let minglar = (n - n % 1000) / 1000 % 10;
    let onminglar = (n - n % 10000) / 10000;
    
    if(n >= 10 && n < 100) {
        let result = birlar + onlar;
        console.log(`${n}, raqamlari yigindisi: ${result}`)
    } else if (n >= 100 && n < 1000) {
        let result = birlar + onlar + yuzlar;
        console.log(`${n}, raqamlari yigindisi: ${result}`)
    } else if (n >= 1000 && n < 10000) { 
        let result = birlar + onlar + yuzlar + minglar;
        console.log(`${n}, raqamlari yigindisi: ${result}`)
    } else if (n >= 10000 && n < 100000) { 
        let result = birlar + onlar + yuzlar + minglar + onminglar;
        console.log(`${n}, raqamlari yigindisi: ${result}`)
    } else {
        console.log(`To'g'ri son kiriting`)
    }
}
masala16(41);

// masala 17;

function masala17(n)  {
    let birlar = n % 10 % 2 == 0 ? 0 : n % 10;
    let onlar = (n % 100 - birlar) / 10 % 2 == 0 ? 0 : (n % 100 - birlar) / 10;
    let yuzlar = (n - n % 100) / 100 % 10 % 2 == 0 ? 0 : (n - n % 100) / 100 % 10
    let minglar = (n - n % 1000) / 1000 % 10 % 2 == 0 ? 0 : (n - n % 1000) / 1000 % 10;
    let onminglar = (n - n % 10000) / 10000 % 2 == 0 ? 0 : (n - n % 10000) / 10000;
    
    if(n >= 10 && n < 100) {
        let result = birlar + onlar + yuzlar + minglar + onminglar;
        console.log(`${n} sonining toq raqamlari yigindisi: ${result} ga teng`)
    } else if (n >= 100 && n < 1000) {
        let result = birlar + onlar + yuzlar + minglar + onminglar;
        console.log(`${n} sonining toq raqamlari yigindisi: ${result} ga teng`)
    } else if (n >= 1000 && n < 10000) { 
        let result = birlar + onlar + yuzlar + minglar + onminglar;
        console.log(`${n} sonining toq raqamlari yigindisi: ${result} ga teng`)
    } else if (n >= 10000 && n < 100000) { 
        let result = birlar + onlar + yuzlar + minglar + onminglar;
        console.log(`${n} sonining toq raqamlari yigindisi: ${result} ga teng`)
    } else {
        console.log(`To'g'ri son kiriting`)
    }
}
masala17(41123);

// masala 18

function masala18(a, b, c)  {
    if (a > b && a > c) {
        console.log(`a : ${a} soni eng kattasi`)
    } else if (b > a && b > c) {
        console.log(`b : ${b} soni eng kattasi`)
    } else if (c > a && c > b) {
        console.log(`c : ${c} soni eng kattasi`)
    } else {
        console.log(`sonlar o'zaro teng`)
    }
} 
masala18(1, 1, 10)

// masala 19

function masala19(n)  {
    let birlar = n % 10;
    let onlar = (n % 100 - birlar) / 10;
    let yuzlar = (n - n % 100) / 100 % 10;
    let minglar = (n - n % 1000) / 1000 % 10;
    let onminglar = (n - n % 10000) / 10000;
 
    
    if(birlar > onlar && birlar > yuzlar && birlar > minglar && birlar > onminglar) {
        console.log(`${n} sonining eng kattasi: ${birlar}`)
    } else if (onlar > birlar && onlar > yuzlar && onlar > minglar && onlar > onminglar) {
        console.log(`${n} sonining eng kattasi: ${onlar}`)
    } else if (yuzlar > onlar && yuzlar > birlar && yuzlar > minglar && yuzlar > onminglar) { 
        console.log(`${n} sonining eng kattasi: ${yuzlar}`)
    } else if (minglar > onlar && minglar > yuzlar && minglar > birlar && minglar > onminglar) { 
        console.log(`${n} sonining eng kattasi: ${minglar}`)
    } else {
        console.log(`${n} sonining eng kattasi: ${onminglar}`)
    }
}
masala19(42820);

// masala 20

function masala20(n)  {
    let birlar = n % 10;
    let onlar = (n % 100 - birlar) / 10;
    let yuzlar = (n - n % 100) / 100 % 10;
    let minglar = (n - n % 1000) / 1000 % 10;
    let onminglar = (n - n % 10000) / 10000;
 
    
    if(birlar > onlar && birlar > yuzlar && birlar > minglar && birlar > onminglar) {
        console.log(`${n} sonining eng kattasi: ${birlar} va indexi: 1`)
    } else if (onlar > birlar && onlar > yuzlar && onlar > minglar && onlar > onminglar) {
        console.log(`${n} sonining eng kattasi: ${onlar} va indexi: 2`)
    } else if (yuzlar > onlar && yuzlar > birlar && yuzlar > minglar && yuzlar > onminglar) { 
        console.log(`${n} sonining eng kattasi: ${yuzlar} va indexi: 3`)
    } else if (minglar > onlar && minglar > yuzlar && minglar > birlar && minglar > onminglar) { 
        console.log(`${n} sonining eng kattasi: ${minglar} va indexi: 4`)
    } else {
        console.log(`${n} sonining eng kattasi: ${onminglar} va indexi: 5`)
    }
}
masala20(12349);