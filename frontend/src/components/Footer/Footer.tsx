import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='text-center text-lg-start'>

            <section style={{ backgroundColor: 'black', color: 'white', marginTop: '3rem', paddingTop: '1rem' }}>

                <MDBContainer className='text-center '>
                    <MDBRow style={{ display: 'flex', justifyContent: 'center' }}>
                        <MDBCol sm='12' md="6" lg="4" xl="4">
                            <h6 className='text-uppercase fw-bold mb-3'>
                                <MDBIcon icon="gem" className="me-3" />
                                SayMi Perfumes
                            </h6>
                            <p>
                                Cualquier duda, aclaracion o negociacion no dudes en contactarnos en el numero de whatsapp mostrado en este apartado.
                            </p>
                        </MDBCol>

                        <MDBCol sm='12' md="6" lg="6" xl="6">
                            <MDBRow>
                                <MDBCol>
                                    <h6 className='text-uppercase fw-bold mb-3'>Products</h6>
                                    <MDBRow>
                                        <MDBCol l="1">
                                            <p>
                                                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>
                                                    Dama
                                                </a>
                                            </p>
                                            <p>
                                                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>
                                                    Caballero
                                                </a>
                                            </p>
                                        </MDBCol>
                                        <MDBCol>
                                            <p>
                                                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>
                                                    Juveniles
                                                </a>
                                            </p>
                                            <p>
                                                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>
                                                    Nuevos productos
                                                </a>
                                            </p>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>

                                <MDBCol>
                                    <h6 className='text-uppercase fw-bold mb-3'>Contact</h6>
                                    <p>
                                        <MDBIcon icon="home" className="me-2" />
                                        Culiacan, Sinaloa, MX
                                    </p>
                                    <p>
                                        <MDBIcon icon="phone" className="me-3" /> +52 667 327 3363
                                    </p>
                                    <p>
                                        <MDBIcon icon="envelope" className="me-3" />
                                        my_sandia@hotmail.com
                                    </p>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2024 Copyright
            </div>
        </MDBFooter >
    );
}
