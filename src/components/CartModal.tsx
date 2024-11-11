const CartModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
      <div>
        Cart Modal Content
        <button onClick={onClose}>Close</button>
      </div>
    );
  };
  
  export default CartModal;