function add(n1:number,n2:number){
    return n1 + n2;
}

const number1 = '5';
const number2 = 2.8;
//jsでは+の演算子で足すとき、一つ目の変数が文字列なら文字列結合をしてしまう。
const result = add(number1,number2);
console.log(result);