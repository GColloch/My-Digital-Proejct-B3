const mysql = require('mysql');

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
host: 'localhost',
user: 'nom_utilisateur',
password: 'mot_de_passe',
database: 'cat__gories'
});

// Établir la connexion à la base de données
connection.connect((err) => {
if (err) {
console.error('Erreur de connexion à la base de données :', err);
return;
}

console.log('Connexion à la base de données réussie.');

// Récupérer les produits depuis la base de données
const sql = 'SELECT * FROM cat__gories';
connection.query(sql, (err, results) => {
if (err) {
console.error('Erreur lors de l\'exécution de la requête :', err);
return;
}

// Afficher les produits
if (results.length > 0) {
results.forEach((row) => {
console.log('Id :', row.id);
console.log(''); // Ligne vide pour séparer les produits
});
} else {
console.log('Aucune cat__gories trouvé.');
}

// Fermer la connexion à la base de données
connection.end();
});
});