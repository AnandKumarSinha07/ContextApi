import Header from './components/Header.jsx'
import Bloag from './components/Bloag.jsx'
import Pagination from './components/Pagination.jsx'




 function App() {
  return (
    <div className='h-full flex flex-col justify-center items-center gapy-2'>
        <Header/>
        <Bloag/>
        <Pagination/>
    </div>
  )
}

export default App;
