const person = {
	name: 'Alice',
	age: '25',
	city: 'Woderland'
};

// 1. obj가 객체인지 확인
// 2. key가 문자인지 확인


function getValueAtObject(obj,key){

	if(typeof key !== 'string'){
		throw new TypeError('getValueAtObject 함수의 두 번째 인수는 문자 타입이어야 합니다.')
	}

	if(typeof obj === 'object'){
		if(Object.prototype.hasOwnProperty.call(obj,key)){
			return obj[key];
		}
		else{
			throw new Error(`getValueAtObject 함수의 해당 ${key}가 존재하지 않습니다.`);
		}
	}
	

	else{
		throw new TypeError('getValueAtObject 함수의 첫 번째 인수는 객체 타입이어야 합니다.');
	}
	
}