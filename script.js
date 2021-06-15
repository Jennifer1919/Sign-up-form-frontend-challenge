 //can le button est appuyé:
    //si un des input est faux il faut: mettre le border en rouge, afficher le l'icone erreur, affiché le texte erreur
    //retirer le message d'erreur par défaut
 
 var input = document.getElementsByTagName("input");
 var button = document.getElementsByTagName("button");
 var form = document.getElementsByTagName("form");

 var wrong = function(){

    for(var i = 0; i < input.length; i++){

        //si une ou plusieur imput son vide
        if(input[i].validity.valueMissing === true){
            input[i].setCustomValidity(" ");
            input[i].className = "error"; //change l'aspect de la case  et affiche le point d'exclamation
            input[i].nextElementSibling.style.display = "block"; // affiche le message d'erreur
            input[i].reset();}
      
         //si l'email est faux le message d'erreur est affiché  
        else if(input[2].validity.typeMismatch===true){
            input[2].setCustomValidity(" ");
            input[2].className = "error";
            input[2].nextElementSibling.style.display = "block";
            }
//PROBLEME : Si on fait une erreur, qu'on la corrige tout en créant une erreur ailleurs, le formulaire s'envoie quand même.
        //if (input[i].validity.valueMissing === false && input[2].validity.typeMismatch===false ){
         //   form[0].submit();
      //  }
        

    };

 }

 button[0].addEventListener("click", wrong);
 
