import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import SearchBox from './SearchBox';
import ResidentsList from './ResidentsList';

const LocationInfo = () => {

    const [residents, setResidents] = useState([])



    useEffect(() => {
        const ramdon = Math.floor(Math.random() * 126);
        axios.get(`https://rickandmortyapi.com/api/location/${ramdon}`)
            .then(res => setResidents(res.data))
    }, [])




    return (


        <div className="container">
            <div className="image">
                <img className="image-riky" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/640px-Rick_and_Morty.svg.png' alt='imagepng' />

            </div>

            <h1>
                {residents.name}

            </h1>
            <div className='cabezera'>
                <p>type: <b>{residents.type}</b></p> <p>Dimension: <b>{residents.dimension}</b></p> <p>Population: <b>{residents.residents?.length}</b></p>
            </div>


            <SearchBox setInfo={setResidents} />
            <ResidentsList residents={residents} />

        </div>

    );
};

export default LocationInfo;