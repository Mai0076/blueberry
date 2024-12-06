"use strict";
//3.1.1
const obj = {
    foo: 123,
    bar: "Hello",
};
console.log(obj.foo); //123
console.log(obj.bar); //"Hello"
//objectとは連想配列(辞書,ハッシュ)のこと
//プロパティ名:　式 がコンマ(,)で区切ってオブジェクトリテラル{}に並べられている
//プロパティアクセス　＝　式.プロパティ名という構文を使ってオブジェクトの中身を得ること
//3.1.2
//オブジェクトリテラルは=の後に続くので式に分類される
//{}が文の位置か式の位置かでオブジェクトリテラルかブロックかどうかがわかる
const obj1 = {
    foo: 123,
    bar: "Hello", //最後にも,を付けることも可能
};
let input = ""; //ほんとは標準入力
const names = input ? input : "名無し"; //inputが空文字列なら名無しが代入され、それらがnamesに代入される/条件式=真の時?偽の時
const user = {
    names, //プロパティ名と変数名が同じときは省略/プロパティ名: 変数名 → プロパティ名,　と書き換える
    age: 20,
};
