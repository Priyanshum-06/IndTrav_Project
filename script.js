const menuBtn = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
document.addEventListener("DOMContentLoaded", () => {
    // Toggle the navigation menu on small screens
    const menuBtn = document.getElementById("menu_btn");
    const navLinks = document.getElementById("nav-links");
  
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  
    // Search form submission handling
    const searchForm = document.querySelector(".header form");
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Capture input values
      const destination = searchForm.querySelector("input[placeholder='Where are you going?']").value.trim();
      const location = searchForm.querySelector("input[placeholder='Location']").value.trim();
      const tourType = searchForm.querySelector("input[placeholder='Tour type']").value.trim();
  
      // Validate the inputs
      if (destination && location && tourType) {
        // Simulate search action or navigate to search results page
        alert(`Searching for ${tourType} in ${location}, destination: ${destination}`);
        // Redirect to a search results page, if needed:
        // window.location.href = `search.html?destination=${destination}&location=${location}&tourType=${tourType}`;
      } else {
        alert("Please fill out all fields before searching.");
      }
    });
  });
  

  






menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line":"ri-menu-line");
}); 

navLinks.addEventListener("click", (e)=> {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption, 
});
ScrollReveal().reveal(".header_container p", {
    ...scrollRevealOption,
    delay: 500, 
});
ScrollReveal().reveal(".header_container form", {
    ...scrollRevealOption, 
    delay: 1000,
});

ScrollReveal().reveal(".feature_card", {
    duration: 1000,
    interval: 500,
});

ScrollReveal().reveal(".destination_card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".package_card", {
    ...scrollRevealOption,
    interval: 500,
});

const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
    },
});



