import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/layout/PageHero";

export default async function BatumiContent() {
  const t = await getTranslations("Batumi");
  const tGallery = await getTranslations("Gallery");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <>
      <PageHero
        title={t("title")}
        subtitle={t("lead")}
        image="/gallery/batumi-main.jpg"
        imageAlt={tGallery("batumi")}
      />
      <Container maxWidth="md" sx={{ py: { xs: 7, md: 10 } }}>
        <Stack spacing={3}>
          {paragraphs.map((paragraph) => (
            <Typography
              key={paragraph.slice(0, 24)}
              sx={{ fontSize: "1.12rem", color: "text.secondary", lineHeight: 1.8 }}
            >
              {paragraph}
            </Typography>
          ))}
        </Stack>
      </Container>
    </>
  );
}
