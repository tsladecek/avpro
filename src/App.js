import React from 'react';
import './App.css';

import Header from './components/Header';
import Search from './components/Search';
import TVTable from "./components/TVTable";
import Button from './components/Button';

import tvmodels from './models'

import { useState } from 'react';


function App() {

  const [Model, setModel] = useState([])
  const [showTable, setShowTable] = useState(false)

  const [ValidModel, setValidModel] = useState(true)
  const [ModelsLength, setModelsLength] = useState(0)
  const [ModelIndex, setModelIndex] = useState(0)

/*   const fetchTV = async (queryModel) => {
    const res = await fetch(`${process.env.REACT_APP_JSON_SERVER_URL}/${queryModel}`)
    const data = await res.json()

    return data
  } */

  const model_list = Object.keys(tvmodels);

  const fetchTV = (queryModel) => {

    if (model_list.includes(queryModel)) {
      setValidModel(true)
      setShowTable(true)
      return tvmodels[queryModel]
    }
    setShowTable(false)
    setValidModel(false)
    return {}
  }

  const getSearchRequest = async (queryModel) => {
    const models = await fetchTV(queryModel.toUpperCase())

    setModel(models)
    setModelsLength(models.length)
  }

  const NextModel = () => {
    if (ModelIndex === ModelsLength - 1) {
      setModelIndex(0)
    }
    else {
      setModelIndex(ModelIndex + 1)
    }
  }

  const handleKeypress = e => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      NextModel();
    }
  };

  return (
    <div className="container">
      <Header />
      <Search getSearchRequest={getSearchRequest} />
      {showTable && <h2>Model: {ModelIndex + 1}</h2>}
      {showTable && <TVTable model={Model[ModelIndex]} />}
      {showTable && <Button text="Ďalej" color="green"
        onClick={NextModel} onKeyPress={handleKeypress} />}
      {!ValidModel && <h2 style={{ color: "red" }}>Model sa nenachádza v databáze</h2>}

    </div>
  )
}

export default App;
