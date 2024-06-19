import {useEffect , useState} from 'react';
import { Suspense , lazy } from 'react';
import {BrowserRouter , Routes , Route , useNavigate} from 'react-router-dom';
const Options = lazy(() => import( './Options')) ;
const HelloPage = lazy(() => import( './HelloPage')) ;
const LineGraph = lazy(() => import( './Chart')) ;
const HomePage = lazy(() => import( './HomePage')) ;
 


export default function MainPage() {
    useEffect(() => {
        document.title = "Main Page"
    })

    const [data , setData] = useState( [
        { time: '2018-12-22', value: 32.51 },
        { time: '2018-12-23', value: 31.11 },
        { time: '2018-12-24', value: 27.02 },
        { time: '2018-12-25', value: 27.32 },
        { time: '2018-12-26', value: 25.17 },
        { time: '2018-12-27', value: 28.89 },
        { time: '2018-12-28', value: 25.46 },
        { time: '2018-12-29', value: 23.92 },
        { time: '2018-12-30', value: 22.68 },
        { time: '2018-12-31', value: 22.67 },
    ])
    return (
        <div className="Main">
            <BrowserRouter>
                <Navigate/>
                <Routes>
                    <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><HomePage/></Suspense>} />
                    <Route path='/hello' element={<Suspense fallback={<div>Loading...</div>}><HelloPage/></Suspense>} />
                    <Route path="/options" element={<Suspense fallback={<div>Loading...</div>}><Options/></Suspense>} />
                    <Route path="/linegraph" element={<Suspense fallback={<div>Loading...</div>}><LineGraph  data={data}/></Suspense>} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

function Navigate() {
    const navigate = useNavigate();



    return (
        <>
        <select  onChange={(e) => navigate(e.target.value)}>
            <option value="/hello">Hello Page</option>
            <option value="/options">Options</option>
            <option value="/linegraph">LineGraph</option>
        </select>
        </>
    )
}