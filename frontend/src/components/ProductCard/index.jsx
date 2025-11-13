import React from 'react';
import styles from './index.module.css';
import { useContextCart } from '../../contexts/CartContext';

const SingleProductCard = ({ item }) => {
    const { addProductToCart } = useContextCart();

    return (
        <div className={styles.card}>

            <div className={styles.imageContainer}>
                <img src={item.image} alt={item.name} className={styles.image} />

                <button className={styles.favoriteButton}>
                    <i className="fa-regular fa-heart"></i>
                </button>
            </div>

            <div className={styles.infoContainer}>
                <div className={styles.titlePrice}>
                    <p className={styles.name}>{item.name}</p>
                    <span className={styles.price}>R$ {item.price}</span>
                </div>

                <p className={styles.description}>{item.description || "Descrição do produto"}</p>
                
                <button 
                    className={styles.addToCartButton}
                    onClick={() => addProductToCart(item)} 
                >
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    );
};

const ProductCard = ({ items }) => {

    return (
        <section className={styles.gridContainer}>
            <div className={styles.grid}>
                {items.map((item, index) => (
                    <SingleProductCard key={index} item={item} />
                ))}
            </div>
        </section>
    );
};

export default ProductCard;