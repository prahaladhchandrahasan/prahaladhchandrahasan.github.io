import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";

export default function BlogSection() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
        Open Thoughts
      </Typography>
      <List disablePadding>
        <ListItem disableGutters sx={{ py: 0.5 }}>
          <ListItemText
            primary={
              <Typography variant="body1" sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                [2026.10.1] Some stuff about CMU (
                <Link
                  href="/data/blog1.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ "&:hover": { color: "secondary.main" } }}
                >
                  Read here
                </Link>
                )
                <Chip
                  label="Latest"
                  size="small"
                  color="error"
                  sx={{ fontWeight: 700 }}
                />
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
}
