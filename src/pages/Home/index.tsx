import { Heading } from "../../components/Heading";
import { HowToGet } from "../../components/HowToGet";
import { Offers } from "../../components/Offers";
import { OursPlants } from "../../components/OursPlants";
import { SignatureNewsletter } from "../../components/SignatureNewsletter";

import styles from './home.module.css';

export function Home() {
  return (
    <main className={styles.main}>
      <Heading />
      <SignatureNewsletter />

      <img className={styles.image} src="./assets/imagem-hero 1.png" alt="árvore" />

      <HowToGet />
      <Offers />
      <OursPlants />
    </main>
  );
}