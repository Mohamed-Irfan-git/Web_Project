document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");
    
    faqItems.forEach((item) => {
      item.addEventListener("click", function () {
        
        this.classList.toggle("active");
        
        const answer = this.querySelector(".faq-answer");
        
        if (this.classList.contains("active")) {
          answer.style.display = "block";

          this.querySelector("i").classList.remove("bi-file-plus");
          this.querySelector("i").classList.add("bi-file-minus");
        } else {
          answer.style.display = "none";
          
          this.querySelector("i").classList.remove("bi-file-minus");
          this.querySelector("i").classList.add("bi-file-plus");
        }
      });
    });
  });