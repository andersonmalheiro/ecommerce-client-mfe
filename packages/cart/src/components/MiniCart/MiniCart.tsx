import React from 'react';
import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import {
  MiniCartButton,
  MiniCartContainer,
  MiniCartItemsCount,
} from './MiniCart.styles';
import { CartItem, MiniCartPopup } from './MiniCartPopup';

export const MiniCart = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const [showCart, setShowCart] = React.useState(false);
  const [dragging, setDragging] = React.useState(false);
  const [items, setItems] = React.useState<CartItem[]>([]);

  const toggleCart = () => setShowCart((state) => !state);

  // Listener to handle clicks outside component and close the popup
  const clickListener = (event: MouseEvent) => {
    const { target } = event;

    if (ref.current && !ref.current.contains(target as Node)) {
      setShowCart(false);
    }
  };

  const dragOverHandler = (event: React.DragEvent) => {
    event.preventDefault();
    setDragging(true);
  };

  const dragLeaveHandler = (event: React.DragEvent) => {
    event.preventDefault();
    setDragging(false);
  };

  const dropHandler = (event: React.DragEvent) => {
    event.preventDefault();
    const { dataTransfer } = event;

    const data = dataTransfer.getData('text/plain');
    const splittedData = data.split(':');

    if (splittedData.length === 2 && splittedData[0] === 'product_id') {
      const id = splittedData[1];
      const parsedId = parseInt(id, 10);

      if (parsedId) {
        setItems((state) => {
          const productIndex = items.findIndex((el) => el.id === parsedId);

          // If product is already in cart, updates the quantity
          if (productIndex >= 0) {
            return state.map((product) => ({
              ...product,
              quantity:
                product.id === parsedId
                  ? product.quantity + 1
                  : product.quantity,
            }));
          }

          // Else, adds it
          return [
            ...state,
            {
              name: Math.random().toString(36).substring(2),
              id: parseInt(id, 10),
              quantity: 1,
              unitValue: Math.random() * 100,
            },
          ];
        });
      }
    }

    setDragging(false);
  };

  React.useEffect(() => {
    window.addEventListener('click', clickListener);

    return () => window.removeEventListener('click', clickListener);
  }, []);

  return (
    <MiniCartContainer
      ref={ref}
      onDragOver={dragOverHandler}
      onDragLeave={dragLeaveHandler}
      dragging={dragging}
      onDrop={dropHandler}
    >
      <MiniCartButton onClick={toggleCart} title="cart">
        <CartIcon />
        {!!items.length && (
          <MiniCartItemsCount>{items.length}</MiniCartItemsCount>
        )}
      </MiniCartButton>

      {showCart && <MiniCartPopup items={items} />}
    </MiniCartContainer>
  );
};
