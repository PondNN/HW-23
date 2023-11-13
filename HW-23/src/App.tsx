import './App.css'
import { Route , Routes } from 'react-router-dom' 
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Checkout from './pages/Checkout';
import Product from './pages/Product'
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {
    return (
        <div>
            <ResponsiveAppBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    )
}
    /*const [count,setCount] = useState<number>(1);
    return (
        <>
            <Dashboard></Dashboard>
            <List items= {["Star","Fork","Fire","Food","Bee"]} render= {(item) => <b>{item}</b>}></List>
            <Heading title="Hello Itl's me"/>
            <Section>My Section</Section>
            <Counter setCount={setCount}>Count = {count}/</Counter>

        </>
    )
}*/

export default App;