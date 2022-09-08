import React from 'react'

function CardBody1({title,price,rank,imgUrl,classname1,volume,marketCap}) {
  return (
    <div className={classname1}>
    <div className="card border border-3 rounded-3 border-primary">
      <img src={imgUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Price:{price}</p>
        <p className="card-text">rank:{rank}</p>
        <p className="card-text">volume:{volume}</p>
        <p className="card-text">marketCap:{marketCap}</p>
      </div>
    </div>
  </div>
  
  )
}

export default CardBody1