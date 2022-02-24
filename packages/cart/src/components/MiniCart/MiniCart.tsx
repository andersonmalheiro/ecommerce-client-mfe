import React from 'react';
import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import { CartButton, CartItemsCount, Container } from './MiniCart.styles';
import { CartItem, MiniCartPopup } from './MiniCartPopup';

export const MiniCart = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const [showCart, setShowCart] = React.useState(false);
  const [items, setItems] = React.useState<CartItem[]>([
    {
      name: 'Sabonete',
      id: 1,
      quantity: 5,
      unitValue: 11.99,
    },
    {
      name: 'Shampoo',
      id: 2,
      quantity: 1,
      unitValue: 15.99,
    },
  ]);

  const toggleCart = () => setShowCart((state) => !state);

  // Listener to handle clicks outside component and close the popup
  const clickListener = (event: MouseEvent) => {
    const { target } = event;

    if (ref.current && !ref.current.contains(target as Node)) {
      setShowCart(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', clickListener);

    return () => window.removeEventListener('click', clickListener);
  }, []);

  return (
    <Container ref={ref}>
      <CartButton onClick={toggleCart} title="cart">
        <CartIcon />
        {!!items.length && <CartItemsCount>{items.length}</CartItemsCount>}
      </CartButton>

      {showCart && <MiniCartPopup items={items} />}
    </Container>
  );
};
