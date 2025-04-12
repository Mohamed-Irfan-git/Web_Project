function showPopup(serviceName) {
    const modal = document.getElementById("serviceModal");
    const overlay = document.getElementById("overlay");
    const modalContent = document.getElementById("modalContent");

    modalContent.textContent = `${serviceName}`;
    switch(serviceName){
        case 'Service 1':
            modalContent.textContent = `Detailed information about ${serviceName}: 
                Our professional property valuation service provides a detailed assessment of 
                your property's market value. Whether you're planning to sell, buy, refinance, or 
                invest, our experts use current market data, property condition, location, 
                and comparable sales to deliver an accurate valuation. This service 
                helps you make confident and informed real estate decisions.`;
                break;
        case 'Service 2':
            modalContent.textContent = `Detailed information about ${serviceName}: 
            Our Mortgage Assistance service is designed to help you navigate the
             complex process of securing a home loan. Whether you're a first-time buyer 
             or looking to refinance, we guide you through every step—from comparing loan 
             options to preparing documentation and negotiating with lenders. Our goal is 
             to help you find the best mortgage solution that 
            fits your financial situation.`;
            break;

        case 'Service 3':
                modalContent.textContent = `Detailed information about ${serviceName}: 
                Ensure peace of mind before buying a property. Our home 
                inspection covers structural integrity, plumbing, electrical 
                systems, roofing, and more. You'll receive a full report to 
                help you make an informed purchase decision.`;
                break;

         case 'Service 4':
                modalContent.textContent = `Detailed information about ${serviceName}: 
                Transform your space with expert interior design and renovation 
                services. We offer tailored solutions for layout improvements, 
                modern styling, and complete remodeling that 
                align with your vision and budget.`;
                break;
            
        case 'Service 5':
                modalContent.textContent = `Detailed information about ${serviceName}: 
                From identifying suitable properties to finalizing the purchase, 
                we guide you every step of the way. Our team helps with market 
                research, property visits, negotiations, and paperwork to make 
                your buying journey smooth.`;
                break;

        case 'Service 6':
                modalContent.textContent = `Detailed information about ${serviceName}: 
                Sell your property faster and for the right price. We offer 
                marketing strategies, property staging advice, listing services, and 
                negotiations support to attract
                serious buyers and close deals efficiently.`;
                break;

        case 'Service 7':
                modalContent.textContent = `Detailed information about ${serviceName}: 
                Looking to rent out your property or find a place to stay? 
                We connect landlords with reliable tenants and help tenants 
                find rentals that match their 
                needs—complete with lease management and documentation.`;
                break;
                
        case 'Service 8':
            modalContent.textContent = `Detailed information about ${serviceName}: 
            Avoid legal pitfalls with our comprehensive legal documentation service.
            We prepare, review, and verify contracts, deeds, agreements, and other 
            essential paperwork 
            involved in real estate transactions.`;
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
