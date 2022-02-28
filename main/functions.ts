function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    //note 20220227_1_voidは値を返さないという事を定義する
    console.log('Result' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result => {
    console.log(result);
    //note 02281 コールバック関数が何を返しているかは
    // tsはあんまり厳密に観ていない。voidで定義した時は、
    // それを利用しないって定義だから、値があろうがなかろうが
    // あまり興味がない。引数は厳しく見ている
}))