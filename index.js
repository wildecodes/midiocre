const sampler = new Tone.Players({
  'kick': 'https://cdn.jsdelivr.net/gh/Tonejs/Tone.js/examples/audio/505/kick.mp3',
  'snare': 'https://cdn.jsdelivr.net/gh/Tonejs/Tone.js/examples/audio/505/snare.mp3',
  'kick': 'https://cdn.jsdelivr.net/gh/Tonejs/Tone.js/examples/audio/505/kick.mp3',
  'agogo':'https://cdn.jsdelivr.net/gh/Tonejs/Tone.js@13.8.25/examples/audio/505/agogoHigh.ogg'
})

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const volume = new Tone.Volume(-12).toMaster();
const song = [
 kick: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
 hihat: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
 snare: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
 agogo: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 11, 12, 13, 14, 15]
]

sampler.connect(volume);

function start() {
  Tone.Transport.bmp.value = 130;

  const sequence = new Tone.Sequence(function (time, idx) {
    eval(editor.getValue());
  }, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], "8n");

  Tone.Transport.start();
  sequence.start();
}