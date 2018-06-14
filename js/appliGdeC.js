var form = document.querySelector("form");
form.addEventlistener("submit",function(e){
    var id = form.elements.identifiant.value;
    var mdp = form.elements.mdp.value;
     e.preventDefault();
});

