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

//3.1.3
const obj2 = {
  foo: 123,
  "foo bar": 456,
  1: "Hello",
};
console.log(obj2.foo); //123
console.log(obj2["foo bar"]); //456
console.log(obj2["1"]); //"Hello"
//"",''を用いることでプロパティ名に文字列リテラルを使うことができる
//数値リテラルもオブジェクトリテラル内で使用可能に
//ただしプロパティアクセスの際は　式[プロパティ名]　の構文を使用する必要がある
const propName = "foo";
const obj3 = {
  [propName]: 123,
};
console.log(obj3[propName]);
console.log(obj3.foo); //どちらの場合でも123が表示される
