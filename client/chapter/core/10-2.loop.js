/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i = 10;

// do{
	
// 	console.log(i);
	
// 	if(i === 3){
// 		console.log(' 3번 입니다. ');
// 	}
// 	i++

// } while(i < 5)




// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let l = prompt('몇 번?');

// do{
	
// 	console.log(l);
// 	if(l < 0){
// 		break;
// 	}

// 	l --;
// } while(l)

// do ~ while 문 (순환)
// let count = 0;

// do{
	
// 	console.log(count++);

// } while(l--)

// - 위 do ~ while 문을 순방향으로 순환되도록 설정






let first = document.querySelector('.first');
// .html 문서를 document라고 부름
// document(객체)

// do{

// 	first = first.nextSibling

// }while(first.nodeType ===! document.ELEMENT_NODE)
// document.ELEMENT_NODE 말고 1로해도 결과 같음  

function next(node){

    do{
      
      node = node.nextSibiling;

    }while(node.nodeType !== 1)

    return node

  }
  

  const second = next(first) // .second
// 이 함수를 실행시키면 second가 담기길 바라고 만든 함수 function next


prev(second) // second를 넣었을 때 first가 잡히도록

function prev(node){

    do{
      
      node = node.previousSibling;

    }while(node.nodeType ===! 1)

    return node

  }

  const previous = prev(second) // .first


