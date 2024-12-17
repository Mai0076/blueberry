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
const foo5 = { num: 123 };
const bar = foo5;
console.log(bar.num); //123
bar.num = 456;
console.log(foo5.num); //456
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
//このときbazは number | undefined と表記され、存在すればnumber,なければundefinedが返ってくる(ユニオン型)
//ただしconsole.log(obj8.baz*100); はコンパイルエラーとなる
if (obj8.baz !== undefined) {
  console.log(obj8.baz * 100); //123400
}

//3.2.7
type MyObj2 = {
  readonly foo: number;
};
const obj9: MyObj2 = { foo: 123 };
//obj9.foo=0; にするとコンパイルエラーが生じる
//readonlyとすると読み取り専用のプロパティにできる

//3.2.8
const num1: number = 0;
type T = typeof num1;
const foo4: T = 123;

const obj10 = {
  foo: 123,
  bar: "hi",
};
type T1 = typeof obj10;
const obj11: T1 = {
  foo: -50,
  bar: "",
};
//const obj11: typeof obj10 = でも可能

//3.3.1
type FooBar = {
  foo: string;
  bar: number;
};
type FooBarBaz = {
  foo: string;
  bar: number;
  baz: boolean;
};
const obj12: FooBarBaz = {
  foo: "hi",
  bar: 123,
  baz: false,
};
const obj13: FooBar = obj12;
//FooBarBaz型はFooBar型の内容を包含しているため、FooBarBaz型は、FooBar型の部分型であるという
//構造的部分型＝上記のように実際に比較して部分型かどうか自動的に決める方式(ts特有)
//名前的部分型＝「この型はこの型の部分型である」と明示的に宣言されたものだけが部分型とみなされる

//3.3.2
//①TがもつプロパティはすべてSに存在する②条件１の各プロパティについて、Sにおけるそのプロパティの型はTにおけるプロパティの型の部分型(または同じ型)である

type Animal = {
  age: number;
};
type Human = {
  age: number;
  name: string;
};
type AnimalFamily = {
  familyName: string;
  mother: Animal;
  father: Animal;
  child: Animal;
};
type HumanFamily = {
  familyName: string;
  mother: Human;
  father: Human;
  child: Human;
};
//HumanはAnimalの部分型である

//3.3.3
type User = {
  name: string;
  age: number;
};
const u1: User = {
  name: "hanako",
  age: 26,
  //telNumber:"09012345678"
};
//u1:Userに余計なプロパティをもっているとコンパイルエラーが生じる
const obj14 = {
  name: "hanako",
  age: 26,
  telNumber: "09012345678",
};
const u2: User = obj14;
//obj14はUserの部分型であるということになるのでエラーは生じない

//3.4.1
type Family<Parent, Child> = {
  mother: Parent;
  child: Child;
};
//型引数＝type文で型を作成するときに宣言する、その型引数はその宣言(type文の＝の右側)だけで有効な型名として扱われる
//型引数をもつものはジェネリック型というれ今回の例ではFamilyのこと

//3.4.2
const obj15: Family<number, string> = {
  mother: 0,
  child: "100",
};
//Familyのもつ<Parent,Child>にそれぞれnumber,string型をあてはめたということ
//厳密にはFamilyではなくFamily<number,string>で型を表すためobj15:Familyではコンパイルエラーが生じる

//3.4.3
type HasName = {
  name: string;
};
type Family1<Parent extends HasName, Child extends HasName> = {
  mother: Parent;
  child: Child;
};
//s extends t = sはtの部分型である
//extends型により「この型引数は常に型の部分型でなければならない」という制約を意味する
//type T=Family1<string,number>;はコンパイルエラー,string,numberはHasNameの部分型でないから
type Animal1 = {
  name: string;
};
type Human1 = {
  name: string;
  age: number;
};
type T2 = Family1<Animal1, Human1>;
//Animal1,Human1はHasNameの部分型であるので実行できる
type Family2<Parent extends HasName, Child extends Parent> = {
  mother: Parent;
  child: Child;
};
type TT = Family2<Animal1, Human1>;
//type TS = Family2<Human1,Animal1>;だとAnimal1はParent1の部分型でないのでエラー

