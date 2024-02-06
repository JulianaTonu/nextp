import React from 'react';

const DynamicPage = ({params, searchParams}) => {
    // console.log(params)
    return (
        <div>
            <h1>This is dynamic page: {params.id}</h1>
            <h2>Search by:{searchParams.category} ,
            <br></br>
             Price:{searchParams.price}</h2>
        </div>
    );
};

export default DynamicPage;
