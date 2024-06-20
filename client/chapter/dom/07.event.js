const ground = getNode('.ground');
const ball = getNode('#ball');


function handleClickBall(e){

  let x = e.offsetX;
  let y = e.offsetY;


  ball.style.transform = `translate(${x - (ball.offsetWidth / 2)}px,${y - (ball.offsetHeight / 2)}px)`

}




ground.addEventListener('click',handleClickBall)




function addClass(node,...className){

	if(typeof node === 'string') node = document.querySelector(node)
	
  
	className.forEach((c)=>{
	  
	  if(isArray(c)){
		c.forEach( c => node.classList.add(c))
	  }
	  else if(isString(c)){
		node.classList.add(c);
	  }
	  else{
		throw new TypeError('addClass 함수의 인수는 문자 타입 이어야 합니다.');
	  }
  
	})
}
	