const hour = document.getElementById("clock__hour");
const minutes = document.getElementById("clock__minutes");
const seconds = document.getElementById("clock__seconds");

const clock = () => {
    let date = new Date();
    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * 6;
    let ss = date.getSeconds() * 6;

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    minutes.style.transform = `rotateZ(${mm}deg)`;
    seconds.style.transform = `rotateZ(${ss}deg)`;
};

setInterval(clock, 1000);

const textHour = document.getElementById("clock__text-hour");
const textMinutes = document.getElementById("clock__text-minutes");
const textAmPm = document.getElementById("clock__text-ampm");

const dateDay = document.getElementById("clock__date-day");
const dateMonth = document.getElementById("clock__date-month");
const dateYear = document.getElementById("clock__date-year");

const clockText = () => {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ampm;

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    if (hh >= 12) {
        hh -= 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    if (hh === 0) {
        hh = 12;
    }

    if (hh < 10) {
        hh = `0${hh}`;
    }

    if (mm < 10) {
        mm = `0${mm}`;
    }

    textHour.innerHTML = `${hh}:`;
    textMinutes.innerHTML = mm;
    textAmPm.innerHTML = ampm;

    dateDay.innerHTML = day;
    dateMonth.innerHTML = `${months[month]}, `;
    dateYear.innerHTML = year;
};

setInterval(clockText, 1000);

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bxs-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "bxs-moon" : "bxs-sun";

if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeButton.classList[selectedIcon === "bxs-moon" ? "add" : "remove"](
        iconTheme
    );
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});
