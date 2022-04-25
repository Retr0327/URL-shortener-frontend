import { TextInputProps } from "@mantine/core";

export type FormValueType = {
  url: string;
};

export type ControlledProps = {
  label: string;
  name: string;
  required?: boolean;
  description?: string;
};

export type ControllerProps = ControlledProps &
  ({ control: "text-input" } & TextInputProps);

export type HTTPMethod =
  | "get"
  | "GET"
  | "delete"
  | "DELETE"
  | "post"
  | "POST"
  | "put"
  | "PUT";

export type CredentialsType = {
  [key: string]: any;
};

export type CustomFetchType = {
  method: HTTPMethod;
  url: string;
  credentials?: CredentialsType;
};

export type URLShortenerPropsType = {
  allURLs: { [keys: string]: any }[];
};
