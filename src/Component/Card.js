import React from 'react'
import CardBody from './CardBody'

const Card = ({coinList}) => {
  return (
<div className=" ms-2 row row-cols-1 row-cols-md-3 g-4">

{coinList.map((coin, index) => {
        return <CardBody classname1={"col text-center"} key={index} title={coin.id} price={coin.price} rank={coin.rank} imgUrl={coin.icon} />;
      })}

</div>

//     <div className="row row-cols-1 row-cols-md-3  g-4">
//         <div className="col">
//     <div className="card mt-5">
//   <img src={imgUrl} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">{title}</h5>
//     <p className="card-text">Price:{price}</p>
//     <p className="card-text"> rank:{rank}</p>
//     </div>

//   </div>
// </div>
// </div>
  )
}

export default Card