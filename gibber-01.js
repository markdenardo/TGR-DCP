

//hydra sketch

f =()=> a.fft[0]

use('hydra').then(init=>init())
noise(1,1,f).repeat(()=>time,1).kaleid(3).scale(0.5,0.5).out()

//gibber notes

Pluck().note.seq([0,1,2,4,5,4,2,1,0],1/2)
Pluck().note.seq([0,1,2,4,5],1/2)
Pluck().note.seq([1,2,4,5,0],1/4)


