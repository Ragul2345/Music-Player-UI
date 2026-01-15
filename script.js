const songs = [
  "Munbe Vaa",
  "Vaseegara",
  "Nenjukkul Peidhidum",
  "Thalli Pogathey",
  "Maruvaarthai",
  "Enna Solla Pogirai",
  "Vaarayo Vaarayo"
];

let index = 0;
let playing = false;
let progress = 0;
let interval;

const song = document.getElementById("song");
const progressBar = document.getElementById("progress");
const playBtn = document.getElementById("play");
const playlist = document.getElementById("playlist");

songs.forEach((s, i) => {
  const li = document.createElement("li");
  li.innerText = s;
  li.onclick = () => load(i);
  playlist.appendChild(li);
});

function load(i) {
  index = i;
  song.innerText = songs[i];
  setActive();
  resetProgress();
}

function playPause() {
  playing = !playing;
  playBtn.innerText = playing ? "⏸" : "▶";

  if (playing) {
    interval = setInterval(() => {
      progress += 0.5;
      progressBar.style.width = progress + "%";
      if (progress >= 100) next();
    }, 100);
  } else {
    clearInterval(interval);
  }
}

function next() {
  index = (index + 1) % songs.length;
  load(index);
}

function prev() {
  index = (index - 1 + songs.length) % songs.length;
  load(index);
}

function resetProgress() {
  progress = 0;
  progressBar.style.width = "0%";
}

function setActive() {
  document.querySelectorAll("li").forEach(li => li.classList.remove("active"));
  playlist.children[index].classList.add("active");
}

load(0);
