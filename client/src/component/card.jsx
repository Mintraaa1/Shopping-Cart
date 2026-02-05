import React from 'react'

const Card = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="https://image.made-in-china.com/251f0j00cfaRAdqbbthv/made-in-china.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card