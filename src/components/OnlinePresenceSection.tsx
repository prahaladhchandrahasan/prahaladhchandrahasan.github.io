import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { onlinePresence } from "../data/onlinePresence";

export default function OnlinePresenceSection() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 3 }}>
        Online Presence
      </Typography>
      <Stack spacing={2}>
        {onlinePresence.map((group, i) => (
          <Card key={i} variant="outlined">
            <CardContent sx={{ py: 1.5, "&:last-child": { pb: 1.5 } }}>
              <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
                {group.title}
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {group.links.map((link) => (
                  <Chip
                    key={link.label}
                    label={link.label}
                    component="a"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    clickable
                    size="small"
                    variant="outlined"
                    color="primary"
                  />
                ))}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
