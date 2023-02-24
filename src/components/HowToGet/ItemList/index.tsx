import styles from './itemList.module.css';

interface ItemListProps {
  label: string;
}

export function ItemList({ label }: ItemListProps) {
  return (
    <div className={styles.itemList}>
      <div className={styles.ellipse} />
      <span>{label}</span>
    </div>
  );
}