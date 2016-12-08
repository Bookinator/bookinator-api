# Install

## Installer les dépendances
Se placer à la racine du projet et faire
`npm install`

## Créer un utilisateur dans la base mongoDB
Créer un utilisateur dans la base MongoDB (/!\ le champs password est la somme sha256 du mot de passe)
Exemple avec pour mot de passe 'P@ssw0rd!'
`db.users.insert({nom:"Gonçalves", prenom:"Daniel", mail:"daniel.gonc@lves.fr", password:"0e44ce7308af2b3de5232e4616403ce7d49ba2aec83f79c196409556422a4927"})`

## Configurer l'application
Pour configurer l'application, 2 possibilités :
  - configurer le fichier config.js
  - initialiser les variables d'environnement (la liste est disponible dans config.js) => recommandé en cas d'exécution dans une instance heroku

## Authentification jsonwebtoken
Pour désactiver l'authentification JWT, commenter la ligne 30 de app.js