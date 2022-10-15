import { URL } from 'types';
import { memo, useState } from 'react';
import { Loader } from '@components/UI';
import { useRouter } from 'next/router';
import increaseClick from '@services/put';
import { getExpireDate } from '@utils/date';
import deleteShortURL from '@services/delete';
import { getAllShortURLs } from '@services/get';
import { Table, Button, Text, ScrollArea } from '@mantine/core';
import useStyles from './Table.styles';

function URLTable() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const { classes, cx } = useStyles(scrolled)();
  const { urls, isError, isLoading, mutate } = getAllShortURLs();

  if (isLoading) return <Loader />;

  if (isError || !urls) {
    router.push('/500');
    return null;
  }

  const handleIncrease = (shortURL: string) => async () => {
    const [result, error] = await increaseClick({ shortURL });

    if (result == null || result.status === 'failed' || error) {
      return router.push('/500', { pathname: router.pathname });
    }

    if (result.msg === 'expired') {
      return router.push('/');
    }

    const { url } = result.data;
    window.open(url, '_blank', 'noopener noreferrer');
    return mutate();
  };

  const handleDelete = (shortURL: string) => async () => {
    const deletion = await deleteShortURL({ shortURL });
    if (!deletion) return router.push('/500');
    return mutate();
  };

  let urlRows;

  if (urls.data.length) {
    urlRows = urls.data.map((value: URL) => (
      <tr key={value.id}>
        <td width="30%">
          <Text
            variant="link"
            component="a"
            sx={{ cursor: 'pointer' }}
            onClick={handleIncrease(value.shortURL)}
          >
            {value.shortURL}
          </Text>
        </td>
        <td width="30%">{value.fullURL}</td>
        <td width="15%">{value.totalClick}</td>
        <td width="25%">{getExpireDate(value.expire!)}</td>
        <td width="30%">
          <Button color="red" onClick={handleDelete(value.shortURL)}>
            刪除
          </Button>
        </td>
      </tr>
    ));
  }

  return (
    <ScrollArea sx={{ height: 600 }} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table verticalSpacing="md" horizontalSpacing="sm" fontSize="lg" width="100%">
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th>Short URL</th>
            <th>Destination</th>
            <th>Total Click</th>
            <th>Expire</th>
            <th>Delete</th>
          </tr>
        </thead>
        {urlRows && <tbody>{urlRows}</tbody>}
      </Table>
    </ScrollArea>
  );
}

export default memo(URLTable);
