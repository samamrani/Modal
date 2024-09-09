# Composant Modal

Ce dépôt contient un composant React pour une fenêtre modale. Le composant modale affiche une fenêtre centrée avec une option pour la fermer en cliquant en dehors de la modale ou en appuyant sur la touche 'Échap'. Le composant est conçu pour être réutilisable et personnalisable.

## Installation

Pour installer le composant Modal dans votre projet, utilisez npm

npm install samamrani-modal

Si vous souhaitez installer depuis GitHub, utilisez :

npm install github:samamrani/modal-projet14

Développement
Pour contribuer ou apporter des modifications, clonez le dépôt :

git clone https://github.com/samamrani/modal-projet14
cd modal-projet14
npm install
npm start

Utilisation
Voici comment utiliser le composant Modal dans votre projet React :
import React, { useState } from 'react';
import Modal from 'samamrani-modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h1>Modal Content</h1>
      </Modal>
    </div>
  );
}

export default App;

Contribuer
Les contributions sont les bienvenues ! Veuillez consulter les directives de contribution pour plus d'informations.


### 4. **Vérifiez et Publiez**

1. **Assurez-vous que tout fonctionne correctement** :
   - Testez le composant localement.
   - Vérifiez que la configuration Webpack est correcte.

2. **Publiez sur npm** :
   - Assurez-vous que vous êtes connecté à npm avec `npm login`.
   - Publiez le paquet avec `npm publish`.

