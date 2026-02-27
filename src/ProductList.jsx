import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const ProductList = ({ setView }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const plantsArray = [
    {
      category: "Air Purifying",
      plants: [
        { name: "Snake Plant", price: 15, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1b7e?w=200" },
        { name: "Spider Plant", price: 12, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=200" },
        { name: "Peace Lily", price: 18, image: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?w=200" },
        { name: "Boston Fern", price: 14, image: "https://images.unsplash.com/photo-1614594805320-e69df290ea88?w=200" },
        { name: "Rubber Plant", price: 20, image: "https://images.unsplash.com/photo-1614594895325-3031021bc699?w=200" },
        { name: "Aloe Vera", price: 10, image: "https://images.unsplash.com/photo-1596547609652-9cb5d8d737bf?w=200" }
      ]
    },
    {
      category: "Aromatic",
      plants: [
        { name: "Lavender", price: 12, image: "https://images.unsplash.com/photo-1595859702755-9eb9a68c07d3?w=200" },
        { name: "Mint", price: 8, image: "https://images.unsplash.com/photo-1628043640003-7bb5dfbc599a?w=200" },
        { name: "Rosemary", price: 10, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200" },
        { name: "Basil", price: 7, image: "https://images.unsplash.com/photo-1611217354923-01c3e3a47990?w=200" },
        { name: "Thyme", price: 9, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200" },
        { name: "Oregano", price: 8, image: "https://images.unsplash.com/photo-1628043640003-7bb5dfbc599a?w=200" }
      ]
    },
    {
      category: "Succulents",
      plants: [
        { name: "Jade Plant", price: 14, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=200" },
        { name: "Echeveria", price: 11, image: "https://images.unsplash.com/photo-1551893665-f843f600794e?w=200" },
        { name: "Zebra Haworthia", price: 13, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=200" },
        { name: "Burro's Tail", price: 16, image: "https://images.unsplash.com/photo-1551893665-f843f600794e?w=200" },
        { name: "Panda Plant", price: 12, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=200" },
        { name: "String of Pearls", price: 15, image: "https://images.unsplash.com/photo-1551893665-f843f600794e?w=200" }
      ]
    }
  ];

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">Paradise Nursery</div>
        <div className="navbar-links">
          <a onClick={() => setView('landing')}>Home</a>
          <a onClick={() => setView('products')}>Plants</a>
          <a onClick={() => setView('cart')}>Cart ({totalItems})</a>
        </div>
      </nav>

      <div className="product-grid">
        {plantsArray.map((cat, idx) => (
          <div key={idx}>
            <h2>{cat.category}</h2>
            <div className="plants-container">
              {cat.plants.map((plant, pIdx) => {
                const isAdded = cartItems.some(item => item.name === plant.name);
                return (
                  <div key={pIdx} className="plant-card">
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>${plant.price}</p>
                    <button 
                      onClick={() => dispatch(addItem(plant))}
                      disabled={isAdded}
                    >
                      {isAdded ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
