console.log("hi");

//Get Month
/* const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const currentDate = new Date();
let updateMonth = month[currentDate.getMonth()];
document.querySelector(".month").innerHTML = `<p class="text-[#9338ff] text-2xl">Today is ${updateMonth}</p>`; */

//Get target date
/* const x = new Date
const day = document.querySelector(".day").innerHTML = x.getDay() */

// Set the date we're counting down to
const countDownDate = new Date("June, 12 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.querySelector(".timer").innerHTML = `<p class="text-cyan-400 sm:text-9xl text-2lg">Jin Comback to 2024!<br><span class="text-yellow-300 text-9xl">D-${days}</span></p><br>
    <p class="sm:text-9xl text-2lg hover:underline decoration-wavy text-emerald-300">${days}:${hours}:${minutes}:${seconds}</p>`;


    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".timer").innerHTML = `<p class="timer text-[#9338ff] text-9xl">Zaddy's home!</p>`;
    }
}, 1000);

/* document.querySelector(".image2").onclick = () => tween.play(); */
/* gsap.registerPlugin(TextPlugin)
gsap.to('.timer', {
    duration: 2,
    text: "This is the new text",
    ease: "none",
}); */

/* gsap.to('.image1', {
    y: 100,
    duration: 5,
    x: 50,
    delay: 2
}) */


/* */

let tween = gsap.to(".image2", {
    duration: 5,
    delay: 2,
    ease: "elastic.out(1,0.3)",
    y: -250
});




