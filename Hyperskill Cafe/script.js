let submitBtn;
let inputTitle;
let inputText;
let inputName;
let reviewsRow;

window.onload = function (){
    submitBtn = document.getElementById("reviewButton");
    inputTitle = document.getElementById("reviewTitle");
    inputText = document.getElementById("reviewText");
    inputName = document.getElementById("reviewName");
    reviewsRow = document.getElementById("reviewsRow");
    reviewForm = document.getElementById("reviewForm");
    reviewForm.addEventListener("submit", function (event){
        event.preventDefault();
    });
    reviewForm.addEventListener("submit", addReview);
}

function addReview () {
    const newReviewTitle = inputTitle.value.toString();
    const newReviewText = inputText.value.toString();
    const newReviewName = inputName.value.toString();

    if((newReviewTitle.length !== 0) && (newReviewText.length !== 0)) {
        let newReviewCol = document.createElement("div");
        newReviewCol.classList.add("col","col-lg-4","col-md-6","py-3");

        let newReviewCard = document.createElement("div");
        newReviewCard.classList.add("card","h-100");

        let newReviewCardBody = document.createElement("div");
        newReviewCardBody.classList.add("card-body");

        let newReviewCardTitle = document.createElement("h4");
        newReviewCardTitle.classList.add("card-title");
        newReviewCardTitle.innerText = newReviewTitle;
        let newReviewCardBlockquote = document.createElement("blockquote");
        newReviewCardBlockquote.classList.add("blockquote", "mb-0");
        let newReviewCardText = document.createElement("p");
        newReviewCardText.innerText = newReviewText;
        let newReviewCardFooter = document.createElement("footer");
        newReviewCardFooter.classList.add("text-end","blockquote-footer");
        let newReviewCardName = document.createElement("i");
        newReviewCardName.innerText = newReviewName || "Anonymous";

        newReviewCardFooter.appendChild(newReviewCardName);
        newReviewCardBlockquote.appendChild(newReviewCardText);
        newReviewCardBlockquote.appendChild(newReviewCardFooter);
        newReviewCardBody.appendChild(newReviewCardTitle);
        newReviewCardBody.appendChild(newReviewCardBlockquote);
        newReviewCard.appendChild(newReviewCardBody);
        newReviewCol.appendChild(newReviewCard);

        reviewsRow.appendChild(newReviewCol);
    }
}