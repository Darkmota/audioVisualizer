
var AudioContext=AudioContext||webkitAudioContext;
var context=new AudioContext;
//����ý��
var audio=new Audio("sky.mp3");
//�����ڵ�
var source=context.createMediaElementSource(audio);
var analyser=context.createAnalyser();
//���ӣ�source �� analyser �� destination
source.connect(analyser);
analyser.connect(context.destination);
//Canvas��ʼ��
var width=canvas.width,height=canvas.height;
var g=canvas.getContext("2d");
g.translate(0.5,0.5);
//���������Ƶ��44100����Ļ���������
var length=analyser.frequencyBinCount*context.sampleRate/context.sampleRate|0;
console.log(analyser.frequencyBinCount,context.sampleRate)
//��������
var output=new Uint8Array(length);
//����֡
(function callee(e){
  analyser.getByteFrequencyData(output);
  //�������������ݻ��Ƶ�Canvas��
  g.clearRect(-0.5,-0.5,width,height);
  g.beginPath(),g.moveTo(0,height);
  for(var i=0;i<width;i++)
    g.lineTo(i,height-height*output[Math.round(length*i/width)]/555);
  g.lineTo(i,height),g.fill();
  //������һ֡
  requestAnimationFrame(callee);
})();
//����
audio.play();