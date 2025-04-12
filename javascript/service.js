function showPopup(serviceName) {
    const modal = document.getElementById("serviceModal");
    const overlay = document.getElementById("overlay");
    const modalContent = document.getElementById("modalContent");

    modalContent.textContent = `${serviceName}`;
    switch(serviceName){
        case 'Service 1':
            modalContent.textContent = `Detailed information about ${serviceName}: 
                This service involves evaluating property prices based on the latest market trends, 
                location, amenities, and more. We ensure accurate valuation to help buyers and sellers 
                make informed decisions. Our team of experts works tirelessly to provide personalized guidance.`;
                break;
        case 'Service 2':
            modalContent.textContent = `Detailed information about ${serviceName}: 
            lorem tecx`;
            break;

    }

    modal.style.display = "block";
    overlay.style.display = "block";
}

function closePopup() {
    const modal = document.getElementById("serviceModal");
    const overlay = document.getElementById("overlay");

    modal.style.display = "none";
    overlay.style.display = "none";
}
