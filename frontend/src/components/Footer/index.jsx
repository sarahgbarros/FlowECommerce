import React from 'react';
import styles from './index.module.css';

const Footer = () => {

  return (
    <footer className={styles.footer}> 
      <div className={styles['footerContainer']}>

        <div className={styles.info}>
          <img 
            src="/images/flowLogo.png" 
            alt="Logo Flow" 
            className={styles['flow-logo']} 
          />
          <p className={styles['flow-slogan']}>
            Sua nova experiência de compra online é aqui. Explore, compare e adquira
            <br />
            produtos de alta qualidade!
          </p>
        </div>

        <div className={styles['footer-columns']}>

          <div className={styles['column']}>
            <h3 className={styles['column-title']}>Departamentos</h3>
            <ul className={styles['column-list']}>
              <li><a href="#" className={styles['column-link']}>Moda</a></li>
              <li><a href="#" className={styles['column-link']}>Material de escritório</a></li>
              <li><a href="#" className={styles['column-link']}>Produtos de Beleza</a></li>
              <li><a href="#" className={styles['column-link']}>Livros</a></li>
              <li><a href="#" className={styles['column-link']}>Eletrônica</a></li>
              <li><a href="#" className={styles['column-link']}>Sapatos</a></li>
              <li><a href="#" className={styles['column-link']}>PetShop</a></li>
              <li><a href="#" className={styles['column-link']}>Mobiliário</a></li>
            </ul>
          </div>

          <div className={styles['column']}>
            <h3 className={styles['column-title']}>Sobre nós</h3>
            <ul className={styles['column-list']}>
              <li><a href="#" className={styles['column-link']}>Sobre o Flow</a></li>
              <li><a href="#" className={styles['column-link']}>Compras</a></li>
              <li><a href="#" className={styles['column-link']}>Carreira</a></li>
              <li><a href="#" className={styles['column-link']}>Notícias</a></li>
              <li><a href="#" className={styles['column-link']}>Blog</a></li>
              <li><a href="#" className={styles['column-link']}>Afiliados & Parceiros</a></li>
              <li><a href="#" className={styles['column-link']}>Ideias e Guias</a></li>
            </ul>
          </div>

          <div className={styles['column']}>
            <h3 className={styles['column-title']}>Serviços</h3>
            <ul className={styles['column-list']}>
              <li><a href="#" className={styles['column-link']}>Cartão</a></li>
              <li><a href="#" className={styles['column-link']}>Site</a></li>
              <li><a href="#" className={styles['column-link']}>Envio e Entrega</a></li>
              <li><a href="#" className={styles['column-link']}>Retirada de pedidos</a></li>
              <li><a href="#" className={styles['column-link']}>Cadastro da conta</a></li>
            </ul>
          </div>

          <div className={styles['column']}>
            <h3 className={styles['column-title']}>Ajuda</h3>
            <ul className={styles['column-list']}>
              <li><a href="#" className={styles['column-link']}>Ajuda com a compra</a></li>
              <li><a href="#" className={styles['column-link']}>Segurança e Fraude</a></li>
              <li><a href="#" className={styles['column-link']}>Entre em contato conosco</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={styles['bottom-footer']}>
        <div className={styles['bottom-footer-content']}>
          <a href="#" className={styles['bottom-link']}>Política de Privacidade</a>
          <a href="#" className={styles['bottom-link']}>Termos de Uso</a>
          <p className={styles.copyright}>Copyright © 2025 By Creditar</p>
        </div>
      </div>
    </footer> 
  );
};

export default Footer;