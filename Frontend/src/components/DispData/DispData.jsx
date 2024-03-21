import { useState, useEffect } from 'react';
import DispDataPage from './DispDataPage';


function DispData(){
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('http://localhost:9000/api/v1/getalldata')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to get data');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            setData(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        })}, []);

    return (
        <div>
            {data.data && data.data.length > 0 ? (
            data.data.map((item, index) => (
                <DispDataPage key={index} item={item} />
            ))
        ) : (
            <p className='text-xl font-bold text-red-800 p-5'>No Data to display here</p>
        )}
        </div>
    )
}

export default DispData