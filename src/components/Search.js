import { useState } from "react"


const Search = ({ getSearchRequest }) => {
    
    const [text, setText] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        getSearchRequest(text)
    }
    
    
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <input
                    type="text"
                    id="header-search"
                    placeholder="TV model"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <input type='submit' value='Hľadať' className='btn btn-block' />
        </form>
    )
}

export default Search
