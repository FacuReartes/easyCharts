import './App.css';
import Elements from './components/Elements';
import InputBox from './components/InputBox';
import PieChart from './components/PieChart';
import ContextProvider from './context/ContextProvider';

type Props = {}

function App({}: Props) {
  return (
    <ContextProvider>
      <div className='bg-[#ececec] h-screen'>
        <div className='p-14 flex justify-center items-center'>
          <h1 className='text-4xl text-[#142d4c]'>Quick Pie Chart</h1>
        </div>
        <div className='flex'>
          <div className='px-12 basis-1/2'>
            <h2 className='text-center py-6 text-2xl'>Add One Item</h2>
            <InputBox/>
            <h2 className='text-center py-4 text-2xl'>Elements</h2>
            <Elements/>
          </div>
          <div className='px-12 basis-1/2'>
            <PieChart/>
          </div>
        </div>
      </div>
    </ContextProvider>
  )
}

export default App;
