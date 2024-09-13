const allBtns = document.querySelectorAll(".buttons");
const submitBtn = document.getElementById("submitBtn");
let selectedRating = null;

allBtns.forEach(btn => {
    btn.addEventListener("click", event => {
        selectedRating = event.target.textContent;
        allBtns.forEach(btn => {btn.classList.replace("selected", "buttons")}); 
        event.target.classList.replace("buttons", "selected"); 
       
    })
})

submitBtn.addEventListener("click", () => {
    const btnContainer = document.getElementById("button-container");
    const headingText = document.getElementById("headingText");
    const bodyText = document.getElementById("descriptionText");
    const card = document.querySelector(".container");
    const image = document.querySelector(".image");
    const reviewNote = document.createElement("span")

    if (selectedRating){
        reviewNote.textContent = `You selected ${selectedRating} out of 5`
        btnContainer.classList.add("hidden");
        submitBtn.classList.add("hidden");
        card.classList.add("align");
        card.insertBefore(reviewNote, headingText);
        reviewNote.classList.add("note-style")
        headingText.textContent = "Thank you!";
        bodyText.textContent = "We appreciate you taking the time to gice a rating. If you ever need more support, don't hesitate to get in touch!";
        image.parentElement.classList.replace("image-container", "tnx-image-container")
        image.src = "images/illustration-thank-you.svg";

    }
    else{
        alert(`Please select a rating`)
    }
})