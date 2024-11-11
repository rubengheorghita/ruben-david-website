const AccountModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
      <div>
        Account Modal Content
        <button onClick={onClose}>Close</button>
      </div>
    );
  };
  
  export default AccountModal;