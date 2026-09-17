import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import PhotoGallery from "@/components/gallery/PhotoGallery";
import PageHero from "@/components/layout/PageHero";
import { SHIPS } from "@/lib/site";

export default async function ShipsContent() {
  const t = await getTranslations("Ships");
  const tHome = await getTranslations("Home");
  const tGallery = await getTranslations("Gallery");

  return (
    <>
      <PageHero
        title={t("title")}
        subtitle={t("lead")}
        image="/gallery/okeanus-1.jpg"
        imageAlt={tGallery("fleet")}
        primaryHref="/contacts"
        primaryLabel={tHome("book")}
      />
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Grid container spacing={4}>
          {SHIPS.map((ship) => (
            <Grid key={ship.id} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  mb: 2,
                  bgcolor: "background.paper",
                }}
              >
                <Image
                  src={ship.image}
                  alt={t(ship.titleKey)}
                  width={ship.width}
                  height={ship.height}
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{
                    width: "100%",
                    height: 240,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
              <Typography variant="h3" sx={{ fontSize: "1.35rem", mb: 1 }}>
                {t(ship.titleKey)}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {t(ship.bodyKey)}
              </Typography>
            </Grid>
          ))}
        </Grid>
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
