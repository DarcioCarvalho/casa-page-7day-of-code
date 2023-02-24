import { Formik, FormikErrors } from 'formik';
import emailjs from '@emailjs/browser';
import { MailIcon } from "../../MailIcon";

import styles from './formSignatureNewsletter.module.css';

interface FormValues {
  email: string;
}

export function FormSignatureNewsletter() {

  async function sendEmail(email: string) {
    const name = email.split('@')[0];
    const message = `Olá, ${name}. \n
    Boas-vindas à Casa Verde! Você se cadastrou em
    nossa newsletter e vai começar a receber e-mails
    com as novidades de nossa loja e dicas de como
    cuidar de suas plantas.
    
    Até logo!`;

    const templateParams = {
      subject: 'Bem-vindo a Newsletter da Casa Verde!',
      to_name: name,
      to_email: email,
      from_name: 'Casa Verde',
      from_email: import.meta.env.VITE_EMAILJS_FROM_EMAIL,
      message
    }

    emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then(() => {
        console.log("E-mail enviado!!!");
      }, (error) => {
        console.error("Erro: ", error);
      });
  }

  const initialValues: FormValues = { email: "" }

  return (
    <Formik
      initialValues={initialValues}
      validate={values => {
        const errors: FormikErrors<FormValues> = {};
        if (values.email &&
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "E-mail inválido"
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, setValues }) => {
        setTimeout(() => {
          alert(JSON.stringify(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${values.email}`, null, 2));

          sendEmail(values.email)

          setValues({ ...values, email: "" });

          setSubmitting(false);
        }, 700);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <>
          <form className={styles.formSignatureNewsletter} onSubmit={handleSubmit}>

            <div className={styles.fieldGroup}>
              <MailIcon />
              <input
                type="email"
                name="email"
                placeholder="Insira seu e-mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <button type="submit" disabled={!values.email || !!errors.email || isSubmitting}>
              Assinar newsletter
            </button>
          </form>
          {errors.email && touched.email &&
            <div className={styles.error}>{errors.email}</div>
          }
        </>
      )
      }

    </Formik>

  );
}