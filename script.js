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
    element.classList.add('block');
    document.body.appendChild(element);
  }
  if(this.selector[0] === '#'){
    element = document.createElement('div');
    element.id = 'best';
    document.body.appendChild(element);
  }
  element.style.cssText = `height: ${this.height}px;
                          width: ${this.width}px;
                          background-color: ${this.bg};
                          font-size: ${this.fontSize}px;
                          `;
  element.textContent = 'check';
};

const domElem = new DomElement('#asd', 200, 300, 'red', 25);
domElem.createElement();