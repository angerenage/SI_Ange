# Utiliser le M5stack avec l'IDE d'arduino

  ## Installer l'IDE d'arduino
  Commençons par installer le driver [CP210x](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers) une fois sur cette page il ne vous reste plus qu'à le télécharger et l'installer.  
Pour installer l'IDE d'arduino d'arduino il vous suffit de vous rendre sur [le site web d'arduino](https://www.arduino.cc/en/software) et de le télécharger et installé le pour votre système.  
  Une fois que vous avez le logiciel sur votre ordinateur, allez dans `Arduino` puis `Preferences` et copié __https://dl.espressif.com/dl/package_esp32_index.json__ dans `Additional board url`.  
  Maintenant allez dans `Tools`, `Board` et `Boards manager` une fois que vous y êtes cherchez `__esp32__ by __Esspressif Syteme__` et installez-le.  
  Lorsque le téléchargement est fini vous pouvez aller dans `Tools` puis `Board` et enfin chercher `M5Stack-Core-ESP32`.  
  Il vous faut encore téléchargé la librairie `M5Stack` que vous trouverez dans `Tools` et `Librairie Manager` une fois tout terminé vous pouvez maintenant utiliser votre M5stack avec l'IDE d'arduino.  
