import React from 'react';
import {
  MiniCartEmptyMsg,
  MiniCartItem,
  MiniCartPopupContainer,
  MiniCartPopupContent,
  MiniCartPopupFooter,
  MiniCartPopupTitle,
} from './MiniCartPopup.styles';

type Side = 'left' | 'right';

export type CartItem = {
  id: number;
  name: string;
  quantity: number;
  unitValue: number;
};

interface MiniCartProps {
  items: CartItem[];
}

export const MiniCartPopup = (props: MiniCartProps) => {
  const { items } = props;
  const ref = React.useRef<HTMLDivElement | null>(null);
  const currencyFormatter = Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency',
  });

  const [arrowSide, setArrowSide] = React.useState<Side>('right');
  const [popupOffset, setPopupOffset] = React.useState<number>(0);

  const totalValue = React.useMemo(
    () => items.reduce((acc, curr) => acc + curr.quantity * curr.unitValue, 0),
    [items],
  );

  const getArrowSide = () => {
    if (ref.current) {
      const { left, right } = ref.current.getBoundingClientRect();
      const { innerWidth } = window;

      if (right > innerWidth) {
        setArrowSide('right');
        setPopupOffset(right - innerWidth);

        return;
      }

      if (left < 0) {
        setArrowSide('left');
        setPopupOffset(0);
      }
    }
  };

  React.useEffect(() => {
    getArrowSide();
  }, []);

  return (
    <MiniCartPopupContainer ref={ref} side={arrowSide} offset={popupOffset}>
      <MiniCartPopupTitle>Cart</MiniCartPopupTitle>
      <MiniCartPopupContent>
        {items && items.length ? (
          <ul>
            {items.map((item) => (
              <li key={item?.id}>
                <MiniCartItem>
                  <div>
                    <span className="count">{`${item.quantity}x`}</span>
                    <span className="name">{item.name}</span>
                  </div>

                  <span className="value">
                    {currencyFormatter.format(item.quantity * item.unitValue)}
                  </span>
                </MiniCartItem>
              </li>
            ))}
          </ul>
        ) : (
          <MiniCartEmptyMsg>Your cart is empty</MiniCartEmptyMsg>
        )}
      </MiniCartPopupContent>

      {!!items.length && (
        <MiniCartPopupFooter>
          <strong>Total:</strong>
          <span>{currencyFormatter.format(totalValue)}</span>
        </MiniCartPopupFooter>
      )}
    </MiniCartPopupContainer>
  );
};
