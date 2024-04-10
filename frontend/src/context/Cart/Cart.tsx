import { ReactNode, useEffect, useState } from "react";
import ShoppingCartContext from "./ShoppingCartContext";
import Carrito from "../../components/Cart/Carrito";
import useUser from '../Users/useUser';

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export default function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const user = useUser()

  const totalQuantity = async (username: string) => {
    if (!username) {
      console.log('User not found');
      return 0;
    }

    try {
      const token = localStorage.getItem('jwtToken');
      const headers = {
        'authorization': `Bearer ${token}`
      };
      const response = await fetch(`https://shopping-cart-production-4ea1.up.railway.app/cart/totalQuantity/${username}`,{
        headers: headers
    });
      if (!response.ok) {
        throw new Error('Failed to fetch total quantity from server');
      }
      const total = await response.json();
      return total;
    } catch (error) {
      console.log('Error fetching total quantity', error);
      return 0;
    }
  };

  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    const fetchQuantity = async () => {
      if (user) {
        try {
          const userQuantity = await totalQuantity(user.username);
          setQuantity(userQuantity);
        } catch (error) {
          console.error('Error fetching quantity cart', error);
        }
      }
    };
    fetchQuantity();
  }, [user]);

  const openCart = () => setIsOpen(true);

  const closeCart = () => setIsOpen(false);

  const cartItems = async (username: string) => {
    try {
      if (!username) {
        console.log('User not found');
        return [];
      }
      const token = localStorage.getItem('jwtToken');
      const headers = {
        'authorization': `Bearer ${token}`
      };
      const response = await fetch(`https://shopping-cart-production-4ea1.up.railway.app/cart/${username}`, {
        headers: headers
    });
      if (!response.ok) {
        throw new Error('Failed to fetch cart from server');
      }
      const cartItems = await response.json();
      return cartItems;
    } catch (error) {
      console.log('Error fetching carts items', error);
      throw error;
    }
  };

  const itemQuantity = async (_id: string, username: string) => {
    try {
      if (!username) {
        console.log('User not found');
        return 0;
      }
      const token = localStorage.getItem('jwtToken');
      const headers = {
        'authorization': `Bearer ${token}`
      };
      const response = await fetch(`https://shopping-cart-production-4ea1.up.railway.app/cart/itemQuantity/${username}/${_id}`, {
        headers: headers
    });
      if (!response.ok) {
        throw new Error('Failed to fetch item quantity from server');
      }
      const data = await response.json();
      return data.totalQuantity;
    } catch (error) {
      console.log('Error fetching item quantity', error);
      return 0;
    }
  };

  const increaseQuantity = async (_id: string, username: string) => {
    try {
      if (!username) {
        console.log('User not found');
        return;
      }
      const token = localStorage.getItem('jwtToken');
      const headers = {
        'authorization': `Bearer ${token}`
      };
      const response = await fetch(`https://shopping-cart-production-4ea1.up.railway.app/cart/increase/${_id}/${username}`, {
        method: 'POST',
        headers: headers
      });
      if (!response.ok) {
        throw new Error('Failed to increase quantity on server');
      }
      const data = await response.json();
      setQuantity(prevQuantity => prevQuantity + data)
      return quantity;
    } catch (error) {
      console.log('Error increasing quantity', error);
    }
  };


  const decreaseQuantity = async (_id: string, username: string) => {
    try {
      if (!username) {
        console.log('User not found');
        return;
      }
      const token = localStorage.getItem('jwtToken');
      const headers = {
        'authorization': `Bearer ${token}`
      };
      const response = await fetch(`https://shopping-cart-production-4ea1.up.railway.app/cart/decrease/${_id}/${username}`, {
        method: 'POST',
        headers: headers
      });
      if (!response.ok) {
        throw new Error('Failed to decrease quantity on server');
      }
      const data = await response.json()
      setQuantity(prevQuantity => prevQuantity - data)
      return quantity
    } catch (error) {
      console.log('Error decreasing quantity', error);
    }
  };

  const removeFromCart = async (_id: string, username: string) => {
    try {
      if (!username) {
        console.log('User not found');
        return;
      }
      const token = localStorage.getItem('jwtToken');
      const headers = {
        'authorization': `Bearer ${token}`
      };
      const response = await fetch(`https://shopping-cart-production-4ea1.up.railway.app/cart/delete/${_id}/${username}`, {
        method: 'DELETE',
        headers: headers
      });
      if (!response.ok) {
        throw new Error('Failed to remove item from cart on server');
      }
      const data = await response.json()
      setQuantity(prevQuantity => prevQuantity - data)
      return quantity
    } catch (error) {
      console.log('Error removing item from cart', error);
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        itemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        quantity
      }}
    >
      {children}
      <Carrito isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
