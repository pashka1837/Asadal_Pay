import { Box, CircularProgress } from "@mui/joy";

export default function Loader() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        zIndex: "10",
        display: "grid",
        placeItems: "center",
      }}
    >
      <CircularProgress size="lg" />
    </Box>
  );
}
