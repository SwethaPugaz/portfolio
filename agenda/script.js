document.querySelectorAll('.day-button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.day-button').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        alert(`Agenda for ${this.textContent}`);
    });
});
