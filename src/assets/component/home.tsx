import HelmetTitle from './isHelmetTitle';
import { useGlobalContext } from './context/globalContext';
import Mens from './mens';
import Womens from './womens';
import Jewellery from './jewellery';
import Electronics from './electronics';




const Home = () => {

    const { loading } = useGlobalContext()


    return (
        <>
            <HelmetTitle title='PLASHOE' />
            {loading ? (
                <div style={{ minHeight: 'calc(100vh - 64px)' }} className='flex items-center justify-center'>
                    <div className="loader"></div>
                </div>
            ) : (
                <div>

                    <Mens />

                    <Womens />

                    <Jewellery />

                    <Electronics />
                </div>
            )}
        </>
    )
}

export default Home;
