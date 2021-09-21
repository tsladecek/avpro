import React from 'react';
import './App.css';

import Header from './components/Header';
import Search from './components/Search';


function App() {

  const fetchTV = async (queryModel) => {
    const res = await fetch(`http://localhost:8000/${queryModel}`)
    const data = await res.json()

    return data
  }

  const getSearchRequest = async (queryModel) => {
    const models = await fetchTV(queryModel)

    console.log(models)
    
  }

  return (
      <div className="container">
        <Header/>
        <Search getSearchRequest={getSearchRequest}/>
      </div>
  )
}

export default App;
