import URLForm from '@containers/Form';
import URLTable from '@containers/Table';
import { ColorSchemeToggle } from '@components/UI';
import { Container, Title, Group, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}));

function Home() {
  const { classes } = useStyles();

  return (
    <>
      <Container size={700} my={40}>
        <Group position="right" mt={5}>
          <ColorSchemeToggle />
        </Group>
        <Title className={classes.title}>URL Shortener</Title>
        <URLForm />
      </Container>
      <Container size={900} my={40}>
        <URLTable />
      </Container>
    </>
  );
}

export default Home;
