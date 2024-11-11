const SearchModal: React.FC<{ onClose: () => void; onSearch: (query: string) => void }> = ({ onClose, onSearch }) => {
    return (
      <div>
        Search Modal Content
        <button onClick={onClose}>Close</button>
      </div>
    );
  };
  
  export default SearchModal;