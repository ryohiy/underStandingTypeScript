const person = {
    name: 'tanaka',
    age: 2000,
    hobbies:['Music','Reading'],
};

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
for(const hobby of person.hobbies){
    //string型配列によるfor文なので,hobbyはstringであると型推論される
    console.log(hobby);
    //note 0221_2 stringだから持つプロパティ、numberだから持つプロパティがある！
    // strなら例えばtoUpperCase()というpropを持つ。(文字を全部大文字に変換するもの)
    // console.log(hobby.toUpperCase());
    // そして、stringはmapを持たない！自分は配列のpropだと思ってるけど、numberも持ったりする
    // んだろうか？今度確認しておく。
}