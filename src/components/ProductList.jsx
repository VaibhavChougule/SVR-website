import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import bg from "../assets/bg.jpg";
import homeRobotImage from "../assets/home-robot.jpg"; // Import image
import fmsImage from "../assets/fms.jpg";
import innovationImg from "../assets/innImg.jpeg";
import gripper from "../assets/Gripper img.jpg";
import plc from "../assets/plc application.jpg";
import software from "../assets/software.jpg";
import school from "../assets/school.jpg";

function ProductList() {
  const [animateHeading, setAnimateHeading] = useState(false);

  useEffect(() => {
    setAnimateHeading(true);
  }, []);

  const productData = [
    { title: 'Robot', img: homeRobotImage ,link:"robot"},
    { title: 'FMS', img: fmsImage ,link:"fms"},
    { title: 'SVR Innovation', img: innovationImg ,link:"svrinnovation"},
    { title: 'Grippers', img: gripper, link:"gripper" },
    { title: 'PLC Application', img: plc ,link:"plc"},
    { title: 'Software', img: software,link:"software" },
    { title: 'School Robotic Lab', img: school ,link:"schoolinnovation"},
  ];

  return (
    <div
      className="flex flex-col items-center justify-center py-12 rounded-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})`, minHeight: '100vh' }}
    >
      <h1
        className={`text-4xl font-bold mb-12 transition-all duration-1000 ease-out ${
          animateHeading ? 'transform translate-y-0 opacity-100' : 'transform translate-y-20 opacity-0'
        } underline decoration-white text-slate-50 text-center`}
      >
        Products and Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 px-4 md:px-10">
        {productData.map((product, index) => (
        //   <Link to={{ pathname: `/ProductDetails/product-data`, state:{{stateParam:true}} }} key={index}>
        <Link to={`/ProductDetails/${product.link}`}
                state={{stateParam:product}}
                key={index}
                >
            <div
              className="p-6 bg-white bg-opacity-90 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              style={{ width: '300px', height: '320px' }}
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-72 h-56 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800 text-center">{product.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
