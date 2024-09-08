import React, { useEffect } from 'react';
import './modal.css';

/**
 * Composant Modal qui affiche une fenêtre modale avec une option de fermeture via le clic en dehors
 * de la modale ou en appuyant sur la touche 'Escape'.
 *
 * @component
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {boolean} props.isOpen - Indique si la modale est ouverte ou fermée.
 * @param {function} props.onClose - Fonction appelée pour fermer la modale.
 * @param {React.ReactNode} props.children - Contenu à afficher dans la modale.
 *
 * @returns {React.ReactElement|null} Un élément React représentant la modale si elle est ouverte, sinon `null`.
 *
 * @function
 * @name Modal
 */


const Modal = ({ isOpen, onClose, children }) => {
  // Fermer la modale avec la touche 'Esc'
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);  
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Ne rien afficher si la modale n'est pas ouverte
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
