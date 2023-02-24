import { MenuItem } from "./MenuItem";
import styles from './menu.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <MenuItem href="#howToGet" withSeparator>Como fazer</MenuItem>
      <MenuItem href="#offers" withSeparator>Ofertas</MenuItem>
      <MenuItem href="" withSeparator>Depoimentos</MenuItem>
      <MenuItem href="" withSeparator>Videos</MenuItem>
      <MenuItem href="">Meu carrinho</MenuItem>
    </nav>
  );
}