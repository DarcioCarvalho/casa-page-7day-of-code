import { Logo } from "../Logo";
import { Menu } from "../Menu";

import styles from './heading.module.css';

export function Heading() {
  return (
    <header className={styles.heading}>
      <Logo />
      <Menu />
    </header>
  );
}