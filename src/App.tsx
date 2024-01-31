import './App.css';
import Elements from './components/Elements';
import Footer from './components/Footer';
import Header from './components/Header';
import InputBox from './components/InputBox';
import PieChart from './components/PieChart';
import TitleInput from './components/TitleInput';
import ContextProvider from './context/ContextProvider';

type Props = {}

// ADD A CHART TITTLE AS INPUT

function App({}: Props) {
  return (
    <ContextProvider>
      <div className='bg-[#ececec] min-h-screen flex flex-col'>
        <Header/>
        <div className='px-5 py-7 flex flex-col'>
          <h1 className='font-bold text-center text-4xl text-[#142d4c]'>Easy Pie Chart</h1>
          <h3 className='text-xl text-center text-[#142d4c] pt-2'>Visualize Your Data with Ease with Effortless Pie Chart Creation</h3>
        </div>
        <div className='flex lg:flex-1 flex-col lg:flex-row'>
          <div className='xl:pl-40 basis-1/2'>
            <h2 className='text-center py-6 text-2xl font-bold'>Change Title</h2>
            <TitleInput/>
            <h2 className='text-center py-6 text-2xl font-bold'>Add One Item</h2>
            <InputBox/>
            <h2 className='text-center py-4 text-2xl font-bold'>Elements</h2>
            <Elements/>
          </div>
          <div className='xl:pr-80 basis-1/2'>
            <PieChart/>
          </div>
        </div>
        <div className='mt-4'>
          <Footer/>
        </div>
      </div>
    </ContextProvider>
  )
}

export default App;
