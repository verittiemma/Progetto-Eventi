form = document.getElementById('formCreaEvento');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let title = form.elements['title'].value;
    let iTime = form.elements['dataInizio'].value;
    let fTime = form.elements['dataFine'].value;
    let place = form.elements['place'].value
    
    createEvent(title, place, iTime, fTime);
});

function createEvent(title, location, start, end){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "token dbb31880-7ebc-429b-8cb6-bd6f67d255ed");

    var raw = JSON.stringify({
        "title": title,
        "location": location,
        "startsAt": start,
        "endsAt": end
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    console.log("debug");

    fetch("https://events.abattaglia.it/api/event/create", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    formReset();
};

function deleteEvent(id){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "token dbb31880-7ebc-429b-8cb6-bd6f67d255ed");

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://events.abattaglia.it/api/event/" + id , requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function formReset(){
    form.reset();
}

