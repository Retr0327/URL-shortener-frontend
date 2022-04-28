import { Table, Button, Text } from "@mantine/core";
import { URLShortenerPropsType, URLDataType } from "types";
import { deleteShortURL, increaseClick } from "src/services";

function convertBirthDate(birthDate: string) {
  const date = new Date(birthDate);

  return `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}  ${date.getHours()}:${date.getMinutes()}`;
}

function URLTable({ allURLs }: URLShortenerPropsType) {
  const hasURL = allURLs.length;

  let urlRows;

  const handleDeleteClick = (shortURL: string) => async () => {
    const [result, error] = await deleteShortURL({ shortURL });

    const { status } = result;

    if (status !== "success" || error) {
      return alert("Oops! Something went wrong!");
    }

    return window.location.reload();
  };

  const handleIncreaseClick = (shortURL: string) => async () => {
    const [result, error] = await increaseClick({ shortURL });

    const { status } = result;

    if (status === "failed" || error) {
      return alert("Oops! Something went wrong!");
    }

    if (status === "success" && result.message === "Expired") {
      return alert("URL expired!");
    }

    window.open(result.url, "_blank", "noopener noreferrer");
  };

  if (hasURL) {
    urlRows = allURLs.map((value: URLDataType) => (
      <tr key={value.id}>
        <td width="30%">
          <Text
            variant="link"
            component="a"
            onClick={handleIncreaseClick(value.short_url)}
          >
            {value.short_url}
          </Text>
        </td>
        <td width="30%">{value.full_url}</td>
        <td width="15%">{value.total_click}</td>
        <td width="25%">{convertBirthDate(value.expire!)}</td>
        <td width="30%">
          <Button color="red" onClick={handleDeleteClick(value.short_url)}>
            刪除
          </Button>
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
