const accordionItemHeader = document.querySelectorAll(".accordion-item-header");

accordionItemHeader.forEach(item => {
    item.addEventListener("click", event => {
        item.classList.toggle("active");
        const accordionItemBody = item.nextElementSibling;
        if(item.classList.contains("active")){
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        } else{
            accordionItemBody.style.maxHeight = 0;
        }
    })
})