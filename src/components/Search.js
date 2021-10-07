import { useState } from "react"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const Search = ({ getSearchRequest, model_list }) => {

    const [inputValue, setInputValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        getSearchRequest(inputValue)
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control" >
                <Autocomplete
                    id="combo-box-demo"
                    options={model_list}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    renderInput={(params) => <TextField {...params} label="Model" size="small"/>}
                />
            </div>
            <input type='submit' value='Hľadať' className='btn btn-block' />
        </form>
    )
}

export default Search
