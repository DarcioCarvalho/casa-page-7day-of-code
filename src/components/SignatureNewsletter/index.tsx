import { FormSignatureNewsletter } from "./FormSignatureNewsletter";

import styles from './signatureNewsletter.module.css';

export function SignatureNewsletter() {
  return (
    <div className={styles.signatureNewsletter}>
      <span>Sua casa com as</span>

      <h1>melhores <br></br>plantas</h1>

      <p>
        Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
      </p>

      <FormSignatureNewsletter />
    </div>
  );
}