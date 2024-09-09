"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./modal.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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

const Modal = _ref => {
  let {
    isOpen,
    onClose,
    children
  } = _ref;
  // Fermer la modale avec la touche 'Esc'
  (0, _react.useEffect)(() => {
    const handleKeyDown = e => {
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
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-backdrop",
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-close",
    onClick: onClose
  }, "X"), children));
};
var _default = exports.default = Modal;