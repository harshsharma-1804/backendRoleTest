import { useEffect } from "react";

function DispDataPage(props){
    const {index,item} = props

    
    const handleDelete = async(id) => {
        await fetch(`http://localhost:9000/api/v1/deletedata/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if(!response.ok){
                throw new Error('Failed to delete data');
            }
            window.location.reload();
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        console.log('Data Deleted',id)
    }

    return (
        <div className='m-5 border border-black'>
            <div key={index}>
                <p className="pl-2">id: {item._id}</p>
                <div className="m-5">
                    <label>Price: {item.price}</label>
                </div>
                <div className="m-5">
                    <p>Volume</p>
                    <label>h24: {item.volume.h24}</label><br/>
                    <label>h6: {item.volume.h6}</label><br/>
                    <label>h1: {item.volume.h1}</label><br/>
                    <label>m5: {item.volume.m5}</label>
                </div>
            </div>
            <div>
                <button className="m-5 p-1 border border-black rounded-lg bg-red-100">Update</button>
                <button onClick={() => handleDelete(item._id)} className="m-5 p-1 border border-black rounded-lg bg-red-100">Delete</button>
            </div>
        </div>
    )
}

export default DispDataPage