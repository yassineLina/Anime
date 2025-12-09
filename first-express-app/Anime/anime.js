// script.js
document.addEventListener('DOMContentLoaded', function() {
    const sampleAnimeData = [
        {
            title: "Attack on Titan",
            genre: "Action, Drama, Fantasy",
            episodes: 75,
            rating: 9.0,
            status: "Finished",
            statusClass: "finished"
        },
        {
            title: "Demon Slayer",
            genre: "Action, Fantasy",
            episodes: 55,
            rating: 8.7,
            status: "Ongoing",
            statusClass: "ongoing"
        },
        {
            title: "Fullmetal Alchemist: Brotherhood",
            genre: "Action, Adventure, Drama",
            episodes: 64,
            rating: 9.1,
            status: "Finished",
            statusClass: "finished"
        },
        {
            title: "My Hero Academia",
            genre: "Action, Comedy, School",
            episodes: 138,
            rating: 8.4,
            status: "Ongoing",
            statusClass: "ongoing"
        },
        {
            title: "Death Note",
            genre: "Mystery, Psychological, Thriller",
            episodes: 37,
            rating: 8.6,
            status: "Finished",
            statusClass: "finished"
        }
    ];

    const source = document.getElementById('sampleDataTemplate').innerHTML;
    const template = Handlebars.compile(source);
    const compiledHtml = template({ anime: sampleAnimeData });
    
    document.getElementById('sampleDataContainer').innerHTML = compiledHtml;

    document.getElementById('exploreBtn').addEventListener('click', function() {
        alert('This would redirect to the search/explore page. In a full implementation, this would navigate to the query interface.');
    });

    document.getElementById('learnMoreBtn').addEventListener('click', function() {
        alert('This would show more information about the service. In a full implementation, this would open a detailed documentation page.');
    });

    const quickLinks = document.querySelectorAll('.quick-link');
    quickLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.querySelector('span').textContent;
            alert(`This would navigate to the ${linkText} section. In a full implementation, this would load relevant data from the appropriate database.`);
        });
    });

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            if (this.textContent.includes('Search')) {
                alert('This would navigate to the search interface. In a full implementation, this would load the Handlebars template for querying.');
            } else if (this.textContent.includes('Analytics')) {
                alert('This would navigate to the analytics dashboard. In a full implementation, this would show charts and statistics.');
            } else if (this.textContent.includes('Login')) {
                alert('This would open a login modal. In a full implementation, this would connect to the authentication service.');
            }
        });
    });

    console.log("Anime Data Explorer Welcome Page Loaded");
    console.log("Architecture Overview:");
    console.log("1. Frontend: HTML/CSS/JavaScript with Handlebars templates");
    console.log("2. Central Server: Express.js (lightweight, handles routing)");
    console.log("3. Database Servers: Express.js + Java Spring Boot (handle DB operations)");
    console.log("4. Databases: MongoDB (dynamic data) + PostgreSQL (static data)");
});