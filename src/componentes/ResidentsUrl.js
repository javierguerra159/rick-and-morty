import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentsUrl = ({ url }) => {

    const [residentUrl, setResidentUrl] = useState({});


    useEffect(() => {
        axios.get(url)
            .then(res => setResidentUrl(res.data));
    }, [url])

    

    return (
        <li>
            <img src={residentUrl.image} alt="imagelist" />
            <h3>
                <b>{residentUrl.name}</b>
            </h3>
            <hr />
            <div className='sub-container'>
                <p>Especie</p> <b>{residentUrl.species}</b>
            </div>

            <div className='sub-container'>
                <p>Origen </p><b>{residentUrl.origin?.name}</b>

            </div>
            <div className='sub-container'>

                <p>aparicion episodios </p> <b>{residentUrl.episode?.length}</b>
            </div>

        </li>
    );
};

export default ResidentsUrl;