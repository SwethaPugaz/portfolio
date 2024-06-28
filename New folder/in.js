document.addEventListener("DOMContentLoaded", function() {
    const learnMoreButtons = document.querySelectorAll(".learn-more");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");
    const contentLinks = document.querySelectorAll(".content-link");

    learnMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const modalId = this.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            modal.style.display = "block";
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", function() {
            const modalId = this.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            modal.style.display = "none";
        });
    });

    window.addEventListener("click", function(event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });

    contentLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const contentId = this.getAttribute("data-content");
            const modal = this.closest(".modal");
            const contents = modal.querySelectorAll(".content");
            contents.forEach(content => {
                content.classList.remove("active");
            });
            const activeContent = modal.querySelector(`#${contentId}`);
            activeContent.classList.add("active");
        });
    });
});
