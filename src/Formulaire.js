import React, { Component } from "react";
class Formulaire extends Component {
render() {
return (
<div className="cont">
    <form>
    <fieldset>
    <legend>INSCRIPTION</legend> 
        <input type="radio" name="sexe" value="Madame" id="Madame"/>
     <label for="oui" >Mme</label>
      <input type="radio" name="sexe" value="Monsieur" id="Monsieur"/>
     <label for="oui">Mr</label>
     <br></br>
     <label for="prenom">Votre prenom :</label>
     <br></br>
   <input type="text" name="prenom" size="20"/> 
   <br></br>
     <label for="nom">Votre nom :</label>
     <br></br>
   <input type="text" name="nom" size="20"/> 
   <br></br>
     <label for="mdp">Votre mot de passe :</label>
     <br></br>
   <input type="password" name="mdp" size="20"/> 
   <br></br>
     <label for="carriere">Vous étes :</label>
   <select>
       <option>Un particulier</option>
       <option>Un professionnel</option>
       <option>Un instituionnel</option>
   </select>
   <br></br>
     <label for="carriere">Le moi pour rendre :</label>
     <br></br>
   <select size="3">
       <option>janvier</option>
       <option>février</option>
       <option>mars</option>
       <option>avril</option>
       <option>mai</option>
       <option>juin</option>
       <option>juillet</option>
       <option>août</option>
       <option>septembre</option>
       <option>octobre</option>
       <option>novembre</option>
       <option>décembre</option>

   </select>
       <br></br>
   	<label for="location">Quel type de presentation recherchez vous ?</label>
       <br></br>
   	<input type="radio" name="location" value="Location de mobilier" id="location"/>
     <label for="location" >Location de mobilier</label>
    <input type="radio" name="location" value="Achat de mobilier" id="Achat"/>
     <label for="Achat" >Achat de mobilier</label>
     <br></br>
     <label for="location">Votre message :</label>     <br></br>

   	 <textarea name="msg" placeholder="Vous pouvez saisir ici un message" value="placeholder"></textarea> 
        <br></br>
        <button className="btn1" >Annuler</button>
        <button className="btn2">Envoyer</button>

    </fieldset>
    </form>
</div>
);
}
}
export default Formulaire;