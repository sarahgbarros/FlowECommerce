import React from "react";
import styles from './index.module.css';

const Banner = () => {
    return (
        <div className={styles.gridContainer}>
            <div> 
                <h1 className={styles.title}>Compre Fácil Agora!</h1>
                <p className={styles.text}>Onde a infinidade de opções se encontra com a facilidade de um clique, transformando sua busca em uma compra perfeita.</p>
            </div>

        </div>
    );
};

export default Banner;