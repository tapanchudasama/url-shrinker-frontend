import React, { Fragment, useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Link } from '@chakra-ui/react';
import { Api } from '../helper/api';
import { Pagination } from './Pagination';

export const UrlTable = () => {
  const [urlData, setUrlData] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  useEffect(() => {
    const api = new Api();
    api
      .getAllUrls(pageNo)
      .then(response => {
        setUrlData(response.data.data);
      })
      .catch(err => {
        alert('Some error while fetching data');
        throw err;
      });
  }, [pageNo]);

  const redirectToUrl = event => {
    const api = new Api();
    api
      .getFullUrl(event.target.textContent)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };
  return (
    <Fragment>
      <Pagination pageNo={pageNo} setPageNo={setPageNo} />
      <Table mt="10">
        <Thead>
          <Tr>
            <Th>Short URL</Th>
            <Th>Full URL</Th>
            <Th>Clicks</Th>
            <Th>Created At</Th>
          </Tr>
        </Thead>
        <Tbody>
          {urlData.map((url, index) => {
            return (
              <Tr key={index}>
                <Td>
                  <Link
                    href={
                      process.env.REACT_APP_BACKEND_URL + '/api/' + url.short
                    }
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
                <Td>{new Date(Date.parse(url.createdDate)).toString()}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Pagination pageNo={pageNo} setPageNo={setPageNo} />
    </Fragment>
  );
};
