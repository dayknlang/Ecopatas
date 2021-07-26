import React, { useEffect }from 'react'
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';


const PointsPage = () => {
    
    const point = useRequestData({}, `${BASE_URL}/pickupPoints.json`)
    
    
    useEffect(() => {
      inicialStateFilter()
      
    }, [])

    const arrayPoints = []

    for (let item of Object.values(point)) {
      arrayPoints.push(item)
    }

    const pickupPointsList = arrayPoints.map((point) => {
      return (
        <div>      
          <div key={point.id}>
              <h2> {point.name} </h2>
              <p> {point.cep} </p>
              <p> {point.region} - {point.neighborhood} </p>
              <p> {point.street}, {point.number} </p>
              <p> Horário de Funcionamento: {point.schedule} </p>
          </div>
        </div>
      )
        
    })

  return (
    <div>
        Sou o PointsPage      

        <div>

          {pickupPointsList.length > 0 ?
          pickupPointsList : <h1>Carregando</h1>}

        </div>
        
    </div>
  )
}

export default PointsPage;
