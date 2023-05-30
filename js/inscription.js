function generer(){

    var monformulaire = document.forms.formulaire1;

    var newline = document.createElement("tr");
    var col1 = document.createElement("td");
    var col2 = document.createElement("td");
    var col3 = document.createElement("td");
    var col4 = document.createElement("td");

    style  = ""
    if (monformulaire.elements["style 1"].checked){
        style = "Modern-jazz"
    } 
    if (monformulaire.elements["style 2"].checked){
        if (style != ""){
            style += ", "
        }
        style += "Hip-Hop"
    }
    if (monformulaire.elements["style 3"].checked){
        if (style != ""){
            style += ", "
        }
        style += "Danse africaine"
    }
    if (monformulaire.elements["style 4"].checked){
        if (style != ""){
            style += ", "
        }
        style += "Urban dance"
    }
    if (monformulaire.elements["style 5"].checked){
        if (style != ""){
            style += ", "
        }
        style += "Rock"
    }



    if (monformulaire.elements["prenom"].value != ""){
        if (monformulaire.elements["nom"].value != ""){
            if (monformulaire.elements["niveau"].value != "Sélectionnez votre niveau"){
                if (monformulaire.elements["mail"].value != ""){
                    if (style != ""){

                        col1.textContent = monformulaire.elements["prenom"].value;
                        col2.textContent = monformulaire.elements["nom"].value;
                        col3.textContent = monformulaire.elements["niveau"].value;
                        col4.textContent = style;

                        newline.append(col1,col2,col3,col4);

                        var tableau = document.getElementById("montab");
                        tableau.appendChild(newline);

                    } else { alert("Vous n'avez pas entré votre style de dance"); }
                } else { alert("Vous n'avez pas entré votre mail"); }
            } else { alert("Vous n'avez pas entré votre niveau"); }
        } else { alert("Vous n'avez pas entré votre nom"); }
    } else { alert("Vous n'avez pas entré votre prénom"); }
}