import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import ProductCard from '../components/ProductCard';
import CategoriasCard from '../components/CategoriasCard';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const ProductList = [
  { id: 1, name: 'AirPods Max - Prateado', price: 10.50, image: 'images/fone.png' },
  { id: 2, name: 'Camera Instax MINI 12 Verde Menta', price: 20.00, image: 'images/camera.png' },
  { id: 3, name: 'Cadeira de Escritório Giratória', price: 350.50, image: 'images/cadeira.png' },
  { id: 4, name: 'Escrivaninha Baixa Dynamica', price: 10.70, image: 'images/escrivaninha.png' },
  { id: 5, name: 'Abajur de Mesa Cúpula', price: 10.50, image: 'images/abaju.png' },
  { id: 6, name: 'Aguarda Roupa Duas Portas Bege', price: 130.80, image: 'images/guardaroupa.png' },
];

const ProductList2 = [
  { id: 7, name: 'Combo Teclado e Mouse sem fio', price: 250.00, image: 'images/teclado.png' },
  { id: 8, name: 'Controle sem fio DualSense', price: 250.00, image: 'images/controle.png' },
  { id: 9, name: 'Headset Gamer Logitech G432', price: 350.90, image: 'images/fonejogo.png' },
  { id: 10, name: 'O Retrato de Dorian Gray', price: 35.90, image: 'images/livro.png' },
  { id: 11, name: 'O Hobbit', price: 35.90, image: 'images/hobbit.png' },
  { id: 12, name: 'Frankenstein', price: 35.90, image: 'images/frankenstein.png' },
  { id: 13, name: 'Mocassim Feminino Preto', price: 350.90, image: 'images/mocassim.png' },
  { id: 14, name: 'Tenis Maculino', price: 350.90, image: 'images/tenis.png' },
  { id: 15, name: 'Mocassim Feminino Preto', price: 350.90, image: 'images/sapato.png' },
];

const CATEGORIES_DATA = [
  { name: 'Móveis', image: 'images/moveis.jpg', link: '/categoria/moveis' },
  { name: 'Vestuário', image: 'images/roupas.jpg', link: '/categoria/roupas' },
  { name: 'Livros', image: 'images/livros.jpg', link: '/categoria/books' },
  { name: 'Tecnologia', image: 'images/tec.png', link: '/categoria/tech' },
  { name: 'PetShop', image: 'images/pet.png', link: '/categoria/sneakers' },
];

const Home = () => {

  return (
    <>
      <Header />
      <Banner>BANNER</Banner>
      <Title>As melhores ofertas de hoje para você</Title>
      <ProductCard title="Produtos" items={ProductList} />
      <Title>Explore Nossas Categorias</Title>
      <CategoriasCard categories={CATEGORIES_DATA} />
      <Title>Produtos Populares da Semana</Title>
      <ProductCard title="Novidades em Tecnologia" items={ProductList2} />
      <Footer />
    </>

  );
};

export default Home;

