// let userInput: unknown;
// let userName: string;
// //note 02282 unknown型は「どんな型になるか分からない」型
// // userName = userInput;
// // どんな型が入ってくるか分かっていない状態だと、
// // Errになる。if文などで型を制限出来れば、Errにならない
// // InputがStringの時だけこの処理をしたい！て出来る分、
// // any型よりかはマシ。かな。という感じ
//
// function generateError(msg: string, code: number) {
//     throw {message: msg, errorCode: code};
// }
//
// const result = generateError('エラー発生', 500);
// console.log(result);
//
// //note 02283 never型はとてもvoid型と似ている。
// // しかし、voidよりもより明確に、返り値があることは有り得ないという表現の際に用いる。
// // 上記の関数がまさにそうで、スクリプトをクラッシュさせるか、try catchのキャッチブロックに
// // ジャンプするかしかありえない。
// // TSのvoidは返り値がない事を表現するけど、実際あるかどうかまでは厳密に観ていない。
// // never型を用いる事で、より開発者の厳密な意図を伝える事ができ、コードの品質を高める
// // 事が出来る