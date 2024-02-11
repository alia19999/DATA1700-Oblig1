let billetter = [];
let tabell = "<table><tr>" +
    "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>"
    + "</tr>";
let ut = "";

// like name for flere inputs gjør at de legges inn i en array automatisk!!!! name blir array-navnet
// Splitt opp functions slik at de bare gjør en ting bare hver
function leggTilBillett() {
    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;

    // Vi konverterer antall- og telefonnr-strengen til tall, såfremt de er det
    let tall1 = Number(antall);
    let tall2 = Number(telefonnr);

    // Sjekker om brukeren har bare skrevet inn gyldige verdier
    if (isNaN(tall1)) {
        document.getElementById("antallSjekk").innerHTML = "Må skrive inn bare positive tall";
    } else if (tall1 === 0) {
        document.getElementById("antallSjekk").innerHTML = "Må skrive inn noe i antall";
    } else if (isNaN(tall2)) {
        document.getElementById("telefonnrSjekk").innerHTML = "Må skrive inn bare positive tall";
    } else if (tall2 === 0){
        document.getElementById("telefonnrSjekk").innerHTML = "Må skrive inn noe i telefonnr";
    } else if (fornavn === ""){
        document.getElementsByClassName("tomSjekk").innerHTML = "Må skrive noe inn i fornavnet";
    } else if (etternavn === "") {
        document.getElementsByClassName("tomSjekk").innerHTML = "Må skrive noe inn i etternavnet"
    } else if (epost === "" || epost.includes("@")) {
        document.getElementsByClassName("tomSjekk").innerHTML = "Må skrive noe inn i epost"
    }

    else {

    // Vi definerer variabelene og verdiene til objektet, der variabelenes verdi er de verdiene
    // som har blitt skrevet inn av brukeren
    let kunde = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost
    };
    // Legger til objektet inn i arrayet
    billetter.push({kunde})

    // Viser frem objektenes variabler i tabellform
    ut += "<tr>";
    ut += "<td>" + kunde.film + "</td><td>" + kunde.antall + "</td><td>" + kunde.fornavn + "</td><td>"
        + kunde.etternavn + "</td><td>" + kunde.telefonnr + "</td><td>" + kunde.epost + "</td>";
    ut += "</tr>"

    // Kombinerer både tabell- og ut-strengen og setter dette inn i en tom div-element slik at
    // tabellen vises når brukeren trykker på knappen
    document.getElementById("alleBilletter").innerHTML = tabell + ut;

    // Vi definerer en ny variabel alleInputs, som selekter alle inputs og erstatter med en tom string
    let alleInputs = document.querySelectorAll("input");
    alleInputs.forEach(singleInput => singleInput.value = "");
    console.log(billetter)
    }
}

// Vi sletter alle billettene ved å erstatte ut-strengen med en tom string,
// og deretter det samme med div-elementen som viser infoen på HTML
function slettBillett() {
    ut = "";
    document.getElementById("alleBilletter").innerHTML = "";
}