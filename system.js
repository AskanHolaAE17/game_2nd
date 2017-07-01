function timer() {
  timer_cur += 0.00001;
  //ctx.clearRect(10,50,1000,60);
  //ctx.fillText(timer_cur, 10, 50);
  
  requestAnimationFrame(timer);
}
timer(); 
