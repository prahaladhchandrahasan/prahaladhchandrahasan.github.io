import { useState } from "react";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import HeroSection from "./HeroSection";
import OnlinePresenceSection from "./OnlinePresenceSection";
import PublicationsSection from "./PublicationsSection";
import ProjectsSection from "./ProjectsSection";
import ProjectBacklogSection from "./ProjectBacklogSection";
import BlogSection from "./BlogSection";
import CopyPageButton from "./CopyPageButton";
import Footer from "./Footer";

const TAB_LABELS = ["About", "Projects & Research", "Writing"] as const;

function TabPanel({
  children,
  value,
  index,
}: {
  children: React.ReactNode;
  value: number;
  index: number;
}) {
  if (value !== index) return null;
  return <Box sx={{ pt: 1 }}>{children}</Box>;
}

export default function Layout() {
  const [tab, setTab] = useState(0);

  const heading =
    tab === 0 ? "Prahaladh Chandrahasan" : TAB_LABELS[tab];

  return (
    <Container maxWidth="md" component="main" sx={{ py: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: 700 }}
        >
          {heading}
        </Typography>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          sx={{
            minHeight: "auto",
            "& .MuiTabs-indicator": { bottom: 0 },
          }}
        >
          {TAB_LABELS.map((label) => (
            <Tab key={label} label={label} />
          ))}
        </Tabs>
      </Box>

      <TabPanel value={tab} index={0}>
        <HeroSection />
        <Divider sx={{ my: 3 }} />
        <OnlinePresenceSection />
      </TabPanel>

      <TabPanel value={tab} index={1}>
        <PublicationsSection />
        <Divider sx={{ my: 3 }} />
        <ProjectsSection />
        <Divider sx={{ my: 3 }} />
        <ProjectBacklogSection />
      </TabPanel>

      <TabPanel value={tab} index={2}>
        <BlogSection />
      </TabPanel>

      <Footer />
      <CopyPageButton />
    </Container>
  );
}
