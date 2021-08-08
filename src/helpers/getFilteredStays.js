const getFilteredStays = async (setLoading, text, adultsCounter, childrenCounter) =>{
    setLoading(true)

    const url = "./stays.json"
    const res = await fetch(url)
    const data = await res.json();

    const newData = data.filter(stay => stay.city === text.city && stay.maxGuests >= (adultsCounter+childrenCounter))
    setLoading(false)
    return newData
}

export default getFilteredStays