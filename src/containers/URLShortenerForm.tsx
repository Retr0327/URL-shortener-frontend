import * as Yup from "yup";
import { FormValueType } from "types";
import { Formik, Form, FormikHelpers } from "formik";
import { URLTable, FormikController } from "@components/index";
import { Title, Grid, Center, Group, Button } from "@mantine/core";

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

            <Grid.Col xs={12} sm={12} md={12} lg={10}>
              <Grid align="end" justify="center">
                <Grid.Col xs={10} sm={10} md={10}>
                  <FormikController
                    control="text-input"
                    label="Target URL"
                    name="url"
                    required={true}
                    description={"Please enter the url"}
                  />
                </Grid.Col>
                <Grid.Col xs={2} sm={2} md={2}>
                  <Button type="submit">Shrink</Button>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default URLShortenerForm;
