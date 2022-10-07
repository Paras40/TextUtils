import React from 'react';

const Page404 = () => {

    const myStyle = {
        marginTop: '200px',
        overflow: 'hidden',
    }

    return (
        <>
            <div className="container-fluid text-center my-4">
                <h1 style={myStyle}>404! Page Not Found</h1>
            </div>
        </>
    )
}

export default Page404