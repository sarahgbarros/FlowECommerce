import React from 'react';
import styles from './index.module.css';

const ProductCard = ({ items }) => {
    return (
        <section className={styles.gridContainer}>
            <div className={styles.grid}>
                {items.map((item, index) => (
                    <div key={index} className={styles.card}>

                        <div className={styles.imageContainer}>
                            <img src={item.image} alt={item.name} className={styles.image} />

                            <button className={styles.favoriteButton}>
                                <i className="fa-regular fa-heart"></i>
                            </button>
                        </div>

                        <div className={styles.infoContainer}>
                            <div className={styles.titlePrice}>
                                <p className={styles.name}>{item.name}</p>
                                <span className={styles.price}>{item.price}</span>
                            </div>

                        <p className={styles.description}>Descrição do produto</p>
                            
                            <button className={styles.addToCartButton}>
                                Adicionar ao carrinho
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductCard;

