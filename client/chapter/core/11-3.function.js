/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
	return moneyA + moneyB + moneyC + moneyD;
  }
  
  let resultX = calculateTotal(10000, 8900, 1360, 2100);
  let resultY = calculateTotal(21500, 3200, 9800, 4700);
  let resultZ = calculateTotal(9000, -2500, 5000, 11900);
  
//   console.log(resultX);
//   console.log(resultY);
//   console.log(resultZ);
  
  // functionsum(... args){

 // }
 // const sum2 = function (... args){

 //} 함수 내에서도 사용 가능


  
  // 함수 선언 → 화살표 함수 (표현)식
//   let calcAllMoney = () => {

//   };

//  const result =  calcAllMoney(1000, 5000, 4500, 13000); 
//  console.log(result);



//  let calcAllMoney =(... args) =>{ // ... args => rest paramete
// 	console.log(args);
//  }
//  const result =  calcAllMoney(1000, 5000, 4500, 13000);
//   console.log(result);
 


// 나머지 매개변수
// let calcAllMoney =_, ... args) =>{ // ... args => rest paramete
// 	console.log(args);
//  }
//  const result =  calcAllMoney(1000, 5000, 4500, 13000);
//   console.log(result);



let calcAllMoney = (... rest) => {

	let total = 0;
	// < for >
	// for (let i = 0; i < rest.length; i++){   
	// 	total += (rest[i]);
	// }


	// < for ... of >
	// for(let value of rest){
	// 	total += value;
	// }
	

	// < for Each >
	// rest.forEach(function(item){
	// 	total += item
	// })
	// < for Each => arrow function으로 >
	// rest.forEach(item => total += item)


	// < reduce >
	// const result = rest.reduce(function(acc,cur){
	// 	return acc + cur
	// },0);
	// < reduce => arrow function으로 >
	// return rest.reduce((acc,cur) => acc + cur,0);

};
const result = calcAllMoney(1000, 5000, 4500, 13000);
console.log(result);



  // 화살표 함수와 this
//   function create(nickName,number){

// 	return {
// 		name:nickName,
// 		age:number
// 	}

//   }
//   create('tiger', 40);

// 자바스크립트의 함수는 양면의 얼굴 => 생성자(constructor)
 // 생성자로만 사용하세요
 // 관례 : 생성자 함수는 대문자 시작으로 
// function Button (text){

// 	this.content = text; // this => 나를 호출한 대상 

// };
// const b = new Button('more') // b = this 
// 생성자 함수는 객체를 return 함


// 일반함수 
// - constructor 내장
// - this : 나를 호출한 대상 this
// ★ - 객체의 매서드로 사용이 많이 됨 => this를 찾기 위해

// 화살표 함수 
// - constructor 비내장
// - this : 바인딩 하지 않음 -> 상위 컨텍스트에서 this 찾음. 
// ★  - 매서드 안의 함수를 작성해야 할 때 (내 상위 this를 가져오기 때문에)

// 예시 1) 
// const user = {
// 	name: '정은선',
// 	sayHi: function(){
// 		console.log(this);  // this = 나를 호출한 user
// 	},
// 	sayHi2:()=>{
// 		console.log(this);
// 	},
// 	sayHi3(){
// 		console.log(this);
// 	}
// } 


// 예시 2)
// const user = {
// 	name: '박새롬',
// 	grades: [30, 60, 80],
// 	totalGrades(){
// 		this.grades.forEach(function(item){
// 			this.total += item
// 		})
// 		return this.total
// 	},
// 	sayHi(){
// 		console.log(`안녕 나는 ${this.name} 나는 아주 멋쟁이야~`);
// 	}
// }


// 예시3
// const user = {
// 	name: '박새롬',
// 	total: 0,
// 	grades: [30, 60, 80],
// 	totalGrades(){
// 		console.log(this.totalGrades);
		
// 		function sayHi(){
// 			console.log(this);
// 		}

// 		sayHi()
// 	}
// }


// 예시3 변형
// const user = {
// 	name: '박새롬',
// 	total: 0,
// 	grades: [30, 60, 80],
// 	totalGrades(){
		
// 		const sayHi = () => {
// 			console.log(this);
// 		}

// 		sayHi()
// 	}
// }


// const user = {
// 	name: '정은선',
// 	total: 0,
// 	grades:[30,60,80],
// 	totalGrades(){

// 		this.grades.forEach(funciton(item){
// 			console.log(this);
// 		})
// 	}
// }
// 화살표함수 변형
// const user = {
// 	name: '정은선',
// 	total: 0,
// 	grades:[30,60,80],
// 	totalGrades(){

// 		this.grades.forEach((item)=>{
// 			console.log(this);
// 		})

// 	}
// }

// user.totalGrades()

// function forEach(func){

// 	func()

// }

// forEach(function(){})




  
/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// let pow = (numeric,powerCount)=>{

// 	let result = 1;
// 	for(let i = 0; i < powerCount; i++){
// 		result *= numeric
// 	}

// 	return result;
	
// };

// 표현식 다른 버전 
// const pow = (numeric,powerCount) => {

// 	return Array(powerCount).fill(null).reduce((acc,cur)=>{
// 		return acc *= numeric
// 	},1)

// }

// const pow = (numeric,powerCount) => Array(powerCount).fill(null).reduce(acc => acc *= numeric,1)


 // repeat(text: string, repeatCount: number): string;
 // 반복문 
//  let repeat = (text,repeatCount)=>{
// 	let result = '';
// 	for(let i = 0; i < repeatCount; i++){
// 		result += text;
// 	}
// 	return result
//   }

//   repeat('안녕~',3) ; // 안녕안녕안녕


// 다른 버전
const repeat = (text,repeatCount)=>{
	return Array(repeatCount).fill(null).reduce((acc)=>{
		return acc + text
	},'')
}
repeat('사랑해!',3);

// 한줄로 바꾸면
// const repeat = (text, repeatCount) => Array(repeatCount).fill(null).reduce((acc)=> acc + text, '')