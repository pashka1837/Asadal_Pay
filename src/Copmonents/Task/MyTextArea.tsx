import { FormControl, FormLabel, Textarea } from "@mui/joy";

export default function MyInput({
  label,
  name,
  placeholder,
  handleInpChange,
}: MyInputT) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Textarea
        onChange={(e) => handleInpChange(e, name)}
        name={name}
        placeholder={placeholder}
      />
    </FormControl>
  );
}
