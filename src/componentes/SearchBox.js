
import axios from 'axios';
import { useState } from 'react';

const SearchBox = ({setInfo}) => {

    const [id, setId] = useState("")
    const search = () =>{
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(res => setInfo(res.data))
    }

    return (
        <div>
            <input className='search-input'
                type="text"
                onChange={e => setId(e.target.value)}
                value={id}
            />
            <button className='button-input'
                onClick={search}
            >
                search
            </button>

        </div>
    );
};

export default SearchBox;