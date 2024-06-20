






const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');


const h = t => t.style.height = 0;

depthList.forEach((item)=>{
	console.log(item);
})
// 변형 (전달하려는 값이 같으면 뒤에 함수 붙여서 사용 가능, 매개변수 2개 이상 못씀)
// depthList.forEach(console.log)
// depthList.forEach(h)


aList.forEach((a)=>{
  a.addEventListener('mouseenter',()=>{

    const target = a.lastElementChild;

    depthList.forEach(h)

    target.style.height = '100px';

  })
})


header.addEventListener('mouseleave', () => depthList.forEach(h));