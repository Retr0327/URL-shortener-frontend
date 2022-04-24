import { ControlledProps } from "types";
import { TextInput } from "@mantine/core";
import type { TextInputProps } from "@mantine/core";
import { useCustomFormik } from "src/hooks/CustomFormik";

function Input(props: ControlledProps & TextInputProps) {
  const { label, name, description, required, ...rest } = props;
  const [formik, hasError] = useCustomFormik(name);

  return (
    <TextInput
      label={label}
      description={description}
      required={required}
      name={name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={hasError}
      {...rest}
    />
  );
}

export default Input;
