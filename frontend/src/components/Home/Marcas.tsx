import { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import marcas from '../../data/marcas.json';

export class Marcas extends Component {
    render() {
        const responsiveOptions = {
            0: {
                items: 1 // Display one item on small devices
            },
            600: {
                items: 3 // Display three items on medium devices
            },
            1000: {
                items: 5 // Display five items on large devices
            }
        };

        return (
            <div>
                <div className='container-fluid'>
                    <div className="row title" style={{ marginBottom: "20px", padding: '20px' }}>
                        <div className="col-sm-12" style={{
                            display: 'flex', justifyContent: 'center',
                            alignItems: 'center', fontWeight: 'bold', fontSize: '3vh'
                        }}>
                            LAS MEJORES MARCAS
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        nav
                        margin={8}
                        responsive={responsiveOptions}>
                        {marcas.map((marca) => (
                            <div key={marca.id}><img className="img" src={marca.imgUrl} style={{ height: '260px', width: '100%' }} alt={marca.marca} /></div>
                        ))}
                    </OwlCarousel>
                </div>
            </div>
        )
    }
}

export default Marcas;
