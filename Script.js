// Splash Screen
setTimeout(function () {
  const splashScreen = document.getElementById("splashScreen");
  if (splashScreen) {
    splashScreen.remove();
  }
}, 3000); // 3 detik (2.5s delay + 0.5s fade out)

//fitur ganti warna
const button = document.getElementById("btn");
const body = document.body;

let colorIndex = 0;

const colors = ["red", "yellow", "green", "blue", "orange"];

btn.addEventListener("click", function () {
  body.style.background = colors[colorIndex];

  colorIndex = (colorIndex + 1) % colors.length;
});
//fitur sapa aku
document.getElementById("alertBtn").addEventListener("click", function () {
  alert("Hei! Terima kasih sudah mengunjungi website saya");
});

//fitur like

let like = 0;

document.getElementById("likeBtn").onclick = function () {
  like++;

  document.getElementById("like").innerHTML = like;
};

function tampilJam() {
  const sekarang = new Date();

  const jam = sekarang.getHours();
  const menit = sekarang.getMinutes();
  const detik = sekarang.getSeconds();

  document.getElementById("jam").innerHTML = jam + ":" + menit + ":" + detik;
}

setInterval(tampilJam, 1000);

document.getElementById("tambahHobi").addEventListener("click", function () {
  const input = document.getElementById("hobiInput");

  const list = document.getElementById("listHobi");

  if (input.value !== "") {
    list.innerHTML += `
                <p onclick="this.remove()">
                    ${input.value} ❌
                </p>
            `;

    input.value = "";
  }
});

const musik = document.getElementById("musik");

document.getElementById("playBtn").onclick = function () {
  musik.play();
};

document.getElementById("stopBtn").onclick = function () {
  musik.pause();

  musik.currentTime = 0;
};
