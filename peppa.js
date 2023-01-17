//put this in the JS file of hydra
var mscript = document.createElement('script');

mscript.setAttribute('src','https://unpkg.com/hydra-synth');

document.head.appendChild(mscript);

const sketch = () => {

let canvas = document.createElement("canvas");
  


canvas.width = 512;
canvas.height = 512;
canvas.id = "hydra-bg";
document.body.appendChild(canvas);

const hydra = new Hydra({
    canvas: canvas,
    detectAudio: false,
    enableStreamCapture: false,
  
});

s0.initVideo("https://media3.giphy.com/media/Pq2fdlMQwFvQvBTd0e/giphy.mp4")  
  
src(s0).scale(0.5,0.5).out(o0)
render(o0)

}

setTimeout(sketch, 500);

