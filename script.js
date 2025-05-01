function alertComingSoon() {
    // Removed old alert
}

// Open Inquiry Form
function openForm() {
    document.getElementById('inquiryForm').style.display = 'flex';
}

// Close Inquiry Form
function closeForm() {
    document.getElementById('inquiryForm').style.display = 'none';
}

// Go from first form to second form
function showSecondForm() {
    const message = document.querySelector('#firstForm textarea').value;
    if (message.trim() === '') {
        alert("Please write your message!");
        return;
    }

    document.getElementById('hiddenMessage').value = message;
    document.getElementById('firstForm').style.display = 'none';
    document.getElementById('secondForm').style.display = 'block';
}

// Toggle Navigation menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
