import { enableRipple, Draggable } from '@syncfusion/ej2-base';
enableRipple(true);


let elmnt = document.querySelector('.content-wrap')
elmnt.scrollTop = 500;

let dragElement: HTMLElement = document.querySelector('.event');
let draggable: Draggable = new Draggable(dragElement, { 
  clone: true,enableAutoScroll:true,isDragScroll: true,
  dragArea: document.querySelector('#current-panel') as HTMLElement,
  enableTailMode:true
   });

for(let i=0;i<4;i++){
  let tr = document.createElement('tr');
  tr.appendChild(document.createElement('td'))
  document.querySelector('.content-wrap tbody').appendChild(tr);
}