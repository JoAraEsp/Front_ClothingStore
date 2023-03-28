import React from 'react';
import styles from '../css/Clothes.module.css';

const ClothesList = ({ clothes }) => {
  return (
    <div className={styles.row}>
      {clothes.map((clothing) => (
        <div className='col-md-4' key={clothing.id}>
          <div className={styles.card}>
            <img className={styles.img} src={clothing.image} alt={clothing.name} />
            <div className={styles.card}>
              <h5 className="title">{clothing.name}</h5>
              <p className="text">{clothing.description}</p>
              <p className="text">${clothing.price}</p>
              <button className="btn-primary" target="_blank">Comprar</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClothesList;
