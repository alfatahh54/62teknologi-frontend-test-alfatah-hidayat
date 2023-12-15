import React, { Component, useCallback, useEffect, useMemo, useState } from 'react';
import BusinessRow from './BusinessRow';
import axios from 'axios';
import Pagination from './Pagination';
import { useLocation } from 'react-router';
import SearchBar from './SearchBar';
// import axios from 'axios';
const axiosController = new AbortController
// const yelp = require('yelp-fusion')
// const client = yelp.client("Ubf1-f0uqsJUnssqPMGo-tiFeZTT85oFmKfznlPmjDtX8s83jYMoAb-ApuD63wgq6LDZNsUXG6gurZIVYaj2jzxJmmLdCdXbDqIHU_b6KiCEVi8v-YB0OSsW6MWaY3Yx")
const BusinessList = (props) =>  {
  const [businessList, setBusinessList] = useState([])
  const [totalPage, setTotalPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(20)
  const [term, setTerm] = useState('')
  const [isLoading, setLoading] = useState(true)
  console.log(limit);
  useEffect(()=> {
    console.log("dasda", limit);
     if (isLoading) {
        getDataBusiness()
     } else {
        setLoading(false)
     }
     return
  }, [limit, term, currentPage])

  const setPage = (page) => {
    setCurrentPage(page)
    setLoading(true)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setTerm(event.target[0].value);
    setPage(1)
    setLoading(true)
  }
  const handleChangeLimit = (event) => {
    event.preventDefault()
    setLimit(parseInt(event.target.value));
    setPage(1)
    setLoading(true)
  }
  const getDataBusiness = useCallback( async () => {
        const url = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search"
        // const url = "https://swapi.dev/api/people"
        console.log({limit});
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
                term: term,
                location: "nyc",
                sort_by: "best_match",
                limit: limit,
                offset: (currentPage - 1) * limit
            }
        }
        try {
            const response = await axios.get(url, config)
            setTotalPage(response.data.total/20 || 1)
            setBusinessList(response.data.businesses || [])
            setLoading(false)
        } catch (error) {
            console.log({error});
            setLoading(false)
        }
    }, [limit, term, currentPage])
    return (
        <div className="container main-content">
        <SearchBar handleSubmit={handleSubmit}/>
            <div className='limitRow'>
                <div className='limitLabel'>
                <label >Limit</label>
                </div>
               <select className='limitTerm' onChange={handleChangeLimit} value={limit}>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
               </select>
            </div>
        {   
            isLoading ? <div>Loading....</div> : !isLoading && businessList.length > 0 ? businessList.map(business => {
            return <BusinessRow data={business} />
            }) : <></>
        }
        <Pagination setPage={setPage}  totalPage={totalPage * limit > 1000 ? Math.ceil(1000/limit) : totalPage} currentPage={currentPage || 1}/>
        </div>
    );

}

export default BusinessList;