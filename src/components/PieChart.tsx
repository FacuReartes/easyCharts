import React, { MouseEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useContext } from 'react';
import { saveAs } from 'file-saver';
import Context from '../context/Context'
import { getTokenSourceMapRange } from 'typescript';

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
  
  const { element, setElement, title, setTitle } = useContext(Context) || { element: null, setElement: () => {}, title: null };
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
    plugins: {
      title: {
        display: true,
        text: "test",
        padding: {
          top:10,
          bottom: 30,
        }
      }
    }
  }

  const chartRef: any = useRef(null);

  const handleDownload = useCallback(() => {
    const link = document.createElement('a');
    link.download = `${title}.png`;
    link.href = chartRef.current.toBase64Image();
    link.click();
  }, []);

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
    <div>
      <h2 className='font-bold text-center text-2xl py-6'>{title ? title : "Geografía Natural"}</h2>
      <div className='h-80 flex justify-center items-center'>
        {element.length > 0 ? <Pie ref={chartRef} data={data} options={options}/> : <Pie ref={chartRef} data={dataMock} options={options}/>}
      </div>
      <div className='px-6 md:px-16 pt-2'>
        <button className='bg-[#385170] text-[#ececec] rounded px-8 py-3 text-sm font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring' 
        onClick={handleDownload}>Download</button>
      </div>
    </div>
  )
}

export default PieChart