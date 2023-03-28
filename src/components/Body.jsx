import styles from "../css/Body.module.css"
import { Link } from 'react-router-dom'


//aquí el carrusel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { useState, useEffect } from 'react'

import CarrouselClothes from "./CarrouselClothes";
import Clothes from "./Clothes";


function Body(params) {

    const [user, setUser] = useState(localStorage.getItem("user-info"))


    const [menClothes, setMenClothes] = useState([]);
    const [womenClothes, setWomenClothes] = useState([]);
    const [kidsClothes, setKidsClothes] = useState([]);





    return (
        <div className={styles.bodyContainer}>


            <Carousel className={styles.imgCarrousel} autoPlay={true} infiniteLoop={true} showIndicators={false} showThumbs={false} showStatus={false}>
                <div>
                    <img src="https://pixabay.com/get/g3ce3058e30cf63c3eb784cb5da1d962d900e3455178399df988555dcf1688d7181b2253c94434753ff6df788fb5b97d274f40fc4bc2ef726d536261e2729e6d6194cc8d9289758c39f54b65bb3c5520b_1280.jpg" alt="" />
                    <p className="legend">La moda 1</p>
                </div>
                <div>
                    <img src="https://pixabay.com/get/g1a6d6c69843ea357e6975f6211c8269ea22144c7eb169465069dabf4ed232137317c779f384b9cfe5fff28ab31fd3684858e0accc1e68a5ad020d6b11823c4eabf2e3b4a7b39dade749e70ef0c8fa1a8_1280.jpg" alt="" />
                    <p className="legend">La moda 2</p>
                </div>
                <div>
                    <img src="https://pixabay.com/get/gd6978b58e4021194a24124388ecdd7c1391af458073994c1c7167d45290754c09cc1d22959d39fb2b78670b49daf7e4e43e4db6ef6b18fe7da501f203d9071178781aca43da43eb828d0c34a8cb29d87_1280.jpg" alt="" />
                    <p className="legend">La moda 3</p>
                </div>
            </Carousel>
            <div>
                <Clothes />
            </div>
        </div>

    )
}

export default Body;