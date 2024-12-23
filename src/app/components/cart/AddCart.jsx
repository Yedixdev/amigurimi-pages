'use client';
import { motion } from 'framer-motion';
import { useCart } from './CartContext';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const whatsappNumber = "+573154249690";

export default function AddCart() {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => {
    const itemTotal = parseFloat(item.price.replace(/[$,.]/g, '')) * item.quantity;
    return sum + itemTotal;
  }, 0);

  const cartMessage = cartItems
    .map(item => `${item.quantity} - ${item.name}, de la collección: ${item.category}`)
    .join("\n");

  return (
    <motion.div 
    initial={{ y: -20, opacity: 0 }} 
    animate={{ y: 0, opacity: 1 }} 
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="w-full md:w-[380px] lg:w-[380px] xl:w-[380px] md:rounded-br-xl md:rounded-bl-xl flex flex-col items-center gap-4 font-lato text-lg text-[#1f6c76] font-bold bg-white shadow-lg shadow-gray-800 p-4 absolute right-0 xl:right-5 2xl:right-[350px] top-[70px] z-40 max-h-[80vh] overflow-y-auto">
   <h2 className="text-xl">Carrito de Compras</h2>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <CartItem 
              key={item.id} 
              item={item} 
              addToCart={addToCart} 
              removeFromCart={removeFromCart} 
            />
          ))}
          <CartSummary 
            total={total} 
            cartMessage={cartMessage} 
            whatsappNumber={whatsappNumber} 
          />
        </>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
    </motion.div>
  );
}
