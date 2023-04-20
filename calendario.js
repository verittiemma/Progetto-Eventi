let divEventi = document.getElementById("eventsDiv")

getEvent();

function dataCorretta(date) {
    var offset = date.getTimezoneOffset() * 60 * 1000; //convert to milliseconds
    var adjustedDate = new Date(date.getTime() - offset);
    return adjustedDate;
}

function getEvent(){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "token dbb31880-7ebc-429b-8cb6-bd6f67d255ed");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://events.abattaglia.it/api/event/list", requestOptions)
    .then(response => response.text())
    .then(result => {
            console.log(result);
            var events = JSON.parse(result);

            for(let i=0; i<events.length; i++){
                var event = events[i];
                // prendo cio che mi serve
                var title = event.title;
                var iTime = event.startsAt;
                var fTime = event.endsAt;
                var place = event.location;

                iTime = iTime.slice(0, 10);
                fTime = fTime.slice(0,10);
                var div = document.createElement("div");
                console.log("SONO QUI");
                div.innerHTML = '<div class="divEvento">' + '<h1 class="hEvneti">' + title + '</h1>' + '<p>' + '▪ ' + iTime + '</p>' + '<p>' + '▪ ' + fTime + '</p>'+ '<p>' + '📍 ' + place + '</p>' + '</div class="divEvento">';
                divEventi.appendChild(div);
                console.log("CIAO");
            }
        }     
    )
    .catch(error => console.log('error', error));
};