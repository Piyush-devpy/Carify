import React from "react";
import "./Explore.css";
import carimg1 from "../assets/carimg1.png";
import carimg2 from "../assets/carimg2.png";
import carimg3 from "../assets/carimg3.png";
import carimg4 from "../assets/carimg4.png";
import carimg5 from "../assets/carimg5.png";
import carimg6 from "../assets/carimg6.png";
import carimg7 from "../assets/carimg7.png";
import carimg8 from "../assets/carimg8.png";

const Explore = () => {
  const cars = [
    {
      id: 1,
      name: "BMW M4",
      price: "$160,000",
      description: "High-performance sports car with aggressive styling.",
      img: carimg1,
    },
    {
      id: 2,
      name: "Dodge Charger SRT Hellcat",
      price: "$60,000",
      description: "Muscle car with 700+ horsepower.A brutally powerful American muscle",
      img: carimg2,
    },
    {
      id: 3,
      name: "Porsche 911 Turbo S",
      price: "$200,000",
      description: "Iconic sports car with extreme performance.",
      img: carimg3,
    },
    {
      id: 4,
      name: "Audi R8 V10 Plus",
      price: "$170,000",
      description: "The Audi R8 V10  Plus is a luxury supercar with V10 engine.",
      img: carimg4,
    },
    {
      id: 5,
      name: "Mercedes AMG GT R",
      price: "$150,000",
      description: "Aggressive performance coupe,",
      img: carimg5,
    },
    {
      id: 6,
      name: "Lamborghini Huracan EVO",
      price: "$250,000",
      description: "Italian supercar with stunning design.",
      img: carimg6,
    },
    {
      id: 7,
      name: "Ferrari 488 Pista",
      price: "$330,000",
      description: "Track-focused  performance beast.",
      img: carimg7,
    },
    {
      id: 8,
      name: "McLaren 720S",
      price: "$300,000",
      description: "Ultra-lightweight supercar.",
      img: carimg8,
    },
  ];

  return (
    <section className="Explore" id="Explore">
      <h2 className="explore-title">Explore</h2>

      <div className="explore-grid">
        {cars.map((car) => (
          <div className="car-card" key={car.id}>
            <img src={car.img} alt={car.name} />

            <div className="card-content">
              <h3>{car.name}</h3>
              <p className="price">{car.price}</p>
              <p className="description">{car.description}</p>

              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
