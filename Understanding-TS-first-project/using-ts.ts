const button = document.querySelector('button');
const input1 = document.getElementById('num1')! as HTMLInputElement;//note 0214_5_絶対にinputだかたTSさん安心して！て意味。
const input2 = document.getElementById('num2')! as HTMLInputElement;

function add(num1:number, num2:number) {
    // //note 0214_2_以下のif文を使うとnote_1の問題をjsでも解決が出来る
    // if (typeof num1 === 'number' && typeof num2 === 'number') {
    //     return num1 + num2;
    // } else {
    //     return +num1 + +num2;
    // }
    //note 0214_3_でもそもそも、関数に文字列がわたってこなければいいだけのこと。
    // これを解決してくれるのがTS
    return +num1 + +num2;
}

button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));//note 0214_6_変数に+をつけるとstring型をnumber型にキャスト出来る！
    //note 0214_1_inputformのvaluepropは常に文字列が入ってきてしまう！
});

//note 0214_4_"npm install -g typescript" グローバルにTSをinstall
// グローバルはrootが所有する{prefix}/lib/node_modules/にパッケージをインストールします（ {prefix}は通常/usr/か/usr/local）
