import { Arrow } from './Arrow';
import styles from './productCard.module.css';

interface ProductCardProps {
  name: string;
  price: number;
  urlImage: string;
}

export function ProductCard({ name, price, urlImage }: ProductCardProps) {
  const formattedPrice = Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);

  return (
    <div className={styles.productCard}>
      <img src={urlImage} alt={`Foto da planta ${name}`} />

      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{formattedPrice}</div>
        <button>
          <span>Comprar</span>
          <Arrow />
        </button>
      </div>

    </div>
  );
}