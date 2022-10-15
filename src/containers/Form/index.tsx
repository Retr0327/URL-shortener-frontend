import { memo } from 'react';
import { object, string } from 'yup';
import useCachedURL from '@hooks/url';
import { useRouter } from 'next/router';
import { setExpireDate } from '@utils/date';
import { Grid, Button } from '@mantine/core';
import createShortURL from '@services/create';
import { getAllShortURLs } from '@services/get';
import FormikController from '@components/Form';
import { Form, Formik, FormikHelpers } from 'formik';

type FormValues = { url: string };

function URLForm() {
  const router = useRouter();
  const { mutate } = getAllShortURLs();
  const urlUniqueTest = useCachedURL();

  const initialValues: FormValues = {
    url: '',
  };

  const validationSchema = object({
    url: string()
      .required('Please enter the url!')
      .test('url', 'already exists', urlUniqueTest.current as any),
  });

  const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    const { url } = values;
    const expireDate = setExpireDate(1);
    const [result, error] = await createShortURL({ url: url.trim(), expireDate });

    if (result == null || result.status === 'failed' || error) {
      return router.push('/500', { pathname: router.pathname });
    }

    mutate();
    return actions.setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {(formik) => (
        <Form>
          <Grid justify="center" gutter="xl">
            <Grid.Col xs={12} sm={12} md={12} lg={10}>
              <Grid align="end">
                <Grid.Col xs={9} sm={9} md={9}>
                  <FormikController control="text-input" label="Target URL" name="url" required />
                </Grid.Col>
                <Grid.Col xs={3} sm={3} md={3}>
                  <Button
                    type="submit"
                    loading={formik.isSubmitting}
                    fullWidth
                    mb={formik.errors.url && 5}
                  >
                    {formik.isSubmitting ? 'Shrinking' : 'Shrink'}
                  </Button>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default memo(URLForm);
