/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
	return moneyA + moneyB + moneyC + moneyD;
  }
  
  const resultX = calcTotal(10000, 8900, 1360, 2100);
  const resultY = calcTotal(21500, 3200, 9800, 4700);
  const resultZ = calcTotal(9000, -2500, 5000, 11900);
  
  console.log(resultX);
  console.log(resultY);
  console.log(resultZ);
  
  
  // 함수 선언 → 일반 함수 (표현)식
  let calculateTotal = function (a,b,c,d,e,f){
	
	// 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 0000이라 불리는 변수
	let total = 0;

// for 문 
// 	for(let i = 0; i < arguments.length; i++){
// 		total += arguments[i];
// 	}
// console.log(arguments);
// return total
//   }

// // for .. for문
// for( let value of arguments){
// 	total += value;
//}

	console.log(arguments);

// arguments => array
	// const arr = [...arguments]

	// arr.forEach(function(price){
	// 	// console.log(item);
	// 	total += price;
	// })

// 유사배열 => 배열 만드는 쉬운 방법 
// const arr = Array.from(arguments);
// console.log(arr);
// const arr = Array.prototype.slice.call(argument);
// console.log(arr);


//reduce 
	// const result = arr.reduce(function(add,cur){
	// 	return acc + cur
	// }, 0)


  // const result = arr.reduce((acc,cur) => acc + cur,0)
  // return arr.reduce((acc,cur) => acc + cur,0)

  // 빌려쓰기
  // Array.prototype.forEach.call(arguments,function(item){
  //   total += item
  // })


  // 태생을 배열로 바꾸기
  arguments.__proto__ = Array.prototype
  
  // console.log(arguments);


	return total

}

// let calculateTotal2 = (arr) => arr.reduce((acc,cur) => acc + cur,0)


  const result = calculateTotal(1000,5000,2500,500,3000);
//   console.log(result);




// ['경한', '복순', '복돌'] => ['금경한', '금복순', '금복돌']로 바꾸고 싶음 
const arr = ['경한', '복순', '복돌']

const mapValue = arr.map(function(item,index){
	return '금' + item
})
console.log(mapValue);





  // 익명(이름이 없는) 함수 (표현)식
  let anonymousFunctionExpression;
  
  
  // 유명(이름을 가진) 함수 (표현)식
  let namedFunctionExpression;
  
  
  // 콜백 함수 (표현)식
let cb = function(isActive,success,fail){
	
	isActive
	success()
	fail()

};

cb(
	false,
	function(){
		console.log('성공입니다!');
	},
	function(){
		console.log('실패입니다.');
	}
)



// function movePage(url,success,fail){
// 	if(url === "www.naver.com"){
// 		success()
// 	} else{
// 		fail()
// 	}
// }

// movePage(
// 	'www.naver.com',
// 	function(){
// 		console.log('정확한 url을 입력했습니다. 3초 뒤 해당 사이트로 이동합니다.');
// 	},
// 	function(){
// 		console.log('잘못된 url을 입력하셨습니다.');
// 	}
// )


// 변형코드
// function movePage(url,success,fail){
// 	if(url.includes('http')){
// 		success(url)
// 	} else{
// 		fail()
// 	}
// }

// movePage(
// 	'http://www.naver.com',
// 	function(url){
// 		console.log(`현재 입력한 url은 ${url} 입니다.`);
// 		location.href = url
// 	},
// 	function(){
// 		console.log('잘못된 url을 입력하셨습니다.');
// 	}
// )




// higher-order fuction 고차함수 (콜백함수와는 다름) 이런 게 있다..정도 현재는
// function map(arr,func){

// 	let result = [];

// 	for(let i = 0; i < arr.length; i++){
// 		result.push(func(arr[i]))
// 	}

// 	return result
// }
// 변형 
// function map(arr,func){
// }
// function greater(n){	
// }
// const g = (n) => (m) => n>m

// map([1,2,3]),(item)=>item *2
// 함수를 인수로 받아 처리함
// 함수를 리턴함
// 함수 재활용성 높음


// 또 다른 예시
// function greator(n){
// 	return function(m){
// 		return n>m
// 	}
// }
 



// 함수 선언문 vs. 함수 (표현)식
  
  
// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
// 즉시 실행 함수를 사용하는 이유
// 함수가 선언됨과 동시에 실행되는 것
// var는 블록 스코프 : x
// var는 함수 스코프 : o 
// 요즘은 잘 사용되지는 않지만 클로저 사용할 때 써야해서 알아야함
let IIFE;

// encapsulation (캡슐화)
// 모듈 프로그램 => (import,export)
// 코드를 안정화하는게 제일 큰 목적
const MASTER = (function(){	

let uuid = 'asdsfjosdjfods'

	return {
		getKey(){
			return uuid
		},
		setKey(value){
			uuid = value
		}
	}

})()

// 다른 예시 

function setStyle(node,prop,value){

}

function getStyle(node,prop){

}

function css(node,prop,value){

}

