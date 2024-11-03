import React, { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.css';

type BurgerProps = {
  showBurgerMenu: boolean;
  setShowBurgerMenu: Dispatch<SetStateAction<boolean>>;
};

const Burger: React.FC<BurgerProps> = ({
  showBurgerMenu,
  setShowBurgerMenu,
}: BurgerProps) => {
  return (
    <div
      className={styles.navBurger}
      onClick={() => setShowBurgerMenu(!showBurgerMenu)}
    >
      <span id='line-one' />
      <span id='line-two' />
      <span id='line-three' />
    </div>
  );
};

export default Burger;
