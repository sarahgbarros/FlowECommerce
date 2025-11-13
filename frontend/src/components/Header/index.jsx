import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import CartDropdown from '../CartDropdown';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchTerm.trim() !== '') {
      e.preventDefault();
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const toggleCartDropdown = () => {
    setShowCartDropdown(prev => !prev);
  };

  return (
    <div id="container-header">
      <header className={styles.header}>

        <Link to="/">
          <img src="/images/logo.png" alt="Logo Flow" className={styles['logo-Flow']} />
        </Link>

        <nav className={styles.dropdown}>
          <button className={styles.dropbtn}>
            <span className={styles.titleMenu}>
              Categorias<i className="fas fa-chevron-down"></i>
            </span>
          </button>
          <div className={styles['dropdown-content']}>
            <Link to="">Roupas</Link>
            <Link to="">Acessórios</Link>
            <Link to="">Eletronicos</Link>
          </div>
        </nav>

        <button className={styles.dropbtn}>
          <span className={styles.titleMenu}>
            Novidades<></>
          </span>
        </button>

        <button className={styles.dropbtn}>
          <span className={styles.titleMenu}>
            Promoções<></>
          </span>
        </button>

        <div className={styles['search-container']}>
          <input
            type="search"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className={styles['search-input']}
          />
          <i className={`fa-solid fa-magnifying-glass ${styles['search-icon']}`}></i>        
          </div>

        <button className={styles.profile}>
          <span className={styles.titleMenu}>
            Perfil <i class="fa-solid fa-circle-user"></i>
          </span>
        </button>

        <nav className={styles['dropdown-cart']}>
          <button 
            className={styles['cart-trigger']} 
            onClick={toggleCartDropdown}
            aria-expanded={showCartDropdown}
            aria-label="Toggle carrinho de compras"
          >
            <div className={styles['cart-shopping']}>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>

            <i className={`fas fa-chevron-down ${showCartDropdown ? styles.rotated : ''}`}></i>
          </button>
          
          {showCartDropdown && <CartDropdown />}
        </nav>

      </header>
    </div>
  );
};

export default Header;
