let first = document.querySelector('.first');

function next(node){

do{
    
    node = node.nextSibling;
    console.log(node);

  }while(node && node.nodeType !== 1)

  return node

}

next(first);