/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);



// 함수 선언

function getRandomValue(){
	return Math.random() > 0.5 ? 1 : 0;
}

function calcPrice(
	priceA,
	priceB,
	priceC = getRandomValue(),
	priceD = 0
){
	
	// if(priceC === undefined) priceC = 0;
	// if(!priceC) priceC = 0;
	// priceC = priceC || 0;
	// priceC = priceC ?? 0;
	priceC ??= 0;

	console.log(priceA + priceB + priceC + priceD);

}
// (priceA,priceB) < 매개변수 & parameter & 인자 
// 매개변수 기본값에 함수도 들어올 수 있음

// 함수 호출
calcPrice(1000, 3000);
// calcPrice < 인수 & argument

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

// 1. 함수의 이름을 잘 지어야 한다. (동사)
// 2. 전역의 오염을 막는다.
// 3. 하나의 기능만을 수행해야 한다.
// 4. 재사용성이 좋아야 한다.

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;

function rem(pxValue,base = 16){

	if(typeof pxValue === 'string'){
	  pxValue = parseInt(pxValue,10) 
	}
	if(typeof base === 'string'){
	  base = parseInt(base,10);
	}
  
	return pxValue / base + 'rem'
  
  }
  
  // parseFloat
  // parseInt
  

  // Test Driven Development (TDD)
  console.assert(rem(20) === '1.25rem')
  console.assert(rem('25px') === '1.5625rem')
  console.assert(rem('30px',10) === '3rem')




// css(node: string, prop: string, value: number|strung) : string;
let css;

// 점표기법 => 변수로 사용x
// 대괄호 표기법 ==> 변수로 사용o

// 1번 
// const first = document.querySelector('.first');

// function setStyle(node, prop, value){
// 	node.style[prop] = value
// }

// setStyle(first, 'color', 'blue');



// 2번 string으로 불러오기 
// const first = document.querySelector('.first');

// function setStyle(node, prop, value){

// 	if(typeof node === 'string') node = document.querySelector(node)

// 	node.style[prop] = value
// }

// setStyle('.first', 'color', 'blue');


// 3번 문자가 아닌 것 불러오기
const first = document.querySelector('.first');

function setStyle(node, prop, value){

	if(typeof node === 'string') node = document.querySelector(node)
	if(typeof prop ===! 'string') throw new Error('setStyle 함수의 두 번째 인수는 문자 타입이어야 합니다.')

	node.style[prop] = value
}

setStyle('.first', 123, 'blue');


// 4번 value가 없는 상황
// const first = document.querySelector('.first');

// function setStyle(node, prop, value){

// 	if(typeof node === 'string') node = document.querySelector(node)
// 	if(typeof prop ===! 'string') throw new Error('setStyle 함수의 두 번째 인수는 문자 타입이어야 합니다.')
// 	if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.')
// 	node.style[prop] = value
// }

// setStyle('.first', 'color');


// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.