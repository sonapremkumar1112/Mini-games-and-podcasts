document.addEventListener("DOMContentLoaded", function () {
    // Initially display the home section and hide others
    showSection("sectionhome");

    // Function to toggle sections based on user selection
    function showSection(sectionId) {
        let sections = document.querySelectorAll("div[id^='section']");
        sections.forEach((section) => {
            section.style.display = "none";
        });
        document.getElementById(sectionId).style.display = "block";
    }

    // Event Listeners for navigating to different sections
    document.querySelectorAll(".elem").forEach((element) => {
        element.addEventListener("click", function () {
            let targetSection = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            showSection(targetSection);
        });
    });

    // Back button functionality to return to home section
    document.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", function () {
            showSection("sectionhome");
        });
    });

    // Dark Mode Toggle
    let darkModeToggle = document.createElement("button");
    darkModeToggle.innerText = "Dark Mode";
    darkModeToggle.style.position = "fixed";
    darkModeToggle.style.top = "10px";
    darkModeToggle.style.right = "10px";
    darkModeToggle.style.padding = "10px";
    darkModeToggle.style.backgroundColor = "#333";
    darkModeToggle.style.color = "white";
    darkModeToggle.style.border = "none";
    darkModeToggle.style.cursor = "pointer";

    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Submit Button Function (For Future Enhancements)
    let submitButton = document.createElement("button");
    submitButton.innerText = "Submit Feedback";
    submitButton.style.position = "fixed";
    submitButton.style.bottom = "10px";
    submitButton.style.right = "10px";
    submitButton.style.padding = "10px";
    submitButton.style.backgroundColor = "#28a745";
    submitButton.style.color = "white";
    submitButton.style.border = "none";
    submitButton.style.cursor = "pointer";

    document.body.appendChild(submitButton);

    submitButton.addEventListener("click", function () {
        let feedback = prompt("Enter your feedback:");
        if (feedback) {
            alert("Thank you for your feedback!");
        }
    });

    // Adding Dark Mode CSS via JavaScript
    let darkModeStyles = document.createElement("style");
    darkModeStyles.innerHTML = `
        .dark-mode {
            background-color: #222;
            color: white;
        }
        .dark-mode .top, .dark-mode .top1, .dark-mode .blk {
            background-color: #444;
        }
        .dark-mode button {
            background-color: #666 !important;
            color: white;
        }
    `;
    document.head.appendChild(darkModeStyles);
});
