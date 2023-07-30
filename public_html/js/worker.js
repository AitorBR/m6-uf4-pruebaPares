var current = 0;
var sequence = "";

function temp() {
    if (!current) {
        sequence += " " + current;
    } else {
        sequence += " - " + current;
    }

    postMessage(sequence);

    current += 2;

}

setInterval(temp, 500);