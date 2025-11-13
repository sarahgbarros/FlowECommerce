import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import ProductCard from '../components/ProductCard';

const ProductList = [
  { id: 1, name: 'Fone de ouvido Bluetooth', price: 10.50, image: 'images/fone.jpg' },
  { id: 2, name: 'Calça Grunge Punk Jeans', price: 10.50, image: 'images/calca.jpg' },
  { id: 3, name: 'Moletom Y2K Star', price: 10.50, image: 'images/casaco.jpg' },
  { id: 4, name: 'Vestido Alternativo', price: 10.50, image: 'images/vestido.jpg' },
  { id: 5, name: 'All Star Vermelho', price: 10.50, image: 'images/tenis.jpg' },
  { id: 6,name: 'Relógio de Couro', price: 10.50, image: 'images/relogio.jpg' },
  { id: 7, name: 'Coturno Feminino', price: 10.50, image: 'images/bota preta.jpg' },
  { id: 8, name: 'Luminária Lua Decoração', price: 10.50, image: 'images/Luminaria.jpg' },
  { id: 9,name: 'Colar Estrela', price: 10.50, image: 'images/colar.jpg' },
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

