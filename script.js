const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Promt to usr to select a media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        // setting a constatnt to going to have a media stream and waiting until the user selct a screen to share
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // passing mediastream into a video object as src object
        videoElement.srcObject = mediaStream;
        // .when video loaded the metadata, it will call a function that will ply the video
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch(error) {
        console.log('Hmmm, somthing is not working:', error);
        
    }
}

button.addEventListener('click', async () => {
    // Desable the button
    button.disabled = true;
    // Start pic in pic
    await videoElement.requestPictureInPicture();
    // REset Button
    button.disabled = false;
});

// on Load
selectMediaStream();