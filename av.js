
var AudioContext=AudioContext||webkitAudioContext;
var context=new AudioContext;
//����ý��
var audio=new Audio("hello.mp4");
//�����ڵ�
var source=context.createMediaElementSource(audio);
var analyser=context.createAnalyser();
//���ӣ�source �� analyser �� destination
source.connect(analyser);
analyser.connect(context.destination);
//Canvas��ʼ��
var width=canvas.width,height=canvas.height;
var p=canvas.getContext("2d");

analyser.fftSize =4096;
var length=analyser.fftSize;
//��������
var dataArray=new Uint8Array(length);
//����֡

// drawText()
  
// setTimeout(function(){setInterval(draw,16)},4000)
  
  
  
  
function drawText(){
p.font="132px Verdana";
// ��������
var gradient=p.createLinearGradient(480,0,480,height);
gradient.addColorStop("0","magenta");
gradient.addColorStop("0.5","pink");
gradient.addColorStop(".7",'#fff');
// �ý�����ɫ
p.fillStyle=gradient;
p.fillText("OMFG",480,height/2);
p.strokeStyle = '#fff'
}  
  

//��ߵ���佥��ɫ
  var gradient=p.createLinearGradient(0,100,480,100);
  gradient.addColorStop("0","#f500d8");
  gradient.addColorStop("1.0","#ceaf11");


//�ұߵ���佥��ɫ
  var gradientRight=p.createLinearGradient(886,100,1366,100);
  gradientRight.addColorStop("0","#0ee7f7");
  gradientRight.addColorStop("1.0","#2ce672");
  
function draw(){
  // requestAnimationFrame(draw)
  analyser.getByteFrequencyData(dataArray);
  p.fillStyle = '#000'; 
  p.clearRect(0, 100, 480, 300);
  p.clearRect(886, 100, 480, 300);
  
  //��
  
  //�����
  p.beginPath();
  p.moveTo(0,height-200);
  var x=0;
  for(var i=1;i<42;i++){ 
  var lineHeight = dataArray[i]/256 * height/3;
  if(i>40){
    p.lineTo(x-13,height-200)
  }
  else{
    p.lineTo(x,height-lineHeight-200)
  }
    x += 12;
  }
  p.fillStyle = gradient;
  p.fill();
  p.closePath();
  
  //������
  p.beginPath();
  p.moveTo(0,height-200);
  var x=0;
  for(var i=1;i<42;i++){ 
  var lineHeight = dataArray[i]/256 * height/3;
  if(i>40){
    p.lineTo(x-13,height-220)
  }
  else{
    p.lineTo(x,height-lineHeight-220)
  }
    x += 12;
  }
  p.strokeStyle= gradient;
  p.stroke();
  p.closePath();
  
  //������ײ�����Ƶ��
  p.fillStyle = '#fff'; 
  p.fillRect(0, height-300, 470, 101);
  
  
  //��
  
  //�����
  p.beginPath();
  p.fillStyle = gradientRight; 
  p.moveTo(width,height-200);
  var x=width;
  for(var i=1;i<42;i++){ 
  var lineHeight = dataArray[i]/256 * height/3;
  if(i>40){
    p.lineTo(x+13,height-200)
  }
  else{
    p.lineTo(x,height-lineHeight-200)
  }
    x -= 12;
  }
  p.fill();
  p.closePath();
  
   //������
  p.beginPath();
  p.moveTo(width,height-200);
  var x=width;
  for(var i=1;i<42;i++){ 
  var lineHeight = dataArray[i]/256 * height/3;
  if(i>40){
    p.lineTo(x+13,height-220)
  }
  else{
    p.lineTo(x,height-lineHeight-220)
  }
    x -= 12;
  }
  p.strokeStyle= gradientRight;
  p.stroke();
  p.closePath();
  
  //����Ҳ�ײ�����Ƶ��
  p.fillStyle = '#fff'; 
  p.fillRect(width-480, height-300, 480, 100);
  
 
}



//����
// audio.play();