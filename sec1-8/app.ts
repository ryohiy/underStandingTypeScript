function add(n1:number,n2:number){
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('入力値が正しくないよ')
    }
    return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
//jsでは+の演算子で足すとき、一つ目の変数が文字列なら文字列結合をしてしまう。
const result = add(number1,number2);
console.log(result);

//note 0216_1_jsでも型chk出来るけど、tsとどう違うのか？
// JavaScriptには typeofという演算子がある
// JavaScriptは動的型付け言語なので
// 変数などの型はランタイムで実行されたときに
// 初めて決まる
// なので JavaScriptにはtypeof演算子という
// データ型を取得することができる機能が
// 備わっている
// tsは開発中にエラーに気づけるのが大きい。
// 実行する必要もないし、そもそもif文いらない
// tsが役に立つのはコードを書いているときだけ、という点には注意する事。



