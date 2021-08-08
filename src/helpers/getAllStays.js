

const getAllStays = async () =>{
    const url = "./stays.json"
    const res = await fetch(url)
    const data = await res.json();

    return data
}

export default getAllStays;