'use strict';

const eye = document.querySelector('.big-book__eye');
const pupil = document.querySelector('.big-book__pupil');
const pupilW = pupil.clientWidth;
const pupilH = pupil.clientHeight;
const pupilR = pupil.clientWidth / 2;

const rectPupil = pupil.getBoundingClientRect();

const centerInEyeX = pupilH /2;
const centerInEyeY = pupilW / 2;
// const centerPupilX = rectPupil.x + pupilR;
// const centerPupilY = rectPupil.y + pupilR;

 const offsetPupil = pupil.getBoundingClientRect()
 const centerAbsX = offsetPupil.x + pupilR;
 const centerAbsY = offsetPupil.y + pupilR;

// const bodyWidth = document.body.clientWidth;
// const bodyHeight = document.body.clientHeight;

document.addEventListener('mousemove', event => {
     const widthPupil = pupil.clientWidth;
     const heightPupil = pupil.clientHeight;
     const offsetPupil = pupil.getBoundingClientRect();

    const cursorX = event.pageX;
    const cursorY = event.pageY;

    const posX = cursorX - centerAbsX + document.body.scrollLeft;
    const posY = cursorY - centerAbsY + document.body.scrollTop;

    const coords = {
      x: posX,
      y: posY
    };

    if(posX*posX + posY*posY > pupilR*pupilR) {
      if(posX !== 0) {
          var m = posY/posX;
          coords.x = Math.sqrt(pupilR*pupilR / (m*m + 1));
          coords.x = (posX > 0)? coords.x : -coords.x;
          coords.y = Math.abs(m * coords.x);
          coords.y = (posY > 0)? coords.y : -coords.y;
      } else {
          coords.y = posY > 0? pupilR : -pupilR;
      }
    }

    pupil.style.setProperty('--pupil-x', coords.x + centerInEyeX - pupilR + 'px');
    pupil.style.setProperty('--pupil-y', coords.y + centerInEyeY - pupilR + 'px');
    //pupil.style.setProperty('--pupil-size', offsetPupil + 'px');


    const coordX = cursorX - offsetPupil.x - widthPupil / 2;
    const coordY = cursorY - offsetPupil.y - heightPupil / 2;

     const pupilSizeX = Math.abs((coordX / offsetPupil.x));
});