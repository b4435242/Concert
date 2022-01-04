var page;

function prev_page(){
    page = page>1?page-1:page;
    set_image(page);
}

function next_page(){
    page = page<14?page+1:page;
    set_image(page);
}

function set_image(page){
    document.getElementById("image").src = "./images/"+page+".jpg";
}

function get_page(){
    let url = new URL(window.location.href);
    page = url.searchParams.get("page");
    return parseInt(page);
}

