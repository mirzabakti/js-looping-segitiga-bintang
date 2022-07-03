// // KOTAK BOLONG

// let s = '';
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         if (i == 0 || i == 4 || j == 0 || j == 4) {
//             s += '*';
//         } else {
//             s += ' ';
//         }
//     }
//     s += '\n';
// }

// console.log(s);



// PIRAMIDA

let s = '';
for (let i=1; i<=5; i++) {
    for (let j=4; j>=i; j--) {
        s += ' ';
    }
    for (let k=1; k<=i; k++) {
        s += '*';
    }
    for (let l=1; l<=i-1; l++) {
        s += '*';
    }
    s += '\n';
}

console.log(s);



// // PIRAMIDA TERBALIK

// let s = '';
// for (let i=1; i<=5; i++) {
//     for (let j=1; j<=i; j++) {
//         s += ' ';
//     }
//     for (let k=i; k<=5; k++) {
//         s += '*';
//     }
//     for (let l=i+1; l<=5; l++) {
//         s += '*';
//     }
//     s += '\n';
// }

// console.log(s);



// // SEGITIGA SIKU KIRI BAWAH

// let s = '';

// for (let i = 1; i < 5; i++) {
//   for (let j = 0; j < i; j++) {
//     s += '*';
//   }
//   s += '\n';
// }

// console.log(s)



// // SEGITIGA SIKU KIRI ATAS

// let s = '';
// for (let i = 0; i < 5; i++) {
//     for (let j = i; j < 5; j++) {
//         s += '*';
//     }
//     s += '\n';
// }

// console.log(s);



// // SEGITIGA SIKU KANAN BAWAH

// let s = '';
// for (let i=0; i<=4; i++) {
//     for (let j=i; j<4; j++) {
//         s += ' ';
//     }
//     for (let k=0; k<=i; k++) {
//         s += '*';
//     }
//     s += '\n';
// }

// console.log(s);



// // SEGITIGA SIKU KANAN ATAS

// let s = '';
// for (let i=0; i<=4; i++) {
//     for (let j=1; j<=i; j++) {
//         s += ' ';
//     }
//     for (let k=i; k<=4; k++) {
//         s += '*';
//     }
//     s += '\n';
// }

// console.log(s);