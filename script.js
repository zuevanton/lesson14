'use strict';

const DomElement = function(selector, height, width, bg, fontSize){
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.createElement = function(){
  let element;
  if(this.selector[0] === '.'){
    element = document.createElement('div');
    element.classList.add(this.selector.slice(1 ));
    document.body.appendChild(element);
  }
  if(this.selector[0] === '#'){
    element = document.createElement('p');
    element.id = this.selector.slice(1);
    document.body.appendChild(element);
  }
  element.style.cssText = `height: ${this.height}px;
                          width: ${this.width}px;
                          background-color: ${this.bg};
                          font-size: ${this.fontSize}px;
                          `;
  element.textContent = 'check';
  return element;
};


document.addEventListener('DOMContentLoaded', function(){
  const domElem = new DomElement('#lmsafklsafd', 100, 100, 'red', 25);
  let el = domElem.createElement();
  el.style.position = 'absolute';
  el.style.left = '50%';
  el.style.top = '50%';
  let x = 0, y = 0;
  document.addEventListener('keydown', (e) =>{
    let up = 'ArrowUp',
        left = 'ArrowLeft',
        down = 'ArrowDown',
        right = 'ArrowRight';
    // if(e.key === up){
    //   y -= 10;
    // }
    // if(e.key === down){
    //   y += 10;
    // }
    // if(e.key === left){
    //   x -= 10;
    // }
    // if(e.key === right){
    //   x += 10;
    // }

    // e.key === up ? y -= 10 : e.key === down ? y += 10 : e.key === left ? x -= 10 : e.key === right ? x += 10 : 0;
    y = (e.key === up && (y -= 10)) || (e.key === down && (y += 10)) || y;
    x = (e.key === left && (x -= 10)) || (e.key === right && (x += 10)) || x;
    el.style.transform = `translate(${x}px, ${y}px)`;
  });
});

