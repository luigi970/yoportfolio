// init Glightbox
/* const lightbox = GLightbox({
    'href': 'https://www.youtube.com/watch?v=wr2Zlo7ex-A',
    'type': 'video',
    'source': 'youtube', //vimeo, youtube or local
    'width': 900,
    'autoplayVideos': true,
}); */


// *************************************************************

// Images Rocket animated js

var count = 0;
function framesByTime() {
    setTimeout(renameFrame,200);
}
function renameFrame() {
    count++;
    if(count > 4) {
        count = 1; // se vuelve a uno para reiniciar
    }
    document.getElementById("rocket").setAttribute('class', "img-fluid rocket rocket-"+count);
    document.getElementById("rocket").src="images/arts/rocket/rocket-" + count + ".svg";
    framesByTime();
};
setTimeout(renameFrame, 1000);

// **************************************

