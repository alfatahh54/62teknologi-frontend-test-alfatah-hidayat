import React, { Component, useCallback, useEffect, useState } from 'react';
import BusinessRow from './BusinessRow';
import axios from 'axios';
import Pagination from './Pagination';
import { useLocation } from 'react-router';
// import axios from 'axios';
const axiosController = new AbortController
// const yelp = require('yelp-fusion')
// const client = yelp.client("Ubf1-f0uqsJUnssqPMGo-tiFeZTT85oFmKfznlPmjDtX8s83jYMoAb-ApuD63wgq6LDZNsUXG6gurZIVYaj2jzxJmmLdCdXbDqIHU_b6KiCEVi8v-YB0OSsW6MWaY3Yx")
const BusinessList = (props) =>  {
  const [businessList, setBusinessList] = useState([])
  const [totalPage, setTotalPage] = useState(1)
  useEffect(()=> {
    return () => getDataBusiness()
  }, [])
//   const query = useLocation()
//   console.log(query.key);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = parseInt(searchParams.get('page'));
  const getDataBusiness = useCallback( async () => {
        const url = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search"
        // const url = "https://swapi.dev/api/people"
        let config = {
            // signal: axiosController.signal,
            headers: { 
                Authorization: "Bearer Ubf1-f0uqsJUnssqPMGo-tiFeZTT85oFmKfznlPmjDtX8s83jYMoAb-ApuD63wgq6LDZNsUXG6gurZIVYaj2jzxJmmLdCdXbDqIHU_b6KiCEVi8v-YB0OSsW6MWaY3Yx",
                // 'Origin': "http://localhost:3000",
                // 'Accept': 'application/json',
                "accept": "application/json",
               // "Access-Control-Allow-Origin": "*",
            },
            params: {
                term: "restaurant",
                location: "nyc",
                sort_by: "best_match",
                limit: 20,
                offset: page
            }
        }
        try {
            const response = await axios.get(url, config)
            setTotalPage(response.data.total || 1)
            setBusinessList(response.data.businesses || [])
        } catch (error) {
            console.log({error});
        }
    })
    return (
        <div className="container main-content">
        {   
            businessList.length > 0 ? businessList.map(business => {
            return <BusinessRow data={business} />
            }) : <></>
        }
        <Pagination totalPage={totalPage} currentPage={page || 1}/>
        </div>
    );

}

export default BusinessList;