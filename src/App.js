import React, {useState, useEffect} from 'react'
import Header from './components/Header/Header';
import './App.scss';
import MainContent from './components/Main/MainContent';
import getAllStays from './helpers/getAllStays';


const initialStays = [
  {
    "id": 1,
    "city": "Helsinki",
    "country": "Finland",
    "superHost": false,
    "title": "Stylist apartment in center of the city",
    "rating": 4.4,
    "maxGuests": 3,
    "type": "Entire apartment",
    "beds": 2,
    "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
  },
  {
    "id": 2,
    "city": "Turku",
    "country": "Finland",
    "superHost": false,
    "title": "Nice apartment in center of Helsinki",
    "rating": 4.2,
    "maxGuests": 5,
    "type": "Entire apartment",
    "beds": 3,
    "photo": "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  }
];

const initialCityOptions = [
  {
    "city": "Helsinki",
    "country": "Finland"
  },
  {
    "city": "Turku",
    "country": "Finland"
  }
]

const initialText ={
  "city": "Helsinki",
  "country": "Finland"
}

function App() {
  const [stays, setStays] = useState(initialStays) 
  const [isNavbarFocus, setIsNavbarFocus] = useState(false);
  const [loading, setLoading] = useState(true)
  const [text, setText] = useState(initialText);

  const [cityOptions, setCityOptions] = useState(initialCityOptions)

  const [adultsCounter, setAdultsCounter] = useState(0)
  const [childrenCounter, setChildrenCounter] = useState(0)

  useEffect(() =>{
    getAllStays(setLoading)
            .then((data) => {
              setStays(data)
              updateCityOptions(data)
            })

  }, [])


  const updateCityOptions = newStays =>{
    let allCities = newStays.map(stay =>({
      "city": stay.city,
      "country": stay.country
      }
    ))

    let unique = []
    allCities.map(x => unique.filter(a => a.city === x.city && a.country === x.country).length > 0 ? null : unique.push(x));
    console.log(unique)
    setCityOptions(unique)
  }

  const updateCityValue = city =>{
    const newCity = {
      "city": city.city,
      "country": city.country
    }

    setText(newCity)
  }

  return (
    <div className={isNavbarFocus ? "app app--opened" : "app"}>
      <Header isNavbarFocus={isNavbarFocus} setIsNavbarFocus={setIsNavbarFocus} stays={stays} cityOptions={cityOptions} text={text} updateCityValue={updateCityValue} adultsCounter={adultsCounter} setAdultsCounter={setAdultsCounter} childrenCounter={childrenCounter} setChildrenCounter={setChildrenCounter}/>
      <MainContent stays={stays} loading={loading}/>
    </div>
  );
}

export default App;
