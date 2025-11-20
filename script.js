function toggleMenu() {
  const nav = document.querySelector('ul');
  nav.classList.toggle('responsive');
}

// Initialize EmailJS with your public key
(function() {
    emailjs.init("MRZm-r_GS_RBQtH65");
})();

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('mycontact');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('nc').value.trim();
    const email = document.getElementById('ec').value.trim();
    const message = document.getElementById('ms').value.trim();
    
    // Validate fields
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all required fields!');
      return;
    }
    
    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address!');
      return;
    }
    
    // Show sending message
    const submitBtn = document.getElementById('smb');
    submitBtn.value = 'Sending...';
    submitBtn.disabled = true;
    
    // Send email using EmailJS
    emailjs.send("service_0unvktm", "template_xe2q1ij", {
      from_name: name,
      from_email: email,
      message: message
    })
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert(`Thank you, ${name}!\n\nYour message has been sent successfully.\nI'll get back to you at ${email} soon!`);
      form.reset();
      submitBtn.value = 'Send Message';
      submitBtn.disabled = false;
    })
    .catch(function(error) {
      console.log('FAILED...', error);
      alert('Oops! Something went wrong. Please try again or email me directly at chawanratc.n@gmail.com');
      submitBtn.value = 'Send Message';
      submitBtn.disabled = false;
    });
  });
});
