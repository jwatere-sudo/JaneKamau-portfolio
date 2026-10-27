const yearElement = document.getElementById("year");
const recommendationForm = document.getElementById("recommendation-form");
const recommendationList = document.getElementById("recommendation-list");
// Display the current year
yearElement.textContent = new Date().getFullYear();

// Add a new recommendation
recommendationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById(
        "recommendation-name"
    ).value.trim();

    const recommendation = document.getElementById(
        "recommendation-text"
    ).value.trim();

    if (!recommendation) {
        alert("Please enter a recommendation.");
        return;
    }

    // Create the recommendation card safely
    const card = document.createElement("article");
    card.className = "card recommendation-card";

    const message = document.createElement("p");
    message.textContent = `"${recommendation}"`;

    const author = document.createElement("h4");
    author.textContent = name ? `— ${name}` : "— Anonymous";

    card.appendChild(message);
    card.appendChild(author);

    recommendationList.appendChild(card);

    recommendationForm.reset();

    alert("Thank you! Your recommendation has been added.");

    card.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});
