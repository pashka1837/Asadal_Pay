import { FormControl, FormLabel, Input } from "@mui/joy";

export default function MyInput({
  label,
  name,
  placeholder,
  handleInpChange,
}: MyInputT) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        onChange={(e) => handleInpChange(e, name)}
        name={name}
        placeholder={placeholder}
        type="text"
      />
    </FormControl>
  );
}
