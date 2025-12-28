let score=0
let lives=3
let shapeMaker
let gamebox=document.getElementById('gamebox')
let livesbox=document.getElementById('live')
let scorebox=document.getElementById('scorebox')
let endbox=document.getElementById('endbox')
let endscore=document.getElementById('endscore')
let btnstart=document.getElementById('btn-start')
let btnend=document.getElementById('btn-end')
let startgame=function(){
    lives=3
    score=0
    gamebox.innerHTML=''
    update()
    shapeMaker=setInterval(makeShape,1000);
    btnstart.disabled=true    
}

let update=function(){
    scorebox.textContent=score
    livesbox.textContent=lives
}
btnstart.addEventListener('click',startgame)

let makeShape=function(){   
let topshape=0
let speed=2
let shape=document.createElement('div')
shape.className='shape'
let shapes=['circle','square','rectangle']
let random = shapes[Math.floor(Math.random() * 3)];
shape.classList.add(random)
shape.style.left = Math.floor(Math.random()*(gamebox.clientWidth - 100)) + 'px'
gamebox.appendChild(shape)
let colors=['red','blue','yellow','orange']
let randomcolor=colors[Math.floor(Math.random()*4)]
shape.classList.add(randomcolor)

let fall=setInterval( function(){
shape.style.top = topshape + 'px';
topshape += speed;
if(topshape>gamebox.clientHeight-70 ){
clearInterval(fall)
shape.remove()
lives--
update()
if(lives<0){
    lives=0 
}
if(lives===0){
endgame()
}
}
},15)
shape.addEventListener('click',()=>{
      score++
    shape.remove()
    update()
    clearInterval(fall)
  
})
let endgame=function(){   

    gamebox.innerHTML=''
    clearInterval(shapeMaker)
    clearInterval(fall)    
    update()
     endbox.classList.remove('hidden')
    endscore.textContent=score
  let close =document.getElementById('close')
   close.addEventListener('click',()=>{
    endbox.classList.add('hidden')
    btnstart.disabled=false
   })   
}

    btnend.addEventListener('click',()=>{
        clearInterval(shapeMaker)
    clearInterval(fall)    
    update()
    shape.remove()
    endbox.classList.remove('hidden')
    endscore.textContent=score
    let close =document.getElementById('close')
    close.addEventListener('click',()=>{
    endbox.classList.add('hidden')
    btnstart.disabled=false    
   })   
    })
if(score>5){
    speed=4
    if (score>10) {
        speed=6
    }    
}

}

