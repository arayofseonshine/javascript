/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
	return moneyA + moneyB + moneyC + moneyD;
  }
  
  let resultX = calculateTotal(10000, 8900, 1360, 2100);
  let resultY = calculateTotal(21500, 3200, 9800, 4700);
  let resultZ = calculateTotal(9000, -2500, 5000, 11900);
  
  console.log(resultX);
  console.log(resultY);
  console.log(resultZ);
  
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
	return rest.reduce((acc,cur) => acc + cur,0);

};
const result = calcAllMoney(1000, 5000, 4500, 13000);
console.log(result);


  // 화살표 함수와 this
  
  
  /* 다음 함수를 작성해봅니다. -------------------------------------------------- */
  
  // pow(numeric: number, powerCount: number): number;
  let pow; 
  
  // repeat(text: string, repeatCount: number): string;
  let repeat; 