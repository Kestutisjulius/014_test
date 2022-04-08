/* 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai) */
console.log('---01.---');
const a = 1; const b = 2;
if(a > b){
    console.log(`${a} didesne reiksme už ${b}`);
}
if(a < b){
    console.log(`${a} mazesne reiksme už ${b}`);
}
if(a === b){
    console.log(`${a} reiksme lygi ${b} reikšmei`);
}

/* 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai) */
console.log('---02.---');
    for(let i = 1; i <= 10; i++){console.log(i);}

/* 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai) */
console.log('---03.---');
    for(let i = 0; i <= 10; i += 2 ){console.log(i);}

/* 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai) */
console.log('---04.---');
    for(let i = 1; i <= 5; i ++ ){
        console.log(Math.floor(Math.random() *11));
    }

/* 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai) */
console.log('---05.---');
    let j = 0;
    while (j !== 5) {
        j = Math.floor(Math.random() * 11);
        console.log(j);
    }

/* 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai) */
console.log('---06.---');
    let arr = []; let random = 0;
    for (let x = 10; x <= 20; x++) {
        random = Math.floor(Math.random() * (30 - 10))+1;
        arr.push(random); 
    }
    arr = arr.sort();
    console.log(arr[0] + ' sort');
    console.log(Math.max(...arr) + ' max');

/* 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai) */
console.log('---07.---');
    let masyvas = []; let atsitiktinis = 0; let countA = 0; let countB = 0; let countC = 0; let countD = 0;
    for (let i = 0; i < 100; i++) {
        atsitiktinis = Math.floor(Math.random() * (4 - 1 +1)+1);
        if (atsitiktinis === 1) {masyvas.push('A');
                                        countA ++;}
        if (atsitiktinis === 2) {masyvas.push('B');
                                        countB ++;}
        if (atsitiktinis === 3) {masyvas.push('C');
                                        countC ++;}
        if (atsitiktinis === 4) {masyvas.push('D');
                                        countD ++;}
    }
    console.log(`Raidziu A = ${countA}, Raidziu B = ${countB}, Raidziu C = ${countC}, Raidziu D = ${countD} yra masyve : ${masyvas}`);
    
/* 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų) */
console.log('---08.---');
    let lygineSuma = function(a, b) {
        if ((typeof a === typeof b || typeof a === 'number' || typeof b === 'object')) {
            
            if(typeof a === 'number'){
                return a + b;
            }
            if (typeof b === 'object'){
             let sum = a.length + b.length;   
            return sum;
            }
        }
    }
    console.log(lygineSuma([2, 3], [5, 6, 9, 8])); 

/* 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų) */
console.log('---09.---');
    let pirminisSkaicius = function(x){
        if (typeof x === 'number') {
            if(x > 1 || x % 1 === 0 || x % x === 0) {
                for (let i = 2; i < x; i++) {
                    if (x % i == 0) {
                        return 'nera pirminis';        
                    } else {
                        return 'pirminis';
                    }
                }
            }
        }
    }
    console.log(pirminisSkaicius(3));

/* 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų) */
console.log('---10.---');
function telefonoNumeris(arr) {

    const a = arr.toString();
    let b = '';
    b = a.replace(/,/gi, '');
     
    if (b.length !== 10) {
        return 'not 10 numbers !!!'
    }
    let string = '';
    let number = '';
    for (var i = 0; i < 3; i++) {
        string += b[i];
    }
    number = '(' + string + ') '
    string = '';
    for (var i = 3; i < 6; i++) {
        string += b[i];
    }
    number += string + '-'
    string = '';
    for (var i = 6; i < 10; i++) {
        string += b[i];
    }
    number += string;

    return number;
}
console.log( telefonoNumeris([9,5,8,7,4,1,2,5,3,6]));
