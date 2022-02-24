function combine(input1: number | string, input2: number | string) {
    let result
    if (typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    }else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineAges = combine(30, 26);
console.log(combineAges);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);
//note 0204_1_型を一つだけに限定せず、柔軟な型を持たせる事が出来る。
// それがUnion型。