import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function Footer() {
  return (
    <Box sx={{ py: 4 }}>
      <Divider sx={{ mb: 3 }} />
      <Typography variant="body2" color="text.secondary" align="right">
        Built with Varnish by Allen AI.
      </Typography>
    </Box>
  );
}
