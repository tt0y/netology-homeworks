/**
 * Created by AntonKC on 29.07.2018.
 */

'use strict';

(function () {

    const drumKeyList = document.getElementsByClassName('drum-kit__drum');

    for (let key of drumKeyList) {
        key.onclick = function () {
            const audioKit = this.getElementsByTagName('audio')[0];
            audioKit.play();
        }
    }

})();