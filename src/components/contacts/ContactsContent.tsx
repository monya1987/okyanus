import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { getTranslations } from "next-intl/server";
import ContactForm from "@/components/contacts/ContactForm";
import {
  CONTACT,
  getMapEmbedUrl,
  getMapLink,
  getWhatsappHref,
} from "@/lib/site";

export default async function ContactsContent() {
  const t = await getTranslations("Contacts");

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
      <Typography variant="h1" sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}>
        {t("title")}
      </Typography>
      <Typography sx={{ color: "text.secondary", mb: 5, maxWidth: 640 }}>
        {t("body")}
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Stack spacing={4}>
            <Box>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 1 }}>
                <PlaceOutlinedIcon color="primary" fontSize="small" />
                <Typography variant="h3" sx={{ fontSize: "1.15rem" }}>
                  {t("locationTitle")}
                </Typography>
              </Stack>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                {t("locationLine")}
              </Typography>
              <Button href={getMapLink()} target="_blank" rel="noopener noreferrer">
                {t("openMap")}
              </Button>
            </Box>

            <Box>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 1 }}>
                <EmailOutlinedIcon color="primary" fontSize="small" />
                <Typography variant="h3" sx={{ fontSize: "1.15rem" }}>
                  {t("writeTitle")}
                </Typography>
              </Stack>
              <Stack spacing={1}>
                <Typography
                  component="a"
                  href={`mailto:${CONTACT.email}`}
                  sx={{ color: "primary.main", textDecoration: "none" }}
                >
                  {CONTACT.email}
                </Typography>
                <Typography
                  component="a"
                  href={`tel:${CONTACT.phoneTel}`}
                  sx={{ color: "primary.main", textDecoration: "none" }}
                >
                  {CONTACT.phoneDisplay}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} sx={{ mt: 2, flexWrap: "wrap" }}>
                <Button href={`tel:${CONTACT.phoneTel}`} variant="contained">
                  {t("call")}
                </Button>
                <Button
                  href={getWhatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                >
                  {t("whatsapp")}
                </Button>
              </Stack>
            </Box>

            <Box>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 1 }}>
                <FacebookIcon color="primary" fontSize="small" />
                <Typography variant="h3" sx={{ fontSize: "1.15rem" }}>
                  {t("socialTitle")}
                </Typography>
              </Stack>
              <Button
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<FacebookIcon />}
              >
                {t("facebook")}
              </Button>
            </Box>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              border: "1px solid",
              borderColor: "divider",
              height: { xs: 260, md: 320 },
              mb: 4,
            }}
          >
            <Box
              component="iframe"
              title={t("locationTitle")}
              src={getMapEmbedUrl()}
              sx={{ width: "100%", height: "100%", border: 0 }}
              loading="lazy"
            />
          </Box>
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  );
}
