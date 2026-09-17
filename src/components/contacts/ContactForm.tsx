"use client";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { type ChangeEvent, type FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const t = useTranslations("Contacts");
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
      if (status !== "idle") {
        setStatus("idle");
      }
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setForm(INITIAL_FORM);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        maxWidth: 560,
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
      }}
    >
      <Typography variant="h2" sx={{ fontSize: "1.35rem", mb: 0.5 }}>
        {t("formTitle")}
      </Typography>

      <TextField
        label={t("name")}
        name="name"
        value={form.name}
        onChange={handleChange("name")}
        required
        fullWidth
        autoComplete="name"
      />
      <TextField
        label={t("emailLabel")}
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange("email")}
        required
        fullWidth
        autoComplete="email"
      />
      <TextField
        label={t("phone")}
        name="phone"
        value={form.phone}
        onChange={handleChange("phone")}
        fullWidth
        autoComplete="tel"
      />
      <TextField
        label={t("message")}
        name="message"
        value={form.message}
        onChange={handleChange("message")}
        required
        fullWidth
        multiline
        minRows={4}
      />

      {status === "success" && <Alert severity="success">{t("success")}</Alert>}
      {status === "error" && <Alert severity="error">{t("error")}</Alert>}

      <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={isSubmitting}
        sx={{ alignSelf: "flex-start" }}
      >
        {isSubmitting ? t("sending") : t("submit")}
      </Button>
    </Box>
  );
}
