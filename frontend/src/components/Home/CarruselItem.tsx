/* eslint-disable @typescript-eslint/no-unused-vars */
import Carousel from 'react-bootstrap/Carousel';
type CarruselProps = {
    id: number
    name: string
    description: string
    price: number
    imgUrl: string
}

const CarruselItem = ({ name, imgUrl }: CarruselProps) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
            <img src={imgUrl} style={{ maxWidth: '640px', height: '419px' }} />
            <Carousel.Caption style={{ fontSize: '1rem', backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                <h3>{name}</h3>
            </Carousel.Caption>
        </div>
    )
}

export default CarruselItem;
