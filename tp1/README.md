# Modèle de structure pour le projet Node.js/Express/MongoDB du TP1

## Installation rapide

```shell
git clone https://github.com/cbouvard/olympic-games-template.git
cd olympic-games-template
export MONGODB_URL=<A COMPLETER>
npm install
npm start
```

## Exemple d'appel de l'API REST

Lister les sports :

```shell
curl http://localhost:3000/api/sports -H 'Content-Type: application/json'
```
