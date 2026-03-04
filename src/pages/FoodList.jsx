// import { Link } from "react-router-dom";    

// function FoodList(){


//     return (
//         <div>
//             <li>Food Lists Are HEre</li>
            
//         </div>
//     );
// }

// export default FoodList;

import { Link } from "react-router-dom";

function FoodList() {

  const foods = [
    { id: 1, name: "Chicken Biryani", price: 250, rating: 4.5 },
    { id: 2, name: "Veg Burger", price: 120, rating: 4.2 },
    { id: 3, name: "Pizza", price: 300, rating: 4.6 },
    { id: 4, name: "Momos", price: 90, rating: 4.3 },
    { id: 5, name: "Pasta", price: 200, rating: 4.4 },
    { id: 6, name: "Fried Rice", price: 180, rating: 4.1 }
  ];

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>

      <h1>🍔 Food Delivery</h1>

      <Link to="/">⬅ Back to Home</Link>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))",
          gap: "20px",
          marginTop: "20px"
        }}
      >

        {foods.map((food) => (
          <div
            key={food.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
          >

            <img
              src="https://www.shutterstock.com/image-photo/side-view-isometric-angle-crispy-600nw-2600398075.jpg"
              alt={food.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />

            <h3>{food.name}</h3>

            <p>⭐ {food.rating}</p>

            <p><b>₹{food.price}</b></p>

            <button
              style={{
                padding: "8px 12px",
                background: "#ff4d4d",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Add to Cart
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default FoodList;