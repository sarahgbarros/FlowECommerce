import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const MOCK_CART_ITEMS = [
  { id: 1, name: 'Fone de ouvido Bluetooth', price: 19.00, quantity: 1, image: 'images/fone.jpg' },
  { id: 2, name: 'Calça Grunge Punk Jeans', price: 19.00, image: 'images/calca.jpg' },
];

const CartDropdown = () => {
  const [selectedItems, setSelectedItems] = React.useState(MOCK_CART_ITEMS.map(item => item.id));
  
  const total = selectedItems.length > 0 ? 19.00 : 0.00; // verificar lógica da soma dos itens

  const handleToggleAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(MOCK_CART_ITEMS.map(item => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleToggleItem = (itemId) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId) 
        : [...prev, itemId]
    );
  };

  const allSelected = selectedItems.length === MOCK_CART_ITEMS.length;

  return (
    <div className={styles.cartDropdown}>

      <div className={styles.cartItemsContainer}>
        {MOCK_CART_ITEMS.map((item, index) => (
          <div key={item.id} className={styles.cartItem}>
            <input 
              type="checkbox" 
              checked={selectedItems.includes(item.id)}
              onChange={() => handleToggleItem(item.id)}
              className={styles.itemCheckbox}
            />
            <div className={styles.itemDetails}>
              <img src={item.image} alt={item.name} className={styles.itemImage} />
              <div className={styles.itemInfo}>
                <span className={styles.itemName}>{item.name}</span>
                <span className={styles.itemPrice}>R$ {item.price.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>

            <button className={styles.deleteButton} aria-label="Remover item">
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        ))}

        <div className={styles.cartSummary}>
          <div className={styles.selectAll}>
            <input 
              type="checkbox" 
              checked={allSelected} 
              onChange={handleToggleAll} 
              className={styles.itemCheckbox} 
            />
            <span>Todos</span>
          </div>
          <div className={styles.cartTotal}>
            <span>Total:</span>
            <span className={styles.totalPrice}>R$ {total.toFixed(2).replace('.', ',')}</span>
          </div>
        </div>
      </div>

      <Link to="/checkout" className={styles.checkoutButton}>
        COMPRE AGORA
      </Link>
    </div>
  );
};

export default CartDropdown;
