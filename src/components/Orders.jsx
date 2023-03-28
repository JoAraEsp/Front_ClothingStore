import { useState, useRef, useContext, useEffect } from "react"
import styles from '../css/Orders.module.css'
import { Link } from 'react-router-dom'

function Orders() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user-info")));
    const [bearerToken, setBearerToken] = useState(JSON.parse(localStorage.getItem("user-token")));


    const [clothes, setClothes] = useState([])

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch('http://localhost:8080/order/user/' + user.id + '/AllOrders',{
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + bearerToken,
             }
        })
            .then(response => response.json())
            .then(data => setOrders(data.data));

    }, [])


    function getData(id) {
        fetch('http://localhost:8080/cloth')
            .then(response => response.json())
            .then(data => setClothes(data.data))

        return (
            <div className={styles.downPart}>
                {
                    clothes.map(cloth => {
                        return (
                            cloth.id == id
                                ?
                                <>
                                    <Link to='/cloth' state={{ nCloth: cloth.id }} >
                                        <img src={cloth.image} className={styles.imagen} />
                                    </Link>

                                    <div className={styles.details}>
                                        <h2 className={styles.letter}>{cloth.name}</h2>
                                    </div>

                                </>
                                :
                                <>

                                </>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.contenedorCuadro}>
                <div className={styles.containerLetter}>
                    <h2 className={styles.title}>Compras</h2>
                </div>

                {
                    orders && (

                        orders.length != 0 ?

                        orders.map(order => {
                            return (
                                <div className={styles.cuadro}>
                                    <div className={styles.upPart}>
                                        <h2 className={styles.letterTop}>Estado: {order.status}</h2>
                                        <h2 className={styles.letterTop}>Cantidad: {order.quantity}</h2>
                                        <h2 className={styles.letterTop}>Precio total: {order.price}</h2>
                                    </div>
                                    <>
                                        {

                                            getData(order.clothId)
                                        }
                                    </>
                                </div>

                            );
                        })
                        :
                        <div className={styles.notOrders}>No has realizado compras</div>
                    )

                }
            </div>
        </div>
    );
}

export default Orders;