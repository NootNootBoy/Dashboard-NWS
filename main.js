// console.log("je charge le debut..");
// chargerPlus();
// async function chargerPlus() {
//   console.log("je charge...");

//   let aAjouter = await chargerJSON("etudiant.json");

//   for (let i = 0; i < aAjouter.length; i++) {
//     console.log(ajouterHTML);
//     ajouterHTML(aAjouter[i]);
//   }
// }

// async function chargerJSON(fichier) {
//   let response = await fetch(fichier);
//   let etudiant = await response.json();
//   return etudiant;
// }

// function ajouterHTML(etudiant) {
//   /*
//   let lesEtudiants = document.querySelector("#test");
//   let bouton = document.querySelector("#plus");
// */
var etudiante = [
  {"Societe":"13.7 COMMUNICATION","Prenom":"Sophie","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"3D Dental","Prenom":"J-M","Adresse":"75 route de Lyons la for�t, 76000 Rouen (SEINE BIOPOLIS)","StagiairesNWS":"","Stages":"VACHIERY S�bastien (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"42 STORES","Prenom":"Benjamin","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"42 STORES","Prenom":"ALEXANDRE","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"42 STORES","Prenom":"Franck","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"6BLE","Prenom":"Mounir","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"ABIS INFORMATIQUE","Prenom":"C�dric","Adresse":"133, avenue de Caen 76530 Grand Couronne","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Abysse Corp","Prenom":"Magalie","Adresse":"133 avenue de Caen, Grand-Couronne","StagiairesNWS":"GODEFROY Marine","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Acc�s Sant�","Prenom":"Vincent","Adresse":"310 av des canadiens, 76650 Petit Couronne","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"ACEVI","Prenom":"Isabelle","Adresse":"96 rue Alphonse Allais 76770 Houppeville","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Adecco","Prenom":"Nassima","Adresse":"3 Rond-Point des Bruy�res, 76300 Sotteville l�s Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Adequate Fermeture","Prenom":"Jean-Luc","Adresse":"1, ZA de la Garenne, 76220 Gournay-En-Bray","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"AER Holding","Prenom":"","Adresse":"12 rue Albert R�my, 28250 S�nonches","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":"CAROZZO Emeline"},
  {"Societe":"AFFEN","Prenom":"St�phane","Adresse":"253 rue Honor� 75020 Paris","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"AG2R","Prenom":"Raphael","Adresse":"Parc de la Vatine, 1 rue Fran�ois Perroux, 76130 Mont Saint Aignan","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Agence FPC","Prenom":"Jennifer","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Agence les 5 �l�ments","Prenom":"Anne","Adresse":"Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"AGENCE ME","Prenom":"Barth�l�my","Adresse":"13 rue de le Nostre, 76000 Rouen","StagiairesNWS":"","Stages":"BETTENCOURT Thibault / PREVOST-MAYNEN Alexis (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"AGENCE ME","Prenom":"Marine","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"AGENCE PRINCIPALE","Prenom":"Claire","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"AGIPI","Prenom":"Barbara","Adresse":"80 rue Michel richard delalande 76000 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Agrial","Prenom":"Magalie","Adresse":"CAEN","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"ALENOR","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Altitude Infrastructure","Prenom":"Elisabeth","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Altitude infrastructure","Prenom":"Cindy","Adresse":"Val de reuil","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"ALTIX Automa-Tech","Prenom":"Elodie","Adresse":"Parc d'Affaires des Portes - Voie de l'Or�e 27100 Val de Reuil","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Altran","Prenom":"Sylvain","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Andchor","Prenom":"Robin","Adresse":"72 rue de Lessard, 76000 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Anfray","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"BONNIEU Alexandra (2017-2018)","Apprentis":""},
  {"Societe":"Apave","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"LOGRE Rudy (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"APOLLONET","Prenom":"Alexdandre","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"APRIM","Prenom":"Laurent","Adresse":"56 avenue Albert 1er 14000 Caen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"APTAR Beauty + Home","Prenom":"Serge","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"ARCANGE","Prenom":"Virginie","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"ARKEE","Prenom":"Julien","Adresse":"","StagiairesNWS":"Antoine Pelcat","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Arts et toitures","Prenom":"Elisabeth","Adresse":"6 rue bon marais, 76530 Grand Couronne","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"ARTY STEAM","Prenom":"Erwan","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Asgard Concept SARL","Prenom":"J�rome","Adresse":"8 rue Saint Denis, 76000 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Aspen Pharma","Prenom":"C�line","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Association Emmergence","Prenom":"Pascal","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Association La Pommeraie Jean Vanier","Prenom":"Jean","Adresse":"4 route de Turretot 76280 Criquetot l'Esneval","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":"DUCHENE Manon"},
  {"Societe":"AssurOne Group","Prenom":"Samira","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"ASSYSTEM","Prenom":"Benoit","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"AsWeShare","Prenom":"","Adresse":"Quai Jean de B�thencourt / Village By C.A, Hangar 107 / 76100 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":"DE FARIA CONTO Sol�ne"},
  {"Societe":"Atelier des boiseux","Prenom":"","Adresse":"ZA Cap Darn�tal / 11 rue aux Juifs / 76160 Darn�tal","StagiairesNWS":"","Stages":"","ContratsPro":"DANILO Romain","Apprentis":""},
  {"Societe":"ATELIER DU DESIGN","Prenom":"Fabrice","Adresse":"2 rue Lezurier de la martel 76000 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Atelier houdou","Prenom":"Vincent","Adresse":"4 rue Jacques Daviel, 27300 Bernay","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Atome","Prenom":"Christophe","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"ATSM 76","Prenom":"Thomas","Adresse":"440 mont du gat 76440 Roncherolles en Bray","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"ATTINEOS","Prenom":"Marion","Adresse":"Seine Innopolis","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"ATTINEOS","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"AUTOGLASS","Prenom":"Florent","Adresse":"76890 Val de sa�ne","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"AXA","Prenom":"Brahim","Adresse":"4 chemin de la Poterie, 76240 Belbeuf","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"AXA","Prenom":"Mathilde","Adresse":"410 rue Augustin Fresnel, 76230 Isneauville","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"AXA","Prenom":"Barbara","Adresse":"80 rue Michel Richard Delalande, 76000 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"AXA","Prenom":"Hervé","Adresse":"80 rue Michel Richard Delalande, 76000 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Axecibles","Prenom":"Didier","Adresse":"420 av des Canadiens, 76650 Petit Couronne","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"AZIZ COACHING","Prenom":"Selouane","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Banque Tarneaud","Prenom":"Alain","Adresse":"9 rue du Donjon CS70679, 76008 Rouen Cedex","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Bartereau Photographe","Prenom":"Arnaud","Adresse":"","StagiairesNWS":"","Stages":"LOIDIN Paul (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"B�timent CFA Normandie","Prenom":"Laetitia","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Bbird","Prenom":"Emmanuelle","Adresse":"72 rue de la R�publique, 76140 Le Petit Quevilly","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Be smart EDU","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"MILLET Marc-Alban (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"Be-up developpement","Prenom":"Anita","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"BEAR STUDIO","Prenom":"Rudy","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"BERRY","Prenom":"C�cile","Adresse":"maisondeparfumberry.com","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"BLARD","Prenom":"Julie","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"BLOOMSTERS","Prenom":"Basile","Adresse":"53 BIS Boulevard des Belges 76000 ROUEN","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Blue Forest","Prenom":"Slimane","Adresse":"","StagiairesNWS":"","Stages":"CAMESELLA Rod�ric / COUDER Nathan / LANGENDORF Cl�ment (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"BLUEBERRY","Prenom":"Gaelle","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"BNP","Prenom":"Alain","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Bouygues energies et services","Prenom":"M�lina","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"BOX DECO COULEURS","Prenom":"B�reng�re","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Braysports","Prenom":"Christophe","Adresse":"17 la cl� des Champs, 76270 Neufch�tel-en-Bray","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Budgetbox","Prenom":"Nathalie","Adresse":"50 rue Ettore Bugatti, 76800 Saint-Etienne-Du-Rouvray","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"BUOB","Prenom":"Laurent","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"BUSINESSSHARE","Prenom":"Joffrey","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"CABINET PLANTROU DE LA BRUNIERE","Prenom":"Arnaud","Adresse":"105 all�e Paul Langevin -Immeuble Edison- BP 525- 76235 BOIS GUILLAUME CEDEX","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"CAISSE D�PARGNE NORMANDIE","Prenom":"Marc","Adresse":"151, rue d'Uelzen, 76 230 Bois Guillaume","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"CAMAIEU International","Prenom":"Corinne","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Camembert Production","Prenom":"Doroth�e","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"CAMPANILE","Prenom":"Aur�lien","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Cap finance","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Cap Seine","Prenom":"Nadine","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Cap seine","Prenom":"Yann","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Carmen concept","Prenom":"Sylvie","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"CarrierTransicold","Prenom":"didier","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"CAUX LOC SERVICES","Prenom":"Simon","Adresse":"","StagiairesNWS":"Alexandre MERAULT","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"CAUX LOC SERVICES","Prenom":"Mathieu/Simon","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Caux Seine agglo","Prenom":"Jean-Claude","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Caux Seine d�veloppement","Prenom":"","Adresse":"7 rue des terasses, 76330 Port-J�rome-Sur-Seine","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"CCI Normandie - IFA CFA Marcel Sauvage","Prenom":"","Adresse":"11 rue du Tronquet / BP 256 / 76825 Mont-Saint-Aignan Cedex","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":"LETAILLEUR Arnaud"},
  {"Societe":"CCI Pont-Audemer","Prenom":"Franck","Adresse":"8 bd G.Pompidou, 27500 Pont-Audemer","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"CCMS Eure Madrie Seine","Prenom":"Monia","Adresse":"21 rue de Tournebut - Aubevoye 27940 Le Val d'Hazey","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":"CHAPPELLE Agathe"},
  {"Societe":"CEO MSA Recrutement","Prenom":"Jean-Luc","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"CHEVRON ORONITE","Prenom":"Floriane","Adresse":"Route du pont VIII Gonfreville l'Orcher 76080 le Havre C�dex","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Chez du Bruit dans la Cuisine","Prenom":"Alicia","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Chris music events","Prenom":"Christophe","Adresse":"9 Ter avenue des Sources, 76440 Forges-Les-Eaux","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"CHU Rouen","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"FAVENNEC Allan (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"Cit�m�mes","Prenom":"Mathilde","Adresse":"11 rue du Moulinet, 76000 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Citronnade Mimouna","Prenom":"Nabila","Adresse":"36 rue des Maronniers, 76800 Saint Etienne Du Rouvray","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Cl�ma job","Prenom":"Aur�lia","Adresse":"51 rue de la R�publique, 76250 D�ville l�s Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"CLEOR","Prenom":"Emilie","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"CLEOR","Prenom":"Fabrice","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Clic web design","Prenom":"","Adresse":"7 rue Lamartine, 76380 Canteleu","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Coll�ge Pierre Corneille","Prenom":"C�dric","Adresse":"Coll�ge Pierre Corneille, 6 rue Pierre Corneille, 27210 Le neubourg","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"COM & PUB A7 PUB","Prenom":"Romain","Adresse":"224 avenue des Alli�s 76420 Petit Quevilly","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Com'influence","Prenom":"Mathieu","Adresse":"4 Place de la Haute Vieille tour 76000 ROUEN","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Consulting Time","Prenom":"Lamine","Adresse":"611 chemin du Halage, 76320 Saint-Pierre-Les-Elbeuf","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Continental pharmaceutique","Prenom":"Izild","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Contour Client","Prenom":"Guillaume","Adresse":"2 ter rue Georges Charpak, 76130 Mont-Saint-Aignan","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"COURS PASTEUR","Prenom":"Mickael","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"COVEA","Prenom":"Louis","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Cr�aLIN","Prenom":"Christophe","Adresse":"SAS Route D�partementale 810 27560 LA NOE POULAIN","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Cr�dit agricole","Prenom":"nicolas","Adresse":"","StagiairesNWS":"","Stages":"ZIDI K�vin (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"Cr�dit Agricole","Prenom":"Laurence","Adresse":"chemin de la Bret�que, CS 70800 - 76288 Bois Guillaume","StagiairesNWS":"Bilal","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Cr�dit Agricole","Prenom":"Lysiane","Adresse":"chemin de la Bret�que, CS 70800 - 76288 Bois Guillaume","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Cr�dit du Nord","Prenom":"Marie","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Cuiller fr�res","Prenom":"Julie","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"D-ImPULSE","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"D'AVENTURE&CO","Prenom":"Anne","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"DAIWA France","Prenom":"Guillaume","Adresse":"25 bd Industriel 76300 Sotteville les Rouen","StagiairesNWS":"1","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"DAVIGEL","Prenom":"ou Chaudemanche Pierre","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"DEI FRANCE","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"BELLANGER Pierre (2017-2018)","Apprentis":""},
  {"Societe":"DEBLON DELIENNE","Prenom":"Juliette","Adresse":"Neufchatel En Braye","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Des Contacts A L'Appel","Prenom":"Hatim","Adresse":"72 rue de la R�publique","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Devolis","Prenom":"St�phane","Adresse":"72 rue de la R�publique, 76140 Le Petit Quevilly","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Didactic","Prenom":"Benoit","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"DIGIACTIF","Prenom":"Johan","Adresse":"200 voie D / ZA de la Briqueterie / 76160 Saint-Jacques-sur-Darn�tal","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":"FAUCILLON Tanguy"},
  {"Societe":"Digit","Prenom":"Vincent","Adresse":"72 rue de la R�publique, 76140 Le Petit Quevilly","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Digit&UP","Prenom":"B�r�nice","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Digiwin","Prenom":"Guillaume","Adresse":"181 rue Jean Mermoz 76230 Bois Guillaume","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Digiworks","Prenom":"Alexandre","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"DKTS","Prenom":"Alexandre","Adresse":"617 rue du bout d'amont, 76690 St Georges / Fontaine","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"DMW it","Prenom":"Gr�gory","Adresse":"15 all�e Paul Langevin, 76230 Bois-Guillaume","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"DOMAINEDEFORGES","Prenom":"Aur�lie","Adresse":"avenue ddes sources 76440 forges-les-eaux","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Dynamopub","Prenom":"Herv�","Adresse":"9 rue Georges Braque, 76000 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"EDF","Prenom":"Olivier","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"EDF","Prenom":"Sanaa","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"EGL Formation & Conseil","Prenom":"Eve","Adresse":"57 avenue de Bretagne, 76100 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Elephantask","Prenom":"SANDRINE","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"EM Normandie","Prenom":"Jean-Philippe","Adresse":"9 rue Claude Bloch, 14052Caen Cedex 4/ 30 rue Richelieu, 76600 Le Havre","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"EMO HEBERT ASSOCI�S","Prenom":"Arnaud","Adresse":"41 rue Raymond Aron 76130 Mont st Aignan","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"EPNAK","Prenom":"Fr�d�ric","Adresse":"CRP Jean Lherminier, route des Roches, 76350 OISSEL","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Erisay r�ception rouen","Prenom":"Marc","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"ESIGELEC","Prenom":"Ang�lique","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Ethypharm","Prenom":"sandra","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"EUDIFF","Prenom":"Thierry","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"EXPERT COMPTABLE","Prenom":"Fran�ois","Adresse":"1, route de st clair76220 Gournay-En-Bray","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Filiassur","Prenom":"Jessica","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Florixir","Prenom":"Kinley","Adresse":"Z.A La Folie 80220 Gamaches","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Foreachcode","Prenom":"Camille","Adresse":"Seine Innopolis","StagiairesNWS":"","Stages":"","ContratsPro":"CLOUT Claire","Apprentis":""},
  {"Societe":"Frameip","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"FREELANCE EN COMMUNICATION","Prenom":"B�n�dicte","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"FRV CONSEIL","Prenom":"Fran�ois","Adresse":"2684 route de Neufchatel 76230 Isneauville","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Ftel Edition","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"CLET Thomas (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"Galerie 105","Prenom":"Jean-Luc","Adresse":"105 bd de l'Yser, 76000 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"GAN VIE","Prenom":"Nathalie","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"GEPPEC","Prenom":"Laurie","Adresse":"Parc des comp�tences, rue du Bois Rond, 76410 Cl�on","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"GEST ADMIN LC","Prenom":"Corinne","Adresse":"76500 Elbeuf","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Grand port maritime rouen","Prenom":"Anne-Laure","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Granit Communication","Prenom":"Marie","Adresse":"72 rue de la R�publique, 76140 Le Petit Quevilly","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Green Big","Prenom":"Baptiste","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Group Label","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"LE JEAN Joachim (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"Group Label","Prenom":"Christophe","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Groupe Bertin","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"QUENTIN Dimitri (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"GROUPE GSET","Prenom":"Sandrine","Adresse":"2713 boulevard de Stalingrad 76120 Grand Quevilly","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"GROUPE KOKPIT","Prenom":"Jean-Louis","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Groupe Mazars","Prenom":"Cathy","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Groupe Pomona","Prenom":"Fr�d�ric","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"GUASCH ALEXANDRE MICHEL","Prenom":"Alexandre","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Harmonie Mutuel","Prenom":"V�ronique","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Harmonie Print","Prenom":"Sanjin","Adresse":"103 boulvard de Strasbourg, 76600 le Havre","StagiairesNWS":"","Stages":"DUCLOS Carla (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"Haropa Ports","Prenom":"Raynald","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Haus Division","Prenom":"Jocelyn","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Henosis","Prenom":"Pierre","Adresse":"19 rue des bonnetiers, 76000 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"HERO","Prenom":"JULIE","Adresse":"66 rue de la r�publique Apt 243 76140Le Petit Quevilly","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Holibag","Prenom":"Hoda","Adresse":"72 rue de la R�publique, 76140 Le Petit Quevilly","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"HONNET Sarl","Prenom":"Nicolas","Adresse":"mail contact","StagiairesNWS":"marketing ou design","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"HYS BUSINESS","Prenom":"Karine","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"IFA Marcel Sauvage","Prenom":"Thierry-Olivier","Adresse":"11 rue du Tronquet / BP 256 / 76825 Mont-Saint-Aignan Cedex","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":"Arnaud Letailleur"},
  {"Societe":"ImagoSpirit","Prenom":"Guillaume","Adresse":"26 route Darn�tal, 76240 Bonsecours","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Immo","Prenom":"Jonathan","Adresse":"135 avenue du 14 juillet 76300 Sotteville-l�s-Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":"DELEGUE Marie"},
  {"Societe":"Imprim'up","Prenom":"Aliona","Adresse":"86 Avenue de Flandre 75019 PARIS","StagiairesNWS":"Demande du 21 janvier 18","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Indusrank","Prenom":"Thomas","Adresse":"72 rue de la R�publique, 76140 Le Petit Quevilly","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"INSITU","Prenom":"","Adresse":"35 rue Jean-Lecanuet 76000 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Internetrama","Prenom":"Gr�goire","Adresse":"72 rue de la R�publique","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"IONISX","Prenom":"Ibrahim","Adresse":"2 rue des quatres fils 75003 Paris","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"ISBAM","Prenom":"Michel","Adresse":"53 bis boulevard des Belges 76000 ROUEN","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"JCDecaux","Prenom":"Christophe","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Jeanne a dit","Prenom":"Nathalie","Adresse":"Le studio - 13 rue de lenostre 76000 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"JFAS","Prenom":"Jonathan","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Kappalys","Prenom":"Adrien","Adresse":"","StagiairesNWS":"","Stages":"CASSIAU Vincent / MALHOUITRE Thomas (2017-2018)","ContratsPro":"LE MIERE Sophie (2017-2018)","Apprentis":""},
  {"Societe":"KAYO","Prenom":"Thomas","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"KEYVEO","Prenom":"Eric","Adresse":"72 rue de la R�publique, 76140 Le Petit Quevilly","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":"LEONIO Chlo�"},
  {"Societe":"KEYVEO","Prenom":"Jean","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Kinetikos","Prenom":"Bruno","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Koala ME","Prenom":"Axel","Adresse":"Seine Innopolis","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"KUDIFY","Prenom":"Guillaume","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"KUDIFY","Prenom":"Herv�","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"KYEWO","Prenom":"Brigitte","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"L'�le aux Abeilles","Prenom":"Fran�ois","Adresse":"5 chemin aux Errants, 27430 Porte Joie","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"LAB COMPAGNIE","Prenom":"Patrick","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"La Fabrique Des Instants","Prenom":"Pauline","Adresse":"Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"LA FILATURE","Prenom":"Rodolphe","Adresse":"26 avenue Winston Churchill 27400 louvier","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"La Fripe de Marie Jan","Prenom":"Alexandra","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Lampes Berger","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"LA MARQUE ROSE","Prenom":"C�cile","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"LANEF PRO","Prenom":"Fran�ois","Adresse":"16 avenue Carnot 76250 D�ville les Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"LE HAVRE PORT CENTER","Prenom":"Greta","Adresse":"49 chauss�e John Kennedy 76000 Le havre","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"LMS Factory","Prenom":"Bruno","Adresse":"78","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Leblon Delienne","Prenom":"Juliette","Adresse":"12, rue de la B�thune\n 76 270 Neufch�tel-en-Bray","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"LES AUGUSTINS","Prenom":"","Adresse":"13 place st marc 76000 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Les Entreprenariales Normandie","Prenom":"Constance","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"LES FLEURS DU ROBEC","Prenom":"Marie","Adresse":"19 rue Sadi Carnot 76160 Darn�tal/1080 rue du g�n�ral de Gaulle 76160 Saint Jacques sur darn�tal","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Les nids","Prenom":"C�line","Adresse":"27 rue du Mar�chal juin, 76130 Mont-Saint-Aignan","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Les nouvelles graines urbaines","Prenom":"Napoleon","Adresse":"","StagiairesNWS":"","Stages":"NAPOLEON Manass� (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"Les papillons de jour","Prenom":"Amandine","Adresse":"108 av de Bretagne, 76100 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Les Vases Communicants","Prenom":"Odile","Adresse":"Le Mont les Mares, 27500 Saint Germain Village","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"LESTERIUS","Prenom":"Olivier/Val�rie","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Life Assur","Prenom":"Kamel","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"linxens France","Prenom":"Guillaume","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"LINKT","Prenom":"Nicolas","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"LINKT","Prenom":"Lisa","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"LOGITAFRANCE","Prenom":"Pauline","Adresse":"27 avenue des murs du parc 94300 Vincennes","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"LOK-IZ","Prenom":"Thomas","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"LUBRIZOL FRANCE","Prenom":"Fr�d�ric","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"LUBRIZOL FRANCE","Prenom":"Delphine","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"LUBRIZOL FRANCE","Prenom":"Doroth�e","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"LUG GROUPE","Prenom":"Dominique","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"MAECIA","Prenom":"Hadrien","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Mairie de Grand-Quevilly","Prenom":"Nicolas","Adresse":"Esplanade Tony Larue, 76120 Grand-Quevilly","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":"BRUDER Laura"},
  {"Societe":"MAIRIE DE PETIT QUEVILLY","Prenom":"Isabelle","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Mairie grand Couronne","Prenom":"Sandrine","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"MAISON DE PARFUM","Prenom":"C�cile","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"OLLCA","Prenom":"Sandra","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"OLLCA","Prenom":"Victor","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"SPIRCKEL Camille (2017-2018)","Apprentis":""},
  {"Societe":"MATMUT","Prenom":"Ang�lique","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"MATMUT","Prenom":"Emma","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Mauler Constructions","Prenom":"manon","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"MDI Technologies","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"FOSSE Benjamin (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"Mecanolav","Prenom":"Mathieu","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"MG PRODUCTION","Prenom":"R�gis","Adresse":"67, rue Pierre Curie 76410 Tourville la rivi�re/ 91, rue Saint Jacques 76600 le HAVRE","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Mister Menuiserie (groupe LABEL)","Prenom":"","Adresse":"8 rue L�o Lagrange, 27950 Saint-Marcel","StagiairesNWS":"","Stages":"","ContratsPro":"GAUDRAIN No�mie","Apprentis":""},
  {"Societe":"Mobilit� sant�","Prenom":"Jean-Luc","Adresse":"105 Bd de L'Yser, 76000 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"M�bius","Prenom":"L�a","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"MSA","Prenom":"Amandine","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"LECARPENTIER Julien (2017-2018)","Apprentis":""},
  {"Societe":"MY ALFRED","Prenom":"Sol�ne","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"My merry birthday","Prenom":"Aziz","Adresse":"Seine innopolis","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"NEODIGITAL","Prenom":"Basile","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Nord Ouest Exploitation Cin�mas","Prenom":"Alexandra","Adresse":"Square Raoul Grimoin Sanson / Cin�ma Grand Mercure, 76500 Elbeuf","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":"AUBRY Louise / LESUEUR Flore"},
  {"Societe":"NORIPYT","Prenom":"Bertrand","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Normandie AeroEspace","Prenom":"Philippe","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"NORMANDIE BIEN-ETRE","Prenom":"Damien & Rapha�l","Adresse":"40A rue aux ours 76000Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Normandie logistique","Prenom":"Christian","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"NOVATICE","Prenom":"Christophe","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Now coworking","Prenom":"Ghislaine","Adresse":"360 rue Gustave Eifffel, 76230 Bois Guillaume","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"NOWSOCIAL","Prenom":"Ambroise","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Octopeek","Prenom":"Sol�ne","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"OMEXOM","Prenom":"Jonathan","Adresse":"18 avenue de la prosp�rit� 76590 Criquetot sur longueville","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"OmicX","Prenom":"Marion","Adresse":"Seine Innopolis","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"OmicX","Prenom":"Christal","Adresse":"Seine Innopolis","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"OMICX","Prenom":"Arnaud","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"OMNICINE","Prenom":"Carole","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"ONYX DEV","Prenom":"Laeticia","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Optique AD","Prenom":"Guillaume","Adresse":"163 rue du canal 762500 PONT AUDEMER ET 23 Rue Albert Dubost 76250 DEVILLE LES ROUEN","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Opteam","Prenom":"Luc","Adresse":"Seine Innopolis","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"OPTIM TPE","Prenom":"Benoit","Adresse":"29 quai de rouen 76350 Oissel","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Origins productions","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"FOUET Yann (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"ORIL Industrie","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"TLICH A�cha (2017-2018)","Apprentis":""},
  {"Societe":"ORONE","Prenom":"Eric","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Outils Gestion Pro- (EX MY GAMING EVENT)","Prenom":"Alexandre","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Overspeed","Prenom":"Denis","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"P3C Web","Prenom":"Philippe","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Pak LightingSolution","Prenom":"Moise","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Parc de Lery Poses","Prenom":"Anthony","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Partenaires d'avenir","Prenom":"Thierry","Adresse":"85 chemin de Cl�res, 76130 Mont-Saint-Aignan","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Pharmacie centrale Serqueux","Prenom":"Julie-Arnaud","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Phone solutions","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"PITAMANA","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Power-Soft","Prenom":"Camille","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"PowerTrafic","Prenom":"Henri","Adresse":"Seine Innopolis","StagiairesNWS":"","Stages":"","ContratsPro":"DU BOUCHAU DU MAZAUBRUN H�l�ne (2017-2018)","Apprentis":""},
  {"Societe":"ProspActive","Prenom":"Lionel","Adresse":"20 route de Vernon, 27950 La Chapelle Reanville","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Protecop","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"THIOLLENT Pierre (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"Proxiad","Prenom":"Camille","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Proxiad","Prenom":"Fanny","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"PUBLICIS REGICOM","Prenom":"Natacha","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"QUASAR STUDIO","Prenom":"T�o","Adresse":"2 rue L�zurier de la martel 76000 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"QWANT","Prenom":"Jean-Manuel","Adresse":"Seine Innopolis","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"QWANT","Prenom":"Quentin","Adresse":"Seine Innopolis","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Randstad","Prenom":"B�n�dicte","Adresse":"Parc du Z�nith, 310 avenue des Canadiens, 76650 Petit Couronne","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Randstad","Prenom":"Michael","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Ravet","Prenom":"","Adresse":"13 impasse des Marais de Carville","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"RedLab","Prenom":"Yassir","Adresse":"Seine Innopolis","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"RENAULT","Prenom":"Astrid","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Renault","Prenom":"David","Adresse":"Belbeuf Autos DG, Z.A des Ondelles, 76240 Belbeuf","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"RM Habitat","Prenom":"Nicolas","Adresse":"rue du Canal, 27460 Igoville","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"ROUEN DRONE SERVICE","Prenom":"Micka�l","Adresse":"","StagiairesNWS":"en cours de cr�ation aura besoin d'un stagiaire A1 � partir de mars avril 2019- a recontacter","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"ROUEN HANDBALL","Prenom":"Alexandre","Adresse":"40 rue moise- appt.02 76000 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"SAAGIE","Prenom":"Arnaud","Adresse":"72 rue de la r�publique, 76140 Le Petit Quevilly","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"SAMSIC EMPLOI","Prenom":"Oph�lie","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"SANDRINE PFOH SOPHROLOGUE","Prenom":"Sandrine","Adresse":"86 av. Jean Lagarrigue Les essarts 76530 Grand Couronne","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"SAPN","Prenom":"Maryse","Adresse":"BP 7, 76530 Grand Couronne","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":"VIEUBLED Chlo�"},
  {"Societe":"SARL Croisset Construction","Prenom":"Levent","Adresse":"24 rue Maurice Cadot, 76650 Petit Couronne","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"SARL S�riprim","Prenom":"C�line","Adresse":"ZAC les hauts de Glos, 221 bd Jean Charles Contel, 14100 Glos","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"SAVANTEC","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"SAVBOX FRANCE","Prenom":"Olivier","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Savi","Prenom":"Soraya","Adresse":"ZA Les Pointes Les Authieux sur le Port St Ouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"SAVNTEC","Prenom":"Michel","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Sceva Labarre","Prenom":"Eric","Adresse":"18 chemin des Mar�chaux, 76780 Hodeng-Hodenger","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"SCHNEIDER ELECTRIC","Prenom":"Thomas","Adresse":"STIE Andr� Blanchet 27210 Pacy sur Eure","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Scop 76","Prenom":"Elise","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"SCP Morin-Barbier","Prenom":"St�phane","Adresse":"7 rue Saint Pierre-BP 64, 76220 Gournay en Bray/ 2 avenue Pasteur, 76200 Dieppe/ 1 route de Londoni�res, 76270 Neufch�tel en Bray/ R�sidence les jardins de l'h�tel de ville, 11 avenue Porte des Champs, 76000 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Segafredo","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"SEINE ECOPOLIS","Prenom":"Yves","Adresse":"45 avenue Robert Hooke 76800 Saint Etienne du Rouvray","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"SE LOGER","Prenom":"Anne-Sophie","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"RIBEL Simon (2017-2018)","Apprentis":""},
  {"Societe":"SEMAFOR","Prenom":"Pierre","Adresse":"19 rue Andr� Maurois / R�sidence Plein Sud / 76150 Maromme","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":"JAOUD Hasnaa"},
  {"Societe":"Serdobbel","Prenom":"Arnaud","Adresse":"91 rue du Gd Perr�, 76770 Malaunay","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"SF Consulting","Prenom":"Fatima","Adresse":"6 Rue des Caboches78 270 Bonni�res sur Seine","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"SIKA","Prenom":"jean-Paul","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"SiliGom Blard Pneus","Prenom":"Yann","Adresse":"149 rue de Constantine, 76000 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"SIP-ONLINE","Prenom":"Sylvain","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Siqual","Prenom":"Mathias","Adresse":"64 Boulevard Stanislas Girardin, 76140 Le Petit Quevilly","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"SNIC Paris Normandie","Prenom":"Sophie","Adresse":"ROUEN","StagiairesNWS":"1 DESIGNER","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Soci�t� G�n�rale","Prenom":"marie","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"SOGETI/CAP GEMINI","Prenom":"Jean-claude","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Sophie Godard","Prenom":"Sophie","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"SOLOMO GROUP","Prenom":"Etienne","Adresse":"","StagiairesNWS":"","Stages":"MUTEL Edgar","ContratsPro":"","Apprentis":""},
  {"Societe":"SOPRA STERIA","Prenom":"Benoit","Adresse":"3 rue du four Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Sowefund","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"DOSSAL Audrey (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"Sphere immobilier","Prenom":"Quentin","Adresse":"","StagiairesNWS":"","Stages":"Carpentier Nolwenn","ContratsPro":"","Apprentis":""},
  {"Societe":"Spottle","Prenom":"Cl�ment","Adresse":"","StagiairesNWS":"","Stages":"H�rich�","ContratsPro":"","Apprentis":""},
  {"Societe":"SPREAD","Prenom":"Olivier","Adresse":"","StagiairesNWS":"","Stages":"COTTIN Fabrice / ROCCHETTI Thomas (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"SPREAD","Prenom":"Nicolas","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"SSI Syst�mes","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"VANMERRIS Cl�ment (2017-2018)","Apprentis":""},
  {"Societe":"Mirage Make","Prenom":"Bryan","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Starting List","Prenom":"Floriane","Adresse":"72 rue de la R�publique, 76140 Le Petit Quevilly","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Station Next","Prenom":"Fr�d�ric","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Studio web","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Studionet","Prenom":"Mathieu","Adresse":"2 ter, rue Georges Charpak, 76130 Mont-Saint-Aignan","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"ATEXIO","Prenom":"Cl�ment","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Talenz groupe FIDORG","Prenom":"Antoine","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Teams Evolution","Prenom":"Nathalie","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Technipe","Prenom":"Val�rie","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Thal�s","Prenom":"Philippe","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Tiboo","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"MUTEL Edgar (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"Topo Video","Prenom":"Coralie","Adresse":"72 rue de la R�publique,76140 Le Petit Quevilly","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"TOPOVIDEO","Prenom":"Arthur","Adresse":"72 rue de la R�publique 76140 Le Petit-Quevilly","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Trader Services","Prenom":"Julien","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"TRANSDEV ROUEN","Prenom":"Linda","Adresse":"10 boulevard industriel / CS 20234 / 76304 Sotteville-l�s-Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":"CORDELIER Chlo�"},
  {"Societe":"TRANSDEV ROUEN","Prenom":"Fr�d�ric","Adresse":"15 rue de la petite Chartreuse","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"TRANSPORT DE MARCHANDISES","Prenom":"Christian","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"TRSB","Prenom":"Philippe","Adresse":"181 rue Jean Mermoz, 76230 Bois Guillaume","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Treco","Prenom":"Bertrand","Adresse":"88 b rue Thomas Dubosc, 76000 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Tweed","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"COUE Marion (2017-2018)","Apprentis":""},
  {"Societe":"UIMM","Prenom":"Jean-Pierre","Adresse":"","StagiairesNWS":"","Stages":"LECERF Nicolas (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"UIMM","Prenom":"Soteau","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Urban Connect","Prenom":"Antoine","Adresse":"3095 rue de Carentonne, 27300 Bernay","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Valgot","Prenom":"Lucie","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"VEOLIA","Prenom":"Marilou","Adresse":"Yves MADELINE SAS Marilou Blin ZI CAEN Canal rue de la mer 14550 Blanville sur Orne","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"OVERSPEED","Prenom":"Denis","Adresse":"53 bis boulevard des belges 76000 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Visio green","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"ARNOLFO Andreas / EUZENNE Quentin / LIENARD Edwin (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"VISIONIC","Prenom":"Xavier","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"VITAME","Prenom":"Mehdi","Adresse":"1441 route de Neufchatel 76230 Bois-Guillaume","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Voitureautoecole.com","Prenom":"L�a","Adresse":"","StagiairesNWS":"","Stages":"Nina Huet","ContratsPro":"","Apprentis":""},
  {"Societe":"VOTRESOMMEIL.COM","Prenom":"Olivier","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"WAITCOM","Prenom":"Julien","Adresse":"72 rue de la R�publique, 76140 Le Petit Quevilly","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"WAITCOM","Prenom":"Nicolas","Adresse":"72 rue de la R�publique, 76140 Le Petit Quevilly","StagiairesNWS":"","Stages":"LEBRUN Alice (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"Walk United","Prenom":"Edouard","Adresse":"54 av Jacques Chastellain, 76000 Rouen","StagiairesNWS":"","Stages":"CHAUMIER Xavier / DALKA Orlane / JOFFRES Alexandre / LETHUILLIER Laurentine / ROBVEILLE Thomas (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"WEBEDIA","Prenom":"Isabelle","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Web In Vet","Prenom":"Beno�t","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"WEBAXYS","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"WEBETSOLUTION","Prenom":"Alexandra","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"Weecom","Prenom":"Arnaud","Adresse":"4 bis R�sidence de la For�t, 76220 La Feuillie","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"WEEM","Prenom":"Emmanuel","Adresse":"","StagiairesNWS":"","Stages":"Fabien Labb�","ContratsPro":"","Apprentis":""},
  {"Societe":"Wixiweb","Prenom":"Arnaud","Adresse":"","StagiairesNWS":"","Stages":"AYAMBO Pauline / LANOS Simon (2017-2018)","ContratsPro":"","Apprentis":""},
  {"Societe":"WOSS","Prenom":"Marc","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"YUSIT","Prenom":"Claire","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"ZIG ZAG","Prenom":"Patricia","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"ZIG ZAG","Prenom":"Jeanne","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"JAZZ EN SEINE","Prenom":"Sophie","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"","Prenom":"Nicolas","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"WELLJOB","Prenom":"Amandine","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"MC CONSEILS","Prenom":"Mathieu","Adresse":"86, rue de la table de pierre - 76160 St-Jacques sur Darn�tal","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"NCI","Prenom":"Yves","Adresse":"57 avenue de Bretagne 76100 Rouen","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"SLN","Prenom":"S�bastien","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"LEFEBVRE CONSULTING","Prenom":"J�r�me","Adresse":"9 rue Pierre Gassendi, 76150 La Vaupalli�re","StagiairesNWS":"","Stages":"","ContratsPro":"THEVENOT Math�o","Apprentis":""},
  {"Societe":"PARTOUCHE","Prenom":"Laurie","Adresse":"Dieppe","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":"LEJEUNE M�lissa"},
  {"Societe":"LECLERC BAPEAUME / SAS BAPDIS","Prenom":"Carla","Adresse":"40 rue du canal, 76380 BAPEAUME","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":"MUTEL Edgar"},
  {"Societe":"PDGO","Prenom":"Eric","Adresse":"VILLAGE D'ARTISANS DE LA LISI�RE","StagiairesNWS":"","Stages":"","ContratsPro":"FLUTEAUX Denis","Apprentis":""},
  {"Societe":"CABINET FOLLIOT","Prenom":"Anthony","Adresse":"GRANDVILLE","StagiairesNWS":"","Stages":"","ContratsPro":"VIEL Rom�o","Apprentis":""},
  {"Societe":"SCJ","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"DORIVAL Amandine","Apprentis":""},
  {"Societe":"EPNAK","Prenom":"","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""},
  {"Societe":"AGRIAL","Prenom":"Magali","Adresse":"","StagiairesNWS":"","Stages":"","ContratsPro":"","Apprentis":""}
  ];

  document.getElementById("btnsearch").onclick = function() {
    let txt = document.getElementById('EntrepriseInput').value;
    console.log(txt);

  var my_json = JSON.stringify(etudiante)
  var filtered_json = find_in_object(JSON.parse(my_json), {Societe: txt});
  console.log(filtered_json);

  if (filtered_json.length != 0 ){
    document.getElementsByClassName("containerCard").remove();


        console.log(filtered_json);

         for (var i = 0; i < filtered_json.length; i++) {
        console.log(i);
        let lesEtudiants = document.querySelector("#Container");
        let bouton = document.querySelector("#AXA");
  
        let containerCard = document.createElement("div");
        containerCard.classList.add("containerCard");

        let maxwidth = document.createElement("div");
        maxwidth.classList.add("maxwidth");

        let innerwidth = document.createElement("div");
        innerwidth.classList.add("innerwidth");

        let profileCard = document.createElement("div");
        profileCard.classList.add("profileCard");
  
        let textContainer = document.createElement("div");
        textContainer.classList.add("textContainer");
  
        let Entreprise = document.createElement("h1");
        Entreprise.innerHTML = "Entreprise " + filtered_json[i]["Societe"];

        let Prenom = document.createElement("h3");
        Prenom.innerHTML = "L'élève " + filtered_json[i]["Prenom"] + " a travaillé ici";
  
        let adresse = document.createElement("p");
        adresse.innerHTML = filtered_json[i]["Adresse"];
  
        maxwidth.appendChild(innerwidth);
        innerwidth.appendChild(containerCard);
        containerCard.appendChild(profileCard);
        profileCard.appendChild(textContainer);
        textContainer.appendChild(Entreprise);
        textContainer.appendChild(Prenom);
        textContainer.appendChild(adresse);
        lesEtudiants.insertBefore(containerCard, bouton);
      }


    }      else{
      let lesEtudiants = document.querySelector("#Container");
      let bouton = document.querySelector("#AXA");


      let containerCard = document.createElement("div");
      containerCard.classList.add("containerCard");

      let maxwidth = document.createElement("div");
      maxwidth.classList.add("maxwidth");

      let innerwidth = document.createElement("div");
      innerwidth.classList.add("innerwidth");

      let profileCard = document.createElement("div");
      profileCard.classList.add("profileCard");

      let textContainer = document.createElement("div");
      textContainer.classList.add("textContainer");

      let Entreprise = document.createElement("h2");
      Entreprise.innerHTML = "Entreprise non valide";

      maxwidth.appendChild(innerwidth);
      innerwidth.appendChild(containerCard);
      containerCard.appendChild(profileCard);
      profileCard.appendChild(textContainer);
      textContainer.appendChild(Entreprise);
      lesEtudiants.insertBefore(containerCard, bouton);
    }

    

  
}
  /*
  let containerCard = document.createElement("div");
  containerCard.classList.add("containerCard");

  let profileCard = document.createElement("div");
  profileCard.classList.add("profileCard");

  let imageContainer = document.createElement("div");
  imageContainer.classList.add("imageContainer");

  let photo = document.createElement("IMG");
  photo.setAttribute("src", etudiant.photo);

  let textContainer = document.createElement("div");
  textContainer.classList.add("textContainer");

  let NomPrenom = document.createElement("h1");
  NomPrenom.innerHTML = etudiant.Prenom + " " + etudiant.Prénom;
  //titre.innerHTML = `Specialité ${etudiant.Qualité1} - ${etudiant.Qualité2}`; // Ajoutons ici le titre récupéré

  //titre.innerHTML = `test ${etudiant.photo}`; // Ajoutons ici le titre récupéré

  let Qualités = document.createElement("h3");
  Qualités.innerHTML = etudiant.Qualité1 + " " + etudiant.Qualité2;

  let desc = document.createElement("p");
  desc.innerHTML = etudiant.Unedescriptionlibre;

  containerCard.appendChild(profileCard);
  profileCard.appendChild(imageContainer);
  imageContainer.appendChild(photo);
  profileCard.appendChild(textContainer);
  textContainer.appendChild(NomPrenom);
  textContainer.appendChild(Qualités);
  textContainer.appendChild(desc);


  lesEtudiants.insertBefore(containerCard, bouton);
  */


function find_in_object(my_object, my_criteria){

    return my_object.filter(function(obj) {
      return Object.keys(my_criteria).every(function(c) {
        return obj[c] == my_criteria[c];
      });
    });
  
  }

  Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}