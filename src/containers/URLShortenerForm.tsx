import * as Yup from "yup";
import { FormValueType } from "types";
import { Title, Grid, Center } from "@mantine/core";
import { Formik, Form, FormikHelpers } from "formik";
import FormikController from "@components/FormikController/FormikController";

function URLShortenerForm() {
  const initialValues: FormValueType = {
    url: "",
  };

  const validationSchema = Yup.object({
    url: Yup.string().required("請輸入網址！"),
  });

  const onSubmit = async (
    values: FormValueType,
    actions: FormikHelpers<FormValueType>
  ) => {
    return "hello";
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <Grid justify="center" gutter="xl">
            <Grid.Col xs={12} sm={12} md={12} lg={10}>
              <Title order={1} align="center">
                URL Shortener
              </Title>
            </Grid.Col>

            <Grid.Col xs={12} sm={12} md={12}>
              <FormikController
                control="text-input"
                label="Target URL"
                name="url"
              />
            </Grid.Col>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default URLShortenerForm;
