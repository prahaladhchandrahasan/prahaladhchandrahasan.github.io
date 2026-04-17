import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { publications } from "../data/publications";

const AUTHOR_NAME = "Prahaladh Chandrahasan";
const TITLE_COLOR = "#8b2500";

function formatAuthors(authorStr: string) {
  const parts = authorStr.split(AUTHOR_NAME);
  if (parts.length === 1) return authorStr;
  return (
    <>
      {parts[0]}
      <strong>{AUTHOR_NAME}</strong>
      {parts[1]}
    </>
  );
}

export default function PublicationsSection() {
  return (
    <Box>
      <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 3 }}>
        Publications
      </Typography>
      {publications.map((pub) => (
        <Box key={pub.id} sx={{ mb: 4 }}>
          <Link
            href={pub.links[0]?.url}
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
            {pub.title}
          </Link>
          <Typography variant="body1" sx={{ mt: 0.5 }}>
            {formatAuthors(pub.authors)}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
            {pub.venue}
          </Typography>
          {pub.links.length > 1 && (
            <Typography variant="body2" sx={{ mt: 0.5 }}>
              {pub.links.slice(1).map((link, j) => (
                <span key={link.label}>
                  {j > 0 && " \u00B7 "}
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ "&:hover": { color: "secondary.main" } }}
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}
