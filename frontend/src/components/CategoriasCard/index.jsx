import React from "react";
import styles from './index.module.css';

const CategoriasCard = ({ categories }) => {

    return (
        <div className={styles.gridContainer}>
            <div className={styles.grid}> {categories.map((item, index) => {
                    const { name, image, link } = item;

    return (
        <a key={index} href={link || '#'}
         className={styles.cardLink} aria-label={`Ver produtos da categoria ${name}`}>
             <div className={styles.card}>

                <div className={styles.imageContainer}>
                    <img src={image} alt={name} className={styles.image} />

                    <div className={styles.nameOverlay}>
                       <p className={styles.name}>{name}</p>
                   
                   </div>
                    </div>
                      </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoriasCard;