import { useState } from "react"

function CreateData(){
    const [data, setData] = useState({
        price: '',
        volume: {
            h24: '',
            h6: '',
            h1: '',
            m5: ''
        }
    })

    const handleChange = (e) => {
        const {name, value } = e.target
        if (name === "price") {
            setData(prevData => ({
                ...prevData,
                [name]: value
            }));
        } else if (["h24", "h6", "h1", "m5"].includes(name)) {
            setData(prevData => ({
                ...prevData,
                volume: {
                    ...prevData.volume,
                    [name]: value
                }
            }));
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Data Created',data)

        fetch('http://localhost:9000/api/v1/createdata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to create data');
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
    }

    // const handleUpdate = async(id) => {
    //     await fetch(`http://localhost:9000/api/v1/updatedata/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then(response => {
    //         if(!response.ok){
    //             throw new Error('Failed to update data');
    //         }
    //         window.location.reload();
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log('Success:', data);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });
    // }

    return(
        <div>
            <div className=" m-4 border-black border">
                <form onSubmit={handleSubmit}>
                    <div className="m-5">
                        <label>Price: </label>
                        <input type="text" name="price" value={data.price} onChange={handleChange} placeholder="Enter Price" className="border pl-2"/>
                    </div>
                    <div className="m-5">
                        <label>Volume</label><br/>
                        <label>24 hour: </label>
                        <input type="text" name="h24" value={data.volume.h24} onChange={handleChange} placeholder="in 24 hour" className="border pl-2"/>
                        <label className="pl-2">6 hour: </label>
                        <input type="text" name="h6" value={data.volume.h6} onChange={handleChange} placeholder="in 6 hour" className="border pl-2"/>
                        <label className="pl-2">1 hour: </label>
                        <input type="text" name="h1" value={data.volume.h1} onChange={handleChange} placeholder="in 1 hour" className="border pl-2"/>
                        <label className="pl-2">5 minutes: </label>
                        <input type="text" name="m5" value={data.volume.m1} onChange={handleChange} placeholder="in 5 minutes" className="border pl-2"/>
                    </div>
                    <button type="submit" className="m-5 p-1 border-black border bg-red-100 rounded-lg ">Create Data</button>
                </form>
            </div>
        </div>
    )
}

export default CreateData