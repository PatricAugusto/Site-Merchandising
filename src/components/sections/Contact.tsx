"use client";

import { useState, FormEvent } from "react";
import styled from "styled-components";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactWrapper = styled.section`
  padding: 6rem 2rem;
  max-width: 1280px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 3rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    padding: 4rem 1.25rem;
    gap: 2rem;
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Eyebrow = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

const Title = styled.h2`
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.15;
`;

const Description = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  max-width: 420px;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  margin-top: 1rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;

  word-break: break-word;
  overflow-wrap: anywhere;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }
`;

const FormCard = styled.form`
  padding: 2.5rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.elevated};

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: ${({ theme }) => theme.radii.md};
    gap: 1rem;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const inputStyles = `
  padding: 0.85rem 1rem;
  border-radius: 10px;
  font-size: 0.95rem;
  font-family: inherit;
  transition: border-color 0.2s ease, background 0.2s ease;
`;

const Input = styled.input`
  ${inputStyles}
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  ${inputStyles}
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  resize: vertical;
  min-height: 120px;
  max-height: 280px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ErrorText = styled.span`
  font-size: 0.8rem;
  color: #e07a5f;
`;

const SubmitButton = styled.button`
  padding: 0.9rem 1.75rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #1a1a1a;
  font-weight: 600;
  border: none;
  border-radius: ${({ theme }) => theme.radii.pill};
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate(): boolean {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) newErrors.name = "Informe seu nome.";
    if (!form.email.trim()) {
      newErrors.email = "Informe seu e-mail.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "E-mail inválido.";
    }
    if (!form.message.trim()) newErrors.message = "Escreva uma mensagem.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // TODO: integração futura com Formspree, EmailJS ou API própria.

    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <ContactWrapper id="contato">
      <InfoColumn>
        <Eyebrow>Contato</Eyebrow>
        <Title>Vamos colocar sua marca em movimento</Title>
        <Description>
          Conte um pouco sobre o projeto e retornamos com uma proposta
          personalizada em até 1 dia útil.
        </Description>

        <InfoList>
          <InfoItem>
            <Mail size={18} />
            contato@merchandisingco.com.br
          </InfoItem>
          <InfoItem>
            <Phone size={18} />
            (11) 4000-0000
          </InfoItem>
          <InfoItem>
            <MapPin size={18} />
            São Paulo, SP
          </InfoItem>
        </InfoList>
      </InfoColumn>

      <FormCard onSubmit={handleSubmit} noValidate>
        {submitted ? (
          <SuccessMessage>
            Mensagem enviada! Entraremos em contato em breve.
          </SuccessMessage>
        ) : (
          <>
            <Field>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && <ErrorText>{errors.name}</ErrorText>}
            </Field>

            <Field>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </Field>

            <Field>
              <Label htmlFor="message">Mensagem</Label>
              <TextArea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              {errors.message && <ErrorText>{errors.message}</ErrorText>}
            </Field>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar mensagem"}
            </SubmitButton>
          </>
        )}
      </FormCard>
    </ContactWrapper>
  );
}