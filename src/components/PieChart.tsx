import { FC, useCallback, useEffect, useRef, useState, useContext } from 'react';
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { ElementContext, ContextInterface, ElementInterface } from '../context/Context'

ChartJs.register(
  ArcElement, Tooltip, Legend
);

// Interfaces for Pie Chart data
interface DataSet {
  data: number[],
  backgroundColor: string[]
}

interface DataInterface {
  labels: string[],
  datasets: DataSet[]
}

// Data mock for default Pie Chart
const dataMock: DataInterface = {
  labels: ['Mountains', 'Rivers', 'Forests'],
  datasets: [
    {
      data: [15, 30, 40],  // Cantidad para cada categoría
      backgroundColor: ['#8e44ad', '#27ae60', '#3498db'],  // Colores para cada categoría
    },
  ],
};

// Options for the PieChart display
const options = {
  plugins: {
    title: {
      display: true,
      text: "test",
      padding: {
        top: 10,
        bottom: 30,
      }
    }
  }
}

const PieChart: FC = () => {
  
  // Get list of elements and title
  const { element, title } = useContext(ElementContext) as ContextInterface;
  // Data state - Default is Mocked Data
  const [data, setData] = useState<DataInterface>(dataMock)
  
  // Runs every time element is updated and at least one element exists
  useEffect(() => {
    if (element.length > 0) {
      // Template for the new data to generate the Pie Chart
      const newData: DataInterface = {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: []
          }
        ]
      }

      // Adds the data of each element into the template - Sets the state
      element.forEach((x: ElementInterface) => (
        newData.labels.push(x.name) &&
        newData.datasets[0].data.push(x.value) &&
        newData.datasets[0].backgroundColor.push(x.color)
      ));
      setData(newData)
    }

  }, [element])

  // Refers to the Chart itself
  const chartRef = useRef<ChartJs<"pie">>(null);

  // Handles the download of the chart as a png
  const handleDownload = useCallback(() => {
    const link: HTMLAnchorElement = document.createElement('a');
    link.download = `${title}.png`;
    link.href = chartRef.current?.toBase64Image()!;
    link.click();
  }, []);

  return (
    <div>
      <h2 className='font-bold text-center text-2xl py-6'>{title}</h2>
      <div className='h-80 flex justify-center items-center'>
        <Pie ref={chartRef} data={data} options={options}/>
      </div>
      <div className='px-6 md:px-16 pt-2'>
        <button className='bg-[#385170] text-[#ececec] rounded px-8 py-3 text-sm font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring' 
        onClick={handleDownload}>Download</button>
      </div>
    </div>
  )
}

export default PieChart