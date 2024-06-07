/* --------------------------- */
/* Functions → Recursion       */
/* --------------------------- */

// 재귀(Recursion)
// 사전적 정의: "본래 있던 곳으로 다시 돌아옴"
// 프로그래밍 정의: 
// - "문제 해결을 위해 함수 자신을 다시 호출"
// - "어떤 프로시저(절차)가 자기 자신을 반복적 호출하여 문제를 풀어 나가는 알고리즘"

// -----------------------------------------------------------------------

// pow 함수를 재귀 호출 방식으로 변경
// - 재귀 기반(base)
// - 재귀 단계(step)
// - 재귀 깊이(depth)

function pow(x,n){

	if(n === 1){
		return x;	
	} 
	else {
		return x * pow(x,n-1);
	}

}

pow(2,3);


// factorial 함수를 재귀 호출 방식으로 작성
// 참고: https://bit.ly/factorial-util
// - 팩토리얼 = 그 수보다 작거나 같은 모든 양의 정수의 곱
// - 기호(!)를 사용하여 n!으로 표기
// - 예시) 4! = 4 * 3 * 2 * 1

// 예시1
function factorial(n) {
	if( n === 1){
		return n;
	}
	else {
		return n * factorial(n-1);
	}
}


// 예시2
function fibonacci(n){
	if(n <= 0) return 0;
	if(n <= 2) return 1;
  
	return fibonacci(n-1) + fibonacci(n-2);
	
  }

// 호출 값이 크면 엄청 느린데 메모이제이션 사용하면 빠르게 불러오기 가능


// fibonacci 함수를 재귀 호출 방식으로 작성
// 참고: https://bit.ly/fibonacci-util
// - 피보나치 수 = 처음과 두번째 항은 1이고, 그 뒤 모든 항은 바로 앞 두 항을 더한 합인 수열
// 예시) 1, 1, 2, 3, 5, 8, ...


// -----------------------------------------------------------------------

// 실행 컨텍스트(execution context)의 작동 흐름
// - 함수 실행에 대한 세부 정보를 담고 있는 내부 데이터 구조
// - 제어 흐름의 현재 위치, 변수의 현재 값, this 등 저장
// - 함수가 호출될 때 마다, 하나의 실행 컨텍스트 생성
// - 내부에 중첩된 함수를 포함한 경우
//   - 현재 함수의 실행 일시 중지
//   - 중지된 함수와 연관된 실행 컨텍스트는 "실행 컨텍스트 스택" 자료 구조에 저장 됨
//   - 중첩 함수가 호출되어 실행 됨 (호출 시 새로운 컨텍스트 생성)
//   - 중첩 호출 실행이 종료되면 실행 컨텍스트 스택에서 일시 중단된 함수 실행 컨텍스트 꺼냄(pop)
//   - 다시 중단되었던 함수의 실행을 이어감


// -----------------------------------------------------------------------

// 반복문 기반 알고리즘 vs. 재귀 호출 알고리즘
// - 재귀 호출 알고리즘은 재귀 깊이만큼 메모리가 필요
// - 반복문 기반 알고리즘은 메모리가 절약 됨

// 요약
// - 메모리 최적화 관점에서는 반복문 기반 알고리즘에 비해 메모리 사용도가 높은 점이 약점
// - 작성하는 모든 곳에서 메모리 최적화가 필요한 것은 아니므로 가독성을 높이는 코드가 필요
// - 재귀는 코드를 짧게 만들고, 코드 이해도를 높이며 유지보수에도 이점이 있어 많이 사용됨


// -----------------------------------------------------------------------

// 메모이제이션을 사용한 fibonacci 함수를 작성해보세요.
// 참고: https://bit.ly/memoiz
// - 동일 계산 반복 시, 이전 계산 값을 메모리에 저장하여 실행 속도를 높이는 방법

// // 예시
// const cache = {}

// const memoFibo = (n)=>{
//   if(n <= 0) return 0;
//   if(n <= 2) return 1;

//   if(cache[n]){
// 	return cache[n];
//   }
//   else {
// 	return cache[n] = memoFibo(n-1) + memoFibo(n-2);
//   }
// }

// 변형 예시 => cache 변수에 저장하지 않고 memoFibo 안에 값을 저장하는 코드
const memoFibo = (n)=>{
	if(n <= 0) return 0;
	if(n <= 2) return 1;
  
	if(memoFibo.cache[n]){
	  return memoFibo.cache[n];
	}
	else{
	  return memoFibo.cache[n] = memoFibo(n-1) + memoFibo(n-2);
	}
  }
  
  memoFibo.cache = {} // 함수는 객체로 이루어져서 객체처럼 프로퍼티로 저장 가능









// 회사 부서 팀원들의 월급 총 합을 구해보세요.
// - 반복문 기반 또는 재귀 호출 알고리즘 중 택 1

const SocialPartiners = {
	foundingDate: 2021,
  team: {
    marketing: [
      {
        name: '이진아',
        salary: 3_250_000,
      },
      {
        name: '박연성',
        salary: 2_600_000,
      },
    ],
    design: {
      ui: [
        {
          name: '송우진',
          salary: 3_920_000,
        },
        {
          name: '김지평',
          salary: 2_743_000,
        },
      ],
      uxd: [
        {
          name: '이수아',
          salary: 4_000_000,
        },
        {
          name: '최철상',
          salary: 3_208_000,
        },
        {
          name: '고요미',
          salary: 2_106_000,
        },
      ],
    },
  },
};




// salary value 값만 뽑아내는 재귀함수로 변환
function sumSalaries(department){

	if(Array.isArray(department)){
		return department.reduce((acc,cur)=>acc + cur.salary,0)
	}
	else {
	let sum = 0;
	for(let sub of Object.values(department)){
		sum += sumSalaries(sub)
	}
	return sum;
	}
}


// 그냥 보여주는 예시 (이런 게 있다..)
function print(data){

	for(let keyValue of Object.entries(data)){
		let key = keyValue[0]
		let value = keyValue[1]
		
		if(typeof value === 'object' || Array.isArray(value)){
			print(value)
		} 
		else{ 
			console.log(key, ' : ', value);
		}	
	}

	if(Array.isArray(data)){
		data.forEach((value,index)=>{
			if(typeof value === 'object' || Array.isArray(value)){
				print(value())
			}
			else{
				console.log(index, ' : ', value);
			}
		})
	}

}