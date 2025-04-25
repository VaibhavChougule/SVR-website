import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import image from "/assets/AI robot.jpg";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

const ProductInformation = {
  // roboticslab: {
  //   title: "Robotics Lab Setup",
  //   image: ["/assets/setup_my_lab_1.jpg", "/assets/setup_my_lab_2.jpg", "path3"],
  //   description: "Complete Product description",
  //   features: ["feature 1", "feature2"],
  //   specifications: [
  //     { key1: "value1" },
  //     { key2: "value2" },
  //   ],
  //   links: ["abc.com", "xyz.com"],
  //   document: ["path1", "path2"],
  // },
  // cncvmclab: {
  //   title: "CNC VMC Lab",
  //   image: ["path1", "path2", "path3"],
  //   description: "COMPLETE PRODUCT DESCRIPTION",
  //   features: ["feature 1", "feature2"],
  //   specifications: [
  //     { key1: "value1" },
  //     { key2: "value2" },
  //   ],
  //   links: ["abc.com", "xyz.com"],
  //   document: ["path1", "path2"],
  // },
  scararobot: {
    title: "Scara Robot",
    image: ["/assets/scara1.png", "/assets/scara2.png", "/assets/scara3.png"],
    description:
      "Highly rigid arms and cutting-edge servo controls. Ideal for a wide range of fields, from high-volume production of foodstuffs and pharmaceuticals demanding fast operation to assembly work requiring high levels of precision.",
    features: [
      "High speed & high performance for the application in single planer.",
      "Integrating with multiple grippers with a robot to optimize operations",
      "Robot safety standard has been followed during installation like MCB, Stabilizer, SPD, PLC, standard wiring, etc. at SVR",
    ],
    // Now uses an array of objects with item, model, specification
    specifications: [
      { item: "Machine cable (replacement)", model: "1F-□LUCBL-42", specification: "Fixed type (3m, 10m, 15m, 20m)" },
      { item: "Machine cable (replacement)", model: "□LUCBL-42", specification: "Flexible type (10m, 15m, 20m)" },
      { item: "Simple teaching pendant", model: "R32TB", specification: "Cable length: 7 m" },
      { item: "Simple teaching pendant", model: "R32TB-15", specification: "Cable length: 15 m" },
      { item: "High-performance teaching pendant", model: "R56TB", specification: "Cable length: 7 m" },
      { item: "High-performance teaching pendant", model: "R56TB-15", specification: "Cable length: 15 m" },
      { item: "Parallel I/O interface", model: "2D-TZ368 (sink type)", specification: "32 input points and 32 output points Insulated output signal (0.1A 24V per output point)" },
      { item: "Parallel I/O interface", model: "2D-TZ378 (source type)", specification: "Insulated input signal (9mA/24V per input point)" },
      { item: "External I/O cable (for the parallel I/O interface)", model: "2D-CBL05", specification: "5 m" },
      { item: "External I/O cable (for the parallel I/O interface)", model: "2D-CBL15", specification: "15 m" },
      { item: "Parallel I/O unit", model: "2A-RZ361 (sink type)", specification: "32 input points and 32 output points Insulated output signal (0.1A 24V per output point)" },
      { item: "Parallel I/O unit", model: "2A-RZ371 (source type)", specification: "Insulated input signal (7mA/24V per input point)" },
      { item: "External I/O cable (for the parallel I/O unit)", model: "2A-CBL05", specification: "5 m" },
      { item: "External I/O cable (for the parallel I/O unit)", model: "2A-CBL15", specification: "15 m" },
      { item: "CC-Link interface", model: "2D-TZ576", specification: "Only supported with intelligent device stations and local stations" },
      { item: "Network base card (EtherNet/IP interface)", model: "2D-TZ535", specification: "HMS Anybus CompactCom, Module-connecting communication interface" },
      { item: "Network base card (PROFINET interface)", model: "2D-TZ535-PN", specification: "HMS Anybus CompactCom, Module-connecting communication interface" },
      { item: "Network base card (CC-Link IE Field interface)", model: "2F-DQ535", specification: "HMS Anybus CompactCom, Module-connecting communication interface" },
      { item: "Network base card (EtherCAT interface)", model: "2F-DQ535-EC", specification: "HMS Anybus CompactCom, Module-connecting communication interface" },
      { item: "Function extension card", model: "2F-D0510", specification: "MELFA Smart Plus function added" },
      { item: "Function extension card", model: "2F-D0520", specification: "" },
      { item: "Function extension card", model: "2F-D0511", specification: "" },
      { item: "Function extension card", model: "2F-D0521", specification: "" },
      { item: "Safety option", model: "4F-SFO02-01", specification: "Required for safety functions" },
      { item: "SD memory card", model: "2F-2GB8D", specification: "2 GB capacity" },
      { item: "RT ToolBox3", model: "3F-14C-WINJ", specification: "CD-ROM" },
      { item: "RT ToolBox3 mini", model: "3F-15C-WINJ", specification: "CD-ROM" },
      { item: "RT ToolBox3 Pro", model: "3F-16D-WINJ", specification: "DVD-ROM" },
    ],
    links: [
      // "https://www.youtube.com/embed/u6KsQ8_4qq8",
      "https://www.youtube.com/embed/DB0d2-rRqvg",
      "-gaWS_K-UsM"
    ],
    document: [
      <a
        href="/assets/pdf/sacara.pdf"
        target="_blank"
        rel="noopener noreferrer"
        key="linkfms"
      >
        Scara Robot
      </a>,
    ],
  },

  cobot: {
    title: "Cobot",
    image: ["/assets/cobot1.png", "/assets/cobot2.png", "/assets/cobot3.png"],
    description: "SVR Robotics' Collaborative Robots (Cobots) are designed to enhance productivity, efficiency, and safety in industrial and commercial settings. Our cobots work seamlessly alongside human operators, offering precision, flexibility, and ease of integration into existing workflows. Payload from 3 kg to 20 Kg",
    features: [
      "Intelligent Human-Robot Collaboration",
      "Advanced Safety Mechanisms & Collision Detection",
      "Easy Programming & Quick Deployment",
      "High Precision & Adaptability",
      "Cost-Effective Automation",
    ],
    specifications: [
      { Controller: "CR80005VD" },
      { Joints: "6" },
      { Speed: "1000mm/s" },
      { Motors: "AC Servo Motor" },
      { Reach: "910mm" },
      { Payload: "5kg" },
      {
        "Additional features": "Touch screen control panel with LED display on the robot arm indicating the status.",
      },
    ],
    links: [
      "https://www.youtube.com/embed/B-cYIgA6h0A",
      "https://www.youtube.com/embed/EKKl8dVKLjg",
    ],
    document: [],
  },

  articulatedrobot: {
    title: "Articulated Robot",
    image: [
      "/assets/articulated1.png",
      "/assets/articulated2.png",
      "/assets/articulated3 painting.png",
    ],
    description:
      "At SVR Robotics, our articulated robots are designed for a wide range of applications, including precision assembly, welding, material handling, and machine tending. These versatile robots offer high flexibility and accuracy, making them ideal for improving productivity and efficiency in manufacturing processes across various industries.",
    features: [
      "Optimized arm length for broader movement, complex assembly, and operations.",
      "Can withstand harsh environmental conditions.",
      "Can be used for various industrial applications.",
      "Variable payload from 3kg to 80kg.",
      "Maximum reach: 504mm to 2100mm.",
      "Industrial grade robot for low payload and high speed.",
      "User-friendly software for program Robotics Programming.",
      "Comes with a Robot + Teach pendent + Controller + Industrial grade cell.",
    ],
    specifications: [
      { type: "Environmental specifications", unit: "", rv8crl: "Oil mist" },
      { type: "Protection level", unit: "", rv8crl: "IP65" },
      {
        type: "Installation position",
        unit: "",
        rv8crl: "On floor, suspended (wall mounted*)",
      },
      { type: "Structure", unit: "", rv8crl: "Vertical articulated" },
      { type: "Freedom of motion", unit: "", rv8crl: "6" },
      { type: "Drive system", unit: "", rv8crl: "AC servomotor" },
      {
        type: "Position detection system",
        unit: "",
        rv8crl: "Absolute encoder",
      },
      { type: "Load capacity", unit: "kg", rv8crl: "Rating 7 | Maximum 8" },
      { type: "Arm length", unit: "mm", rv8crl: "450 + 470" },
      { type: "Maximum reach radius", unit: "mm", rv8crl: "931" },
      { type: "Installation pitch", unit: "mm", rv8crl: "Ø160" },

      // Operating range
      { type: "Operating range", unit: "J1", rv8crl: "±170" },
      // { type: "", unit: "J2", rv8crl: "±110" },
      // { type: "", unit: "J3", rv8crl: "+0 ~ +165" },
      // { type: "", unit: "J4", rv8crl: "±200" },
      // { type: "", unit: "J5", rv8crl: "±120" },
      // { type: "", unit: "J6", rv8crl: "±360" },

      // Maximum speed
      { type: "Maximum speed", unit: "J1", rv8crl: "288" },
      // { type: "", unit: "J2", rv8crl: "321" },
      // { type: "", unit: "J3", rv8crl: "360" },
      // { type: "", unit: "J4", rv8crl: "337" },
      // { type: "", unit: "J5", rv8crl: "450" },
      // { type: "", unit: "J6", rv8crl: "720" },

      { type: "Maximum composite speed", unit: "mm/sec", rv8crl: "10,500" },
      { type: "Ambient temperature", unit: "°C", rv8crl: "0 to 40" },
      { type: "Mass", unit: "kg", rv8crl: "41" },

      // Tolerable moment
      { type: "Tolerable moment", unit: "J4", rv8crl: "16.2 Nm" },
      // { type: "", unit: "J5", rv8crl: "16.2 Nm" },
      // { type: "", unit: "J6", rv8crl: "6.86 Nm" },

      // Tolerable amount of inertia
      {
        type: "Tolerable amount of inertia",
        unit: "J4",
        rv8crl: "0.45 Kgm2",
      },
      // { type: "", unit: "J5", rv8crl: "0.45 Kgm2" },
      // { type: "", unit: "J6", rv8crl: "0.1 Kgm2" },

      { type: "Tool wiring", unit: "", rv8crl: "15-pin D-SUB" },
      { type: "Tool pneumatic pipes", unit: "", rv8crl: "φ6×2" },
      { type: "Machine cable", unit: "", rv8crl: "5 m" },
      { type: "Connected controller", unit: "", rv8crl: "CR800-D" },
    ],
    links: [
      "https://www.youtube.com/embed/u6KsQ8_4qq8?si=nqjsc9-ooQyu4dPE",
      "https://www.youtube.com/embed/SKt_GKdcLs8",
    ],
    document: [
      <a
        href="/assets/pdf/Mitsubishi.pdf"
        target="_blank"
        rel="noopener noreferrer"
        key="link1"
      >
        Mitsubishi PDF
      </a>,
    ],
  },

  cartesianrobot: {
    title: "Cartesian Robot",
    image: ["/assets/cartision1.png"],
    description:
      "SVR Robotics leverages Cartesian Robots for diverse applications such as pick-and-place tasks, assembly operations, and material handling, ensuring flexibility across various industries.",
    features: [
      "Precision and Accuracy: Integrated with high-resolution encoders for precise position feedback.",
      "Custom Automation Solutions: Tailored to meet specific client requirements, optimizing workflows and improving efficiency.",
      "Advanced PLC Integration: Ensures seamless control and coordination of complex tasks.",
      "Enhanced Reliability: Robust PLC systems and precise encoders ensure consistent performance, reducing downtime and maintenance costs.",
    ],
    specifications: [
      // { key1: "value1" },
      // { key2: "value2" },
    ],
    links: ["https://www.youtube.com/embed/EdPknsBNcBc"],
    document: [],
  },
  fms: {
    title: "Flexible Manufacturing System",
    image: ["/assets/fms1.png", "/assets/fms2.png", "/assets/fms3.png"],
    description:
      "A Flexible Manufacturing System / Modular Manufacturing System offers a complete production process of material feeding, integrated manufacturing like drilling, inspection, sorting based on drilling and depth inspection, cartesian robotic configuration, sorting based on metal / non-metal& colour. FMS is ideally developed to teach PLC programming, visualization, commissioning and troubleshooting of automated industrial Mechatronics systems to students.SVR FMS offers a safe environment for students to explore modern Industrial Automation. Students learn to visualize the real-time working of the various gripping by suction cup, pneumatic gripper, magnetic Gripper, etc, integration of Conveyor with PLC, rotary table with various application like drilling & inspection, pneumatic actuator, solenoid valve, PLC, VFD, AC Induction Motor, HMI, Vacuum Ejector, Compressor, Sensor, and the other components used.",
    features: [
      "AI-based modular manufacturing system controlled by a single Siemens PLC.",
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
    specifications: [
      // { key1: "value1" },
      // { key2: "value2" },
    ],
    links: [
      "https://www.youtube.com/embed/RZo9vqnbrs8?si=4cB5HxWkmcvf8YjY",

      // "public/assets/fms.mp4",
    ],
    document: [
      <a
        href="/assets/pdf/FMS.pdf"
        target="_blank"
        rel="noopener noreferrer"
        key="linkfms"
      >
        FMS PDF
      </a>,
    ],
  },
  electrohyrdaulic: {
    title: "IoT, PLC, Manual Based Electro-Hydraulic System",
    image: ["/assets/hydraulic1.png", "/assets/hydraulic2.png", "/assets/hydraulic3.png"],
    description:
      "An Electro-Hydraulic System designed for experiments like single/double-acting cylinder, regenerative circuit, pump unloading circuit, cylinder sequencing/reciprocating circuit, cylinder locking circuit, and cylinder synchronization. The system supports manual, PLC-based, and IoT-based operations. It includes components from Festo, Genetic, and Bash.",
    features: ["Electro-Hydraulic System with manual", "PLC-based", "IoT-based operations."],
    specifications: [
      // { key1: "value1" },
      // { key2: "value2" },
    ],
    links: [],
    document: [],
  },
  electropneumatic: {
    title: "IoT, PLC, Manual Based Electro-Pneumatic System",
    image: ["/assets/pneumatic1.png", "/assets/pneumatic2.png", "/assets/pneumatic3.png"],
    description:
      "An Electro-Pneumatic System with manual, PLC-based, and IoT-based operations. Experiments include direct cylinder actuation, use of 5/3 valve as a memory valve, two-cylinder coordinated motion control, sequential motion control, and pressure circuits. Components are mounted on an industrial-grade panel for rigidity, featuring parts from Festo and Genetic.",
    features: ["Electro-Pneumatic System with manual", "PLC-based", "IoT-based operations."],
    specifications: [
      // { key1: "value1" },
      // { key2: "value2" },
    ],
    links: [],
    document: [],
  },
  bottlefillingplant: {
    title: "Bottle Filling Plant ",
    image: ["/assets/bottolefiling1.png"],
    description:
      "An IoT-enabled bottle filling plant with SCADA integration for water usage monitoring, PLC-based controllers for precise operation, and scalable production. Features include a user-friendly interface, quality control mechanisms, energy-efficient components, and robust construction for industrial environments.",
    features: ["IoT-enabled bottle filling plant", "SCADA integration for water usage monitoring", "PLC-based controllers for precise operation", "Scalable production."],
    specifications: [
      // { key1: "value1" },
      // { key2: "value2" },
    ],
    links: ["https://www.youtube.com/embed/7oPB8tAgJWY?si=dU5pYake9apSVSif"],
    document: [],
  },
  stewart: {
    title: "Stewart Platform",
    image: ["/assets/22.png", "/assets/23.png"],
    description:
      "At SVR, our Stewart platform, known as a hexapod, is a type of parallel manipulator composed of six actuators connected to a fixed base and a movable platform. It is designed to provide precise control of the platform's position and orientation in three-dimensional space. Each actuator in the Stewart platform adjusts the length of its corresponding leg, allowing the platform to perform complex movements like translation and rotation.",
    features: [
      "Workspace (Range of Motion): Defines the area or volume within which the platform can move.",
      "Payload Capacity: Supports and moves a maximum weight efficiently.",
      "Accuracy: Maintains precise positioning and orientation during operation.",
      "Actuator Speed and Response Time: Ensures fast movement and high system responsiveness.",
      "Stiffness and Stability: Provides resistance to deformation and maintains steady motion."
    ],
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
    specifications: [
      // { key1: "value1" },
      // { key2: "value2" },
    ],
    links: [],
    document: [],
  },
  suctioncupgripper: {
    title: "Suction Cup Gripper",
    image: ["/assets/suctioncup.jpg", "/assets/suctioncup1.png"],
    description: "Suction cup Gripper is a type of end effector that uses suction to grip and lift objects. It is commonly used in robotic applications for handling delicate or irregularly shaped objects. The suction cup gripper is designed to provide a secure grip on a wide range of surfaces, including glass, plastic, and metal. It is ideal for applications that require precise positioning and gentle handling of objects.",
    features: [
      "Optimum adaptation and sealing even with curved workpieces and very good damping effect during placement on the workpiece",
      "Connection nipple vulcanized to elastomer part",
      "Round bellows suction cup with 1.5 folds for dynamic handling of metal sheets, steel sheets, and aluminum sheets",
      "Suitable for use in, for example, feeder systems for press lines in the automotive industry",
    ],
    specifications: [
      { Diameter: " 22 to 125 mm" },
      { Material: "NBR" },
      { Payload: "500gm" },
    ],
  },
  sensorizedgripper: {
    title: "Sensorized Gripper",
    image: ["/assets/sensorisedgrip1.png"],
    description: "Sensorized Gripper is a type of robotic gripper that is equipped with sensors to provide feedback on the gripping process. These sensors can detect the presence of an object, measure the force applied during gripping, and monitor the position of the gripper jaws. Sensorized grippers are used in a wide range of robotic applications, including pick-and-place operations, assembly tasks, and material handling.",
    features: [
      "Payload -2kg, Actuation-Electrical",
      "Sensors integrated- Infrared sensor, Strain gauge, Load cell, Flexi-force sensor.",
      "These sensors help for detection of gripping object, load applied on the object, strain on gripper jaws etc.",
    ],
  },
  magneticgripper: {
    title: "Magnetic Gripper",
    image: ["/assets/magneticgripper.jpg"],
    description: "Magnetic Gripper is a type of end effector that uses a permanent magnet to grip and lift ferromagnetic objects. It is commonly used in robotic applications for handling metal sheets, laser-cut workpieces, and other ferromagnetic materials. The magnetic gripper is designed to provide a secure grip on the workpiece without the need for a voltage source, making it ideal for applications that require safe and reliable handling of metal parts.",
    features: [
      "Pneumatically Operated Gripper",
      "Permanent magnet allows safe handling without voltage source",
      "Universal applications",
      "Handling of ferromagnetic workpieces",
      "Handling of Metal Sheets",
      "Handling of Laser-cut workpieces",
    ],
  },
  gripperlab: {
    title: "Gripper Lab",
    image: ["/assets/gripperlab img.png",],
    description: "The Gripper Lab is a versatile robotic gripper designed for a wide range of applications. It is equipped with a servo motor for enhanced accuracy and quick response, making it ideal for precision tasks. The gripper features a payload capacity of 5 kg, with additional options available for 1.2 kg and 10 kg payloads to suit specific requirements. The parallel and curvilinear gripper jaws are easily detachable, ensuring quick adaptability to various tasks. Utilizing spur gears for better drive, the gripper requires no lubrication, reducing maintenance needs. Its mountable design and optional overhead camera integration further enhance its functionality. With Ethernet/IP, CANopen, and EtherCAT connectivity, and customizable feedback options for force and position sensing, it offers seamless integration into existing systems. The gripper is capable of 60 cycles per minute with a maximum stroke of 70 mm and a gripping force of 180 N, making it highly efficient for demanding operations. Designed to operate in temperatures ranging from 0°C to 40°C, it is also customizable for specific environmental conditions. Compact and lightweight at 3.3 kg, the Gripper Lab is the perfect combination of precision, reliability, and cost-effectiveness.",
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
  },
  graboparallel: {
    title: "Svr Grabo 1.2 & 5 (Parallel Jaw) ",
    image: [
      "/assets/paralleljaw1.png",
      "/assets/paralleljaw2.png",
      "/assets/paralleljaw3.png",
    ],
    description:
      "The Svr Grabo 1.2 & 5 (Parallel Jaw) is a high-performance robotic gripper designed for precision and versatility. Built with high-quality materials, this gripper is equipped with a servo motor for enhanced accuracy and quick response, making it ideal for a wide range of applications. It features a payload capacity of 5 kg, with additional options available for 1.2 kg and 10 kg payloads to suit specific requirements. The parallel and curvilinear gripper jaws are easily detachable, ensuring quick adaptability to various tasks. Utilizing spur gears for better drive, the gripper requires no lubrication, reducing maintenance needs. Its mountable design and optional overhead camera integration further enhance its functionality. With Ethernet/IP, CANopen, and EtherCAT connectivity, and customizable feedback options for force and position sensing, it offers seamless integration into existing systems. The gripper is capable of 60 cycles per minute with a maximum stroke of 70 mm and a gripping force of 180 N, making it highly efficient for demanding operations. Designed to operate in temperatures ranging from 0°C to 40°C, it is also customizable for specific environmental conditions. Compact and lightweight at 3.3 kg, the Svr Grabo is the perfect combination of precision, reliability, and cost-effectiveness.",
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
      "Precision integrated actuator",
    ],
    specifications: [
      { Payload: "5 kg" },
      { "Maximum Stroke": "70 mm" },
      { "Maximum Gripping force": "180 N" },
      { "Maximum Cycle count": "60 cycles/min" },
      { "Minimum Cycle Time": "1 sec" },
      { "Maximum Cable Length": "5 m" },
      { "Gripper Mass": "3.30 kg" },
      { "Opetaring Temperature": "0°C to 40°C (customization available)" },
      { Connectivity: "Ethernet/IP, CANopen, EtherCAT" },
      { Feedback: "Force sensing, Position sensing" },
    ],
  },
  grabocurvilinear: {
    title: "Svr Grabo 1.2 & 5 (Curvilinear Jaw)",
    image: ["/assets/curvegrip1.png", "/assets/curvegrip2.png"],
    description: "The Svr Grabo 1.2 & 5 (Curvilinear Jaw) is a high-performance robotic gripper designed for precision and versatility. Built with high-quality materials, this gripper is equipped with a servo motor for enhanced accuracy and quick response, making it ideal for a wide range of applications. It features a payload capacity of 5 kg, with additional options available for 1.2 kg and 10 kg payloads to suit specific requirements. The parallel and curvilinear gripper jaws are easily detachable, ensuring quick adaptability to various tasks. Utilizing spur gears for better drive, the gripper requires no lubrication, reducing maintenance needs. Its mountable design and optional overhead camera integration further enhance its functionality. With Ethernet/IP, CANopen, and EtherCAT connectivity, and customizable feedback options for force and position sensing, it offers seamless integration into existing systems. The gripper is capable of 60 cycles per minute with a maximum stroke of 70 mm and a gripping force of 180 N, making it highly efficient for demanding operations. Designed to operate in temperatures ranging from 0°C to 40°C, it is also customizable for specific environmental conditions. Compact and lightweight at 3.3 kg, the Svr Grabo is the perfect combination of precision, reliability, and cost-effectiveness.",
    features: ["Grabo(Curvilinear Jaw)", "High-performance robotic gripper", "Precision and versatility", "High-quality materials", "Servo motor for enhanced accuracy", "Quick response", "Utilizing spur gears for better drive", "No lubrication required", "Mountable design", "Optional overhead camera integration", "Ethernet/IP, CANopen, and EtherCAT connectivity", "Customizable feedback options for force and position sensing", "Seamless integration into existing systems", "Highly efficient for demanding operations", "Operate in temperatures ranging from 0°C to 40°C", "Customizable for specific environmental conditions", "Perfect combination of precision, reliability, and cost-effectiveness"],
  },
  pneumatic2and3jawgripper: {
    title: "Pneumatic 2 & 3 Jaw Gripper",
    image: ["/assets/2jawgrip1.png", "/assets/2jawgrip2.png"],
    description: "The Pneumatic 2 & 3 Jaw Gripper is a versatile robotic gripper designed for a wide range of applications. It is equipped with a servo motor for enhanced accuracy and quick response, making it ideal for precision tasks. The gripper features a payload capacity of 5 kg, with additional options available for 1.2 kg and 10 kg payloads to suit specific requirements. The parallel and curvilinear gripper jaws are easily detachable, ensuring quick adaptability to various tasks. Utilizing spur gears for better drive, the gripper requires no lubrication, reducing maintenance needs. Its mountable design and optional overhead camera integration further enhance its functionality. With Ethernet/IP, CANopen, and EtherCAT connectivity, and customizable feedback options for force and position sensing, it offers seamless integration into existing systems. The gripper is capable of 60 cycles per minute with a maximum stroke of 70 mm and a gripping force of 180 N, making it highly efficient for demanding operations. Designed to operate in temperatures ranging from 0°C to 40°C, it is also customizable for specific environmental conditions. Compact and lightweight at 3.3 kg, the Pneumatic 2 & 3 Jaw Gripper is the perfect combination of precision, reliability, and cost-effectiveness.",
    features: ["Pneumatic 2 & 3 Jaw Gripper", "Versatile robotic gripper", "Wide range of applications", "Servo motor for enhanced accuracy", "Quick response", "Parallel and curvilinear gripper jaws", "Easily detachable jaws", "Quick adaptability to various tasks", "Utilizing spur gears for better drive", "No lubrication required", "Mountable design", "Optional overhead camera integration", "Ethernet/IP, CANopen, and EtherCAT connectivity", "Customizable feedback options for force and position sensing", "Seamless integration into existing systems", "Highly efficient for demanding operations", "Operate in temperatures ranging from 0°C to 40°C", "Customizable for specific environmental conditions", "Perfect combination of precision, reliability, and cost-effectiveness"],
    links: ["https://www.youtube.com/embed/kguICn6t4Zg?si=4b2HjWMip7YkXYd2"],
  },
  vfdkit: {
    title: "VFD Kit",
    image: ["/assets/VFD KIT.jpg"],
    description:
      "The VFD kit controls motor speed and direction with additional features like running the motor on time and controlling it in auto or manual modes.",
    features: [
      "Siemens 0.25 Hp 3-phase AC induction motor",
      "Siemens/Mitsubishi VFD",
      "Motor speed increase/decrease functionality",
      "Forward/reverse direction functionality",
      "Motor run on time basis",
      "Auto and Manual Mode control",
      "Aluminium extrusion frame with safety electrical components like MCB",
      "Banana sockets input/output to PLC, 24V supply, LED indicators, Start/Stop switch",
    ],
    links: ["https://www.youtube.com/embed/rNerj6jG4H8?si=EOrCSsuh1LZW2xz4", "KXyohWnMRrQ"],
  },
  elevatorsimulationkit: {
    title: "Elevator Simulation Kit",
    image: ["/assets/elevator1.png", "/assets/elevatosimkit1.png"],
    description:
      "A realistic elevator demonstration model with PLC integration for automation and monitoring. It includes motor control study for smooth acceleration and deceleration, load handling, and variable speed operations. The interactive control panel enhances the understanding of elevator mechanics and controls.A 3-floor elevator simulation with a stepper motor-driven cabin, proximity sensor for position detection, and MS frame for housing the setup.",
    features: [
      "3-floor, 750mm tall elevator setup",
      "Stepper motor-driven elevator cabin with balance weight",
      "Nema 17, 45KgCm geared stepper motor with digital microstepping driver",
      "Proximity inductive sensor to detect position",
      "MS frame for cabin and staircase housing",
      "Powder-coated MS frame with acrylic control board",
      "Banana sockets input/output to PLC, 24V supply, LED indicators, Start/Stop switch",
    ],
    links: ["https://www.youtube.com/embed/B5WV7xeEdD8", "dE31j33eO8Y"],
  },
  steppermotorcontrolkit: {
    title: "Stepper Motor Speed and Direction Control Kit",
    image: ["/assets/Stepper Motor Speed & Direction Control.jpg"],
    description:
      "This system controls the speed and direction of a stepper motor, with time-based control and position detection.",
    features: [
      "Nema 17, 45KgCm geared stepper motor with digital microstepping driver",
      "Motor speed increase/decrease functionality",
      "Motor forward/reverse direction functionality",
      "Motor run on time basis",
      "Proximity inductive sensor to detect position",
      "Powder-coated MS frame with acrylic control board",
      "Banana sockets input/output to PLC, 24V supply, LED indicators, Start/Stop switch",
    ],
    links: ["https://www.youtube.com/embed/rNerj6jG4H8"],
  },
  waterlevelcontrolkit: {
    title: "Water Level Control Kit",
    image: ["/assets/waterlvlcontrol1.png"],
    description:
      "Water level control kit with float sensors for detecting water levels, a 12V DC water pump, and an acrylic control board.",
    features: [
      "Stainless steel lower and upper 3-litre water tanks",
      "Two float sensors with three level indication",
      "12V DC water pump with a force of 0.48MPa",
      "Powder-coated MS frame with acrylic control board",
      "Banana sockets input/output to PLC, 24V supply, LED indicators, Start/Stop switch",
    ],
    links: ["https://www.youtube.com/embed/rNerj6jG4H8"]
  },
  conveyorkit: {
    title: "Conveyor Kit",
    image: ["/assets/conveyorkit1.png"],
    description:
      "A stepper-driven belt conveyor system with speed and direction control, housed in a powder-coated MS frame with an acrylic control board.",
    features: [
      "300mm*50mm stepper-driven belt conveyor",
      "Nema 17, 45KgCm geared stepper motor with digital microstepping driver",
      "Conveyor speed increase/decrease functionality",
      "Conveyor forward/reverse direction functionality",
      "Conveyor run on time basis",
      "Powder-coated MS frame with acrylic control board",
      "Banana sockets input/output to PLC, 24V supply, LED indicators, Start/Stop switch",
    ],
    links: ["https://www.youtube.com/embed/rNerj6jG4H8?si=EOrCSsuh1LZW2xz4"],
  },
  stardeltakit: {
    title: "Star Delta Kit",
    image: [, "/assets/stardelta1.png"],
    description:
      "A star-delta starter with functionality to switch between star and delta connections on a time basis, and MS powder-coated frame with an acrylic control board.",
    features: [
      "Siemens air break contactor for actual demonstration",
      "Functionality to operate star/delta connection",
      "Functionality to switch from star to delta or vice versa on time basis",
      "Powder-coated MS frame with acrylic control board",
      "Banana sockets input/output to PLC, 24V supply, LED indicators, Start/Stop switch",
    ],
    links: ["https://www.youtube.com/embed/rNerj6jG4H8"],
  },
  temperaturecontrolkit: {
    title: "Temperature Control Kit",
    image: ["/assets/tempcontrol1.png",],
    description:
      "A temperature control kit with a 3-litre water tank, float sensor, and 1000W AC water heater, all housed in a powder-coated MS frame with an acrylic control board.",
    features: [
      "Stainless steel 3-litre water tank",
      "Float sensor with three-level indication",
      "1000W 230V AC water heater",
      "Powder-coated MS frame with acrylic control board",
      "Banana sockets input/output to PLC, 24V supply, LED indicators, Start/Stop switch",
    ],
    links: ["https://www.youtube.com/embed/rNerj6jG4H8?si=EOrCSsuh1LZW2xz4"],
  },
  mazesolvingrobot: {
    title: "Maze Solving Robot",
    image: ["/assets/mazesolving1.png", "/assets/mazesolving2.png", "/assets/mazesolving3.png"],
    description:
      "The Maze Solving Robot is an autonomous robot designed to navigate and solve complex mazes using advanced algorithms. It utilizes infrared sensors to detect walls and obstacles, and applies path-finding algorithms such as depth-first or breadth-first search to efficiently reach the exit. Ideal for robotics enthusiasts, this kit provides hands-on experience in autonomous navigation and algorithm implementation.",
    features: [
      "Autonomous maze navigation",
      "Path-finding algorithm implementation",
      "Infrared sensors for wall detection",
      "Geared DC motors for precise movement",
      "Rechargeable battery with long run-time"
    ],
    specifications: [
      { Length: "180mm" },
      { Width: "200mm" },
      { Height: "150mm" },
      { Battery_Life: "5 hrs" },
      { Controller: "Arduino Nano" },
      { "Motor Driver": "L298N Dual H-Bridge" },
      { Chassis: "Acrylic or Aluminum" },
      { "Cable and Connectors": "Jumper Wires" }
    ],
    links: ["VW8L1-LGGOY"],
  },

  linefollowingrobot: {
    title: "Line Following Robot",
    image: ["/assets/linefollowing1.png", "/assets/linefollowing2.png", "/assets/linefollowing3.png"],
    description:
      "Line Follower Robot uses Arduino Nano development board. The robot finds the path in the Line and follows the same. The system uses Infrared sensors to detect the path and ultrasonic sensors for obstacle avoidance, controlled by a C-programmed microcontroller. The same drives the geared DC motor. This kit offers thorough knowledge about the functioning and interfacing of IR sensors, DC motors, and ultrasonic sensors, helping users develop programming logic using if-else functions.",
    features: [
      "Infrared sensors for line detection",
      "Ultrasonic sensors for obstacle avoidance",
      "Arduino Nano for control",
      "Precise movement with geared DC motors",
      "Perfect for beginners in robotics"
    ],
    specifications: [
      { Length: "200mm" },
      { Width: "220mm" },
      { Height: "120mm" },
      { Battery_Life: "4 hrs" },
      { Controller: "Arduino Nano" },
      { "Motor Driver": "L298N Dual H-Bridge" },
      { Chassis: "Acrylic or Plastic" },
      { "Cable and Connectors": "Jumper Wires" }
    ],
  },

  selfbalancingrobot: {
    title: "Self-balancing Robot",
    image: [
      "/assets/selfbalance1.png",
      "/assets/selfbalance2.png",
      "/assets/selfbalance3.png",
      "/assets/selfbalance4.png",
    ],
    description:
      "Two-wheeled self-balancing robot, based on an inverted pendulum system, dynamically stable but statically unstable. The robot uses physics and control theories to maintain balance. It uses an Inertial Measurement Unit (IMU) combining accelerometer and gyroscope sensors to detect tilt. A PID controller adjusts the DC motor speed to balance the robot effectively.",
    features: [
      "Inverted pendulum design",
      "PID controller for stability",
      "IMU with accelerometer and gyroscope",
      "Precise balancing with DC motors",
      "Compact and efficient design"
    ],
    specifications: [
      { Length: "160mm" },
      { Width: "64mm" },
      { Height: "147mm" },
      {
        "Battery Life": "4 hrs (11.2 V, 2200 mAh battery)"
      },
      { Controller: "Arduino UNO" },
      { "Motor Driver": "L298N Dual H-Bridge" },
      { Chassis: "Metal or Plastic" },
      { "Cable and Connectors": "Jumper Wires" }
    ],
  },

  digitaldicekit: {
    title: "Digital Dice Kit",
    image: ["/assets/digitaldice1.png", "/assets/digitaldice2.png"],
    description:
      "An electronic kit that simulates the rolling of dice, typically using LEDs and a random number generator. It is powered by an Arduino UNO and uses a push button to trigger the dice roll. The result is displayed on a seven-segment display.",
    features: [
      "Random number generation for dice simulation",
      "LEDs and seven-segment display",
      "Simple push-button control",
      "Perfect for learning Arduino programming",
      "Compact and easy to assemble"
    ],
    specifications: [
      { Microcontroller: "Arduino UNO" },
      { Button: "Push Button" },
      { "Connecting Wires": "Jumper Cables" },
      { Breadboard: "Standard size" },
      { Resistor: "1k ohm" },
      { "Power Supply": "5V USB or Battery" },
      { "Seven Segment Display": "Common Cathode" }
    ],
    document: [],
  },

  temperaturecontrolledfankit: {
    title: "Temperature Controlled Fan Kit",
    image: ["/assets/temcontrolledfan1.png", "/assets/tempcontrolledfan2.png"],
    description:
      "This kit uses a temperature sensor LM35 with an Arduino kit to control a fan speed based on the detected temperature. The temperature sensor sends analog signals to the Arduino, which controls the DC fan speed using PWM (Pulse Width Modulation). Ideal for learning analog-to-digital conversion, PWM, and temperature sensing applications.",
    features: [
      "Temperature-based automatic fan control",
      "LM35 temperature sensor",
      "PWM for speed regulation",
      "Ideal for home automation projects",
      "Easy assembly and programming"
    ],
    specifications: [
      { Microcontroller: "Arduino UNO" },
      { "Temperature Sensor": "LM35" },
      { "Connecting Wires": "Jumper Cables" },
      { Resistor: "1k ohm" },
      { Diode: "1N4007" },
      { Motor: "DC motor or DC Fan" },
      { Transistor: "NPN transistor BC547" },
      { Voltage: "12V" }
    ],
  },

  objectcounter: {
    title: "Object Counter Kit",
    image: ["/assets/object counter.png"],
    description:
      "Object counters or product counters are essential in industries, shopping malls, etc., for automatic counting of objects or products, reducing manual effort. This kit uses IR sensors to detect objects and a microcontroller to keep track of the count, displaying it on a digital display.",
    features: [
      "IR-based object detection",
      "Automatic counting mechanism",
      "High precision and reliability",
      "Unbreakable acrylic body",
      "Good quality high torque motors",
      "Plastic timing pulleys with aluminum inserts",
      "Adjustable object travel distance"
    ],
    specifications: [
      { Length: "300mm" },
      { Width: "150mm" },
      { Height: "180mm" },
      { Power: "12V DC" },
      { Controller: "Arduino or ATmega328" }
    ],
    // links: ["https://youtube.com/shorts/KhzE5Ym6ddY?feature=share"],
    links: ["KhzE5Ym6ddY"],
  },

  knight: {
    title: "Bipedal 4.0 DoF, 8.0 DoF, 10.0 DoF",
    image: ["/assets/bipedal1.png"],
    description:
      "The Bipedal Robot Knight is a humanoid robot with multiple degrees of freedom (DoF), enabling realistic walking and balancing movements. It uses servo motors for joint articulation, and the control is managed by an Arduino or similar microcontroller. The robot can perform walking, turning, and balancing actions, making it an ideal platform for robotics enthusiasts and researchers.",
    features: [
      "Multi-DoF humanoid robot",
      "Realistic walking and balancing",
      "Servo motor-driven joints",
      "Programmable movements",
      "Ideal for robotics research"
    ],
    specifications: [
      { Height: "400mm" },
      { Weight: "2kg" },
      { "Power Supply": "12V Li-ion Battery" },
      { Controller: "Arduino Mega" },
      { Motors: "High-torque Servo Motors" }
    ],
    links: ["Q7NZajPzQAI", "tgqdQ97H4kE"],
  }
  ,
  roboanalyzer: {
    title: "RoboAnalyzer(A product by IIT Delhi)",
    image: ["/assets/roboanalyzer1.png", "/assets/robo soft.jpg", "/assets/roboanalyzer2.png", "/assets/roboanalyzer3.png", "/assets/roboanalyzer4.png"],
    description: [
      "Robotics is a subject that deals with the design, analysis, fabrication, and usage of robots for various automated and semi-automated tasks. ",
      "The concepts taught in a typical robotics course are generally difficult to perceive just by looking at textbook figures. Hence, a need for simulation software for teaching and learning robotics is of prime importance.",
      " RoboAnalyzer® is a 3D model-based software that can be used to teach and learn robotics concepts. It is an product developed in Mechatronics Lab, Department of Mechanical Engineering at IIT Delhi, New Delhi, India.",
    ],
    features: [
      "Serial manipulator with prismatic and revolute joints",
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

    links: ["NdGLBToqS0U"],
  },
  mechanalyzer: {
    title: "MechAnalyzer(A product by IIT Delhi)",
    image: ["/assets/mech1.png", "/assets/mach1 soft.jpg", "/assets/mech3.png", "/assets/mech2.png", "/assets/mech4.png"],
    description:
      "A 3D model-based software developed for effective teaching and learning of mechanisms. It allows simulation and analysis of preloaded mechanisms to reduce setup time.",
    features: [
      "Simulation of around 10 mechanisms",
      "Forward kinematics",
      "Animation with coupler curve",
      "Plotting graphs",
      "Velocity and Acceleration diagrams of various mechanisms",
      "Displacement, Velocity and Acceleration diagrams of various CAM and Follower profiles",
      "Finding instantaneous center",
      "Static Force Analysis",
      "Gear Terminology",
      "Gear Simulation and Problems"
    ],
    systemRequirements: [
      "Processor: Atleast 1.5 GhZ",
      "RAM: Atleast 512 MB",
      "Operating Systems: Windows 10 and furthur",
      "Dependencies: Microsoft .Net Framework 2"

    ],
  },
  feast: {
    title: "FEAST",
    image: ["/assets/feast2.png", "/assets/feast Img.png", "/assets/feast1.png"],
    description:
      "FEAST (Finite Element Analysis of Structures) is a structural analysis software based on Finite Element Method. FEAST is ISRO’s structural analysis software based on finite element method realized by Structural Engineering Entity of Vikram Sarabhai Space Centre (VSSC)/Indian Space Research Organisation (ISRO).The software was primarily developed for solving ISRO’s launch vehicle and satellite structural engineering problems.",
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
  },
  rttoolboxsoftware: {
    title: "RT Tool box Software",
    image: ["/assets/Rt tool box image.png"],
    description: "RT ToolBox3 is a software package that provides a real-time simulation environment for modeling, simulation, and control of real-time systems. It is a powerful tool for developing and testing real-time control systems, signal processing algorithms, and communication protocols. RT ToolBox3 is designed to work with real-time hardware platforms, such as dSPACE, NI, and RT-LAB, to provide a seamless integration of simulation and hardware-in-the-loop testing. The software includes a wide range of tools and features for modeling, simulation, and analysis of real-time systems, including a graphical user interface, block diagram editor, signal processing toolbox, and communication toolbox.",
    features: [
      "Real-time simulation environment",
      "Modeling, simulation, and control of real-time systems",
      "Development and testing of real-time control systems",
      "Signal processing algorithms",
      "Communication protocols",
      "Integration with real-time hardware platforms",
      "Graphical user interface",
      "Block diagram editor",
      "Signal processing toolbox",
      "Communication toolbox",
    ],
  },
  // scada: {
  //   title: "SCADA",
  //   image: ["path1", "path2", "path3"],
  //   description: "description",
  //   features: ["feature 1", "feature2"],
  // },
  // sampledescriptionpage: {
  //   title: "Product_Name",
  //   image: ["path1", "path2", "path3"],
  // },
};

const SpecificProduct = () => {
  const { productId } = useParams(); // Get productId from URL
  const product = ProductInformation[productId];

  if (!product) {
    return (
      <div className="text-center text-red-500 text-xl mt-10">
        Product not found
      </div>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto p-5">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          {product.title}
        </h1>

        {/* Image Carousel */}
        <div className="flex justify-center flex-wrap gap-5 mb-10">
          {product.image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product ${index + 1}`}
              className="w-1/4 h-auto rounded-lg shadow-lg border border-gray-200 hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>

        {/* Description (can be string or array) */}
        {typeof product.description === "string" ? (
          <p className="text-lg font-semibold text-gray-700 leading-relaxed mb-10">
            {product.description}
          </p>
        ) : Array.isArray(product.description) ? (
          <div className="text-lg text-gray-700 leading-relaxed mb-10 space-y-4">
            {product.description.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
          </div>
        ) : null}

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-5">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-lg">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* System requirement */}
        {product.systemRequirements && product.systemRequirements.length > 0 && (
          <>
          <h1 className="text-2xl font-semibold text-gray-800 mb-5">System Requirements</h1>
            {product.systemRequirements.map((req, index) => (
              <div key={index}>
                {/* You can render something here, like: */}
                {req}
              </div>
            ))}
          </>
        )}



        {/* SPECIFICATIONS */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-5">
              Product Specifications
            </h2>

            {/* SCARA Robot => 3-column table: Item, Model, Specification */}
            {productId === "scararobot" ? (
              <table className="table-auto w-full border-collapse border border-gray-300 bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-6 py-3 text-left">
                      Item
                    </th>
                    <th className="border border-gray-300 px-6 py-3 text-left">
                      Model
                    </th>
                    <th className="border border-gray-300 px-6 py-3 text-left">
                      Specification
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.specifications.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-6 py-2 text-gray-700">
                        {row.item}
                      </td>
                      <td className="border border-gray-300 px-6 py-2 text-gray-700">
                        {row.model}
                      </td>
                      <td className="border border-gray-300 px-6 py-2 text-gray-700">
                        {row.specification}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : productId === "articulatedrobot" ? (
              // Articulated Robot => 3-column: Type, Unit, RV-8CRL
              <table className="table-auto w-full border-collapse border border-gray-300 bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-6 py-3 text-left">
                      Type
                    </th>
                    <th className="border border-gray-300 px-6 py-3 text-left">
                      Unit
                    </th>
                    <th className="border border-gray-300 px-6 py-3 text-left">
                      RV-8CRL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.specifications.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-6 py-2 text-gray-700">
                        {row.type}
                      </td>
                      <td className="border border-gray-300 px-6 py-2 text-gray-700">
                        {row.unit}
                      </td>
                      <td className="border border-gray-300 px-6 py-2 text-gray-700">
                        {row.rv8crl}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              // For everything else => normal 2-column approach
              <table className="table-auto w-full border-collapse border border-gray-300 bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-6 py-3 text-left">
                      Characteristics
                    </th>
                    <th className="border border-gray-300 px-6 py-3 text-left">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <React.Fragment key={index}>
                      {Object.entries(spec).map(([key, value]) => (
                        <tr key={key} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-6 py-2 text-gray-700 font-medium">
                            {key}
                          </td>
                          <td className="border border-gray-300 px-6 py-2 text-gray-700">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* Links (possibly videos) */}
        {product.links && product.links.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-5">
              Links
            </h2>
            {product.links.map((link, index) => {
              // If it's a YouTube embed link:
              if (link.includes("youtube.com/embed")) {
                return (
                  <iframe
                    key={index}
                    width="560"
                    height="315"
                    src={link}
                    title={`Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="inline m-4"
                  />
                );
              }

              // If the link ends with .mp4, render HTML5 video tag
              else if (link.endsWith(".mp4")) {
                return (
                  <video
                    key={index}
                    width="560"
                    height="315"
                    controls
                    className="inline m-4 border border-gray-300"
                  >
                    <source src={link} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                );
              }
              // Otherwise, render as a simple link
              else {
                return (
                  <iframe width="315" height="560"
                    src={`https://www.youtube.com/embed/${link}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="inline m-4 h-80"
                    allowfullscreen></iframe>
                );
              }
            })}
          </div>
        )}

        {/* Documents */}
        {product.document && product.document.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-5">
              Documents
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {product.document.map((doc, index) => (
                <li key={index} className="text-lg">
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SpecificProduct;
