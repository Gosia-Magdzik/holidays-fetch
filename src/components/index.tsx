import React, { useEffect, useState } from 'react'
import { APIurl } from '../api_links';
import { Wrapper,
      Table,
 } from './styled';

interface apiProps {
  date: string;
  countryCode: string;
  name: string;
}

export const UsHolidays = () => {

  const [apiData, setApiData] = React.useState<apiProps[]>();

  React.useEffect(() => {
    fetchAPI();
  }, [])

  const fetchAPI = async () => {
    try {
      const response = await fetch(APIurl);
      const data = await response.json();
      setApiData(data);
    }
    catch (error) {
      console.error("Ups.., sth. went wrong", error)
    }
  }

  return (
    <Wrapper>
      {apiData && apiData.length > 0 && (
        <h2>Public Holidays {apiData[0].countryCode}</h2>
      )}
      <Table>
        <thead>
          <tr>
            <th>The Date</th>
            <th>Holiday Name</th>
          </tr>
        </thead>

        <tbody>
        {apiData && apiData.map((info, index) =>
          <tr key={index}>
            <td>{info.date}</td>
            <td>{info.name}</td>
          </tr>
        )}
        </tbody>
      </Table>

    </Wrapper>
  )
}
