import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "../components/login/Login";
import useUser from '../context/Users/useUser';
import useShoppingCart from "../context/Cart/useShoppingCart";
import { Button } from "react-bootstrap";

type PerfumeProps = {
    _id: string;
    name: string;
    price: number;
    type: string;
    aroma: string;
    categoria: string;
    imgUrl: string;
};

const Item = () => {
    const { _id } = useParams<{ _id: string }>();
    const [perfume, setPerfume] = useState<PerfumeProps | null>(null);
    const [show, setShow] = useState(false);
    const [quantity, setQuantity] = useState<number | null>(null);
    const user = useUser();
    const {
        itemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
    } = useShoppingCart();

    useEffect(() => {
        const fetchSelectByID = async () => {
            try {
                const response = await fetch(`https://shopping-cart-production-4ea1.up.railway.app/perfumes/${_id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data from the server');
                }
                const data = await response.json();
                setPerfume(data);
            } catch (error) {
                console.error('Error fetching store perfumes:', error);
            }
        }
        fetchSelectByID();
    }, [_id]);

    useEffect(() => {
        const getQuantity = async () => {
            if (user && _id) {
                try {
                    const result = await itemQuantity(_id, user.username);
                    setQuantity(result);
                } catch (error) {
                    console.error('Error fetching quantity:', error);
                    setQuantity(0);
                }
            } else {
                setQuantity(0);
            }
        }
        
        getQuantity();
    }, [itemQuantity, _id, user]);

    if (!perfume) {
        return <div>Loading...</div>;
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleIncreaseQuantity = async () => {
        if (user && _id) {
            await increaseQuantity(_id, user.username);
            const updatedQuantity = await itemQuantity(_id, user.username);
            setQuantity(updatedQuantity);
        }
    }

    const handleDecreaseQuantity = async () => {
        if (user && _id) {
            await decreaseQuantity(_id, user.username);
            const updatedQuantity = await itemQuantity(_id, user.username);
            setQuantity(updatedQuantity);
        }
    }

    const handleRemoveFromCart = async () => {
        if (user && _id) {
            await removeFromCart(_id, user.username);
            const updatedQuantity = await itemQuantity(_id, user.username);
            setQuantity(updatedQuantity);
        }
    }

    return (
        <div className="container">
            <div className="card mb-3" style={{ maxWidth: '90vw' }}>
                <div className="row g-0">
                    <div className="col-md-5 flex-center">
                        <img src={perfume.imgUrl} className="rounded-start item-page" alt="..." style={{ maxHeight: '500px' }} />
                    </div>
                    <div className="col-md-7 bg-light">
                        <div className="card-body">
                            <div className="text-center">
                                <h5 className="card-title">{perfume.name}</h5>
                                <p className="card-text text-start" style={{ margin: 'auto' }}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt sit veniam, aspernatur modi enim excepturi ex ullam, dicta delectus distinctio iusto officia mollitia eius eveniet totam ad! Consequuntur, aspernatur atque.</p>
                            </div>
                            <div>
                                <div className="perfume-caracteristicas">
                                    <h6 className="flex-center">Categoria: {perfume.categoria.charAt(0).toUpperCase() + perfume.categoria.slice(1)}</h6>
                                    <h6 className="flex-center">Tipo: {perfume.type}</h6>
                                    <h6 className="flex-center">Aroma: {perfume.aroma}</h6>
                                    <div className="bg-secondary text-light p-2 flex-center flex-column">
                                        <h6>Precio:</h6>
                                        <h6>${perfume.price} MXN</h6>
                                    </div>
                                </div>
                                {(!user) ?
                                    <div style={{ width: 'fit-content', margin: 'auto auto', cursor: 'pointer' }} onClick={handleShow}>Inicia sesión para agregar al carrito<i className="bi bi-person" onClick={handleShow} style={{ fontSize: '1.5rem', cursor: 'pointer', color: 'black' }}></i></div> :
                                    <div className="w-100 mt-4">
                                        {quantity === 0 ? (
                                            <Button className="w-100" onClick={handleIncreaseQuantity}>+ Añadir al carrito <i className="bi bi-cart"></i></Button>
                                        ) : (
                                            <div className="flex-center flex-column gap-2 mt-5">
                                                <div className="flex-center gap-5" style={{ width: 'fit-content' }}>
                                                    <Button onClick={handleDecreaseQuantity}>-</Button>
                                                    <div>
                                                        <span className="fs-3">{quantity} </span>
                                                        en el <i className="bi bi-cart"></i>
                                                    </div>
                                                    <Button onClick={handleIncreaseQuantity}>+</Button>
                                                </div>
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    style={{ borderRadius: 10 }}
                                                    onClick={handleRemoveFromCart}
                                                >Remove</Button>
                                            </div>
                                        )}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Login show={show} handleClose={handleClose} />
        </div>
    );
}

export default Item;
