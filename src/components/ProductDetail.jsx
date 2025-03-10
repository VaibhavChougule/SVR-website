import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom'; // Import useLocation to get state from the router
import Header from './Header';
import articulatedImg from "/assets/Articulated Robot bg.jpg";
import Footer from './Footer.jsx';

function ProductDetails() {
  const location = useLocation(); // Use the useLocation hook to access the passed state
  const { product } = location.state || {}; // Extract product from state
  console.log(location);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);

  let { type } = useParams();
  // let stateParams = useLocation().state.stateParam;
  console.log("props value:", type);
  // console.log("stateParams value:", stateParams);

  // if (!stateParams) {
  //   console.log(product);
  //   return <div>No product details available</div>;
  // }

  const robot = [
    {
      "title": "Articulated Robot",
      "image": "/assets/Articulatedpro.jpeg",
      "description": "At SVR Robotics, our articulated robots are designed for a wide range of applications, including precision assembly, welding, material handling, and machine tending. These versatile robots offer high flexibility and accuracy, making them ideal for improving productivity and efficiency in manufacturing processes across various industries.",
      "features": [
        "Optimized arm length for broader movement, complex assembly, and operations.",
        "Can withstand harsh environmental conditions.",
        "Can be used for various industrial applications.",
        "Variable payload from 3kg to 80kg.",
        "Maximum reach: 504mm to 2100mm."
      ]
    },
    {
      "title": "Cobot",
      "image": "/assets/cobotsvr.jpeg",
      "description": "SVR Robotics excels in developing collaborative robots (COBOTs) that seamlessly integrate with human workers, enhancing productivity and safety. Our advanced COBOT solutions are designed to optimize workflows and adapt to various industrial applications.",
      "specifications": {
        "controller": "CR80005VD",
        "joints": 6,
        "speed": "1000mm/s",
        "motors": "AC Servo Motor",
        "reach": "910mm",
        "payload": "5kg",
        "additional_features": "Touch screen control panel with LED display on the robot arm indicating the status."
      }
    },
    {
      "title": "Scara Robot",
      "image": "/assets/Scara img.jpeg",
      "description": "Highly rigid arms and cutting-edge servo controls. Ideal for a wide range of fields, from high-volume production of foodstuffs and pharmaceuticals demanding fast operation to assembly work requiring high levels of precision.",
      "features": [
        "Payload: 3kg to 20kg.",
        "Maximum reach: 350mm to 1000mm."
      ]
    },
    {
      "title": "Cartesian Robot",
      "image": "/assets/cartesianrobo.png",
      "description": "SVR Robotics leverages Cartesian Robots for diverse applications such as pick-and-place tasks, assembly operations, and material handling, ensuring flexibility across various industries.",
      "features": [
        "Precision and Accuracy: Integrated with high-resolution encoders for precise position feedback.",
        "Custom Automation Solutions: Tailored to meet specific client requirements, optimizing workflows and improving efficiency.",
        "Advanced PLC Integration: Ensures seamless control and coordination of complex tasks.",
        "Enhanced Reliability: Robust PLC systems and precise encoders ensure consistent performance, reducing downtime and maintenance costs."
      ]
    }
  ];

  const plc = [
    {
      title: 'VFD kit',
      image: "/assets/VFD KIT.jpg",
      description: 'The VFD kit controls motor speed and direction with additional features like running the motor on time and controlling it in auto or manual modes.',
      features: [
        'Siemens 0.25 Hp 3-phase AC induction motor',
        'Siemens/Mitsubishi VFD',
        'Motor speed increase/decrease functionality',
        'Forward/reverse direction functionality',
        'Motor run on time basis',
        'Auto and Manual Mode control',
        'Aluminium extrusion frame with safety electrical components like MCB',
        'Banana sockets input/output to PLC, 24V supply, LED indicators, Start/Stop switch'
      ]
    },
    {
      title: 'Elevator Simulation',
      image: "/assets/Elevator simulation.png",
      description: 'A 3-floor elevator simulation with a stepper motor-driven cabin, proximity sensor for position detection, and MS frame for housing the setup.',
      features: [
        '3-floor, 750mm tall elevator setup',
        'Stepper motor-driven elevator cabin with balance weight',
        'Nema 17, 45KgCm geared stepper motor with digital microstepping driver',
        'Proximity inductive sensor to detect position',
        'MS frame for cabin and staircase housing',
        'Powder-coated MS frame with acrylic control board',
        'Banana sockets input/output to PLC, 24V supply, LED indicators, Start/Stop switch'
      ]
    },
    {
      title: 'Stepper Motor Speed & Direction Control',
      image: "/assets/Stepper Motor Speed & Direction Control.jpg",
      description: 'This system controls the speed and direction of a stepper motor, with time-based control and position detection.',
      features: [
        'Nema 17, 45KgCm geared stepper motor with digital microstepping driver',
        'Motor speed increase/decrease functionality',
        'Motor forward/reverse direction functionality',
        'Motor run on time basis',
        'Proximity inductive sensor to detect position',
        'Powder-coated MS frame with acrylic control board',
        'Banana sockets input/output to PLC, 24V supply, LED indicators, Start/Stop switch'
      ]
    },
    {
      title: 'Water Level Control',
      image: "/assets/waterlevelcontrolkit.png",
      description: 'Water level control kit with float sensors for detecting water levels, a 12V DC water pump, and an acrylic control board.',
      features: [
        'Stainless steel lower and upper 3-litre water tanks',
        'Two float sensors with three level indication',
        '12V DC water pump with a force of 0.48MPa',
        'Powder-coated MS frame with acrylic control board',
        'Banana sockets input/output to PLC, 24V supply, LED indicators, Start/Stop switch'
      ]
    },
    {
      title: 'Conveyor',
      image: "/assets/Conveyorkitweb.png",
      description: 'A stepper-driven belt conveyor system with speed and direction control, housed in a powder-coated MS frame with an acrylic control board.',
      features: [
        '300mm*50mm stepper-driven belt conveyor',
        'Nema 17, 45KgCm geared stepper motor with digital microstepping driver',
        'Conveyor speed increase/decrease functionality',
        'Conveyor forward/reverse direction functionality',
        'Conveyor run on time basis',
        'Powder-coated MS frame with acrylic control board',
        'Banana sockets input/output to PLC, 24V supply, LED indicators, Start/Stop switch'
      ]
    },
    {
      title: 'Star Delta Starter',
      image: "/assets/stardeltastarter.png",
      description: 'A star-delta starter with functionality to switch between star and delta connections on a time basis, and MS powder-coated frame with an acrylic control board.',
      features: [
        'Siemens air break contactor for actual demonstration',
        'Functionality to operate star/delta connection',
        'Functionality to switch from star to delta or vice versa on time basis',
        'Powder-coated MS frame with acrylic control board',
        'Banana sockets input/output to PLC, 24V supply, LED indicators, Start/Stop switch'
      ]
    },
    {
      title: 'Temperature Control',
      image: "/assets/temperaturecontrolkit.png",
      description: 'A temperature control kit with a 3-litre water tank, float sensor, and 1000W AC water heater, all housed in a powder-coated MS frame with an acrylic control board.',
      features: [
        'Stainless steel 3-litre water tank',
        'Float sensor with three-level indication',
        '1000W 230V AC water heater',
        'Powder-coated MS frame with acrylic control board',
        'Banana sockets input/output to PLC, 24V supply, LED indicators, Start/Stop switch'
      ]
    }
  ]


  const gripper = [
    {
      "title": "3-Jaw Concentric Gripper",
      "image": "/assets/Gripper img.jpg",
      "description": "Pneumatic operated gripper\nGripping force: 14N-946N\nStroke: 4-24mm\nPressure range: 3-7bar\n3 Jaws provide more contact with the part to be grasped and more accurate centering than 2 jaw models.\nApplications:\nThree-jaw universal chuck is used to hold round and hexagonal work. It grasps the work quickly."
    },
    {
      "title": "Suction Cup Gripper",
      "image": "/assets/suctioncup.jpg",
      "description": "Optimum adaptation and sealing even with curved workpieces and very good damping effect during placement on the workpiece\nDiameter: 22 to 125 mm\nMaterial: NBR\nConnection nipple vulcanized to elastomer part\nPayload: 500gm\nApplications:\nRound bellows suction cup with 1.5 folds for dynamic handling of metal sheets, steel sheets, and aluminum sheets\nSuitable for use in, for example, feeder systems for press lines in the automotive industry"
    },
    {
      "title": "Sensorized Gripper",
      "image": "/assets/SensorisedGripper.jpg",
      "description": "Actuation – Electrical\nPayload- 2 kg\nSensors integrated- Infrared sensor, Strain gauge, Load cell, Flexi-force sensor.\nThese sensors help for detection of gripping object, load applied on the object, strain on gripper jaws etc."
    },
    {
      "title": "Magnetic Gripper",
      "image": "/assets/magneticgripper.jpg",
      "description": "Pneumatically Operated Gripper\nPermanent magnet allows safe handling without voltage source\nDiameter: 30 to 70 mm\nHolding force: 35 to 290 N\nUniversal applications\nApplications:\nHandling of ferromagnetic workpieces\nHandling of Metal Sheets\nHandling of Laser-cut workpieces"
    },
    {
      "title": "Gripper Lab",
      "image": "/assets/gripperlab img.png",
      "description": "True translational motion\nBetter control\nEasy to hand-guide\nSimple to program\nQuicker to deploy\nSmall footprint\nHighly customizable\nControl the position of the gripper finger\n1) Programming of Pneumatic Grippers using PLC.\n2) Programming of Electric Grippers using PLC.\n3) Load Testing and payload capacity of five different types of grippers\n4) Electric grippers can be also operated using Arduino or Microcontroller."
    },
    {
      "title": "SVR Garbo 1.2 & 5 (Parallel Jaw)",
      "image": "/assets/SVR Garbo 1.2,5 gripper.jpeg",
      "description": "Servo motor robotic gripper\nHigh-quality material\n1.2 kg & 5 kg payload\nMaximum Stroke: 70 mm\nMaximum Gripping force: 180Nm\nGripping Torque: 11 Nm\nMaximum Cycle count: 60 cycles/min\nMinimum Cycle Time: 1 s\nGripper Mass: 3.3 kgs\nOperating temperature: 0°C to 40°C (customization available)"
    },
    {
      "title": "SVR Garbo 1.2 & 5 (Curvilinear Jaw)",
      "image": "/assets/SVR Garbo ( Curvilinear Jaw).jpeg",
      "description": "Servo motor robotic gripper\nHigh-quality material\n1.2 kg & 5 kg payload\nAngular Stroke 68 Degrees\nMaximum Gripping force: 180Nm\nGripping Torque: 11 Nm\nMaximum Cycle count: 60 cycles/min\nMinimum Cycle Time: 1 s\nGripper Mass: 3.3 kgs\nOperating temperature: 0°C to 40°C (customization available)"
    },
    {
      "title": "Pneumatic 2 Jaw Gripper",
      "image": "/assets/pnumatic 2 jaw.JPG",
      "description": "Hard anodized body\nMedium: Compressed Air (Filtered)\nType of Operation: Double Acting\nWorking Pressure: 2-7 bar\nStroke 4-30mm\nGripping Force: 11-254N\nApplications:\nRobotic pick-and-place\nMachine tools\nWorkpiece machining\nAssembly tasks"
    }
  ]


  const svrinnovation = [
    {
      "title": "IOT, PLC, Manual Based Electro-Hydraulic System",
      "image": "/assets/hydrolic.jpg",
      "description": "An Electro-Hydraulic System designed for experiments like single/double-acting cylinder, regenerative circuit, pump unloading circuit, cylinder sequencing/reciprocating circuit, cylinder locking circuit, and cylinder synchronization. The system supports manual, PLC-based, and IoT-based operations. It includes components from Festo, Genetic, and Bash."
    },
    {
      "title": "IOT, PLC, Manual Based Electro-Pneumatic System",
      "image": "/assets/pneumatic.jpg",
      "description": "An Electro-Pneumatic System with manual, PLC-based, and IoT-based operations. Experiments include direct cylinder actuation, use of 5/3 valve as a memory valve, two-cylinder coordinated motion control, sequential motion control, and pressure circuits. Components are mounted on an industrial-grade panel for rigidity, featuring parts from Festo and Genetic."
    },
    {
      "title": "Elevator Kit",
      "image": "/assets/Elevator simulation.png",
      "description": "A realistic elevator demonstration model with PLC integration for automation and monitoring. It includes motor control study for smooth acceleration and deceleration, load handling, and variable speed operations. The interactive control panel enhances the understanding of elevator mechanics and controls."
    },
    {
      "title": "Bottle Filling Plant",
      "image": "/assets/bottle filling.png",
      "description": "An IoT-enabled bottle filling plant with SCADA integration for water usage monitoring, PLC-based controllers for precise operation, and scalable production. Features include a user-friendly interface, quality control mechanisms, energy-efficient components, and robust construction for industrial environments."
    }
  ]


  const schoolinnovation = [
    {
      "title": "Maze Solving Robot",
      "image": "/assets/Maze Solving Robot.JPG",
      "description": "A robot designed to navigate and solve mazes autonomously at normal surfaces, walls, and in pits."
    },
    {
      "title": "Line Following Robot",
      "image": "/assets/line follower.JPG",
      "description": "A robot that follows a pre-defined path or line using sensors to detect and stay on the track."
    },
    {
      "title": "Self-Balancing Robot",
      "image": "/assets/self balancing.JPG",
      "description": "A robot that maintains its balance on two wheels using gyroscopes and accelerometers, similar to a Segway."
    },
    {
      "title": "Digital Dice Kit",
      "image": "/assets/Digital Dice.JPG",
      "description": "An electronic kit that simulates the rolling of dice, typically using LEDs and a random number generator."
    },
    {
      "title": "Temperature Controlled Fan Kit",
      "image": "/assets/Temperature Controlled Fan Kit.JPG",
      "description": "A DIY kit that automatically adjusts a fan's speed based on the surrounding temperature using sensors and control circuitry."
    },
    {
      "title": "Knight 4.0, 8.0, 10.0",
      "image": "/assets/IMG 01 (2).jpg",
      "description": "Robots having 4, 8, and 10 degrees of freedom (DOF) designed to walk, balance, and navigate terrain using bipedal locomotion."
    }
  ]


  const software =
    [
      {
        "name": "RoboAnalyzer Software",
        "image": "/assets/robo soft.jpg",
        "description": "A 3D Model-Based Robotics Learning Software designed to help faculty teach and students learn robotics concepts. It supports the textbook 'Introduction to Robotics' by S. K. Saha (2008).",
        "features": [
          "DH Parameter Visualization",
          "Forward & Inverse Kinematics",
          "Forward & Inverse Dynamics",
          "Motion Planning"
        ]
      },
      {
        "name": "MechAnalyzer",
        "image": "/assets/mach1 soft.jpg",
        "description": "A 3D model-based software developed for effective teaching and learning of mechanisms. It allows simulation and analysis of preloaded mechanisms to reduce setup time.",
        "features": [
          "Simulation of around 10 mechanisms",
          "Forward kinematics",
          "Animation with coupler curve",
          "Plotting graphs"
        ]
      },
      {
        "name": "FEAST",
        "image": "/assets/feast Img.png",
        "description": "Finite Element Analysis of Structures software developed by Vikram Sarabhai Space Centre (ISRO) for structural and heat transfer analysis using the finite element method.",
        "modules": [
          "Linear static",
          "Free-vibration",
          "Buckling",
          "Visco-elasticity",
          "Thermo-elasticity",
          "Heat transfer",
          "Contact analysis",
          "Transient response"
        ]
      },
      {
        "name": "RT Tool Box Software",
        "image": "/assets/Rt tool box image.png",
        "description": "Details are currently unavailable."
      }
    ]

  const fms = [
    {
      "title": "AI-Based Multiple Stations Modular Manufacturing System",
      "image": "/assets/fms.jpg",
      "description": [
        "AI-based modular manufacturing system controlled by a single Siemens PLC.",
        "Features include:",
        {
          "stations": [
            "Feeding Station (VFD enabled)",
            "Drilling Station",
            "Drill Inspection Station",
            "Sorting based on the Drill Inspection result",
            "Metal/Non-Metal Sorting",
            "Colour Sorting",
            "Cartesian Configuration",
            "Integration with Robot for various applications"
          ]
        },
        // "Modular design allows operation of all eight stations simultaneously or one by one, with the ability to add or remove stations.",
        // "Integration with Siemens, Mitsubishi, Allen-Bradley, and Delta PLCs.",
        // "HMI-enabled for visualization and easy operations.",
        // "VFD-controlled induction motor conveyor system and DC stepper motor-controlled conveyors.",
        // "High-precision indexing table and X-slide.",
        // "Sensors include high-quality optical sensors for object detection, laser sensors for drill inspection, and colour sensors for colour detection.",
        // "Multiple grippers supported: Two Jaw Pneumatic Gripper, Vacuum Suction Gripper, Magnetic Gripper.",
        // "Pneumatic actuators with controlled airflow.",
        // "24V DC 5/2 solenoid valves for air control.",
        // "Silent air compressor for air supply.",
        // "Can be integrated with any industrial-grade robot."
      ]
    }
  ]





  if (type === "robot") {



    return (
      <>
        <Header />
        <div className="h-72 w-full bg-gradient-to-r from-blue-600 to-indigo-800 bg-cover bg-center flex justify-center items-center text-white font-serif relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-6xl font-bold mb-4 text-shadow-lg">{type.toUpperCase()}_</h1>
            <i className="fa-regular fa-circle-down text-4xl animate-bounce"></i>
          </div>
        </div>

        {robot.map((data, index) => (
          <div key={index} className="flex justify-evenly w-full h-1/3 p-2 border-2 border-slate-800 rounded-lg mb-6">
            <div className="flex justify-evenly flex-col md:flex-row bg-slate-300 rounded-md w-full">
              {/* Left side: Image */}
              <div className="md:w-1/3">
                <img
                  src={data.image}
                  alt="Product"
                  className="h-full w-full object-fill p-2 rounded-2xl"
                />
              </div>

              {/* Right side: Content */}
              <div className="md:w-2/3 p-6 flex flex-col justify-center">
                <h1 className="text-3xl font-bold mb-4 font-serif text-orange-600">{data.title}</h1>
                <p className="text-lg mb-6 text-left">{data.description}</p>

                {/* Display Features */}
                {data.features && (
                  <ul className="list-disc pl-6 text-lg">
                    {data.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}

                {/* Display Specifications if available */}
                {data.specifications && (
                  <ul className="list-disc pl-6 text-lg">
                    {Object.entries(data.specifications).map(([key, value], index) => (
                      <li key={index}>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
        <Footer />
      </>
    );


  }
  else if (type === "plc") {



    return (
      <>
        <Header />
        <div className="h-72 w-full bg-gradient-to-r from-blue-600 to-indigo-800 bg-cover bg-center flex justify-center items-center text-white font-serif relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-6xl font-bold mb-4 text-shadow-lg">{type.toUpperCase()}_</h1>
            <i className="fa-regular fa-circle-down text-4xl animate-bounce"></i>
          </div>
        </div>
        {plc.map((data, index) => (
          <div key={index} className="flex justify-evenly w-full h-1/3 p-2 border-2 border-slate-800 rounded-lg mb-6">
            <div className='flex justify-evenly flex-col md:flex-row bg-slate-300 rounded-md w-full'>
              {/* Left side: Image */}
              <div className="md:w-1/3">
                <img
                  src={data.image}
                  alt="Product"
                  className="w-full h-full object-cover p-2 rounded-2xl"
                />
              </div>

              {/* Right side: Content */}
              <div className="md:w-2/3 p-6 flex flex-col justify-center">
                <h1 className="text-3xl font-bold mb-4 font-serif text-orange-600">{data.title}</h1>
                <p className="text-lg mb-6 text-left">{data.description}</p>

                {/* Display Features */}
                {data.features && (
                  <ul className="list-disc pl-6 text-lg">
                    {data.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}

                {/* Display Specifications if available */}
                {data.specifications && (
                  <ul className="list-disc pl-6 text-lg">
                    {Object.entries(data.specifications).map(([key, value], index) => (
                      <li key={index}>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
        <Footer />
      </>
    );
  }
  else if (type === "gripper") {

    return (
      <>
        <Header />
        <div className="h-72 w-full bg-gradient-to-r from-blue-600 to-indigo-800 bg-cover bg-center flex justify-center items-center text-white font-serif relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-6xl font-bold mb-4 text-shadow-lg">{type.toUpperCase()}_</h1>
            <i className="fa-regular fa-circle-down text-4xl animate-bounce"></i>
          </div>
        </div>
        {gripper.map((data, index) => (
          <div key={index} className="flex justify-evenly w-full h-1/3 p-2 border-2 border-slate-800 rounded-lg mb-6">
            <div className='flex justify-evenly flex-col md:flex-row bg-slate-300 rounded-md w-full'>
              {/* Left side: Image */}
              <div className="md:w-1/3">
                <img
                  src={data.image}
                  alt="Product"
                  className="w-full h-full object-cover p-2 rounded-2xl"
                />
              </div>

              {/* Right side: Content */}
              <div className="md:w-2/3 p-6 flex flex-col justify-center">
                <h1 className="text-3xl font-bold mb-4 font-serif text-orange-600">{data.title}</h1>
                <p className="text-lg mb-6 text-left">{data.description.split("\n").map((d, i) => (
                  <li>{d}</li>
                ))}</p>

                {/* Display Features */}
                {data.features && (
                  <ul className="list-disc pl-6 text-lg">
                    {data.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}

                {/* Display Specifications if available */}
                {data.specifications && (
                  <ul className="list-disc pl-6 text-lg">
                    {Object.entries(data.specifications).map(([key, value], index) => (
                      <li key={index}>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
        <Footer />
      </>
    );
  }
  else if (type === "svrinnovation") {

    return (
      <>
        <Header />
        <div className="h-72 w-full bg-gradient-to-r from-blue-600 to-indigo-800 bg-cover bg-center flex justify-center items-center text-white font-serif relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-3xl font-bold mb-4 text-shadow-lg">{type.toUpperCase()}_</h1>
            <i className="fa-regular fa-circle-down text-4xl animate-bounce"></i>
          </div>
        </div>
        {svrinnovation.map((data, index) => (
          <div key={index} className="flex justify-evenly w-full h-1/3 p-2 border-2 border-slate-800 rounded-lg mb-6">
            <div className='flex justify-evenly flex-col md:flex-row bg-slate-300 rounded-md w-full'>
              {/* Left side: Image */}
              <div className="md:w-1/3">
                <img
                  src={data.image}
                  alt="Product"
                  className="w-full h-full object-cover p-2 rounded-2xl"
                />
              </div>

              {/* Right side: Content */}
              <div className="md:w-2/3 p-6 flex flex-col justify-center">
                <h1 className="text-3xl font-bold mb-4 font-serif text-orange-600">{data.title}</h1>
                <p className="text-lg mb-6 text-left">{data.description.split("\n").map((d, i) => (
                  <li>{d}</li>
                ))}</p>

                {/* Display Features */}
                {data.features && (
                  <ul className="list-disc pl-6 text-lg">
                    {data.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}

                {/* Display Specifications if available */}
                {data.specifications && (
                  <ul className="list-disc pl-6 text-lg">
                    {Object.entries(data.specifications).map(([key, value], index) => (
                      <li key={index}>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
        <Footer />
      </>
    );
  }
  else if (type === "schoolinnovation") {

    return (
      <>
        <Header />
        <div className="h-72 w-full bg-gradient-to-r from-blue-600 to-indigo-800 bg-cover bg-center flex justify-center items-center text-white font-serif relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-3xl font-bold mb-4 text-shadow-lg">{type.toUpperCase()}_</h1>
            <i className="fa-regular fa-circle-down text-4xl animate-bounce"></i>
          </div>
        </div>
        {schoolinnovation.map((data, index) => (
          <div key={index} className="flex justify-evenly w-full h-1/3 p-2 border-2 border-slate-800 rounded-lg mb-6">
            <div className='flex justify-evenly flex-col md:flex-row bg-slate-300 rounded-md w-full'>
              {/* Left side: Image */}
              <div className="md:w-1/3">
                <img
                  src={data.image}
                  alt="Product"
                  className="w-full h-full object-cover p-2 rounded-2xl"
                />
              </div>

              {/* Right side: Content */}
              <div className="md:w-2/3 p-6 flex flex-col justify-center">
                <h1 className="text-3xl font-bold mb-4 font-serif text-orange-600">{data.title}</h1>
                <p className="text-lg mb-6 text-left">{data.description.split("\n").map((d, i) => (
                  <li>{d}</li>
                ))}</p>

                {/* Display Features */}
                {data.features && (
                  <ul className="list-disc pl-6 text-lg">
                    {data.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}

                {/* Display Specifications if available */}
                {data.specifications && (
                  <ul className="list-disc pl-6 text-lg">
                    {Object.entries(data.specifications).map(([key, value], index) => (
                      <li key={index}>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
        <Footer />
      </>
    );
  }
  else if (type === "software") {

    return (
      <>
        <Header />
        <div className="h-72 w-full bg-gradient-to-r from-blue-600 to-indigo-800 bg-cover bg-center flex justify-center items-center text-white font-serif relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl font-bold mb-4 text-shadow-lg">{type.toUpperCase()}_</h1>
            <i className="fa-regular fa-circle-down text-4xl animate-bounce"></i>
          </div>
        </div>
        {software.map((data, index) => (
          <div key={index} className="flex justify-evenly w-full h-1/3 p-2 border-2 border-slate-800 rounded-lg mb-6">
            <div className='flex flex-col justify-evenly md:flex-row bg-slate-300 rounded-md w-full'>
              {/* Left side: Image */}
              <div className="md:w-1/3">
                <img
                  src={data.image}
                  alt="Product"
                  className="w-full h-full object-cover p-2 rounded-2xl"
                />
              </div>

              {/* Right side: Content */}
              <div className="md:w-2/3 p-6 flex flex-col justify-center">
                <h1 className="text-3xl font-bold mb-4 font-serif text-orange-600">{data.name}</h1>
                <p className="text-lg mb-6 text-left">{data.description.split("\n").map((d, i) => (
                  <li>{d}</li>
                ))}</p>

                {/* Display Features */}
                {data.features && (
                  <ul className="list-disc pl-6 text-lg">
                    {data.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}

                {/* Display Specifications if available */}
                {data.specifications && (
                  <ul className="list-disc pl-6 text-lg">
                    {Object.entries(data.specifications).map(([key, value], index) => (
                      <li key={index}>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
        <Footer />
      </>
    );
  }
  else if (type === "fms") {

    return (
      <>
        <Header />
        <div className="h-72 w-full bg-gradient-to-r from-blue-600 to-indigo-800 bg-cover bg-center flex justify-center items-center text-white font-serif relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-6xl font-bold mb-4 text-shadow-lg">{type.toUpperCase()}_</h1>
            <i className="fa-regular fa-circle-down text-4xl animate-bounce"></i>
          </div>
        </div>
        {fms.map((data, index) => (
          <div key={index} className="flex justify-evenly w-full h-1/3 p-2 border-2 border-slate-800 rounded-lg mb-6">
            <div className='flex justify-evenly flex-col md:flex-row bg-slate-300 rounded-md w-full'>
              {/* Left side: Image */}
              <div className="md:w-1/3">
                <img
                  src={data.image}
                  alt="Product"
                  className="w-full h-full object-cover p-2 rounded-2xl"
                />
              </div>

              {/* Right side: Content */}
              <div className="md:w-2/3 p-6 flex flex-col justify-center">
                <h1 className="text-3xl font-bold mb-4 font-serif text-orange-600">{data.title}</h1>

                {/* Display Description */}
                <div className="text-lg mb-6 text-left">
                  {data.description.map((text, idx) => {
                    if (typeof text === 'string') {
                      return <p key={idx}>{text}</p>;
                    } else if (text.stations) {
                      return (
                        <div key={idx}>
                          <p>Stations:</p>
                          <ul className="list-disc pl-6 text-lg">
                            {text.stations.map((station, stationIdx) => (
                              <li key={stationIdx}>{station}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>

                {/* Additional Features */}
                <ul className="list-disc pl-6 text-lg">
                  {data.description.filter(text => typeof text === 'string' && !text.includes('Features include:')).map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        <Footer />
      </>
    );
  }
}

export default ProductDetails;
