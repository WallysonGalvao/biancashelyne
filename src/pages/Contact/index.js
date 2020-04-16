import React, { useRef } from 'react';
import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '~/components/Input';

import history from '~/services/history';

import logo from '~/assets/logo.png';

import Footer from '~/components/Footer';

import { Container, Content, FormContainer, Social, Title } from './styles';

export default function Contact() {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        email: Yup.string().required('Campo obrigatório'),
        message: Yup.string().required('Campo obrigatório'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      await toast.success('Mensagem enviada com sucesso!');
      formRef.current.setErrors({});
      history.push('/deliveryman');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
          toast.error(error.message);
        });

        formRef.current.setErrors(errorMessages);
      } else {
        toast.error('Algo deu errado!');
      }
    }
  }

  return (
    <Container>
      <Content>
        <FormContainer>
          <Title>ENTRE EM CONTATO</Title>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" label="Nome" />
            <Input name="email" label="E-mail" type="email" />
            <Input
              name="message"
              label="Mensagem"
              multiline="true"
              rows="4"
              cols="50"
            />
            <button type="submit">ENVIAR</button>
          </Form>
        </FormContainer>
        <Social>
          <Title>ME ACOMPANHE NAS REDES SOCIAIS</Title>

          <div>
            <a
              href="https://www.instagram.com/biancashelyne/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram size={50} />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.youtube.com/channel/UCXRExMtOE-chWT0a_ILU4lQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiYoutube size={50} />
              <span>Youtube</span>
            </a>

            <a
              href="https://www.facebook.com/bianca.shelyne"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook size={50} />
              <span>Facebbok</span>
            </a>
          </div>

          <img src={logo} alt="Bianca Shelyne" />
        </Social>
      </Content>
      <Footer />
    </Container>
  );
}
