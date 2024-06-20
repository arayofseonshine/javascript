const ground = getNode('.ground');
const ball = getNode('#ball');


function handleClickBall(e){

  let x = e.offsetX;
  let y = e.offsetY;


  ball.style.transform = `translate(${x - (ball.offsetWidth / 2)}px,${y - (ball.offsetHeight / 2)}px)`

}




ground.addEventListener('click',handleClickBall)