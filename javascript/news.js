document.addEventListener("DOMContentLoaded", function() {
    const newsItems = document.querySelectorAll(".news-item");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let index = 0;

    // Function to show the next news item
    function showNext() {
        if (index < newsItems.length - 1) {
            index++;
        } else {
            index = 0; // Go back to the first item
        }
        updateNews();
    }

    // Function to show the previous news item
    function showPrev() {
        if (index > 0) {
            index--;
        } else {
            index = newsItems.length - 1; // Go to the last item
        }
        updateNews();
    }

    // Function to update the visibility of news items
    function updateNews() {
        // Reset all items to be hidden
        newsItems.forEach(item => item.style.display = "none");

        // Display the current item
        newsItems[index].style.display = "flex";
    }

    // Initialize the first item to be visible
    updateNews();

    // Attach event listeners to buttons
    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);
});
