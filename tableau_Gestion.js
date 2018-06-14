

function tableauDépense () {
	var dateElt = document.createElement("p");
    dateElt.appendChild(document.createTextNode(lien.date));

    var MontantElt = document.createElement("p");
    MontantElt.appendChild(document.createTextNode(lien.Montant));

    var DescriptElt = document.createElement("span");
    DescriptElt.appendChild(document.createTextNode(lien.description));

    var SupprimElt = document.createElement("span");
    SupprimElt.id = "supprimer";

    var divLienElt = document.createElement("div");
    divLienElt.style.color = "#428bca";
    divLienElt.style.textDecoration = "none";
    divLienElt.style.marginRight = "5px";
    divLienElt.classList.add("depense");
    divLienElt.appendChild(dateElt);
    divLienElt.appendChild(ligneTitreElt);
    divLienElt.appendChild(SupprimElt);

    return divLienElt;
}


var gestion : {
	init:function(date, description, montant){
	this.date = date,
	this.description = description,
	this.montant = montant
	},
	decrire:function(){
		var description=this.date + "" + this.description + "" + this.montant;
		return description;
	}
};


var date = document.getbyId("date");
var form = document.querySelector("form");
form.addEventListener("submit", function(e){
	 e.preventDefault();
	 var result = {
	 	dateDep = e.target.date.elements.date.value;
		descripDep = e.target.elements.description.value;
		montantDep = e.target.elements.montant.value;
	 };	
});


depense.push(result);
