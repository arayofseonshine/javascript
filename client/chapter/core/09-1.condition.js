/* ---------------- */
/* Condition        */
/* ---------------- */


// const result = prompt('자바스크립트의 "공식" 이름은 무엇일까요?','');

// if (result === 'ECMAScript') {
//   console.log ('정답입니다!');
// }
//   else {
//   console.log ('모르셨나요? 정답은 ECMAScript 입니다!'); 
//   }


// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No


// 영화 봤니?
// 영화 볼거니?
// let didWatchMovie = confirm('영화 봤니?');


// if (didWatchMovie) {
//   console.log('영화 참 재밌더라!');
// }
//   else{
//     let goingToWatchMovie= confirm('영화 볼거니?');
//     if(goingToWatchMovie) {
//       console.log('재밌게 봐!');
//     } else {
//       console.log('아쉽다..');
//     };
//   }


// function wathcingMovie() { 
// }

// let didWatchMovie = confirm('영화 봤니?');


// if (didWatchMovie) {
//   console.log('영화 참 재밌더라!');
// } else{

//     let goingToWatchMovie= confirm('영화 볼거니?');

//     if(goingToWatchMovie) {
//       let withWho = prompt('누구랑 볼꺼니?');

//       if (withWho === 'You') {
//         console.log('사랑해');
//       } else{
//         console.log('왜 나랑 안 봄?');
//       } 
//     } else{
//       console.log('나랑 보러 가자아아~');
//     };
// }


// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자


// let didWatchMovie = 'no';
// let goingToWatchMovie = 'yes';


// const message = didWatchMovie === 'yes' ? '영화 재밌더라' : '다음에 같이 볼래?'
// const message = didWatchMovie.includes('yes') ? '영화 재밌더라' : goingToWatchMovie.includes('yes') ? '' : '';


// 멀티 조건부 연산자 식

function render(node,isActive) {
  
  let template = `
  <div> ${ isActive ? '안녕~~!' : '사요나라 ㅠ_ㅠ' }</div>
  `
  node.insertAdjacentHTML('beforeend', template);
}

