import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import SchoolIcon from "@mui/icons-material/School";
import DescriptionIcon from "@mui/icons-material/Description";
import { profile } from "../data/profile";
import { socialLinks } from "../data/socialLinks";

const iconMap: Record<string, React.ReactNode> = {
  cv: <DescriptionIcon />,
  github: <GitHubIcon />,
  linkedin: <LinkedInIcon />,
  scholar: <SchoolIcon />,
  x: <XIcon />,
};

export default function HeroSection() {
  return (
    <Box sx={{ pt: 0, pb: 4 }}>
      <Grid container spacing={4} alignItems="flex-start">
        <Grid size={{ xs: 12, md: 8 }} order={{ xs: 2, md: 1 }}>
          {profile.bio.map((paragraph, i) => (
            <Typography
              key={i}
              variant="body1"
              sx={{ mb: 1.5, lineHeight: 1.7 }}
              dangerouslySetInnerHTML={{ __html: paragraph.text }}
            />
          ))}
          <Stack
            direction="row"
            spacing={1}
            sx={{ mt: 2, justifyContent: { xs: "center", md: "flex-start" } }}
          >
            {socialLinks.map((link) => (
              <Tooltip key={link.label} title={link.label}>
                <IconButton
                  component={Link}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.url.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  color="primary"
                  size="large"
                  sx={{
                    "&:hover": { color: "secondary.main" },
                  }}
                >
                  {iconMap[link.icon]}
                </IconButton>
              </Tooltip>
            ))}
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} order={{ xs: 1, md: 2 }} sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src={profile.photo}
            alt={`${profile.name} profile photo`}
            sx={{
              width: { xs: 180, md: 220 },
              height: { xs: 180, md: 220 },
              objectFit: "cover",
              borderRadius: 1,
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
