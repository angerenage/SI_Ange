# Configurer le serveur Web

  ## Installer Node js
  Pour exécuter le serveur, vous devrez installer le node js.
  Pour ce faire, allez sur le site de [node js](https://nodejs.org/en/download/) et téléchargez-le pour votre système puis installez-le.

  ## Démarrer le serveur Web
  Pour mettre le serveur en ligne, dans l'invite de commande tapez `cd chemin jusqu'à index.js` puis pour démarrer le serveur tapez `node index.js` et le serveur sur le port 3000 est démarré.
  Il vous suffit de lancer dans votre navigateur le fichier `index.html` et [localhost sur le port 3000](http://localhost:3000/).
  Pour pouvoir accéder au serveur Web à partir du M5stack (s'ils sont sur le même réseau), vous devrez désactiver votre pare-feu.

  ## Connectez le M5stack
  Pour connecter le M5stack à votre serveur Web, modifiez la ligne `WiFi.begin("SSID", "password");` modifiez le `SSID` avec le nom de votre réseau et le `mot de passe` par votre mot de passe réseau.  
  Vous devez également changer la ligne `client.connect(IPAddress (192,168,22,70), 3000` en modifiant `192,168,22,70` par l'adresse IP de votre serveur.  
  __Les chiffres de l'adresse IP doivent être séparés par des virgules, `192,168,22,70` et non `192.168.22.70` !__

-----------------

# Principaux problèmes ou choses à savoir

  ## ERR_SSL_PROTOCOL_ERROR
  Si vous avez rencontré ce problème, il est probable que vous ayez essayé d'accéder au serveur Web sur le port 3000 avec cette adresse [https://localhost:3000/](https://localhost:3000/). Le serveur Web configuré ne prend pas en charge le protocole HTTPS, l'adresse correcte est donc [http://localhost:3000/](http://localhost:3000/)
  
  ## Autres erreurs ou messages
  En cas d'échec ou de questions, vous pouvez aller dans l'onglet [Issues](https://github.com/angerenage/SI_Ange/issues) et rédiger un rapport. J'essaierai de vous répondre ou de résoudre le problème le plus tôt possible.

  ## Différentes branches
  La branche [`main`](https://github.com/angerenage/SI_Ange/) ne contient pas le code arduino, pour pouvoir y accéder, allez dans la branche [`arduino`](https://github.com/angerenage/SI_Ange/tree/arduino) et le code se trouve dans le dossier `bombe` et le fichier `bombe.ino`.
