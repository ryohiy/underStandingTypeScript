// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     //note 0223_2_以下のようにすれば各要素の型を決められる
//     role: [number, string];
//     //note 0223_2_しかし、pushで3つ目の要素を詰めようとするのは、
//     // errで拾えないため、その点については気をつける必要がある。
//     // でも、配列が定義したものの長さと違ったり（今回の定義だと、1個しか
//     // 要素がなかったり、3個以上あったりするとerr）,
//     // 要素に想定した型の値が入っていなくてもErrを出してくれるので、
//     // 十分有用である
//
// }
//     = {
//     name: 'tanaka',
//     age: 2000,
//     hobbies: ['Music', 'Reading'],
//     //note 0223_1_
//     // 以下の場合だと、TSはstringか、numberの入る配列だと型推論する
//     // role:[2, 'author'],
//     // しかし、roleでしたいことが、1要素目にid,2要素目にロールの名称なら、
//     // この配列に対して※1のような操作はしたくない。
//     // こういった時では、型推論がうまく機能していないといえる
//     // こういう時はobj全体で型を決め、その際note2のようにするとよい
//     role: [2, 'author'],
// };
//note 0223_3_Enumの学習の為にpersonの記述をリセット
// roleの種類が以下の通りとする
// Admin:0
// Read only user:1
// Author:2
enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
    //defaultでは0からの数値が自動で割り当てられるけど、
    //自由な数値をそれぞれに入れる事も出来るし、
//例えば、ADMINに5って入れるとそれ以降は6,7...と自動的に
    //インクリメントさせてたり、文字列を入れることも出来る。
}
//memo Enumの使い方は、自分の感覚としては、
//ちょっとした定数をまとめて持つときのスマートな方法って感じ。
//あるSystemで定数をまとめたファイルを集合毎に名前を付けて
//管理してたりするけど、まぁそんな感じだろーなという雑感。

const person = {
    name: 'tanaka',
    age: 2000,
    hobbies: ['Music', 'Reading'],
    role: Role.ADMIN,
};

if (person.role === Role.ADMIN){
    console.log('管理者ユーザー')
}

//note 0223_1_※1
// person.role.push('admin')//3つ目の要素が入れられてしまう
// person.role[1] = 10//2つ目の要素にnumber型が入れられてしまう
console.log(person.name);
//note _0219_2
// Objectリテラル:key=>value
// object型：key=>type(型)
// const person:{} と const person:Objectは同義。
// しかしObject型です！という宣言はあまり意味がない、より詳細に型宣言してこそTS。
// 以下のようにobjectのpropを明示的に指定する事は出来るが、冗長なので、ベストプラクティス
// とは言えない。
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'tanaka',
//     age: 2000,
// };
// こういう時はTSに型を推論させた方が、簡潔で、保守性の高い良いコードと
// いえる。
// もちろん、ネストしたObjectの型も定義することが出来る。
//note 0221_1
// 以下に文字の配列の型について試したものを記述するので、動作を見たければどうぞ
// let favoriteActivities: string[];
// favoriteActivities = 'Music';//配列なのに直接値を入れようとしているのでエラーになる
for (const hobby of person.hobbies) {
    //string型配列によるfor文なので,hobbyはstringであると型推論される
    console.log(hobby);
    //note 0221_2 stringだから持つプロパティ、numberだから持つプロパティがある！
    // strなら例えばtoUpperCase()というpropを持つ。(文字を全部大文字に変換するもの)
    // console.log(hobby.toUpperCase());
    // そして、stringはmapを持たない！自分は配列のpropだと思ってるけど、numberも持ったりする
    // んだろうか？今度確認しておく。
}