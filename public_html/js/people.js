function getSuggestion(str) {
    if (str.length === 0) {
        document.getElementById("txtSuggestion").innerHTML = "";
    } else {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                let list = JSON.parse(this.responseText);
                getPeople(list);
            }
        };
        xmlhttp.open("GET", "http://localhost:3005/people?name_like=" + str, true);
        xmlhttp.send();
    }
}

function getPeople(arr) {
    let list = document.createElement("ul");
    for (let i = 0; i < arr.length; i++) {
        let element = document.createElement("li");
        element.innerHTML = arr[i].name;
        list.appendChild(element);
    }

    let output = document.getElementById("txtSuggestion");
    output.innerHTML = "";
    output.appendChild(list);
}