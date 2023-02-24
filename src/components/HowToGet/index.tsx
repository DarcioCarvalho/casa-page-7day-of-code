import styles from './howToGet.module.css';
import { ItemList } from './ItemList';

export function HowToGet() {
  return (
    <div id="howToGet" className={styles.container}>
      <img src="./assets/como-conseguir-folha.png" alt="como conseguir" />

      <div className={styles.info}>
        <div className={styles.title}>
          <span>Como conseguir</span>
          <h1>minha planta</h1>
        </div>

        <div className={styles.list}>
          <ItemList label="Escolha suas plantas" />
          <ItemList label="Faça seu pedido" />
          <ItemList label="Aguarde na sua casa" />
        </div>
      </div>
    </div>
  );

}