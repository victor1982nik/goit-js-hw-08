import Player from '@vimeo/player';
import {throttle } from 'lodash';
import { getData, saveData } from './storage';

const keyLocalStorage = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);
const startTime = getData(keyLocalStorage);

if (startTime) {
    player.setCurrentTime(startTime, keyLocalStorage);
}

player.on('timeupdate', throttle(currentTimeSave, 1000));

function currentTimeSave({ seconds }) {  
    player.getCurrentTime().then((seconds) => {        
        saveData(seconds, keyLocalStorage);              
}).catch(function(error) {
    warn("Что-то пошло не так ${error}");
});
}

