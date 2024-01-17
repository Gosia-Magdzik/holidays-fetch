import React, { useEffect, useState } from 'react'
import { APIurl } from '../api_links'

export const UsHolidays = () => {

  const [apiData, setApiData] = React.useState();

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
    <div>

    </div>
  )
}
