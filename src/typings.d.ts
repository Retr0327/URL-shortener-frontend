import { TextInputProps } from "@mantine/core";

export type FormValueType = {
  url: string;
};

export type ControlledProps = {
  label: string;
  name: string;
};

export type ControllerProps = ControlledProps &
  ({ control: "text-input" } & TextInputProps);
