var w;

function startWorker() {
    if (typeof(w) === "undefined") {
        w = new Worker("js/worker.js");
    }

    w.onmessage = function(msg) {
        document.getElementById("result").innerHTML = msg.data;
    };
}

function stopWorker() {
    w.terminate();
    w = undefined;
}