'use strict';

// 로그 출력
console.log('콘솔 로그 출력 테스트');

// 변수
let name = 'hello';
console.log(name);
name = 'world';
console.log(name);

// block scope
let globaltest = 'global';
{
    let block = 'hello';
    block = 'world';
}
console.log(globaltest);

const helloworld = 1;
console.log(helloworld)

//const count = 17; //integer
//const size = 17.1; //decimal number

//bigint
const bigInt = 12324564548645418464658584684864864654524564864536n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const baechu = 'baechu';
const him = 'hello' + baechu;
console.log(him)

//boolean
const canRead = true;
const test1 = 3< 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test1}, type: ${typeof test1}`);

let x;
console.log(`value: ${x}, type: ${typeof x}`);
