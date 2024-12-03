//first
const message: string = "hello";
console.log(message);

//2.3.2
const width1 = 5;
const width2 = 8;
const height: number = 3;
const area = ((width1 + width2) * height) / 2;
console.log(area);

//2.3.3
const binary = 0b1010; //2進数リテラル
const octal = 0o755; //8進数リテラル
const hexadecimal = 0xff; //16進数リテラル
//10 493 255 と表示
const big = 1e8; //10の8乗
const small = 4e-5;
//100000000 0.00004 と表示

//2.3.4
const bignum: bigint = (123n + 456n) * 2n;
//1158nと表示
const result = 5n / 2n; //BigIntは整数のみなので小数点以下は切り捨て
//2n

//2.3.5
const message1: string = `hello
world!`;
//``バッククォートで囲うことでテンプレートリテラル中で改行が可能/通常は\nで改行する
const str1: string = "hello";
const str2: string = "world";
console.log(`${str1},${str2}`);
console.log(`123+456=${123 + 456}`);
//テンプレートリテラル(``で囲まれたリテラルのこと)の中では${式}構文を用いて文字列に変換
//これにより型が違うものも結合することができる

//2.3.6
console.log("hello \\world/");
console.log("hello \u{796d} world");
//\nで改行/\tでタブ文字/\u{数字}でユニコード入力

//2.3.7
const no: boolean = false;
const yes: boolean = true;
console.log(no, yes);
//真偽値リテラルはtrue,false

//2.3.8
const val1 = null;
const val2 = undefined;
//null undefinedはそれぞれ「データがない」ことを示すプリミティブである

//2.3.9
import { createInterface } from "readline";
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});
{
  /*rl.question("文字列を入力してください:", (line) => {
  console.log(`${line}が入力されました`);
  rl.close();
});
rl.question("文字列を入力してください:", (line) => {
  const result = line + 100;
  console.log(result);
  rl.close();
});*/
}

//2.3.10
rl.question("数値を入力してください:", (line) => {
  const num = Number(line);
  console.log(num + 100);
});
//Number関数により引数で与えられた値を数値に変換する
//もし数値が得られなかったらNaNと表示される
const num1 = Number(true); //1
const num2 = Number(false); //0
const num3 = Number(null); //0
const num4 = Number(undefined); //NaN
const bignum1 = BigInt(true); //1n
const bignum2 = BigInt("123"); //123n
//BigIntは整数しか扱えない、文字列や小数点を与えるとランタイムエラーが表示される
const str_1 = String(123); //"123"
const str_2 = String(true); //"true"
console.log(Boolean(123)); //true
console.log(Boolean(0)); //false
console.log(Boolean(1n)); //true
console.log(Boolean(0n)); //false
console.log(Boolean("")); //false
console.log(Boolean("foobar")); //true
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
//Booleanで真偽値に変更される
