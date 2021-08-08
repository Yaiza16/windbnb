

const getAllStays = async (setLoading) =>{
    setLoading(true)

    const url = "./stays.json"
    const res = await fetch(url)
    const data = await res.json();

    setLoading(false)
    return data
}

export default getAllStays;