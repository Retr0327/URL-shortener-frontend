import { createStyles } from '@mantine/core';

const useStyles = (scrolled: boolean) =>
  createStyles((theme) => ({
    header: {
      top: 0,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      transition: 'box-shadow 150ms ease',

      '&::after': {
        content: '""',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        borderBottom: `${scrolled && '1px solid'} ${
          theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
        }`,
      },
    },

    scrolled: {
      boxShadow: theme.shadows.sm,
    },
  }));

export default useStyles;
