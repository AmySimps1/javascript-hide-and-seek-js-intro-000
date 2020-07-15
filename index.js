function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

 function deepestChild(){
  var deepest = document.getElementById('grand-node').querySelectorAll('div');
  return deepest[deepest.length-1];

 }
 
 function increaseRankBy(n) {
    var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
    for (var i = 0; i< lis.length; i++) {
      lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
    }
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}
