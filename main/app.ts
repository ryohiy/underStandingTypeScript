const person = {
    name: 'tanaka',
    age: 2000,
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