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

//3.1.4
const user1 = {
  name: "title",
  age: 25,
};
user1.age = 26;
console.log(user.age); //26
import { createInterface } from "readline";
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});
const message = {
  good: "0以上の数値",
  bad: "負の数値は入力しないでください",
};
rl.question("数値を入力してください:", (line) => {
  const num = Number(line);
  console.log(message[num >= 0 ? "good" : "bad"]);
  rl.close();
});
//式1[式2]の構文でも呼び出せる　式1=オブジェクトを表す式　式2=プロパティ名を表す式
//[]ではstring型を用いるのが原則だが上記のコードのようにnumber型でも可能ではある

//3.1.5
//  スプレッド構文:...式の形でプロパティ:式の代わりに使用することが可能
const obj_x1 = {
  foo: 123,
  bar: 456,
};
const obj_x2 = {
  ...obj_x1,
  foo: 789,
};
console.log(obj_x2); //obj_x2は{foo:789,bar:456}
{
  /*const obj_x3={
  foo:-789,
  ...obj_x1,
}*/
}
//...より前にobj_x1と重複するプロパティがある場合にはエラーが生じる
//obj_x1とobj_x2を順に代入すると後に書かれたobj_x2の内容で上書きされる

//3.1.6
const foo = { num: 123 };
const bar = foo;
console.log(bar.num); //123
bar.num = 456;
console.log(foo.num); //456
//同じプロパティなのでfoo.num/bar.numはリンクして変動する

const foo1 = { num: 123 };
const bar1 = { ...foo1 };
console.log(bar1.num); //123
bar1.num = 0;
console.log(foo1.num); //123
//スプレッド構文(...)ではプロパティの明示的なコピーなのでfoo1.num/bar1.numはリンクしない
//上記の罠にはまりやすいので愚直にconst foo={num:123}; const bar={num:123}; と書く方がよいこともある

const foo2 = { obj: { num: 123 } };
const bar2 = { ...foo2 };
bar2.obj.num = 0;
console.log(foo2.obj.num); //0
//objがコピーされているがobjのプロパティであるnumはリンクしている
//ネストしたオブジェクトも含めてコピーする方法は今のところない

const foo3 = { num: 123 };
const bar3 = foo3;
const baz = { num: 123 };
console.log(foo3 === bar3); //true
console.log(foo3 === baz); //false
//foo3とbazは中身が同じでも別々に作られたオブジェクトなので等しいとは言えない

//3.2.1
const obj4: { foo: number; bar: string; "foo bar": string } = {
  foo: 123,
  bar: "hello",
  "foo bar": "123",
};
//オブジェクト型の明記方法　プロパティ名：型; を{}内に並べる

//3.2.2
//宣言されているプロパティを持たないオブジェクトを代入しようとするとエラーが生じる
//型違いなどでもコンパイルエラーが生じるので注意

//3.2.3
type FooBarObj = {
  foo: number;
  bar: string;
};
const obj5: FooBarObj = {
  foo: 123,
  bar: "hello",
};
//type文=型名を宣言をする文のこと  type 型名=型;
//type文はtypescript特有のものであり,jsではtype文が消えていることがわかる

const id: UserId = "name";
type UserId = string;
//上記のようにtype文はプリミティブの型に別名を与えることも可能

type FooObj = { foo: number };
type MyObj = FooObj;
const Obj6: MyObj = { foo: 0 };
//type文は任意の方に別名を付けることができるので、作った型にさらに別名を付けることも可能

//3.2.4
interface FooBarObj1 {
  foo: number;
  bar: string;
}
const obj6: FooBarObj1 = {
  foo: 123,
  bar: "hello",
};
//interface宣言=型名を新規宣言する別の方法、扱えるのはオブジェクト型のみ。
//interface 型名 オブジェクト型 の構文

//3.2.5
//インデックスシグネチャ = 「どんな名前のプロパティでも受け入れる」/プロパティ名が動的に決まるときに使う
type PriceData = {
  [key: string]: number;
};
const data: PriceData = {
  apple: 220,
  coffee: 120,
};
data.bento = 500; //data宣言後でも新たなプロパティを作って代入することができる
console.log(data.bento); //500
//data.chicken="foo";は文字列を代入しようとしているのでコンパイルエラー
//オブジェクト型の中に[キー名:string]:型;と書くのが基本的な形
//このstringは「任意のstring型のキーに対して」の意図 ＝「任意のプロパティに対して」

//3.2.6
type MyObj1 = {
  foo: boolean;
  bar: boolean;
  baz?: number;
};
const obj7: MyObj1 = {
  foo: false,
  bar: true,
};
const obj8: MyObj1 = {
  foo: true,
  bar: false,
  baz: 1234,
};
console.log(obj7.baz); //undefined
console.log(obj8.baz); //1234
//このときbazは number | undefined と表記され、存在すればnumber,なければundefinedが返ってくる
//ただしconsole.log(obj8.baz*100); はコンパイルエラーとなる
if (obj8.baz !== undefined) {
  console.log(obj8.baz * 100); //123400
}

//3.2.7
