import React, { useEffect, useState } from 'react'
import { APIurl } from '../api_links';
import { Wrapper } from './styled';

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

    </Wrapper>
  )
}
