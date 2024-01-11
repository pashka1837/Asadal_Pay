import { FormControl, FormLabel, Input } from "@mui/joy";

export default function MyInput({
  label,
  name,
  placeholder,
  defaultValue,
  handleInpChange,
}: MyInputPropsT) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        onChange={(e) => handleInpChange(e, name)}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        type="text"
      />
    </FormControl>
  );
}
