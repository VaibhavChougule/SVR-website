import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import image from '/assets/AI robot.jpg';
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

const ProductInformation = {
  roboticslab: {
    title: "Robotics Lab Setup",
    image: ["/assets/setup_my_lab_1.jpg", "/assets/setup_my_lab_2.jpg", "path3"],
    description: "Complete Product description",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  cncvmclab: {
    title: "CNC VMC Lab",
    image: ["path1", "path2", "path3"],
    description: "COMPLETE PRODUCT DESCRIPTION",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  scararobot: {
    title: "Scara Robot",
    image: ['/assets/AI robot.jpg', image, image],
    description: "Highly rigid arms and cutting-edge servo controls. Ideal for a wide range of fields, from high-volume production of foodstuffs and pharmaceuticals demanding fast operation to assembly work requiring high levels of precision.",
    features: ["High speed & high performance for the application in single planer.",
       "Integrating with multiple grippers with a robot to optimize operations",
      "Robot safety standard has been followed during installation like MCB, Stabilizer, SPD, PLC, standard wiring, etc. at SVR"],
    // blueprintImages: ['/assets/AI robot.jpg', '/assets/AI robot.jpg'],
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["https://www.youtube.com/embed/u6KsQ8_4qq8?si=nqjsc9-ooQyu4dPE", "https://www.youtube.com/embed/u6KsQ8_4qq8?si=nqjsc9-ooQyu4dPE"],
    document: ["path1", "path2"],
  },
  cobot: {
    title: "Cobot",
    image: ["path1", "/assets/cobotsvr.jpeg", "path3"],
    description: "SVR Robotics excels in developing collaborative robots (COBOTs) that seamlessly integrate with human workers, enhancing productivity and safety. Our advanced COBOT solutions are designed to optimize workflows and adapt to various industrial applications.",
    features: ["Mitsubishi Electric Collaborative Robot - MELFAASSISTA can share a workspace with humans. Simpler, easier and more flexible.",
      "Touch screen control panel which has LED on the robot arm to display the status of the robot",
    ],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { Controller: "CR80005VD" },
      { Joints: " 6" },
      { Speed: "1000mm/s" },
      { Motors: "AC Servo Motor" },
      { Reach: "910mm" },
      { Payload: "5kg" },
      { "Additional features": "Touch screen control panel with LED display on the robot arm indicating the status." },

    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  articulatedrobot: {
    title: "Articulated Robot",
    image: ["path1", "path2", "path3"],
    description: "At SVR Robotics, our articulated robots are designed for a wide range of applications, including precision assembly, welding, material handling, and machine tending. These versatile robots offer high flexibility and accuracy, making them ideal for improving productivity and efficiency in manufacturing processes across various industries.",
    features: [
      "Optimized arm length for broader movement, complex assembly, and operations.",
      "Can withstand harsh environmental conditions.",
      "Can be used for various industrial applications.",
      "Variable payload from 3kg to 80kg.",
      "Maximum reach: 504mm to 2100mm.",
      "Industrial grade robot for low payload and high speed.", 
      "User-friendly software for program Robotics Programming.",
      "Comes with a Robot + Teach pendent + Controller + Industrial grade cell."],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  cartesianrobot: {
    title: "Cartesian Robot",
    image: ["path1", "path2", "path3"],
    description: "SVR Robotics leverages Cartesian Robots for diverse applications such as pick-and-place tasks, assembly operations, and material handling, ensuring flexibility across various industries.",
    features: ["Precision and Accuracy: Integrated with high-resolution encoders for precise position feedback.", 
      "Custom Automation Solutions: Tailored to meet specific client requirements, optimizing workflows and improving efficiency.",
      "Advanced PLC Integration: Ensures seamless control and coordination of complex tasks.",
      "Enhanced Reliability: Robust PLC systems and precise encoders ensure consistent performance, reducing downtime and maintenance costs.",
    ],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  fms: {
    title: "Flexible Manufacturing System",
    image: ["path1", "/assets/fms.jpg", "path3"],
    description: "A Flexible Manufacturing System / Modular Manufacturing System offers a complete production process of material feeding, integrated manufacturing like drilling, inspection, sorting based on drilling and depth inspection, cartesian robotic configuration, sorting based on metal / non-metal& colour. FMS is ideally developed to teach PLC programming, visualization, commissioning and troubleshooting of automated industrial Mechatronics systems to students.SVR FMS offers a safe environment for students to explore modern Industrial Automation. Students learn to visualize the real-time working of the various gripping by suction cup, pneumatic gripper, magnetic Gripper, etc, integration of Conveyor with PLC, rotary table with various application like drilling & inspection, pneumatic actuator, solenoid valve, PLC, VFD, AC Induction Motor, HMI, Vacuum Ejector, Compressor, Sensor, and the other components used.",
    features: ["AI-based modular manufacturing system controlled by a single Siemens PLC.",
      "Modular design allows operation of all eight stations simultaneously or one by one, with the ability to add or remove stations.",
      "Integration with Siemens, Mitsubishi, Allen-Bradley, and Delta PLCs.",
      "HMI-enabled for visualization and easy operations.",
      "VFD-controlled induction motor conveyor system and DC stepper motor-controlled conveyors.",
      "High-precision indexing table and X-slide.",
      "Sensors include high-quality optical sensors for object detection, laser sensors for drill inspection, and colour sensors for colour detection.",
      "Multiple grippers supported: Two Jaw Pneumatic Gripper, Vacuum Suction Gripper, Magnetic Gripper.",
      "Pneumatic actuators with controlled airflow.",
      "24V DC 5/2 solenoid valves for air control.",
      "Silent air compressor for air supply.",
      "Can be integrated with any industrial-grade robot.",

    ],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["https://www.youtube.com/embed/IE5XVANBxaU?si=3JVUbhrumBPkp94w", "https://www.youtube.com/embed/4YTySpU-iHw?si=hwMA097ybdfsRszz"],
    document: ["path1", "path2"],
  },
  electrohyrdaulic: {
    title: "IoT, PLC, Manual Based Electro-Hydraulic System",
    image: ["path1", "path2", "path3"],
    description: "An Electro-Hydraulic System designed for experiments like single/double-acting cylinder, regenerative circuit, pump unloading circuit, cylinder sequencing/reciprocating circuit, cylinder locking circuit, and cylinder synchronization. The system supports manual, PLC-based, and IoT-based operations. It includes components from Festo, Genetic, and Bash.",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  electropneumatic: {
    title: "IoT, PLC, Manual Based Electro-Pneumatic System",
    image: ["path1", "/assets/pneumatic.jpg", "path3"],
    description: "An Electro-Pneumatic System with manual, PLC-based, and IoT-based operations. Experiments include direct cylinder actuation, use of 5/3 valve as a memory valve, two-cylinder coordinated motion control, sequential motion control, and pressure circuits. Components are mounted on an industrial-grade panel for rigidity, featuring parts from Festo and Genetic.",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  bottlefillingplant: {
    title: "Bottle Filling Plant ",
    image: ["path1", "psrc/assets/bottle filling.png", "path3"],
    description: "An IoT-enabled bottle filling plant with SCADA integration for water usage monitoring, PLC-based controllers for precise operation, and scalable production. Features include a user-friendly interface, quality control mechanisms, energy-efficient components, and robust construction for industrial environments.",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  jawconcentricgripper: {
    title: "3-Jaw Concentric Gripper",
    image: ["path1", "path2", "path3"],
    description: "product description",
    features: [
      "Pneumatic operated gripper",
      "Pneumatic operated gripper",
      "Pneumatic operated gripper",
      "Pressure range: 3-7bar",
      "3 Jaws provide more contact with the part to be grasped and more accurate centering than 2 jaw models.",
      "Three-jaw universal chuck is used to hold round and hexagonal work. It grasps the work quickly.",

    ],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  suctioncupgripper: {
    title: "Suction Cup Gripper",
    image: ["path1", "path2", "path3"],
    description: "product description",
    features: [
      "Optimum adaptation and sealing even with curved workpieces and very good damping effect during placement on the workpiece",
      "Connection nipple vulcanized to elastomer part",
      "Round bellows suction cup with 1.5 folds for dynamic handling of metal sheets, steel sheets, and aluminum sheets",
      "Suitable for use in, for example, feeder systems for press lines in the automotive industry",
    ],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { Diameter: " 22 to 125 mm" },
      { Material: "NBR" },
      { Payload: "500gm" },
     
    ],
    // links: ["abc.com", "xyz.com"],
    // document: ["path1", "path2"],
  },
  sensorizedgripper: {
    title: "Sensorized Gripper",
    image: ["path1", "/assets/SensorisedGripper.jpg", "path3"],
    description: "product description",
    features: ["Payload -2kg, Actuation-Electrical",
      "Sensors integrated- Infrared sensor, Strain gauge, Load cell, Flexi-force sensor.",
      "These sensors help for detection of gripping object, load applied on the object, strain on gripper jaws etc."],
    /*blueprintImages: ["path1", "path2"],*/
    // specifications: [
    //   { key1: "value1" },
    //   { key2: "value2" },
    // ],
    // links: ["abc.com", "xyz.com"],
    // document: ["path1", "path2"],
  },
  magneticgripper: {
    title: "Magnetic Gripper",
    image: ["path1", "/assets/magneticgripper.jpg", "path3"],
    description: "product description",
    features: [
      "Pneumatically Operated Gripper",
      "Permanent magnet allows safe handling without voltage source",
      "Universal applications",
      "Handling of ferromagnetic workpieces",
      "Handling of Metal Sheets",
      "Handling of Laser-cut workpieces",
    ],
    /*blueprintImages: ["path1", "path2"],*/
    // specifications: [
      // { key1: "value1" },
      // { key2: "value2" },
    // ],
    // links: ["abc.com", "xyz.com"],
    // document: ["path1", "path2"],
  },
  gripperlab: {
    title: "Gripper Lab",
    image: ["path1", "/assets/gripperlab img.png", "path3"],
    description: "product description",
    features: [
      "True translational motion",
      "Better control",
      "Easy to hand-guide",
      "Simple to program",
      "Quicker to deploy",
      "Small footprint",
      "Highly customizable",
      "Control the position of the gripper finger",

    ],
    /*blueprintImages: ["path1", "path2"],*/
    // specifications: [
      // { key1: "value1" },
      // { key2: "value2" },
    // ],
    // links: ["abc.com", "xyz.com"],
    // document: ["path1", "path2"],
  },
  graboparallel: {
    title: "Svr Grabo 1.2 & 5 (Parallel Jaw) ",
    image: ["/assets/Parallel Grabo 5.png", "/assets/SVR Garbo 1.2,5 gripper.jpeg", "/assets/parallel_1.2.png"],
    description: "The Svr Grabo 1.2 & 5 (Parallel Jaw) is a high-performance robotic gripper designed for precision and versatility. Built with high-quality materials, this gripper is equipped with a servo motor for enhanced accuracy and quick response, making it ideal for a wide range of applications. It features a payload capacity of 5 kg, with additional options available for 1.2 kg and 10 kg payloads to suit specific requirements. The parallel and curvilinear gripper jaws are easily detachable, ensuring quick adaptability to various tasks. Utilizing spur gears for better drive, the gripper requires no lubrication, reducing maintenance needs. Its mountable design and optional overhead camera integration further enhance its functionality. With Ethernet/IP, CANopen, and EtherCAT connectivity, and customizable feedback options for force and position sensing, it offers seamless integration into existing systems. The gripper is capable of 60 cycles per minute with a maximum stroke of 70 mm and a gripping force of 180 N, making it highly efficient for demanding operations. Designed to operate in temperatures ranging from 0°C to 40°C, it is also customizable for specific environmental conditions. Compact and lightweight at 3.3 kg, the Svr Grabo is the perfect combination of precision, reliability, and cost-effectiveness.",
    features: [
      "Servo motor robotic gripper",
      "High-quality material",
      "5 kg payload (also available in 1.2 kg and 10 kg payload).",
      "High precision servo motor",
      "High quality, low cost, quick response",
      "Easily mountable",
      "Easily detachable parallel & curvilinear gripper jaw",
      "Use of spur gears for better drive",
      "No lubrication required",
      "Overhead Camera (optional)",
      "Precision integrated actuator"
  ],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { "Payload": "5 kg" },
      { "Maximum Stroke": "70 mm" },
      { "Maximum Gripping force": "180 N" },
      { "Maximum Cycle count": "60 cycles/min" },
      { "Minimum Cycle Time": "1 sec" },
      { "Maximum Cable Length": "5 m" },
      { "Gripper Mass": "3.30 kg" },
      { "Opetaring Temperature": "0°C to 40°C (customization available)" },
      { "Connectivity": "Ethernet/IP, CANopen, EtherCAT" },
      { "Feedback": "Force sensing, Position sensing" },
    ],
    // links: ["abc.com", "xyz.com"],
    // document: ["path1", "path2"],
  },
  grabocurvilinear: {
    title: "Svr Grabo 1.2 & 5 (Curvilinear Jaw)",
    image: ["/assets/curv_1.2.png", "/assets/SVR Garbo ( Curvilinear Jaw).jpeg", "/assets/Curvilinear Grabo.png"],
    description: "product description",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    // specifications: [
      // { key1: "value1" },
      // { key2: "value2" },
    // ],
    // links: ["abc.com", "xyz.com"],
    // document: ["path1", "path2"],
  },
  pneumatic2and3jawgripper: {
    title: "Pneumatic 2 & 3 Jaw Gripper",
    image: ["path1", "path2", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    // specifications: [
    //   { key1: "value1" },
    //   { key2: "value2" },
    // ],
    // links: ["abc.com", "xyz.com"],
    // document: ["path1", "path2"],
  },
  vfdkit: {
    title: "VFD Kit",
    image: ["path1", "/assets/VFD KIT.jpg", "path3"],
    description: "The VFD kit controls motor speed and direction with additional features like running the motor on time and controlling it in auto or manual modes.",
    features: ["Siemens 0.25 Hp 3-phase AC induction motor",
       "Siemens/Mitsubishi VFD",
       "Motor speed increase/decrease functionality",
       "Forward/reverse direction functionality",
       "Motor run on time basis",
       "Auto and Manual Mode control",
       "Aluminium extrusion frame with safety electrical components like MCB",
       "Banana sockets input/output to PLC, 24V supply, LED indicators, Start/Stop switch",

      ],
    /*blueprintImages: ["path1", "path2"],*/
    // specifications: [
    //   { key1: "value1" },
    //   { key2: "value2" },
    // ],
    // links: ["abc.com", "xyz.com"],
    // document: ["path1", "path2"],
  },
  elevatorsimulationkit: {
    title: "Elevator Simulation Kit",
    image: ["path1", "/assets/Elevator simulation.png", "path3"],
    description: "A realistic elevator demonstration model with PLC integration for automation and monitoring. It includes motor control study for smooth acceleration and deceleration, load handling, and variable speed operations. The interactive control panel enhances the understanding of elevator mechanics and controls.A 3-floor elevator simulation with a stepper motor-driven cabin, proximity sensor for position detection, and MS frame for housing the setup.",
    features: ["3-floor, 750mm tall elevator setup", 
      "Stepper motor-driven elevator cabin with balance weight",
      "Nema 17, 45KgCm geared stepper motor with digital microstepping driver",
      "Proximity inductive sensor to detect position",
      "MS frame for cabin and staircase housing",
      "Powder-coated MS frame with acrylic control board",
      "Banana sockets input/output to PLC, 24V supply, LED indicators, Start/Stop switch",
    ],
    /*blueprintImages: ["path1", "path2"],*/
    // specifications: [
    //   { key1: "value1" },
    //   { key2: "value2" },
    // ],
    // links: ["abc.com", "xyz.com"],
    // document: ["path1", "path2"],
  },
  steppermotorcontrolkit: {
    title: "Stepper Motor Speed and Direction Control Kit",
    image: ["path1", "/assets/Stepper Motor Speed & Direction Control.jpg", "path3"],
    description: "This system controls the speed and direction of a stepper motor, with time-based control and position detection.",
    features: ["Nema 17, 45KgCm geared stepper motor with digital microstepping driver", 
      "Motor speed increase/decrease functionality",
      "Motor forward/reverse direction functionality",
      "Motor run on time basis",
      "Proximity inductive sensor to detect position",
      "Powder-coated MS frame with acrylic control board",
      "Banana sockets input/output to PLC, 24V supply, LED indicators, Start/Stop switch",
    ],
    /*blueprintImages: ["path1", "path2"],*/
    // specifications: [
    //   { key1: "value1" },
    //   { key2: "value2" },
    // ],
    // links: ["abc.com", "xyz.com"],
    // document: ["path1", "path2"],
  },
  waterlevelcontrolkit: {
    title: "Water Level Control Kit",
    image: ["path1", "/assets/waterlevelcontrolkit.png", "path3"],
    description: "Water level control kit with float sensors for detecting water levels, a 12V DC water pump, and an acrylic control board.",
    features: ["Stainless steel lower and upper 3-litre water tanks", 
      "Two float sensors with three level indication",
      "12V DC water pump with a force of 0.48MPa",
      "Powder-coated MS frame with acrylic control board",
      "Banana sockets input/output to PLC, 24V supply, LED indicators, Start/Stop switch",
      ],
    /*blueprintImages: ["path1", "path2"],*/
    // specifications: [
    //   { key1: "value1" },
    //   { key2: "value2" },
    // ],
    // links: ["abc.com", "xyz.com"],
    // document: ["path1", "path2"],
  },
  conveyorkit: {
    title: "Conveyor Kit",
    image: ["path1", "/assets/Conveyorkitweb.png", "path3"],
    description: "A stepper-driven belt conveyor system with speed and direction control, housed in a powder-coated MS frame with an acrylic control board.",
    features: ["300mm*50mm stepper-driven belt conveyor", 
      "Nema 17, 45KgCm geared stepper motor with digital microstepping driver",
      "Conveyor speed increase/decrease functionality",
      "Conveyor forward/reverse direction functionality",
      "Conveyor run on time basis",
      "Powder-coated MS frame with acrylic control board",
      "Banana sockets input/output to PLC, 24V supply, LED indicators, Start/Stop switch",
      ],
    /*blueprintImages: ["path1", "path2"],*/
    // specifications: [
    //   { key1: "value1" },
    //   { key2: "value2" },
    // ],
    // links: ["abc.com", "xyz.com"],
    // document: ["path1", "path2"],
  },
  stardeltakit: {
    title: "Star Delta Kit",
    image: ["path1", "/assets/stardeltastarter.png", "path3"],
    description: "A star-delta starter with functionality to switch between star and delta connections on a time basis, and MS powder-coated frame with an acrylic control board.",
    features: ["Siemens air break contactor for actual demonstration", 
      "Functionality to operate star/delta connection",
      "Functionality to switch from star to delta or vice versa on time basis",
      "Powder-coated MS frame with acrylic control board",
      "Banana sockets input/output to PLC, 24V supply, LED indicators, Start/Stop switch"],
    /*blueprintImages: ["path1", "path2"],*/
    // specifications: [
    //   { key1: "value1" },
    //   { key2: "value2" },
    // ],
    // links: ["abc.com", "xyz.com"],
    // document: ["path1", "path2"],
  },
  temperaturecontrolkit: {
    title: "Temperature Control Kit",
    image: ["path1", "/assets/temperaturecontrolkit.png", "path3"],
    description: "A temperature control kit with a 3-litre water tank, float sensor, and 1000W AC water heater, all housed in a powder-coated MS frame with an acrylic control board.",
    features: ["Stainless steel 3-litre water tank", 
      "Float sensor with three-level indication",
      "1000W 230V AC water heater",
      "Powder-coated MS frame with acrylic control board",
      "Banana sockets input/output to PLC, 24V supply, LED indicators, Start/Stop switch",
    ],
    /*blueprintImages: ["path1", "path2"],*/
    // specifications: [
    //   { key1: "value1" },
    //   { key2: "value2" },
    // ],
    // links: ["abc.com", "xyz.com"],
    // document: ["path1", "path2"],
  },
  mazesolvingrobot: {
    title: "Maze Solving Robot",
    image: ["path1", "psrc/assets/Maze Solving Robot.JPG", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    // specifications: [
    //   { key1: "value1" },
    //   { key2: "value2" },
    // ],
    // links: ["abc.com", "xyz.com"],
    // document: ["path1", "path2"],
  },
  linefollowingrobot: {
    title: "Line Following Robot ",
    image: ["path1", "/assets/line follower.JPG", "path3"],
    description: "Line Follower Robot uses Arduino Nano development board. The robot finds the path in the Line and follow the same. The system uses Infrared sensor to find the path and ultrasound sensor for obstacle detection which is controlled by C programmed microcontroller and the same drives the geared DC motor. The user will get thorough knowledge about functioning and interfacing of an IR sensor, a DC motor & an ultrasound sensor. This project will also help the user in developing programming logic using if-else function. This very simple and easy to build kit is perfect for beginners and is a great learning platform to get into robotics and engineering.",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { Lenght: "200mm" },
      { Width: "220mm" },
      { Height: "120mm" },
      { Battery_Life: "4hrs." },
      {Controller: ""},
      {"Motor Driver":""},
      {Chassis:""},
      {"Cable and Connectors":""},
      ],
      // links: ["abc.com", "xyz.com"],
      // document: ["path1", "path2"],
  },
  selfbalancingrobot: {
    title: "Self-balancing Robot",
    image: ["/assets/selfbalancebot.png", "/assets/self balancing.JPG", "path3"],
    description: "Two wheeled self-balancing robot, which is based on an inverted pendulum system, is dynamically stable but statically unstable. The robot involves various physics and control theories. This project describes the modeling of the two wheeled self-balancing robot, designs the robot controller using PID and implements the controller on the robot. In this project, an inertial measurement unit (IMU) is used, which combines accelerometer and gyroscope measurement in order to estimate and obtain the tilt angle of the robot. The PID controller is applied to correct the error between the desired set point and the actual tilt angle and adjust the dc motor speed accordingly to balance the robot. The result obtained shows that the PID controller is able to balance the robot acceptably but with some limitations. The simulation result of the model is compared with the developed hardware and the performance of the controller is analyzed and discussed.",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { Length: "160mm" },
      { Widht: "64mm" },
      { Height: "147mm" },
      { "Battery Life": "4hrs. (In continuously running condition for 11.2 V and 2200 mAh battery)" },
    ],
    // links: [],
    // document: ["path1", "path2"],
  },
  digitaldicekit: {
    title: "Digital Dice Kit",
    image: ["/assets/digitaldice.png", "/assets/Digital Dice.jpg", "path3"],
    description: "An electronic kit that simulates the rolling of dice, typically using LEDs and a random number generator.",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { Microcontroller: "Arduino UNO" },
      { Button: "Push Button" },
      {"Connecting Wires": ""},
      {Breadboard:""},
      {Resistor: "1k ohm"},
      {"Power Supply":"5V"},
      {"Seven Segment Display":""},
    ],
    //links: ["abc.com", "xyz.com"],

    document: ["path1", "path2"],
  },
  temperaturecontrolledfankit: {
    title: "Temperature Controlled Fan Kit",
    image: ["/assets/temperaturefankit.png", "/assets/Temperature Controlled Fan Kit.JPG", "path3"],
    description: "This application is simple just by using temperature sensor LM35 with an Arduino kit to control a fan with respect to the temperature read by the micro-controller which in this case is the Arduino kit. The temperature sensor LM35 is connected with the Arduino with an analog input pin A0 (the temperature is an analog signal), while the fan is connected with a PWM (Pulse Width Modulation) pin 6 which controls the speed of the fan with respect to the output temperature using a function map in the Arduino IDE.",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { Microcontroller:"Arduino UNO" },
      { "Temperature Sensor": "LM35" },
      {"Connecting Wires":"Jumper Cables"},
      {Resistor:"1k ohm"},
      {Diode:"1N4007"},
      {Motor:"DC motor or a DC Fan"},
      {Transistor:"NPN transistor BC547"},
      {Voltage: "12V"},

    ],
    // links: ["abc.com", "xyz.com"],
    // document: ["path1", "path2"],
  },
  objectcounter: {
    title: "Object Counter Kit",
    image: ["path1", "/assets/object counter.png", "path3"],
    description: "Object counters or product counters are important applications used in industries, shopping malls, etc. They count objects or products automatically and so reduce human efforts.",
    features: ["High Quality Stainless Steel Chassis",
              "High Precision & reliable electronic devices",
              "Unbreakable Acrylic Body",
              "Good Quality High Torque Motors",
              "Timing Belys for precise operation",
              "Plastic Timimg pulleys with aluminium inserts",
              "Adjustable Distance for object travelling"],
    /*blueprintImages: ["path1", "path2"],*/
    // specifications: [
      // { key1: "value1" },
      // { key2: "value2" },
    // ],
    // links: ["abc.com", "xyz.com"],
    // document: ["path1", "path2"],
  },
  knight: {
    title: "Knight 4.0, 5.0, 10.0 Bipedal",
    image: ["path1", "path2", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    // specifications: [
    //   { key1: "value1" },
    //   { key2: "value2" },
    // ],
    // links: ["abc.com", "xyz.com"],
    // document: ["path1", "path2"],
  },
  roboanalyzer: {
    title: "RoboAnalyzer",
    image: ["path1", "/assets/robo soft.jpg", "path3"],
    description: ["Robotics is a subject that deals with the design, analysis, fabrication, and usage of robots for various automated and semi-automated tasks. ",
        "The concepts taught in a typical robotics course are generally difficult to perceive just by looking at textbook figures. Hence, a need for simulation software for teaching and learning robotics is of prime importance.",
        " RoboAnalyzer® is a 3D model-based software that can be used to teach and learn robotics concepts. It is an evolving product developed in Mechatronics Lab, Department of Mechanical Engineering at IIT Delhi, New Delhi, India.",
        
      ],
        features: ["Serial manipulator with prismatic and revolute joints",
      "DH parameters as input",
      "3D model generated based on DH parameters",
      "Visualize DH parameters",
      "Forward Kinematics",
      "Inverse Kinematics",
      "Inverse Dynamics (Based on ReDySim Algorithm)",
      "Forward Dynamics (Based on ReDySim Algorithm)",
      "Animation with trace of end-effector",
      "Plot graphs",
      "Virtual Robot Module (17+ CAD Models of Industrial Robots)",
      "Save and Open Robot Models",
      ],
    /*blueprintImages: ["path1", "path2"],*/
    // specifications: [
    //   { key1: "value1" },
    //   { key2: "value2" },
    // ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  mechanalyzer: {
    title: "MechAnalyzer",
    image: ["path1", "/assets/mach1 soft.jpg", "path3"],
    description: "A 3D model-based software developed for effective teaching and learning of mechanisms. It allows simulation and analysis of preloaded mechanisms to reduce setup time.",
    features: [
      "Simulation of around 10 mechanisms",
      "Forward kinematics",
      "Animation with coupler curve",
      "Plotting graphs",
    ],
    /*blueprintImages: ["path1", "path2"],*/
    // specifications: [
    //   { key1: "value1" },
    //   { key2: "value2" },
    // ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  feast: {
    title: "FEAST",
    image: ["path1", "/assets/feast Img.png", "path3"],
    description: "FEAST (Finite Element Analysis of STructures) is a structural analysis software based on Finite Element Method. FEAST is ISRO’s structural analysis software based on finite element method realized by Structural Engineering Entity of Vikram Sarabhai Space Centre (VSSC)/Indian Space Research Organisation (ISRO).The software was primarily developed for solving ISRO’s launch vehicle and satellite structural engineering problems.",
    features: [
    "Linear Static Analysis",
    "Free-Vibration Analysis",
    "Buckling Analysis",
    "Visco-Elastic Analysis",
    "Thermo-elasticity",
    "Heat Transfer",
    "Transient Response",
    "Frequency Response",
    "Random Response",
    "Shock response spectra / shock response",
    "Fluid-structure interaction and Base excitation analyses with metallic and composite material models.",
    "Electro-static",
    "Electro-Magnetic",
    "XFEM based Fracture mechanics",
     
  ],
    /*blueprintImages: ["path1", "path2"],*/
    // specifications: [
    //   { key1: "value1" },
    //   { key2: "value2" },
    // ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  rttoolboxsoftware: {
    title: "RT Tool box Software",
    image: ["path1", "psrc/assets/Rt tool box image.png", "path3"],
    description: "product description",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    // specifications: [
    //   { key1: "value1" },
    //   { key2: "value2" },
    // ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },
  scada: {
    title: "SCADA",
    image: ["path1", "path2", "path3"],
    description: "description",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    // specifications: [
    //   { key1: "value1" },
    //   { key2: "value2" },
    // ],
    // links: ["abc.com", "xyz.com"],
    // document: ["path1", "path2"],
  },
  
  sampledescriptionpage: {
    title: "Product_Name",
    image: ["path1", "path2", "path3"],
    description: "Complete_product_Description",
    features: ["feature 1", "feature2"],
    /*blueprintImages: ["path1", "path2"],*/
    specifications: [
      { key1: "value1" },
      { key2: "value2" },
    ],
    links: ["abc.com", "xyz.com"],
    document: ["path1", "path2"],
  },


};

const SpecificProduct = () => {
  const { productId } = useParams(); // Get productId from URL
  const product = ProductInformation[productId];

  if (!product) {
    return <div className="text-center text-red-500 text-xl mt-10">Product not found</div>;
  }

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto p-5">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">{product.title}</h1>

        {/* Image Carousel */}
        <div className="flex justify-center space-x-5 mb-10">
          {product.image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product ${index + 1}`}
              className="w-1/4 h-auto rounded-lg shadow-lg border border-gray-200 hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed mb-10">{product.description}</p>

        {/* Features */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">Key Features</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="text-lg">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Blueprint Images */}
        {/* <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">Blueprint Images</h2>
          <div className="flex space-x-5 justify-center">
            {product.blueprintImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Blueprint ${index + 1}`}
                className="w-1/4 h-auto rounded-lg shadow-lg border border-gray-200 hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div> */}

        {/* Specifications Table */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">Product Specifications</h2>
          <table className="table-auto w-full border-collapse border border-gray-300 bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-6 py-3 text-left">Characteristics</th>
                <th className="border border-gray-300 px-6 py-3 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {product.specifications && product.specifications.map((spec, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  {Object.entries(spec).map(([key, value]) => (
                    <>
                      <td className="border border-gray-300 px-6 py-2 text-gray-700">{key}</td>
                      <td className="border border-gray-300 px-6 py-2 text-gray-700">{value}</td>
                    </>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Links */}
        <div className="mb-10">


          {product.links && product.links.map((link, index) =>{
            if (index == 0) {
              return (
                <>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-5">Links</h2>
                  <iframe width="560" height="315" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="inline m-4"></iframe>
                </>
              )
            }

            return (

              <iframe width="560" height="315" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="inline m-4"></iframe>
            
          )})}


        </div>

        {/* Documents */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">Documents</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {product.document && product.document.map((doc, index) => (
              <li key={index} className="text-lg">
                {doc}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpecificProduct;
