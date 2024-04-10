import Carousel from 'react-bootstrap/Carousel';
import CarruselData from '../../data/carrusel.json';
import CarruselItem from './CarruselItem';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Carrusel() {
    return (
        <Carousel
            nextIcon={<span style={{ color: 'black', backgroundColor: 'transparent', fontSize: '2rem' }}>
                <i className="bi bi-arrow-right-circle-fill"></i>
            </span>}
            prevIcon={<span style={{ color: 'black', backgroundColor: 'transparent', fontSize: '2rem' }}>
                <i className="bi bi-arrow-left-circle-fill"></i>
            </span>}>
            {CarruselData.map((item) => (
                <Carousel.Item key={item.id}>
                    <div>
                        <div>
                            <CarruselItem
                                id={item.id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                imgUrl={item.imgUrl}
                            />
                        </div>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Carrusel;
