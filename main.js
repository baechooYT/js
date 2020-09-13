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