import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import { useContextCart } from '../../contexts/CartContext';


const CartDropdown = () => {
    const { cart, removeProductFromCart } = useContextCart(); 
    
    const [selectedItems, setSelectedItems] = React.useState([]);

    React.useEffect(() => {
        setSelectedItems(cart.map(item => item.id));
    }, [cart]); 

    const total = cart.reduce((sum, item) => {
        if (selectedItems.includes(item.id)) {
            const price = parseFloat(item.price) || 0;
            const quantity = item.quantity || 1; 
            return sum + (price * quantity);
        }
        return sum;
    }, 0.00);


    const handleToggleAll = (e) => {
        if (e.target.checked) {
            setSelectedItems(cart.map(item => item.id));
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

    const allSelected = selectedItems.length === cart.length && cart.length > 0;

    return (
        <div className={styles.cartDropdown}>

            <div className={styles.YourCart}>SEU CARRINHO</div> 

            {cart.length === 0 ? (
                <div className={styles.EmptyCart}>Nenhum produto adicionado!
                <img src="/images/empty.jpg" alt="emoji empty" className={styles['emoji-empty']} />
                </div>
            ) : (

                <div className={styles.cartItemsContainer}>
                    {cart.map((item) => (
                        <div key={item.id} className={styles.cartItem}>
                            <input
                                type="checkbox"
                                checked={selectedItems.includes(item.id)}
                                onChange={() => handleToggleItem(item.id)}
                                className={styles.itemCheckbox}
                            />
                            <div className={styles.itemDetails}>
                                <img src={item.image || 'placeholder.jpg'} alt={item.name} className={styles.itemImage} />
                                <div className={styles.itemInfo}>
                                    <span className={styles.itemName}>{item.name}</span>
                                    <span className={styles.itemPrice}>R$ {parseFloat(item.price || 0).toFixed(2).replace('.', ',')}</span>
                                </div>
                            </div>

                            <button 
                                className={styles.deleteButton} 
                                aria-label="Remover item"
                                onClick={() => removeProductFromCart(item.id)} 
                            >
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
                            <span>Total ({selectedItems.length} itens):</span>
                            <span className={styles.totalPrice}>R$ {total.toFixed(2).replace('.', ',')}</span>
                        </div>
                    </div>
                </div>
            )}

            {cart.length > 0 && (
                <Link to="/checkout" className={styles.checkoutButton}>
                    COMPRE AGORA ({selectedItems.length} ITENS SELECIONADOS)
                </Link>
            )}
        </div>
    );
};

export default CartDropdown;