document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Function to handle "Read More" button clicks
function openArticle(topic) {
    const articles = {
        space: "#space.html",
        genetics: "#dna.html",
        ocean: "#ocean.html",
        ai: "#ai.html",
        climate: "#climate.html",
        quantum: "#quantum.html",
    };

    // if (articles[topic]) {
    //     window.location.href  =  articles[topic];
    // } else {
    //     alert("Article not found!");
    // }
}
// Function to handle "View Full Guide" button clicks
function openExperiment(topic) {
    const guides = {
        volcano: "#volcano_experiment.html",
        circuit: "#simple_circuit_experiment.html",
        density: "#water_density_experiment.html",
        ai: "#ai_experiment.html",
        climate: "#climate_change_experiment.html",
        quantum: "#quantum",
    };

    if (guides[topic]) {
        window.location.href = guides[topic];
    } else {
        alert("Guide not found!");
    }
}
// Simple JavaScript to validate the form inputs
document.getElementById("contact-form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        event.preventDefault(); // Prevent form submission if any field is empty
    } else {
        alert("Thank you for your message! We will get back to you shortly.");
    }
});
// submission of blog
    document.getElementById('blogForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from refreshing the page
        
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const author = document.getElementById('author').value;
        const email = document.getElementById('email').value;

        // Simulated behavior for submission (you'll later replace this with actual backend logic)
        console.log('Blog Submitted:', { title, content, author, email });

        // Show response message
        document.getElementById('responseMessage').style.display = 'block';

        // Reset form
        document.getElementById('blogForm').reset();

          
    if (!title|| !contact || !author || !email) {
        alert("Please fill out all fields before submitting.");
        event.preventDefault(); // Prevent form submission if any field is empty
    } else {
        alert("Thank you for your message! We will get back to you shortly.");
    }
    });
