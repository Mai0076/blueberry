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
const big = 1e8; //10の8乗
const small = 4e-5;
//100000000 0.00004 と表示
//2.3.4
const bignum = (123n + 456n) * 2n;
//1158nと表示
const result = 5n / 2n; //BigIntは整数のみなので小数点以下は切り捨て
//2n
//2.3.5
const message1 = `hello
world!`;
//``バッククォートで囲うことでテンプレートリテラル中で改行が可能/通常は\nで改行する
const str1 = "hello";
const str2 = "world";
console.log(`${str1},${str2}`);
console.log(`123+456=${123 + 456}`);
//テンプレートリテラル(``で囲まれたリテラルのこと)の中では${式}構文を用いて文字列に変換
//これにより型が違うものも結合することができる
//2.3.6
console.log("hello \\world/");
console.log("hello \u{796d} world");
//\nで改行/\tでタブ文字/\u{数字}でユニコード入力
//2.3.7
const no = false;
const yes = true;
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
{
    /*rl.question("数値を入力してください:", (line) => {
    const num = Number(line);
    console.log(num + 100);
  });*/
}
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
//2.4.2
const str_3 = "123";
console.log(+str_3 * 100); //12300と数値として表示される
//string型でも+を付ければnumber型に変換できる
let foo = 10;
foo++;
console.log(foo); //11
--foo;
console.log(foo); //10
console.log(++foo); //11
console.log(foo--); //11
//インクリメント・デクリメント演算子は副作用(返り値を返す以外に発生する影響)
//++,--が先の時「変動後の変数の中身」・後の時「変動前の変数の中身」
{
    /*rl.question("名前を入力してください:", (name) => {
    console.log("こんにちは" + name + "さん");
    console.log(`はじめまして、${name}さん`);
    rl.close();
  });
  */
}
//+でも文字列の結合ができる、ただしテンプレートリテラルを用いる方が一般的
//2.4.4
const left1 = 1, right1 = 3;
console.log(left1 < right1); //trueと表示される
{
    /*rl.question("パスワードを入力してください:", (pass) => {
    if (pass === "aimai") {
      console.log("ようこそ");
    } else {
      console.log("誰？");
    }
    rl.close();
  });*/
}
//==と===では働きが異なる,===の方が型に厳密であり推奨されている
//nullとundefinedについては使ってもよい
//NaNはどのような比較演算子でも値がfalseになるため、挙動がおかしければNaNになっていないか考えるのが手
console.log(Number.isNaN(NaN));
//Number.isNaN関数がtrueならNaNであるとわかる、この関数がNaN判断可能な式
//2.4.5
const t = true, f = false;
console.log(t && t); //true
console.log(t && f); //false
console.log(f && f); //false
console.log(t || t); //true
console.log(t || f); //true
console.log(f || f); //false
//a&&b=aかつb/a||b=aまたはb
const rl1 = createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl1.question("数値を入力してください", (line) => {
    const num = Number(line);
    if (num >= 0 && num < 100) {
        console.log("0-100です");
    }
    else {
        console.log("違います");
    }
    rl1.close();
});
const ex_num = 2;
if (!Number.isNaN(ex_num)) {
    console.log("NaNではありません");
}
//2.4.6
const input1 = "123", input2 = "";
const input1isNotEmpty = !!input1; //true
const input2isNotEmpty = !!input2; //false
//!!は!(!式)
const rl2 = createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl2.question("名前は？", (your_name) => {
    const displayName = your_name || "名無し";
    console.log(`こんにちは、$(displayName)さん`);
    rl2.close();
});
//A||Bは短絡評価(左側の値を返す場合、右側は評価すらされない)という特徴を持ち、trueのときはA,falseのときはBを実行する
const secret = process.env.SECRET ?? "default"; //環境変数secretを取得、なければdefaultが出力
console.log(`secretは${secret}です`);
//??はnull,undefinedのように「データがない」ことを表すのに特化したもの，||と異なり空文字列や０もないものとして扱う
//2.4.7
const rl3 = createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl3.question("数値を入力してください：", (line) => {
    const num = Number(line);
    const message = 0 <= num && num < 100
        ? `${line}は条件を満たす`
        : `${line}は条件を満たさない`;
    console.log(message);
    rl3.close();
});
//三項演算子　＝　条件式 ? 真の時の式 : 偽の時の式 ;
//boolean型以外でも可能　num ? A : B ; だとnumが０かNaN以外だとAが出力される
//2.4.8
const rl4 = createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl4.question("名前を入力してください：", (name) => {
    if ((name = "")) {
        name = "名無し";
    }
    console.log(`こんにちは、${name}さん`);
    rl4.close();
});
//代入演算子　型は揃えないとコンパイルエラーになる
let num = 0;
num += 100; //100
num *= 4; //400
num -= 200; //200
num /= 2; //100
num **= 0.5; //10
//2.4.9
console.log(0b0101 | 0b1100); //13(0b1101)
console.log(0b0101 & 0b1100); //4(0b0100)
//ビット演算子とは&,|で、AND,OR演算を示す
