

function toggleTheme() {
     
    const body = document.body;
    const isDarkMode = body.classList.toggle("dark-mode");

    // Save user preference
    if (isDarkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
}











const changeProjects = (value) => {
    const choice = value;
    
    let url ;
    if (choice === 'all') {
        url = "https://api.github.com/users/Baders-Account/starred";
        
    }

    else{
        url = `https://api.github.com/search/repositories?q=user:Baders-Account+topic:${choice}`
    }

    

    const projectsContainer = document.getElementById('projects-container');

    // Loading while fetching
      projectsContainer.innerHTML = `
    <div class="text-center w-100 py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-3 text-muted">Loading projects...</p>
    </div>
  `;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
                projectsContainer.innerHTML = '';
        const repos = Array.isArray(data) ? data : data.items;
 
        // Sorting Logic
            const sortVal = document.getElementById("sortProjects").value;

            if (sortVal === "newest") {
                repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));}  
            else if (sortVal === "oldest") {
                repos.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));}      
            else if (sortVal === "az") {
                repos.sort((a, b) => a.name.localeCompare(b.name));}


       repos.forEach(project => {
 
            const cardWrapper = document.createElement('div');
            cardWrapper.className = 'col-6 col-md-6 col-lg-4 mb-4';

  
            const link = document.createElement('a');
            link.href = project.html_url;
            link.target = '_blank';
            link.className = 'anchors'; 
            
  
            const card = document.createElement('div');
            card.className = 'card shadow-sm h-100 rounded-4'; 

  
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';
            cardBody.innerHTML = `
            <h5 class="card-title mb-3">${project.name}</h5>
            <p class="card-text mb-4">${project.description || 'No description available.'}</p>
                `;


            card.appendChild(cardBody);
            link.appendChild(card);
            cardWrapper.appendChild(link);
            projectsContainer.appendChild(cardWrapper);
});

    })
    
    .catch(error => console.error('Error fetching projects:', error));

    
    
};

document.addEventListener("DOMContentLoaded", () => {
  changeProjects("all");
  const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }
   

    const savedName = localStorage.getItem("name");
  if (savedName) {
    document.getElementById("cus").innerHTML = `<h3 class="mt-3">Welcome back, ${savedName}! </h3>`;
  }
 

});

document.getElementById("sortProjects").addEventListener("change", () => {
    
    const filter = document.getElementById("choices").value;
    changeProjects(filter);
});





const form = document.getElementById('form');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');

const validateName = () => {
  if (userName.value.trim() === '') {
    userName.classList.add('is-invalid');
    return false;
  } else {
    userName.classList.remove('is-invalid');
    userName.classList.add('is-valid');
    return true;
  }
};

const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    email.classList.add('is-invalid');
    return false;
  } else {
    email.classList.remove('is-invalid');
    email.classList.add('is-valid');
    return true;
  }
};

const validateMessage = () => {
  if (message.value.trim().length == 0) {
    message.classList.add('is-invalid');
    return false;
  } else {
    message.classList.remove('is-invalid');
    message.classList.add('is-valid');
    return true;
  }
};


[userName, email, message].forEach((input) => {
  input.addEventListener('input', () => {
    validateName();
    validateEmail();
    validateMessage();
    submitBtn.disabled = !(validateName() && validateEmail() && validateMessage());
  });
});


form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateName() && validateEmail() && validateMessage()) {
    // Save visitor name
    localStorage.setItem("name", userName.value);

    alert(`Thank you, ${userName.value}! Your message has been received.`);
    form.reset();
    [userName, email, message].forEach((input) => input.classList.remove('is-valid'));
    submitBtn.disabled = true;
  }
});


let seconds = 0;
setInterval(() => {
  seconds++;
  document.getElementById("timer").textContent = `Time on site: ${seconds}s`;
}, 1000);