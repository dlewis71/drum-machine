// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
let count = 1;

// This function is called every 600ms
function update() {
    if(count === 4) {
        tock.play();
    } else {
        tick.play();
    }
count = count % 4 + 1;
}

function updatetock() {
    tock.play();
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setTimeout(setupUpdate, 600);{
        if (count === 4) {
            tock.play();
        } else {
            tick.play();
        }
        count = count % 4 + 1;
    }
    function updatetock() {
        tock.play();
    }
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
