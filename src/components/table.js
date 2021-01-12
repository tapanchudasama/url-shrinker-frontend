import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Link } from '@chakra-ui/react';
import { Api } from '../helper/api';

export const UrlTable = () => {
  const [urlData, setUrlData] = useState([]);
  useEffect(() => {
    const api = new Api();
    api
      .getAllUrls()
      .then(response => {
        setUrlData(response.data.data);
      })
      .catch(err => {
        throw err;
      });
  }, []);

  const redirectToUrl = event => {
    const api = new Api();
    api
      .getFullUrl(event.target.textContent)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };
  return (
    <Table mt="10">
      <Thead>
        <Tr>
          <Th>Short URL</Th>
          <Th>Full URL</Th>
          <Th>Clicks</Th>
        </Tr>
      </Thead>
      <Tbody>
        {urlData.map((url, index) => {
          return (
            <Tr key={index}>
              <Td>
                <Link
                  href={process.env.REACT_APP_BACKEND_URL + '/api/' + url.short}
                  isExternal
                  color="blue.500"
                >
                  <div onClick={redirectToUrl}>
                    {process.env.REACT_APP_BACKEND_URL + '/api/' + url.short}
                  </div>
                </Link>
              </Td>

              <Td>
                <Link
                  href={url.full}
                  isExternal
                  wordBreak="break-all"
                  color="blue.500"
                >
                  {url.full}
                </Link>
              </Td>
              <Td>{url.clicks}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
