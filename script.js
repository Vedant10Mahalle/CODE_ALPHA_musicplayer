const songs = [
    {
        title: "Kajwa",
        artist: "Nick",
        file: "Kajwa-Vijay-Bhate.mp3",
        cover: "kajwa.jpeg"
    },
    {
        title: "Gulabi Sadi",
        artist: "Sanju Rathod",
        file: "Gulabi Saree-(PagalSongs.Com.IN).mp3",
        cover: "gulabisadi.jpeg"
    },
    {
        title: "Barish Ban Jana",
        artist: "Stebin Ben",
        file: "Stebin-Ben---Baarish-Ban-Jaana(PagalWorld).mp3",
        cover: "bbj.jpeg"
    },
    {
        title: "Tum kya Mile",
        artist: "Arjit Singh ",
        file: "128-Tum Kya Mile - Rocky Aur Rani Kii Prem Kahaani 128 Kbps.mp3",
        cover: "tumkyamile.jpeg"
    }
];

let currentSongIndex = 0;

const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-btn');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const coverImage = document.getElementById('cover-image');

function loadSong(song) {
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    audioPlayer.src = song.file;
    coverImage.src = song.cover;
}

function playSong() {
    audioPlayer.play();
    playButton.textContent = '⏸️';
}

function pauseSong() {
    audioPlayer.pause();
    playButton.textContent = '⏯️';
}

function playPauseToggle() {
    if (audioPlayer.paused) {
        playSong();
    } else {
        pauseSong();
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

playButton.addEventListener('click', playPauseToggle);
prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);

// Load the first song
loadSong(songs[currentSongIndex]);

