import CartProvider from './contexts/CartContext'; // Importe o Provider
import AppRoutes from './routes/index.jsx';

const App = () => {
  return (
    <CartProvider> 
      <AppRoutes />
    </CartProvider>
  );
}

export default App;