import React from 'react';
import styles from './index.module.css';
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

    const handleCheckout = async () => {
        if (selectedItems.length === 0) {
            alert("Selecione pelo menos um item para prosseguir com a compra.")
            return
        }
        
        const selectedProducts = cart
            .filter(item => selectedItems.includes(item.id))
            .map(item => ({
                title: item.name,
                quantity: parseInt(item.quantity) || 1,
                unit_price: parseFloat(item.price)
            }))

        try {
            const response = await fetch("http://localhost:8000/create-preference/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items: selectedProducts }),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.detail || 'Falha ao criar preferência de pagamento.')
            }

            const data = await response.json()

            window.location.href = data.init_point
        } catch (error) {
            console.error("Erro no checkout:", error)
            alert(`Ocorreu um erro ao processar o pagamento: ${error.message}`)
        }
    }

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
                <button
                    onClick={handleCheckout} 
                    className={styles.checkoutButton}
                    disabled={selectedItems.length === 0}
                >
                    COMPRE AGORA ({selectedItems.length} ITENS SELECIONADOS)
                </button>
            )}
        </div>
    );
};

export default CartDropdown;