function add(n1: number, n2: number, showRslt: boolean, phrase: string) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('入力値が正しくないよ')
    }
    const rslt = n1 + n2
    if (showRslt) {
        // console.log(phrase + n1 + n2);note 0217_1_これだと5+2.8が文字列連結で処理されてしまうので誤り。
        // note 0217_2_次回は型推論について（なぜ変数には型を明示しなくてよいのか）
        console.log(phrase + rslt);
    }
    return rslt;
}

const number1 = 5;
const number2 = 2.8;

const printRslt = true;
const rsltPhrase = 'Result: '

//jsでは+の演算子で足すとき、一つ目の変数が文字列なら文字列結合をしてしまう。
// const result = add(number1,number2);
// console.log(result);
add(number1, number2, printRslt,rsltPhrase);


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



