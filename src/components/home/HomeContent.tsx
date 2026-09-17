import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { getTranslations } from "next-intl/server";
import PhotoGallery from "@/components/gallery/PhotoGallery";
import HomeServiceCards from "@/components/home/HomeServiceCards";
import PageHero from "@/components/layout/PageHero";
import AppLink from "@/components/ui/AppLink";
import { CONTACT } from "@/lib/site";

export default async function HomeContent() {
  const t = await getTranslations("Home");
  const tGallery = await getTranslations("Gallery");

  return (
    <>
      <PageHero
        kicker={t("kicker")}
        title={t("title")}
        subtitle={t("subtitle")}
        image="/gallery/batumi-main.jpg"
        imageAlt={tGallery("batumi")}
        primaryHref="/contacts"
        primaryLabel={t("book")}
        secondaryHref={`tel:${CONTACT.phoneTel}`}
        secondaryLabel={t("call")}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.7rem", md: "2.2rem" }, mb: 4 }}>
          {t("servicesTitle")}
        </Typography>
        <HomeServiceCards />
      </Container>

      <Box sx={{ bgcolor: "background.paper", py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{ justifyContent: "space-between", alignItems: { md: "flex-end" }, mb: 4, gap: 2 }}
          >
            <Typography variant="h2" sx={{ fontSize: { xs: "1.7rem", md: "2.2rem" } }}>
              {t("galleryTitle")}
            </Typography>
            <AppLink href="/about" sx={{ fontWeight: 600, color: "primary.main" }}>
              {t("aboutCta")}
            </AppLink>
          </Stack>
          <PhotoGallery />
        </Container>
      </Box>
    </>
  );
}
