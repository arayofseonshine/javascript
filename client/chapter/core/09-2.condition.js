/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자 &&
let AandB = a && b; 
console.log('AandB :',AandB);

// a = a && b // AandB의 값을 a에게 재할당 하고 싶을 때
// a &&= b // 논리곱 할당 연산자(Logical And Assignment)


// 논리합(또는) 연산자 ||
let AorB = a || b
console.log('AorB :', AorB);

// 부정 연산자
let reverseValue = !value;
console.log('reverseValue :',reverseValue);


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalst:false};
// ' ' 공백은 true
// [] 빈 배열은 true 값은 없어도 객체를 생성한 것이기 때문에 
console.log('whichFalsy :',whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [7,1,5,2].length || {thisIsFalst:true}; 
console.log ('whichTruthy :', whichTruthy);



