import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { getTranslations } from "next-intl/server";
import PhotoGallery from "@/components/gallery/PhotoGallery";
import PageHero from "@/components/layout/PageHero";

export default async function AboutContent() {
  const t = await getTranslations("About");
  const tHome = await getTranslations("Home");
  const tGallery = await getTranslations("Gallery");

  return (
    <>
      <PageHero
        title={t("title")}
        subtitle={t("lead")}
        image="/gallery/okeanus-3.jpg"
        imageAlt={tGallery("okyanus3")}
        primaryHref="/contacts"
        primaryLabel={tHome("book")}
      />
      <Container maxWidth="md" sx={{ py: { xs: 7, md: 10 } }}>
        <Typography sx={{ fontSize: "1.15rem", mb: 3, color: "text.secondary" }}>
          {t("p1")}
        </Typography>
        <Typography sx={{ fontSize: "1.15rem", mb: 3, color: "text.secondary" }}>
          {t("p2")}
        </Typography>
        <Typography sx={{ fontSize: "1.15rem", color: "text.secondary" }}>
          {t("p3")}
        </Typography>
      </Container>
      <Box sx={{ bgcolor: "background.paper", py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontSize: { xs: "1.7rem", md: "2.2rem" }, mb: 4 }}>
            {tHome("galleryTitle")}
          </Typography>
          <PhotoGallery />
        </Container>
      </Box>
    </>
  );
}
