function collapse(el){
    const item = document.querySelector("." + el);
    if(item.style.display === "none")
    {
        item.style.display = "block";
    }
    else
    {
        item.style.display = "none";
    }
}