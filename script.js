// ================= TESTIMONIAL SLIDER =================

const reviews = [
    {
        text: "The makeup was absolutely beautiful. I felt so confident and special on my wedding day.",
        name: "— Priya"
    },

    {
        text: "She understood exactly what I wanted. The final look was natural, elegant and beautiful.",
        name: "— Ananya"
    },

    {
        text: "Amazing makeup artist! Very professional and friendly. Highly recommended.",
        name: "— Sneha"
    }
];

let reviewIndex = 0;


function showReview() {

    document.getElementById("testimonialText").textContent =
        `"${reviews[reviewIndex].text}"`;

    document.getElementById("testimonialName").textContent =
        reviews[reviewIndex].name;
}


function nextReview() {

    reviewIndex++;

    if (reviewIndex >= reviews.length) {
        reviewIndex = 0;
    }

    showReview();
}


function previousReview() {

    reviewIndex--;

    if (reviewIndex < 0) {
        reviewIndex = reviews.length - 1;
    }

    showReview();
}


// ================= BOOKING FORM =================

document.getElementById("bookingForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const phone =
            document.getElementById("phone").value;

        const email =
            document.getElementById("email").value;

        const service =
            document.getElementById("service").value;

        const date =
            document.getElementById("date").value;


        // Booking message
        const message =
`💄 NEW MAKEUP BOOKING

👤 Name: ${name}
📱 Phone: ${phone}
📧 Email: ${email}
💅 Service: ${service}
📅 Date: ${date}

Please contact the client to confirm the booking.`;


        // YOUR SISTER'S WHATSAPP NUMBER
        const whatsappNumber = "9382579264";


        // Create WhatsApp link
        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);


        // Open WhatsApp
        window.open(whatsappURL, "_blank");


        // Clear form
        this.reset();

    }
);
// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
});
