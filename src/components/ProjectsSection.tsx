import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { projects } from "../data/projects";

const TITLE_COLOR = "#8b2500";

export default function ProjectsSection() {
  return (
    <Box>
      <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 3 }}>
        Projects
      </Typography>
      {projects.map((item, i) => (
        <Box key={i} sx={{ mb: 4 }}>
          <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{
              color: TITLE_COLOR,
              fontSize: "1.15rem",
              fontWeight: 500,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {item.title}
          </Link>
          <Typography variant="body1" sx={{ mt: 0.5 }}>
            {item.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
