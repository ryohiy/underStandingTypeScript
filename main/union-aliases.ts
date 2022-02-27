//note 0226_1_alias型
// 同じことを意味するような新しい型を定義出来る
// これをすることで、複雑な型定義を使い回す事が出来るし、
// 型に他の開発者が分かるような名前をつける事も良い点。
type Combinable = number|string;
type ConversionDescriptor = 'as-number'|'as-text';


function combine(
    // input1: number | string
    input1: Combinable
    // , input2: number | string
    , input2: Combinable
    , resultConversion: ConversionDescriptor//memo literal型とUnion型の複合
) {
    let result
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    //note 0225_3_この条件で返り値の場合分けをする,でも以下の処理ではうまく動かない。
    // if (resultConversion==='as-number'){
    //     return +result;//memo 変数の前に+をつける事で、number型に変換する事が出来る
    //     // return +parseFloat(result);//memo こちらでもnumber型に変更できるけど、今回は上ので対応。
    // }else{
    //     result = input1.toString() + input2.toString();
    // }

    return result;
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);
//note 0225_2_ literal型を試すために、引数はstringだけど返り値をnumberにしたい場合を考える
const combineStringAges = combine('30', '26', 'as-number');
console.log(combineAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
//note 0224_1_型を一つだけに限定せず、柔軟な型を持たせる事が出来る。
// それがUnion型。

//note 0225_1_ literal型、これはnumberやstringといった型を指定するものでは
// なく、値そのものを厳密に指定する型。