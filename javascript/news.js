document.addEventListener("DOMContentLoaded", function() {
    const newsItems = document.querySelectorAll(".news-item");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let index = 0;

    function showNext() {
        if (index < newsItems.length - 1) {
            index++;
        } else {
            index = 0; 
        }
        updateNews();
    }

    
    function showPrev() {
        if (index > 0) {
            index--;
        } else {
            index = newsItems.length - 1;
        }
        updateNews();
    }

   
    function updateNews() {
        newsItems.forEach(item => item.style.display = "none");
        newsItems[index].style.display = "flex";
    }

   
    updateNews();

   
    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);
});
