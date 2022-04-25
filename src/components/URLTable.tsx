import { Table, Button, Text } from "@mantine/core";
import { URLShortenerPropsType, URLDataType } from "types";

function convertBirthDate(birthDate: string) {
  const date = new Date(birthDate);

  return `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}  ${date.getHours()}:${date.getMinutes()}`;
}

function URLTable({ allURLs }: URLShortenerPropsType) {
  const hasURL = allURLs.length;

  let urlRows;

  if (hasURL) {
    urlRows = allURLs.map((value: URLDataType) => (
      <tr key={value.id}>
        <td width="30%">
          <Text variant="link" component="a" href={value.full_url}>
            {value.short_url}
          </Text>
        </td>
        <td width="30%">{value.full_url}</td>
        <td width="15%">click</td>
        <td width="25%">{convertBirthDate(value.expire!)}</td>
        <td width="30%">
          <Button color="red">刪除</Button>
        </td>
      </tr>
    ));
  }

  return (
    <Table
      verticalSpacing="md"
      horizontalSpacing="sm"
      fontSize="lg"
      width="100%"
    >
      <thead>
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
  );
}

export default URLTable;
