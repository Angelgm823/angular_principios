
interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 50,
    songDuration: 16,
    song: "kiss for you",
    details: {
        author: 'ed Sheran',
        year: 2021
    }
} 

const song = 'New song';

const {song: anotherSong, songDuration: duration, details} = audioPlayer;
const {author} = details;

// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Author: ', author);




// -------desestructuracion de arreglos---------

const [, , trunks]: string[] = ['Goku', 'Rabits'];

console.log('Personaje 3: ', trunks);



export{};