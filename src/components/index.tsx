import React, { useEffect, useState } from 'react'
import { APIurl } from '../api_links';
import { Wrapper,
      Table,
      Title,
 } from './styled';
 import axios from 'axios';
import { error } from 'console';

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

  //const fetchAPI = async () => {
  //  try {
  //    const response = await fetch(APIurl);
  //    const data = await response.json();
  //    setApiData(data);
  //  }
  //  catch (error) {
  //    console.error("Ups.., sth. went wrong", error)
  //  }
  //}

  //using AXIOS
  const fetchAPI = () => {
    axios.get(APIurl)
    .then((response) => {
      setApiData(response.data)
    })
    .catch((error) => {
      console.error("Ups.., sth. went wrong", error)
    })
  }


  function changeDateFormat (dateString: string | number | Date) {

    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    } as Intl.DateTimeFormatOptions;

    const date = new Date(dateString)

    return date.toLocaleDateString('en-UK', options)
  }

  return (
    <Wrapper>
      {apiData && apiData.length > 0 && (
        <Title>
          Public Holidays {apiData[0].countryCode}
        </Title>
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
            <td>{changeDateFormat(info.date)}</td>
            <td>{info.name}</td>
          </tr>
        )}
        </tbody>
      </Table>
    </Wrapper>
  )
}
