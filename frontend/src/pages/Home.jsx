import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import ProductCard from '../components/ProductCard';

const ProductList = [
  { name: 'Fone de ouvido Bluetooth', price: 'R$ 19,00', image: 'images/fone.jpg' },
  { name: 'Calça Grunge Punk Jeans', price: 'R$ 19,00', image: 'images/calca.jpg' },
  { name: 'Moletom Y2K Star', price: 'R$ 19,00', image: 'images/casaco.jpg' },
  { name: 'Vestido Alternativo', price: 'R$ 19,00', image: 'images/vestido.jpg' },
  { name: 'All Star Vermelho', price: 'R$ 19,00', image: 'images/tenis.jpg' },
  { name: 'Relógio de Couro', price: 'R$ 19,00', image: 'images/relogio.jpg' },
  { name: 'Coturno Feminino', price: 'R$ 19,00', image: 'images/bota preta.jpg' },
  { name: 'Luminária Lua Decoração', price: 'R$ 19,00', image: 'images/Luminaria.jpg' },
  { name: 'Colar Estrela', price: 'R$ 19,00', image: 'images/colar.jpg' },
];

const Home = () => {

  return (
    <>
    <Header/>
    <Title>As melhores ofertas de hoje para você!</Title>
    <ProductCard title="Produtos" items={ProductList} />

      
    </>
  );
};

export default Home;

