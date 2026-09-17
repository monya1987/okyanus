import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

type Props = {
  title: string;
  children?: ReactNode;
};

export default function SimplePage({ title, children }: Props) {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          mb: children ? 3 : 0,
        }}
      >
        {title}
      </Typography>
      {children}
    </Container>
  );
}
