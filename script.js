const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const dateSection = document.getElementById("dateSection");
const confirmBtn = document.getElementById("confirm");
const finalMessage = document.getElementById("finalMessage");

noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * 200 - 100;
    const y = Math.random() * 150 - 75;

    noBtn.style.transform =
        `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {

    dateSection.classList.remove("hidden");

    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

confirmBtn.addEventListener("click", () => {

    dateSection.classList.add("hidden");

    finalMessage.classList.remove("hidden");
});
