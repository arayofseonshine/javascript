/* ---------------- */
/* Switch           */
/* ---------------- */

// let a = 10;

// switch(a) {
// 	case 10 :
// 		console.log(' 10입니다. ');

// 	case 11 :
// 		console.log(' 11입니다! ');

// 	case 12 : 
// 	console.log(' 12입니다! ');
// }







/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */

/* switch vs. if -------------------------------------------------------- */

// 1. 
// const MORNING    = '아침',
//       LUNCH      = '점심',
//       DINNER     = '저녁',
//       NIGHT      = '밤',
//       LATE_NIGHT = '심야',
//       DAWN       = '새벽';

// let thisTime = MORNING;

// if (thisTime === LATE_NIGHT) {
// 	console.log(' 잘 준비를 하다가 푹 자고 있다. '); 
// } else if(thisTime === MORNING) {
// 	console.log(' 뉴스 기사를 읽는다. ');
// } else if(thisTime === LUNCH) {
// 	console.log(thisTime === DINNER) 
// 		console.log(' 복습을 한다. ');
// 	}

// 2. 
// const MORNING    = '아침',
//       LUNCH      = '점심',
//       DINNER     = '저녁',
//       NIGHT      = '밤',
//       LATE_NIGHT = '심야',
//       DAWN       = '새벽';

// let thisTime = MORNING;

// if (thisTime === LATE_NIGHT) {
// 	console.log(' 잘 준비를 하다가 푹 자고 있다. '); 
// } else if(thisTime === MORNING) {
// 	console.log(' 뉴스 기사를 읽는다. ');
// } else if(thisTime === LUNCH) {
// 	console.log(thisTime === DINNER) 
// 		console.log(' 복습을 한다. ');
// 	}

// 3. 
// const value = prompt(' 0~6까지의 숫자를 입력해주세요. ');

// switch (+value) {
// 	case 0 : console.log('일'); break;
// 	case 1 : console.log('월'); break;
// 	case 2: console.log('화'); break;
// 	case 3: console.log('수'); break;
// 	case 4: console.log('목'); break;
// 	case 5: console.log('금'); break;
// 	case 6: console.log('토'); break;
// }

// function getRandom() {
// 	const value = Math.floor(Math. random() * 7);
// 	return value;
// }

// function getDay(){ 

// 	const value = getRandom();
// 	console.log( value );

// 	switch (value) {
// 	case 0 : console.log('일'); break;
// 	case 1 : console.log('월'); break;
// 	case 2: console.log('화'); break;
// 	case 3: console.log('수'); break;
// 	case 4: console.log('목'); break;
// 	case 5: console.log('금'); break;
// 	case 6: console.log('토'); break;
// 	}

// }

// function getRandom(n) {
// 	const value = Math.floor(Math. random() * n);
// 	return value;
// }

// function getDay(value){ 

// 	switch (value) {
// 	case 0 : console.log('일'); break;
// 	case 1 : console.log('월'); break;
// 	case 2: console.log('화'); break;
// 	case 3: console.log('수'); break;
// 	case 4: console.log('목'); break;
// 	case 5: console.log('금'); break;
// 	case 6: console.log('토'); break;
// 	}
	
// }

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function getDay(value){

	switch (value) {
	  case 0: return '일';
	  case 1: return '월';
	  case 2: return '화';
	  case 3: return '수';
	  case 4: return '목';
	  case 5: return '금';
	  case 6: return '토';
	}
  }

   console.clear();

function weekend() {
	const today = getDay(getRandom(7));
	console.log(today)

	if(today === '토' || today === '일') {
		console.log(' 주말입니다! ');
	} else {
		console.log(' 평일입니다! ');
	}
}

