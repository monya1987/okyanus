"use client";

import Box from "@mui/material/Box";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import WhatsAppFab from "@/components/layout/WhatsAppFab";

type Props = {
  children: React.ReactNode;
};

export default function AppShell({ children }: Props) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
      }}
    >
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>
      <Footer />
      <WhatsAppFab />
    </Box>
  );
}