//3.4.4
type Family3<Parent = Animal, Child = Animal> = {
  mother: Parent;
  child: Child;
};
type SS = Family3<string, string>; //通常の使い方
type ST = Family3; //Family3<Animal,Animal>  と同じ
type SU = Family3<string>; //Family3<string,Animal>　と同じ

//オプショナルな型引数(省略可能な型引数)といい＝の後の型が、使用時に<>内を省略されたときのデフォルト値となる

//3.5.1
//配列はオブジェクトである,配列リテラル
//typescriptはプリミティブとオブジェクトしかなく、プリミティブとは数値や真偽といった単一の値のこと、プリミティブの複雑な集まりがオブジェクト
const arr = [0, 123, -456 * 100, "文字列", true];
console.log(arr); //[0,123,-45600,"文字列"]
//複数型も同時に入れることができる(ユニオン型)
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3, ...arr1]; //[1,2,3,1,2,3]
console.log(arr2);

//3.5.2
//インデックスアクセス
console.log(arr[0]); //0を表示
//オブジェクトのとき[]にはプロパティ名でしたが、配列では数字、０というプロパティ名という感じ
arr[1] = 5400;
console.log(arr); //[0,5400,-45600]
//constなのでarrの再代入は不可だが、要素の再代入は可能

//3.5.3
const arr3: number[] = [1, 10, -100];
const arr4: Array<{ name: string }> = [{ name: "Mary" }, { name: "Mike" }];
//型定義の仕方はarr:T[],arr:Array<T>
//このArrayはジェネリック型で最初からtsに用意されているジェネリック型である

//3.5.4
//readonlyでは読み取り専用
const arr5: readonly number[] = [1, 11, 111];
//arr[3]=123;はコンパイルエラー

//3.5.5
//オブジェクト.メソッド名(引数)
const arr6 = [1, 10, 100];
arr6.push(1000);
//arr6.push("hello");はコンパイルエラー
console.log(arr6.includes(100)); //true
console.log(arr6.includes(-1)); //false
//includes()で配列内に()があるか真偽値を返してくれる
console.log(arr6.indexOf(10)); //1
console.log(arr6.indexOf(-10)); //-1
//indexOfで何番目かを探す,配列にない時は-1を返す
console.log(arr6.length); //4
//lengthで要素数がわかる

//3.5.6
const arr7 = [1, 10, 100];
for (const elm of arr7) {
  console.log(elm); //1,10,100
}
for (let elm of arr7) {
  elm *= 10;
  console.log(elm); //10,100,1000
}
//for-of文によるループ　for (const 変数 of 式) 文　の構文
//ループごとに入れ替わるのでconstでも大丈夫だが、ループの中で変数に再代入したいときはlet

//3.5.7
let tuple: [string, number] = ["foo", 0];
tuple = ["bar", -555];
const str = tuple[0]; //strはstring型
const num = tuple[1]; //numはnumber型
//const nothing=tuple[2]は存在しないのでコンパイルエラー

type User1 = [name: string, age: number];
type User2 = [string, number, string?]; //sting?にすることで三番目はあってもなくてもよいユニオン型
const mike: User1 = ["Mike", 26];
const jim: User2 = ["Jim", 24];
const mary: User2 = ["Mary", 22, "hello"];
console.log(mike[1]); //26
//タプル型とは要素数が固定された配列のことであり、存在しない番号にアクセスしないように予防できる

//3.6.1
//const {foo,bar} = obj;　といった分割代入
//objのfooプロパティを変数fooに、objのbarプロパティを変数barに代入する
//const foo=obj.foo; const bar=obj16.bar;の略である
const obj16 = {
  foo: 123,
  bar: 456,
  "foo bar": "789",
};
const { foo, bar: barVar, "foo bar": fooBar } = obj16; //プロパティ名:変数名
//変数fooにはobj16.foo,変数barVarにはobj.bar,変数fooBarにはobj["foo bar"]
//分割代入で宣言された変数には型注釈はつけられないので注意

