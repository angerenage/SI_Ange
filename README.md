# Mêtre en place le serveur web

  ## Installer Node js
  Pour exécuter le serveur, vous devrez installer le node js.  
  Pour cela, accédez au site [node js](https://nodejs.org/fr/download/) et téléchargez-le pour votre système et installez-le.  

  ## Lancer le serveur web
  Pour mettre le serveur en ligne dans l'invite de commande tapé `cd chemin d'accès vers index.js` puis pour lancer le serveur tapez `node index.js` et le serveur du port 3000 est lancé.  
  Il vous sufit de lancer votre navigateur et d'accéder a l'adresse [localhost sur le port 80](http://localhost/) pour le site internet ou [localhost sur le port 3000](http://localhost:3000/).  
  Pour pouvoir accéder au serveur web depuis le M5stack (si ils sont sur le même résau), il vous faudrat désactiver votre par-feu.  

  ## Connecter le M5stack
  Pour connecter le M5stack a votre serveur web il faut modifier la ligne `WiFi.begin("SSID", "mot de passe");` il faut modifier le `SSID` avec le nom de votre réseau et `mot de passe` par le mot de passe de votre réseau.  
  Il vous faut également changer la ligne `client.connect(IPAddress (192,168,22,70), 3000` en modifiant `192,168,22,70` par l'adresse IP de votre serveur.  
  __Il faut que les chiffres de l'adresse IP soit séparé par des virgules, `192,168,22,70` et non `192.168.22.70` !__

-----------------

# Principaux problèmes ou choses a savoir

  ## ERR_SSL_PROTOCOL_ERROR
  Si vous rencontré se probleme, il est probable que vous ayez essayé d'accéder au serveur web sur le port 3000 avec cette adresse [https://localhost:3000/](https://localhost:3000/). Le serveur web mis en place ne prend pas en charge le protocole HTTPS, la bonne adresse est donc [http://localhost:3000/](http://localhost:3000/)  
  
  ## Autres erreurs
  En cas d'échecs vous pouvez aller dans l'onglet [Issues](https://github.com/angerenage/SI_Ange/issues) et rédiger un rapport d'érreur. J'éssayerais de le regler le plus vite possible.  
