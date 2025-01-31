
// Selecteer het formulier en de content div.
const ticketForm = document.querySelector('form');
const content = document.querySelector('.content');
 // Event listener toevoegen aan het formulier
ticketForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value; 
    const hasDiscount = document.getElementById('discountCard').checked; // True als de checkbox is aangevinkt.
    const numTickets = document.getElementById('tickets').value; 


    if (isNaN(age) || age === "") {
        alert("Je moet een geldig nummer invullen voor de leeftijd.");
        return;  // Geen tickets maken als de leeftijd geen nummer is.
    }

    // Checken of de leeftijd tussen de 16 en 123 jaar is.
    if (age < 16 || age > 123) {
        alert("Leeftijd moet tussen de 16 en 123 jaar zijn.");
        return;  // Geen tickets maken als de leeftijd niet tussen 16 en 123 is.
    }

    // 10 euro per ticket als er korting is, anders 15 euro per ticket.
    let pricePerTicket;
    if (hasDiscount) {
        pricePerTicket = 10;
    } else {
        pricePerTicket = 15;
    }
    // Totaal prijs berekenen.
    const totalPrice = pricePerTicket * numTickets;

    // Format prijs met tofixed(2) om 2 decimalen te krijgen en replace om de punt te vervangen door een komma.
    const formattedPricePerTicket = pricePerTicket.toFixed(2).replace('.', ',');
    const formattedTotalPrice = totalPrice.toFixed(2).replace('.', ',');

    // HTML ticket message.
    let ticketHTML = `
        <h2>Bedankt voor uw bestelling!</h2>
        <p>U heeft ${numTickets} kaart(en) gereserveerd.</p>
        <p>Het totaal bedrag voor uw bestelling is €${formattedTotalPrice}.</p>
        <div class="ticket-container">
    `;

    // Ticket maken met QR die in images staat.
    for (let i = 0; i < numTickets; i++) {
        ticketHTML += `
            <div class="ticket">
                <p><strong>Naam:</strong> ${firstName} ${lastName}</p>
                <p><strong>Prijs:</strong> €${formattedPricePerTicket}</p>
                <img src="/images/QR.svg" alt="QR Code">
            </div>
        `;
    }

    // Sluit de ticket-container div.
    ticketHTML += `</div>`;

    // Voeg de ticketHTML toe aan de content div.
    content.innerHTML = ticketHTML;
});
