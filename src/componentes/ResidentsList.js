import React from 'react';
import ResidentsUrl from './ResidentsUrl';

const ResidentsList = ({residents}) => {


    return (
        <div>
            <ul>
                {
                    residents.residents?.map(resident =>(
                        
                            
                            <ResidentsUrl url={resident} key={resident}/>
                        
                    ))
                }
            </ul>
        </div>
    );
};

export default ResidentsList;