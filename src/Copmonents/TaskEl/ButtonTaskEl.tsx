import { Button, SvgIconTypeMap } from "@mui/joy";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export default function ButtonTaskEl(props) {
  const child = props.return(
    <Button
      variant="plain"
      sx={{
        width: "30px",
      }}
    >
      {img}
    </Button>
  );
}
