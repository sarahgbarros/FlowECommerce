import React, { createContext, useContext } from "react";
import useDialogAlert from "../hooks/useDialogAlert";

export const CartContext = createContext(undefined);

const CartProvider = ({ children }) => {
    const { snackbar } = useDialogAlert();
    const [cart, setCart] = React.useState([]);

    const addProductToCart = (product) => {
        try {
            setCart([...cart, product])
            snackbar({
                message:"Produto inserido no carrinho com sucesso.",
                variant: "success",
            });
        } catch (error) {
            snackbar({
                message: "Erro ao inserir no carrinho. Tentar novamente",
                variant: "error",
            });
        }
    } 

    const removeProductFromCart = (itemId) => {
        try {
            const newCart = cart.filter((item) => item.id !== itemId);
            setCart(newCart);
            snackbar({
                message:"Produto removido do carrinho com sucesso.",
                variant: "success",
            });
        } catch (error) {
            snackbar({
                message: "Erro ao remover o produto do carrinho. Tentar novamente",
                variant: "error",
            });
        }

    }

    console.log("CartProvider -> cart -> ", cart);

    return (
        <CartContext.Provider 
            value={{ cart, setCart, addProductToCart, removeProductFromCart }}>
                {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

export const useContextCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error(
            "CartContext não pode ser utilizado fora de um CartContext.Provider"
        );
    }
    return context;
};