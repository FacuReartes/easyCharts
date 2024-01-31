import React, { useEffect, useState } from 'react';
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useContext } from 'react';
import Context from '../context/Context'

type Props = {}

ChartJs.register(
  ArcElement, Tooltip, Legend
);

interface Element {
  name: string;
  color: string;
  value: number;
}

function PieChart({}: Props) {
  
  const { element, setElement } = useContext(Context) || { element: null, setElement: () => {} };
  const [data, setData] = useState<any | null>()
  
  useEffect(() => {
    const newData: any = {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: []
        }
      ]
    }

    console.log(element)

    if (element.length > 0) {
      element.forEach((x :Element) => (
        newData.labels.push(x.name) &&
        newData.datasets[0].data.push(x.value) &&
        newData.datasets[0].backgroundColor.push(x.color)
      ));
    }

    setData(newData)
  }, [element])

  const options = {

  }

  const dataMock = {
    labels: ['Montañas', 'Ríos', 'Bosques'],
    datasets: [
      {
        data: [15, 30, 40],  // Cantidad para cada categoría
        backgroundColor: ['#8e44ad', '#27ae60', '#3498db'],  // Colores para cada categoría
      },
    ],
  };

  return (
    <div className='h-80 flex justify-center items-center'>
      {element.length > 0 ? <Pie data={data} options={options}/> : <Pie data={dataMock} options={options}/>}
    </div>
  )
}

export default PieChart