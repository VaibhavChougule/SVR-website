import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import bg from "../assets/bg.jpg";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const sections = [
    {
      title: "Robot",
      link: "robot",
      items: [
        ["Articulated Robot", "articulatedrobot"],
        ["Cobot", "cobot"],
        ["Scara Robot", "scararobot"],
        ["Cartesian Robot", "cartesianrobot"],
      ],
    },
    {
      title: "FMS",
      link: "fms",
      items: [
        ["Flexible Manufacturing System", "fms"],
      ],
    },
    {
      title: "SVR Innovation",
      link: "svrinnovation",
      items: [
        ["IoT, PLC, Manual Based Electro-Hydraulic System", "electrohyrdaulic"],
        ["IoT, PLC, Manual Based Electro-Pneumatic System", "electropneumatic"],
        ["Elevator Kit", "elevatorsimulationkit"],
        ["Bottle Filling Plant", "bottlefillingplant"],
      ],
    },
    {
      title: "Grippers",
      link: "gripper",
      items: [
        ["3-Jaw Concentric Gripper", "jawconcentricgripper"],
        ["Suction Cup Gripper", "suctioncupgripper"],
        ["Sensorized Gripper", "sensorizedgripper"],
        ["Magnetic Gripper", "magneticgripper"],
        ["Gripper Lab", "gripperlab"],
        ["SVR Garbo 1.2 & 5 (Parallel Jaw)", "graboparallel"],
        ["SVR Garbo 1.2 & 5 (Curvilinear Jaw)", "grabocurvilinear"],
        ["Pneumatic 2 & 3 Jaw Gripper", "pneumatic2and3jawgripper"],
      ],
    },
    {
      title: "PLC Application",
      link: "plc",
      items: [
        ["VFD Kit", "vfdkit"],
        ["Elevator Simulation", "elevatorsimulationkit"],
        ["Stepper Motor Speed & Direction Control", "steppermotorcontrolkit"],
        ["Water Level Control", "waterlevelcontrolkit"],
        ["Conveyor", "conveyorkit"],
        ["Star Delta Starter", "stardeltakit"],
        ["Temperature Control", "temperaturecontrolkit"],
      ],
    },
    {
      title: "School Robotics Lab",
      link: "schoolinnovation",
      items: [
        ["Maze Solving Robot", "mazesolvingrobot"],
        ["Line Following Robot", "linefollowingrobot"],
        ["Self-Balancing Robot", "selfbalancingrobot"],
        ["Digital Dice Kit", "digitaldicekit"],
        ["Temperature Controlled Fan Kit", "temperaturecontrolledfankit"],
        ["Object Counter", "objectcounter"],
        ["IoT Robot", "iotrobot"],
        ["Knight 4.0, 5.0, 10.0", "knight"],
      ],
    },
    {
      title: "Software",
      link: "software",
      items: [
        ["RoboAnalyzer", "roboanalyzer"],
        ["MechAnalyzer", "mechanalyzer"],
        ["FEAST", "feast"],
        ["RT Tool Box Software", "rttoolboxsoftware"],
      ],
    },
  ];
  

  return (
    <>
      <Header />
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundAttachment:'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay */}
        <div className="relative z-10 max-w-screen-xl mx-auto p-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-12">
            Explore Our Product Categories
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 "> 
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-white to-slate-300 text-white shadow-2xl border-4 border-slate-500 rounded-lg p-6 hover:scale-105 transform transition-transform duration-300"
              >
                <h3 className="text-2xl font-bold text-center mb-4 text-orange-400">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="bg-orange-500 h-3 w-3 rounded-full inline-block mr-3"></span>
                      <Link
                        to={`/ProductDetails/${section.link}`}
                        // to={`/Product/${item[1]}`}
                        state={{ stateParam: section }}
                        className="text-lg text-black hover:text-orange-300 transition-colors duration-300"
                      >
                        {item[0]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
