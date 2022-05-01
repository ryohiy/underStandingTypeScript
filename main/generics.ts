// function extractAndConvert(obj,key){//この定義方法だと、
//     //objのプロパティだという事を定義出来ていない、何でも入る状態。
//     //これの良くないところはこの状態で関数を呼出した時に呼出し先でErrが出ない事。
//     return 'val:' + obj[key];
// }

function extractAndConvert<T extends object,U extends keyof T>(
    obj:T
    ,key:U){//この定義方法だと、
    //objのプロパティだという事を定義出来ていない、何でも入る状態。
    //これの良くないところはこの状態で関数を呼出した時に呼出し先でErrが出ない事。
    return 'val:' + obj[key];
}

extractAndConvert({name:'Max'},'name');