//3.6.2
//ネストしたパターン＝プロパティ：パターンになるだけ
const nested = {
  num: 123,
  obj: {
    foo6: "hello",
    bar: "world",
  },
};
const {
  num: num6,
  obj: { foo6 },
} = nested;
console.log(num6); //123
console.log(foo6); //hello

//3.6.3
const arr8 = [1, 2, 4, 8, 16, 32];
const [first, second] = arr8;
console.log(first); //1
//他にもconst {arr:[foo]}=obj;でobj.arr[0]に変数fooを代入　[]に一つだけ書くと[0]にあたる
//const [{name}]=arr;で変数nameにarr[0].nameが代入
const [, foo8, , bar8, , baz8] = arr8;
console.log(foo8); //2
console.log(baz8); //32
const tuple2: [string, number] = ["Mike", 26];
const [myName, age] = tuple2;
console.log(myName); //Mike

//3.6.4
type obj17 = { foo17?: number };
const obj17_x: obj17 = {};
const obj17_y: obj17 = { foo17: -1234 };
console.log(obj17_x.foo17); //undefined
const { foo17 = 500 } = obj17_x;
console.log(foo17); //500
console.log(obj17_y.foo17); //-1234
const { foo17: bar17 = 500 } = obj17_y;
console.log(bar17); //-1234
//=500はobj17={}にプロパティが含まれていないときに実行されbar17=500になる
//const {foo=500} = obj; はあくまでfooがundefinedのときにのみ代入される
const obj18 = { foo18: null };
const { foo18 = 500 } = obj18;
console.log(foo18); //null
//デフォルト値はundefinedにだけ適応される
type NestedObj = {
  obj?: {
    foo: number;
  };
};
const nested1: NestedObj = {
  obj: { foo: 123 },
};
const nested2: NestedObj = {};
const { obj: { foo: nestFoo1 } = { foo: 500 } } = nested1; //nestFoo1が123代入
const { obj: { foo: nestFoo2 } = { foo: 500 } } = nested2; //nestFoo2が500代入
//{obj : パターン = 式 }の構文

//3.6.5
//restパターン＝...変数名の構文で分割代入されたオブジェクトの残りのプロパティをすべて持つ新たなオブジェクトが代入される
const obj19 = {
  foo: 123,
  bar: "string",
  baz: false,
};
const { foo: foo19, ...restObj } = obj19;
console.log(foo19); //123
console.log(restObj); //{bar:"string",baz:false}
const arr9 = [1, 1, 2, 3, 5, 8, 13];
const [first2, second2, third2, ...rest] = arr9;
console.log(second2); //1
console.log(rest); //[3,5,8,13]

//3.7.1
//Dateオブジェクト
const d = new Date();
console.log(d); //2024-12-17T04:32:18.391Z　現在の日付と時刻が表示
const d2 = new Date("2024-12-17T04:32:18.391Z");
const timeNum = d2.getTime();
console.log(timeNum); //1734409938391
const d3 = new Date(timeNum);
console.log(d3); //Mon Feb 03 2020  ～　のように日本標準時になる
console.log(Date.now()); //1734409938391 現在時刻を示す数値
//d.getFullYear(),d.getMonth()で取得できる

//3.7.2
//正規表現オブジェクト=文字列に対して複雑な条件で検索を行える機能(boolean型のメソッド)
// /abcde/ という正規表現は「abcdeという文字列である」という条件になる
// ab+c についてはbが繰り返しの対象であり、abbbc,abc,などがtrueとなる
const r = /ab+c/;
console.log(r.test("abbbbc")); //true
console.log(r.test("hello abc world")); //true
console.log(r.test("ABC")); //false
//正規表現の構文　1.+のように前の文字につくタイプ  2.文字クラス(複数種類の文字をひとまとめに表す)
const r1 = /[abc]/;
const r2 = /[abc]+/;
const r3 = /[^a-c]/;
console.log(r1.test("abcd")); //true
console.log(r2.test("bbccc")); //true
console.log(r3.test("abc")); //false
//[abc]だとaまたはbまたはc
//[a-c]=aからc,^[a-c]＝aからc以外のすべての文字
