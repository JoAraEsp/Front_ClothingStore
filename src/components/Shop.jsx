import { useState, useEffect, Component } from 'react'
import styles from '../css/Shop.module.css'
import { AiFillDelete } from "react-icons/ai"
import { useRef } from 'react';
import Swal from 'sweetalert2'


function Shop() {
   const [user, setUser] = useState(JSON.parse(localStorage.getItem("user-info")));
   const [bearerToken, setBearerToken] = useState(JSON.parse(localStorage.getItem("user-token")));

   const [clothes, setClothes] = useState([])

   const [orders, setOrders] = useState([]);

   const [orderId, setOrderId] = useState([]);

   useEffect(() => {
      fetch('http://localhost:8080/order/user/' + user.id + '/status/SHOPPING', {
         headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + bearerToken,
         }
      }
      )
         .then(response => response.json())
         .then(data => setOrders(data.data));
   }, [orders])

   function handleChangeStatus(e) {
      const value = e.target.value
      setOrderId(value)
      console.log(value)
   }

   const form = useRef(null)

   function buyAll() {
      Swal.fire({
         position: 'center-end',
         title: 'Compras realizadas',
         color: '#fff',
         width: '400px',
         background: '#008AD4',
         showConfirmButton: false,
         timer: 1500
      })

      setOrders([])
   }

   function deleteOrder(e) {
      e.preventDefault();
      const formData = new FormData(form.current)
      console.log('Entro a la funcion')
      console.log(formData.get('status'))
      fetch('http://localhost:8080/order/' + formData.get('status'), {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + bearerToken,
         },
         body: JSON.stringify({
            'status': 'DELETE'
         })
      })
         .then(res => res.json())
         .then(data => console.log(data))
         .catch(err => console.error(err))
   }

   function getData(id) {
      fetch('http://localhost:8080/cloth')
         .then(response => response.json())
         .then(data => setClothes(data.data))

      return (

         <>
            {
               clothes.map(cloth => {
                  return (

                     cloth.id == id
                        ?
                        <>
                           <img className={styles.ContentImg} src={cloth.image} />
                           <h3 className={styles.ContentTitle}>{cloth.name}</h3>
                        </>
                        :
                        <>
                        </>

                  )
               })
            }

         </>

      )
   }

   return (


      <div className={styles.shopContainer}>

         <div className={styles.ContainerTitle}>
            <strong><p>Mi bolsa</p></strong>
         </div>
         <div className={styles.ContainerForm}>
            <div className={styles.ContainerCloth}>
               <div className={styles.ContainerClothTitle}>
                  <div className={styles.ContainerImg}>
                     <h3>Tu libro</h3>
                  </div>
                  <div className={styles.ContainerClothPrice}>
                     <h3>Precio</h3>
                  </div>
                  <div className={styles.ContainerClothSub}>
                     <h3>Subtotal</h3>
                  </div>
                  <div className={styles.ContainerClothDelete}>
                     <h3>Eliminar</h3>
                  </div>
               </div>

               {
                  orders.map(order => {
                     return (

                        <div className={styles.ContainerClothContent}>
                           <div className={styles.ContainerImgCont}>
                              {
                                 getData(order.clothId)


                              }
                              <p className={styles.ContentQuantity}>{"Cantidad"}</p>
                              <p><strong>{"("}</strong>{order.quantity}<strong>{")"}</strong></p>
                           </div>
                           <div className={styles.ContainerClothPriceCont}>
                              <p>{'$' + order.price}</p>

                           </div>
                           <div className={styles.ContainerClothSubCont}>
                              <p>{'$' + order.total}</p>
                           </div>
                           <div className={styles.ContainerClothDeleteCont}>
                              <form method='' id='' onSubmit={deleteOrder} ref={form} >
                                 <input onChange={handleChangeStatus} type='hidden' value={order.id} name='status' id='status' />
                                 <button type='submit' className={styles.deleteButton}><AiFillDelete className={styles.DeleteIcon} /></button>

                              </form>
                           </div>
                        </div>





                     )
                  })
               }


            </div>
            <div className={styles.ContainerSell}>
               <div className={styles.ContainerSummary}>
                  <h2>Resumen de la compra</h2>
               </div>
               <div className={styles.ContainerSubtotal}>
                  <strong><p>Subtotal</p></strong>
                  <p>{'$' + '----'}</p>
               </div>
               <div className={styles.ContainerSent}>
                  <div className={styles.ContainerTextSent}>
                     <h3>Envío</h3>
                     <p>A partir de $399 envio gratis</p>
                     <strong><p> (Recíbelo de 1 a 3 días hábiles.) </p></strong>
                  </div>
                  <div className={styles.ContainerPriceSent}>
                     <p>{'$' + '----'}</p>
                  </div>
               </div>
               <div className={styles.ContainerTotal}>
                  <strong><p>Total</p></strong>
                  <p>{'$' + '----'}</p>
               </div>
               <div className={styles.ContainerButton}>
                  <div>
                     {
                        orders.length != 0 &&
                        <button onClick={buyAll} className={styles.ButtonForm}  >Comprar</button>
                     }
                  </div>
               </div>
               <div className={styles.ContainerPolicy}>
                  <h3>Envio y entrega</h3>
                  <p>La disponibilidad de envíos es de lunes a domingo con jornadas hasta las 10pm.</p>
               </div>
            </div>
         </div>
      </div>

   )
}

export default Shop