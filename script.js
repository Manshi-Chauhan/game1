console.log("welcome");
//initialize the  variable
let songIndex =0;
let audioElement = new Audio('song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let mastersongName= document.getElementById('masterSongName');


let songs = [ 
    {songName: "Life Goes On - BTS", filePath : "song1.mp3", coverPath: "cover.jpeg"},
    {songName: "Yet to Come - BTS", filePath : "song1.mp3", coverPath: "cover.jpeg"},
    {songName: "Best of Me - BTS", filePath : "song1.mp3", coverPath: "cover.jpeg"},
    {songName: "Mikrokosmos - BTS", filePath : "song1.mp3", coverPath: "cover.jpeg"},
    {songName: "00:00 - BTS", filePath : "song1.mp3", coverPath: "cover.jpeg"},
    {songName: "Burning Up - BTS", filePath : "song1.mp3", coverPath: "cover.jpeg"},
    
]


//audioElement.play();
//play and pause song
masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//listen to events 
audioElement.addEventListener('timeupdate', () => {
    //update seek bar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value= progress;
})

myProgressBar.addEventListener('change' ,() => {
    audioElement.currentTime =((myProgressBar.value*audioElement.duration)/100);
})

const makeAllPlays = () => {
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.classList.add('fa-circle-play');
    element.classList.remove('fa-circle-pause');
   })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e)=> {
       // console.log(e.target);
        makeAllPlays();
        songIndex= parseInt(e.target.id);

        if(audioElement.paused){
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src =`song${songIndex+1}.mp3`;
        mastersongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        }
        else {
        e.target.classList.remove('fa-circle-pause');
        e.target.classList.add('fa-circle-play');
        audioElement.src=`song${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.pause();
        gif.style.opacity=0;
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        }

    })
})

document.getElementById('next').addEventListener('click' , () => {
    if(songIndex >=5){
        songIndex=0;
    }
    else {
        songIndex +=1;   
    }
    audioElement.src =`song${songIndex+1}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('prev').addEventListener('click' , () => {
    if(songIndex <=0){
        songIndex=5;
    }
    else {
        songIndex -=1;   
    }
    audioElement.src =`song${songIndex+1}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})







//missing
//ek to gana pause krne ke bad starting se play ho rha h
//ek ki gana end hone ke bad khud se next play nahi ho rha
//jb masterPlay se gana play kr rhe h tab songItemPlay wale button change nhi ho rha