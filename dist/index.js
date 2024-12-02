"use strict";
//first
const message = "hello";
console.log(message);
//2.3.2
const width1 = 5;
const width2 = 8;
const height = 3;
const area = ((width1 + width2) * height) / 2;
console.log(area);
//2.3.3
const binary = 0b1010; //2進数リテラル
const octal = 0o755; //8進数リテラル
const hexadecimal = 0xff; //16進数リテラル
//10 493 255 と表示
console.log(binary, octal, hexadecimal);
const big = 1e8; //10の8乗
const small = 4e-5;
//100000000 0.00004 と表示
console.log(big, small);
