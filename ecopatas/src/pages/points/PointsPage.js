import React, { useEffect, useState } from 'react'
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';

const PointsPage = () => {


  const point = useRequestData({}, `${BASE_URL}/pickupPoints.json`)

  const [regionFilter, setRegionFilter] = useState("")

  const onChange = (event) => {
    setRegionFilter(event.target.value);
  };

  const arrayPoints = []

  for (let item of Object.values(point)) {
    arrayPoints.push(item)
  }

  const arrayFiltrado = arrayPoints.filter(item => {
    item = item.region.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    const filter = regionFilter.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    if (item.includes(filter)) {
      return true;
    }

    return false;
  });


  const pickupPointsList = arrayFiltrado.map((point) => {
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

      <div>Informe a região do Ponto de Arrecadação: </div>
      <input onChange={onChange} />

      <div>

        {pickupPointsList.length > 0 && regionFilter !== "" ?
          pickupPointsList : <h1>Carregando</h1>}

      </div>

    </div>
  )
}

export default PointsPage;
