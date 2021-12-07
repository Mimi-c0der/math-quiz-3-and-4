function add_user(){
    p1_var = document.getElementById("p1_name").value;
    p2_var = document.getElementById("p2_name").value;
    
    localStorage.setItem("player 1 name" , p1_var);
    localStorage.setItem("player 2 name" , p2_var);

    window.location = "game_page.html"
}