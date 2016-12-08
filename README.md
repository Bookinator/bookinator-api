# Bookinator API

Ce projet est la partie API de Bookinator. Une application de gestion de livres.

Cette application est un API appelable par n'importe quel client. Elle gère une
authentification de l'utilisateur de l'application par login et mot de passe. Le
login étant l'adresse mail de l'utilisateur. Cette authentification respecte le
standard jsonwebtoken et renvoie un token si l'authentification a réussi.

Il est possible de créer/lire/mettre à jour/effacer des livres via l'url /book
en utilisant les méthodes POST,GET,PUT,DELETE.
