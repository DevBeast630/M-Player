// console.log("Hello World");
let j = 0;
let currentSongIndex = 0;
let totalSongs = 16

currentSongIndex = 0;
// Prev
for (j = 0; j < 20; j++) {
    currentSongIndex--;
    console.log(totalSongs + (currentSongIndex % totalSongs) - 1);
}
