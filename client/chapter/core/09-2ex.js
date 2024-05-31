let userName = prompt('누구노?');

// .toLowerCase 쓰면 대문자도 전부 소문자로 인식되도록 설정됨
if (userName?.toLowerCase() === 'kkh') {
  console.log('맞소이다~') 
    let Password = prompt('비번?');
    if (Password === '0621') {
      console.log('어서옵쇼~!~!~!');
    } else if(Password === null) {
      console.log('취소하셨슈');
    } else { 
      console.log('비번 틀림 ㅠ');   
    }
} else if(userName === null || userName?.replace(/\s*/g,'') === '') { 
    console.log('취소됩니다잇!');
  }
  else {
    console.log('실패요~')
}

// .toLowerCase 쓰면 대문자도 전부 소문자로 인식되도록 설정됨 근데 이러면 
// else if에서 오류가 발생하는데 .toLowerCase랑 .replace앞에 ? 붙이면 오류 수정됨 




//  ex ) 
// if (userName === 'admin') {
//   console.log('로그인 성공!');
// } else if (userName === null) {
//   console.log('취소!');
// } 
// else { 
//   console.log('실패!');
// } 





