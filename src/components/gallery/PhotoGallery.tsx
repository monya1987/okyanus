"use client";

import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { GALLERY } from "@/lib/site";

type GalleryKey = (typeof GALLERY)[number]["key"];

export default function PhotoGallery() {
  const t = useTranslations("Gallery");
  const [activeKey, setActiveKey] = useState<GalleryKey | null>(null);
  const active = GALLERY.find((item) => item.key === activeKey);

  return (
    <>
      <ImageList
        variant="quilted"
        cols={4}
        gap={12}
        sx={{
          m: 0,
          gridTemplateColumns: {
            xs: "repeat(2, 1fr) !important",
            md: "repeat(4, 1fr) !important",
          },
        }}
      >
        {GALLERY.map((item, index) => (
          <ImageListItem
            key={item.src}
            cols={index === 0 || index === 3 ? 2 : 1}
            rows={1}
            sx={{ cursor: "pointer", overflow: "hidden", borderRadius: 2 }}
            onClick={() => setActiveKey(item.key)}
          >
            <Image
              src={item.src}
              alt={t(item.key)}
              width={item.width}
              height={item.height}
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                aspectRatio: "4 / 3",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog
        open={Boolean(active)}
        onClose={() => setActiveKey(null)}
        maxWidth="lg"
        slotProps={{
          paper: {
            sx: { bgcolor: "transparent", boxShadow: "none", overflow: "visible" },
          },
        }}
      >
        {active ? (
          <Box sx={{ position: "relative" }}>
            <IconButton
              onClick={() => setActiveKey(null)}
              aria-label={t("close")}
              sx={{
                position: "absolute",
                top: -48,
                right: 0,
                color: "common.white",
              }}
            >
              <CloseIcon />
            </IconButton>
            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                bgcolor: "common.black",
              }}
            >
              <Image
                src={active.src}
                alt={t(active.key)}
                width={active.width}
                height={active.height}
                sizes="90vw"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Box>
          </Box>
        ) : null}
      </Dialog>
    </>
  );
}
