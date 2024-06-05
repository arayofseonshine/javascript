/* --------------- */
/* For Of Loop     */
/* --------------- */

// enumerable : 열거 가능한
// iterable : 반복 가능한

// for ... of => interable 요소만 사용 가능

// string, array

// 1. 순서(index)가 있다.
// 2. []
// 3. length

// 유사배열

const arrayLike = {
	0 : 'baby',
	1 : 'head',
	2 : 'div',
	length:3
}
// Symbol(Symbol.interator)(){}


// for(let value of 'hello'){
// 	console.log(value);
// }










const languages = [
	{
	  id: 'ecma-262',
	  name: 'JavaScript',
	  creator: 'Brendan Eich',
	  createAt: 1995,
	  standardName: 'ECMA-262',
	  currentVersion: 2022,
	},
	{
	  id: 'java',
	  name: 'Java',
	  creator: 'James Gosling',
	  createAt: 1995,
	  standardName: null,
	  currentVersion: 18,
	},
	{
	  id: 'ecma-334',
	  name: 'C#',
	  creator: 'Anders Hejlsberg',
	  createAt: 2000,
	  standardName: 'ECMA-334',
	  currentVersion: 8,
	},
  ];
  
  
  // for ~ of 문
  // - 특정 조건에서 건너띄기
  // - 특정 조건에서 중단하기
  
  for ( let value of languages){
	let name = value.name;

	if(name.includes('Java' )&& name.length < 5) continue

	console.table(value);
  
}




  




  const randomUser = {} ;

  // 객체의 키, 값 순환
  // - for ~ in 문
  // - for ~ of 문
  // - 성능 비교 진단




  // 객체 => 배열 for ... of
  const keys = Object.keys(arrayLike);
  const values = Object.values(arrayLike);
  const entries = Object.entries(arrayLike);

  for(let keyValue of entries){
	// let key = keyValue[0];
	// let value = keyValue[1];
  }


  Object.prototype.nickName = 'tiger';


function hasProperty(obj,key){
	return Object.prototype.hasOwnProperty.call(obj,key) 
}


  for(let key in randomUser){
	console.log(randomUser[key]);
  }




// ---------------재귀함수------------------

//   function hasProperty(obj,key){
// 	return Object.prototype.hasOwnProperty.call(obj,key)
//   }
  
  
//   for(let key in randomUser){
  
// 	if(hasProperty(randomUser,key)){
  
// 	  const L1 = randomUser[key];
  
// 	  console.log('\tL1 : ',L1);
  
// 	  if(typeof L1 === 'object'){
  
// 		for(let key in L1){
		  
// 		  if(hasProperty(L1,key)){
  
// 			const L2 = L1[key];
// 			console.log('\t\tL2 : ',L2);
  
// 			if(typeof L2 === 'object'){
			  
// 			  for(let key in L2){
				
// 				if(hasProperty(L2,key)){
// 				  const L3 = L2[key];
  
// 				  console.log('\t\t\tL3 : ',L3);
// 				}
// 			  }
// 			}
// 		  }
// 		}
// 	  }
// 	}
//   } //for in을 요즘에 안 쓰는 이유 for of랑 비교해보셈 


//--------------------------------------
  for(let keyValue of Object.entries(randomUser)){
	let key = keyValue[0];
	let value = keyValue[1];
	  console.log('\tL1 : ',value);
	if(typeof value === 'object'){
  
	  for(let keyValue of Object.entries(value)){
		let key = keyValue[0];
		let value = keyValue[1];
		console.log('\t\tL2 : ',value);
  
		if(typeof value === 'object'){
		  
		  for(let keyValue of Object.entries(value)){
			let key = keyValue[0];
			let value = keyValue[1];
			
			console.log('\t\t\tL3 : ',value);
		  }
		}
	  }
	}
  }

