import React, { useState } from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';

function Downloads() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openTutorialModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const openTutorialModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };
  const [isModalOpen3, setIsModalOpen3] = useState(false);

  const openTutorialModal3 = () => {
    setIsModalOpen3(true);
  };

  const closeModal3 = () => {
    setIsModalOpen3(false);
  };

  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 py-16 px-8">
        {/* Main Heading */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Downloads
        </h1>

        {/* Content Container */}
        <div className="flex flex-wrap justify-center gap-12">
          {/* FEAST Section */}
          <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-[45%]">
            <h2 className="text-3xl font-semibold text-black mb-6">FEAST</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="/assets/feast/FEAST-SMT_standard_2022.zip"
                  download="FEAST Software Setup"
                  className="flex items-center text-lg text-blue-500 hover:text-blue-700 transition"
                >
                  <i className="fa-solid fa-file-arrow-down mr-4 text-indigo-500"></i>
                  FEAST Software 2022 Setup
                </a>
              </li>
              <li>
                <a
                  href="/assets/feast/FEAST%20INSTALLATION%20GUIDE%20V1.0%20-%20FEAST%20server_v1.pdf"
                  download="FEAST Software installation guide"
                  className="flex items-center text-lg text-blue-500 hover:text-blue-700 transition"
                >
                  <i className="fa-solid fa-file-arrow-down mr-4 text-indigo-500"></i>
                  FEAST Software Installation Guide
                </a>
              </li>
              <li>
                <button
                  onClick={openTutorialModal}
                  className="flex items-center text-lg text-blue-500 hover:text-blue-700 transition"
                >
                  <i className="fa-solid fa-file-arrow-down mr-4 text-indigo-500"></i>
                  FEAST Tutorial Modules
                </button>
              </li>
              <li>
                <button
                  onClick={openTutorialModal2}
                  className="flex items-center text-lg text-blue-500 hover:text-blue-700 transition"
                >
                  <i className="fa-solid fa-file-arrow-down mr-4 text-indigo-500"></i>
                  Verification Manual
                </button>
              </li>
              <li>
                <button
                  onClick={openTutorialModal3}
                  className="flex items-center text-lg text-blue-500 hover:text-blue-700 transition"
                >
                  <i className="fa-solid fa-file-arrow-down mr-4 text-indigo-500"></i>
                  User Manual
                </button>
              </li>
            </ul>
          </div>

          {/* RoboAnalyzer Section */}
          <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-[45%]">
            <h2 className="text-3xl font-semibold text-black mb-6">RoboAnalyzer</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://docs.google.com/forms/d/1JYAYqv6V-pCIEXBQyPNAHDlhQMpkRqHvOv_KhAmKkCs/viewform?edit_requested=true"
                  download="RoboAnalyzer V9.0.1.zip"
                  className="flex items-center text-lg text-blue-500 hover:text-blue-700 transition"
                >
                  <i className="fa-solid fa-file-arrow-down mr-4 text-indigo-500"></i>
                  Robo Analyzer V9.0.1(Enquiry Google Form)
                </a>
                <div>
                  <h2 className='font-semibold'>Steps to get trial RoboAnalyzer License</h2>
                  <ul className='list-disc ml-4'>
                    <li>Fill the google form above with appropriate machine Id.</li>
                    <li>The license file will be sent to the mail id filled in the google form.</li>
                    <li>For any queries contact <a href="mailto:sanket@svrrobotics.com" className='text'>sanket@svrrobotics.com.</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="/assets/Roboanalyzer/RoboAnalyzer_9_0_20240312.zip"
                  download="RoboAnalyzer V9.0.1.zip"
                  className="flex items-center text-lg text-blue-500 hover:text-blue-700 transition"
                >
                  <i className="fa-solid fa-file-arrow-down mr-4 text-indigo-500"></i>
                  Robo Analyzer V9.0.1[54MB zip](Software Setup)
                </a>
                <p className='font-semibold'>Note: 600MB disk space required</p>

              </li>
              {/* <li>
                <a
                  href="https://forms.gle/tL1ceYsJ3feeqHJu9"
                  download="RoboAnalyzer V8.0.1.zip"
                  className="flex items-center text-lg text-blue-500 hover:text-blue-700 transition"
                >
                  <i className="fa-solid fa-file-arrow-down mr-4 text-indigo-500"></i>
                  Robo Analyzer V8.0.1
                </a>
              </li> */}

              <h2 className="text-2xl font-semibold text-black mt-8 mb-4">RoboAnalyzer based Online Competition 2024</h2>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/assets/pdf/ROC 2024 (1).pdf"
                    className="flex items-center text-lg text-blue-500 hover:text-blue-700 transition"
                  >
                    <i className="fa-solid fa-file-arrow-down mr-4 text-indigo-500"></i>
                    RoboAnalyzer based Online Competition (ROC-2024), July 01 - November 10, 2024
                  </a>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-black mt-8 mb-4">RoboAnalyzer based Online Competition 2023</h2>
              <li>
                <a
                  href="/assets/roboanalyzer/Report_ROC%202023.pdf"
                  download="Report_ROC 2023.pdf"
                  className="flex items-center text-lg text-blue-500 hover:text-blue-700 transition"
                >
                  <i className="fa-solid fa-file-arrow-down mr-4 text-indigo-500"></i>
                  RoboAnalyzer based Online Competition (ROC-2023), June 01 -
                  September 30, 2023
                </a>
              </li>
            </ul>

          </div>
        </div>

        {/* Floating PDF Viewer */}
        {/* <div
          className="fixed bottom-4 right-4 bg-white shadow-xl rounded-lg p-4 w-[300px] h-[400px] overflow-hidden"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-2">Automation Exposouth</h2>
          <iframe
            src="/assets/pdf/automationexpo.pdf"
            className="w-full h-full border-none"
            title="PDF Viewer"
          ></iframe>
        </div> */}
      </div>


      {/* Modal for FEAST Tutorials */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 md:w-1/2 max-h-[90vh] overflow-hidden">
            <h1 className="text-3xl text-center mb-4">
              <b>FEAST Tutorials</b>
            </h1>
            <ul className="accordion max-h-[70vh] overflow-y-auto">
              {/* List of Tutorials */}
              {[
                {
                  label: "TUTORIAL 01 - STATIC ANALYSIS OF A CANTILEVER BEAM",
                  link: "/assets/FEAST/FEAST%20TUTORIALS%202020/TUTORIAL%2001-%20STATIC%20ANALYSIS%20OF%20A%20CANTILEVER%20BEAM.pdf",
                },
                {
                  label: "TUTORIAL 02 - STATIC ANALYSIS OF A SIMPLY SUPPORTED BEAM",
                  link: "/assets/FEAST/FEAST%20TUTORIALS%202020/TUTORIAL%2002-%20STATIC%20ANALYSIS%20OF%20A%20SIMPLY%20SUPPORTED%20BEAM.pdf",
                },
                {
                  label: "TUTORIAL 03 - STATIC ANALYSIS OF A SIMPLY SUPPORTED BEAM WITH",
                  link: "/assets/FEAST/FEAST%20TUTORIALS%202020/TUTORIAL%2003-%20STATIC%20ANALYSIS%20OF%20A%20SIMPLY%20SUPPORTED%20BEAM%20WITH.pdf",
                },
                {
                  label: "TUTORIAL 04 - STATIC ANALYSIS OF A HANGING PLATE",
                  link: "/assets/FEAST/FEAST%20TUTORIALS%202020/TUTORIAL%2004-%20STATIC%20ANALYSIS%20OF%20A%20HANGING%20PLATE.pdf",
                },
                {
                  label: "TUTORIAL 05 - STATIC ANALYSIS OF A FIXED BEAM SUBJECTED TO AXIAL",
                  link: "/assets/FEAST/FEAST%20TUTORIALS%202020/TUTORIAL%2005-%20STATIC%20ANALYSIS%20OF%20A%20FIXED%20BEAM%20SUBJECTED%20TO%20AXIAL.pdf",
                },
                {
                  label: "TUTORIAL 06 - STATIC ANALYSIS OF A SIMPLY SUPPORTED BEAM WITH VARYING LOADS",
                  link: "/assets/FEAST/FEAST%20TUTORIALS%202020/TUTORIAL%2006-%20STATIC%20ANALYSIS%20OF%20A%20SIMPLY%20SUPPORTED%20BEAM%20WITH%20VARYING%20LOADS.pdf",
                },
                {
                  label: "TUTORIAL 07 - STATIC ANALYSIS OF A SPRING SYSTEM",
                  link: "/assets/FEAST/FEAST%20TUTORIALS%202020/TUTORIAL%2007-%20STATIC%20ANALYSIS%20OF%20A%20SPRING%20SYSTEM.pdf",
                },
                {
                  label: "TUTORIAL 08 - STATIC ANALYSIS OF PLANAR TRUSS",
                  link: "/assets/FEAST/FEAST%20TUTORIALS%202020/TUTORIAL%2008-%20STATIC%20ANALYSIS%20OF%20PLANAR%20TRUSS.pdf",
                },
                {
                  label: "TUTORIAL 09 - STATIC ANALYSIS OF A TRUSS ELEMENTS",
                  link: "/assets/FEAST/FEAST%20TUTORIALS%202020/TUTORIAL%2009-%20STATIC%20ANALYSIS%20OF%20A%20TRUSS%20ELEMENTS.pdf",
                },
                {
                  label: "TUTORIAL 10 - FREE VIBRATION ANALYSIS OF A CANTILEVER BEAM",
                  link: "/assets/FEAST/FEAST%20TUTORIALS%202020/TUTORIAL%2010-%20FREE%20VIBRATION%20ANALYSIS%20OF%20A%20CANTILEVER%20BEAM.pdf",
                },
                {
                  label: "TUTORIAL 11 - BUCKLING ANALYSIS OF A BEAM",
                  link: "/assets/FEAST/FEAST%20TUTORIALS%202020/TUTORIAL%2011-%20BUCKLING%20ANALYSIS%20OF%20A%20BEAM.pdf",
                },
                {
                  label: "TUTORIAL 12 - TRANSIENT RESPONSE ANALYSIS OF BEAM WITH SINUSOIDAL LOAD",
                  link: "/assets/FEAST/FEAST%20TUTORIALS%202020/TUTORIAL%2012-%20TRANSIENT%20RESPONSE%20ANALYSIS%20OF%20BEAM%20WITH%20SINUSOIDAL%20LOAD.pdf",
                },
                {
                  label: "TUTORIAL 13 - STATIC ANALYSIS OF RECTANGULAR PLATE WITH",
                  link: "/assets/FEAST/FEAST%20TUTORIALS%202020/TUTORIAL%2013-%20STATIC%20ANALYSIS%20OF%20RECTANGULAR%20PLATE%20WITH.pdf",
                },
                {
                  label: "TUTORIAL 14 - STATIC ANALYSIS OF FIXED PLATE WITH CIRCULAR PLATE",
                  link: "/assets/FEAST/FEAST%20TUTORIALS%202020/TUTORIAL%2014-%20STATIC%20ANALYSIS%20OF%20FIXED%20PLATE%20WITH%20CIRCULAR%20PLATE.pdf",
                },
                {
                  label: "TUTORIAL 15 - STATIC ANALYSIS OF A PRESSURE VESSEL USING AXISYMMETRIC ELEMENTS",
                  link: "/assets/FEAST/FEAST%20TUTORIALS%202020/TUTORIAL%2015-%20STATIC%20ANALYSIS%20OF%20A%20PRESSURE%20VESSEL%20USING%20AXISYMMETRIC%20ELEMENTS.pdf",
                },
                {
                  label: "TUTORIAL 16 - FREE VIBRATION AND RESPONSE ANALYSIS USING CRAIGBAMPTON REDUCED MODEL",
                  link: "/assets/FEAST/FEAST%20TUTORIALS%202020/TUTORIAL%2016-%20FREE%20VIBRATION%20AND%20RESPONSE%20ANALYSIS%20USING%20CRAIGBAMPTON%20REDUCED%20MODEL.pdf",
                },
                {
                  label: "TUTORIAL 17 - STATIC ANALYSIS OF A PRESSURE VESSEL USING AXISYMMETRIC ELEMENTS",
                  link: "/assets/FEAST/FEAST%20TUTORIALS%202020/TUTORIAL%2017-%20STATIC%20ANALYSIS%20OF%20A%20PRESSURE%20VESSEL%20USING%20AXISYMMETRIC%20ELEMENTS.pdf",
                },
                {
                  label: "TUTORIAL 18 - BUCKLING ANALYSIS OF CYLINDRICAL SHELL",
                  link: "/assets/FEAST/FEAST%20TUTORIALS%202020/TUTORIAL%2018-%20BUCKLING%20ANALYSIS%20OF%20CYLINDRICAL%20SHELL.pdf",
                },
                {
                  label: "TUTORIAL 19 - CONDUCTION ANALYSIS OF RECTANGULAR PLATE",
                  link: "/assets/FEAST/FEAST%20TUTORIALS%202020/TUTORIAL%2019-%20CONDUCTION%20ANALYSIS%20OF%20RECTANGULAR%20PLATE.pdf",
                },
                {
                  label: "TUTORIAL 20 - HEAT TRANSFER ANALYSIS OF AXI-SYMMETRIC PLATE WITH CONVECTIVE AND RADIATIVE BC",
                  link: "/assets/FEAST/FEAST%20TUTORIALS%202020/TUTORIAL%2020-%20HEAT%20TRANSFER%20ANALYSIS%20OF%20AXI-SYMMETRIC%20PLATE%20WITH%20CONVECTIVE%20AND%20RADIATIVE%20BC.pdf",
                },
                {
                  label: "TUTORIAL 21 - HEAT TRANSFER ANALYSIS OF CYLINDRICAL BRICK WITH SPECIFIED TEMPERRATURE AND CONVECTIVE BC",
                  link: "/assets/FEAST/FEAST%20TUTORIALS%202020/TUTORIAL%2021-%20HEAT%20TRANSFER%20ANALYSIS%20OF%20CYLINDRICAL%20BRICK%20WITH%20SPECIFIED%20TEMPERRATURE%20AND%20CONVECTIVE%20BC.pdf",
                },
                {
                  label: "TUTORIAL 22 - TRANSIENT HEAT TRANSFER ANALYSIS...",
                  link: "/assets/FEAST/FEAST%20TUTORIALS%202020/TUTORIAL%2022-%20TRANSIENT%20HEAT%20TRANSFER%20ANALYSIS.pdf",
                }
              ]
                .map((tutorial, index) => (
                  <li key={index} className='p-4'>
                    <input type="radio" name="accordion" id={`tutorial${index + 1}`} />
                    <label htmlFor={`tutorial${index + 1}`} className='font-bold'>{tutorial.label}</label>
                    <div className="content">
                      <p className='text-center'>
                        <i className="fa-solid fa-file-arrow-down mr-4 text-indigo-500"></i>
                        <a href={tutorial.link} target="_blank" rel="noopener noreferrer">
                          {tutorial.label}
                        </a>
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
            <button
              onClick={closeModal}
              className="mt-4 bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {isModalOpen2 && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 md:w-1/2 max-h-[90vh] overflow-hidden">
            <h1 className="text-3xl text-center mb-4">
              <b>Verification Manual</b>
            </h1>
            <ul className="accordion max-h-[70vh] overflow-y-auto">
              {/* List of Tutorials */}
              {[{ label: 'Verification Problem 01- Static analysis of elliptical membrane', link: '/assets/FEAST/FEAST%20VERIFICA…tatic%20analysis%20of%20elliptical%20membrane.pdf' },
              { label: 'Verification Problem 02- Static analysis of cylindrical shell patch test', link: '/assets/FEAST/FEAST%20VERIFICA…sis%20of%20cylindrical%20shell%20patch%20test.pdf' },
              { label: 'Verification Problem 03- Static analysis of thick plate pressure', link: '/assets/FEAST/FEAST%20VERIFICA…ic%20analysis%20of%20thick%20plate%20pressure.pdf' },
              { label: 'Verification Problem 04- Static analysis of z- section cantiliver', link: '/assets/FEAST/FEAST%20VERIFICA…c%20analysis%20of%20z-%20section%20cantiliver.pdf' },
              { label: 'Verification Problem 05- Static analysis of single bar element', link: '/assets/FEAST/FEAST%20VERIFICA…atic%20analysis%20of%20single%20bar%20element.pdf' },
              { label: 'Verification Problem 06- Static analysis of single beam element', link: '/assets/FEAST/FEAST%20VERIFICA…tic%20analysis%20of%20single%20beam%20element.pdf' },
              { label: 'Verification Problem 07- Static analysis 2D patch test', link: '/assets/FEAST/FEAST%20VERIFICA…2007-%20Static%20analysis%202D%20patch%20test.pdf' },
              { label: 'Verification Problem 08- Static analysis of continuum beam with tip load', link: '/assets/FEAST/FEAST%20VERIFICA…s%20of%20continuum%20beam%20with%20tip%20load.pdf' },
              { label: 'Verification Problem 09- Static analysis of infinite thick pipe (treated as 2d)', link: '/assets/FEAST/FEAST%20VERIFICA…infinite%20thick%20pipe%20(treated%20as%202d).pdf' },
              { label: 'Verification Problem 10- Static analysis of bimetallic strip', link: '/assets/FEAST/FEAST%20VERIFICA…20Static%20analysis%20of%20bimetallic%20strip.pdf' },
              { label: 'Verification Problem 11- Static analysis of tapered cantilever', link: '/assets/FEAST/FEAST%20VERIFICA…Static%20analysis%20of%20tapered%20cantilever.pdf' },
              { label: 'Verification Problem 12- Static analysis of hole in a plate under tension', link: '/assets/FEAST/FEAST%20VERIFICA…0of%20hole%20in%20a%20plate%20under%20tension.pdf' },
              { label: 'Verification Problem 13- Static analysis of flat bar with edge notches', link: '/assets/FEAST/FEAST%20VERIFICA…sis%20of%20flat%20bar%20with%20edge%20notches.pdf' },
              { label: 'Verification Problem 14- Static analysis of cylindrical shell', link: '/assets/FEAST/FEAST%20VERIFICA…0Static%20analysis%20of%20cylindrical%20shell.pdf' },
              { label: 'Verification Problem 15- Free vibration analysis of thin square cantilever plate symmetric modes', link: '/assets/FEAST/FEAST%20VERIFICA…uare%20cantilever%20plate%20symmetric%20modes.pdf' },
              { label: 'Verification Problem 16- Free vibration analysis o…thin square cantilever plate anti-symmetric modes', link: '/assets/FEAST/FEAST%20VERIFICA…20cantilever%20plate%20anti-symmetric%20modes.pdf' },
              { label: 'Verification Problem 17- Free vibration analysis of free thin square plate', link: '/assets/FEAST/FEAST%20VERIFICA…0analysis%20of%20free%20thin%20square%20plate.pdf' },
              { label: 'Verification Problem 18- Free vibration analysis of simply supported thin square plate', link: '/assets/FEAST/FEAST%20VERIFICA…%20simply%20supported%20thin%20square%20plate.pdf' },
              { label: 'Verification Problem 19- Free vibration analysis of simply supported thin annular plate', link: '/assets/FEAST/FEAST%20VERIFICA…20simply%20supported%20thin%20annular%20plate.pdf' },
              { label: 'Verification Problem 20- Free vibration analysis of simply supported thick square plate - case 2', link: '/assets/FEAST/FEAST%20VERIFICA…orted%20thick%20square%20plate%20-%20case%202.pdf' },
              { label: 'Verification Problem 21-Free vibration analysis of simply supported thick annular plate', link: '/assets/FEAST/FEAST%20VERIFICA…0simply%20supported%20thick%20annular%20plate.pdf' },
              { label: 'Verification Problem 22- Free vibration analysis of cantilevered square membrane', link: '/assets/FEAST/FEAST%20VERIFICA…lysis%20of%20cantilevered%20square%20membrane.pdf' },
              { label: 'Verification Problem 23- Free vibration analysis of cantilevered tapered membrane', link: '/assets/FEAST/FEAST%20VERIFICA…ysis%20of%20cantilevered%20tapered%20membrane.pdf' },
              { label: 'Verification Problem 24- Cantilever coupling', link: '/assets/FEAST/FEAST%20VERIFICA…ation%20Problem%2024-%20Cantilever%20coupling.pdf' },
              { label: 'Verification Problem 25- Static analysis of base shroud structure of a typical large launch vehicle', link: '/assets/FEAST/FEAST%20VERIFICA…20of%20a%20typical%20large%20launch%20vehicle.pdf' },
              { label: 'Verification Problem 26- Static analysis of conical adaptor', link: '/assets/FEAST/FEAST%20VERIFICA…%20Static%20analysis%20of%20conical%20adaptor.pdf' },
              { label: 'Verification Problem 27- Static analysis of typical crew module prototype', link: '/assets/FEAST/FEAST%20VERIFICA…is%20of%20typical%20crew%20module%20prototype.pdf' },
              { label: 'Verification Problem 28- Static analysis of typical payload adaptor of a launch vehicle', link: '/assets/FEAST/FEAST%20VERIFICA…%20load%20adaptor%20of%20a%20launch%20vehicle.pdf' },
              { label: 'Verification Problem 29- Static analysis of a typical penstock pipe', link: '/assets/FEAST/FEAST%20VERIFICA…analysis%20of%20a%20typical%20penstock%20pipe.pdf' },
              { label: 'Verification Problem 30- Static analysis of a typical launcher', link: '/assets/FEAST/FEAST%20VERIFICA…atic%20analysis%20of%20a%20typical%20launcher.pdf' },
              { label: 'Verification Problem 31- Free vibration analysis of sounding rocket', link: '/assets/FEAST/FEAST%20VERIFICA…vibration%20analysis%20of%20sounding%20rocket.pdf' },
              { label: 'Verification Problem 32- Free vibration analysis of satellite simulator', link: '/assets/FEAST/FEAST%20VERIFICA…ation%20analysis%20of%20satellite%20simulator.pdf' },
              { label: 'Verification Problem 33- Free vibration analysis of grid type payload adaptor', link: '/assets/FEAST/FEAST%20VERIFICA…alysis%20of%20grid%20type%20payload%20adaptor.pdf' },
              { label: 'Verification Problem 34- Free vibration analysis of a typical satellite core structure', link: '/assets/FEAST/FEAST%20VERIFICA…%20a%20typical%20satellite%20core%20structure.pdf' },
              { label: 'Verification Problem 35- Free vibration analysis of printed circuit board with relays', link: '/assets/FEAST/FEAST%20VERIFICA…f%20printed%20circuit%20board%20with%20relays.pdf' },
              { label: 'Verification Problem 36- Free vibration analysis of typical payload adaptor', link: '/assets/FEAST/FEAST%20VERIFICA…nalysis%20of%20typical%20pay%20load%20adaptor.pdf' },
              { label: 'Verification Problem 37- Free vibration analysis of test rig for nozzle actuators', link: '/assets/FEAST/FEAST%20VERIFICA…%20of%20test%20rig%20for%20nozzle%20actuators.pdf' },
              { label: 'Verification Problem 38- Buckling analysis of nose cone structure of a typical strap-on rocket', link: '/assets/FEAST/FEAST%20VERIFICA…ucture%20of%20a%20typical%20strap-on%20rocket.pdf' },
              { label: 'Verification Problem 39- Shock response analysis of a solid cylinder', link: '/assets/FEAST/FEAST%20VERIFICA…sponse%20analysis%20of%20a%20solid%20cylinder.pdf' },
              { label: 'Verification Problem 40- Frequency response analysis using a Craig Bampton model', link: '/assets/FEAST/FEAST%20VERIFICA…nalysis%20using%20a%20Craig%20Bampton%20model.pdf' },
              { label: 'Verification Problem 41- Viscoelastic analysis of solid propellant grain', link: '/assets/FEAST/FEAST%20VERIFICA…%20analysis%20of%20solid%20propellant%20grain.pdf' },
              { label: 'Verification Problem 42- Structural analysis of a biaxial test specimen with different load cases', link: '/assets/FEAST/FEAST%20VERIFICA…ecimen%20with%20different%20load%20cases%20to.pdf' },
              { label: 'Verification Problem 43- Convergence study of a rectangular plate in static analysis using script file', link: '/assets/FEAST/FEAST%20VERIFICA…n%20static%20analysis%20using%20script%20file.pdf' },
              { label: 'Verification Problem 44- Meshing of CAD files', link: '/assets/FEAST/FEAST%20VERIFICA…%20Problem%2044-%20Meshing%20of%20CAD%20files.pdf' },
              { label: 'Verification Problem 45- Thermo-structural analysis of a nozzle', link: '/assets/FEAST/FEAST%20VERIFICA…hermo-structural%20analysis%20of%20a%20nozzle.pdf' },
              { label: 'Verification Problem 46- XFEM based fracture analysis using plane strain element', link: '/assets/FEAST/FEAST%20VERIFICA…20analysis%20using%20plane%20strain%20element.pdf' },
              { label: 'Verification Problem 47- Static analysis of cantilever beam subjected to multiple loading conditions', link: '/assets/FEAST/FEAST%20VERIFICA…jected%20to%20multiple%20loading%20conditions.pdf' },
              { label: 'Verification Problem 48- Static analysis of cantilever beam under an off-centred load', link: '/assets/FEAST/FEAST%20VERIFICA…ever%20beam%20under%20an%20off-centred%20load.pdf' },
              { label: 'Verification Problem 49- Static analysis of a frame structure under general loading', link: '/assets/FEAST/FEAST%20VERIFICA…frame%20structure%20under%20general%20loading.pdf' },
              { label: 'Verification Problem 50- Static analysis of a large plate with a circular hole under inplane loading', link: '/assets/FEAST/FEAST%20VERIFICA…20circular%20hole%20under%20inplane%20loading.pdf' },
              {
                "label": "Verification Problem 51- Static analysis of thick cylinder under internal pressure load",
                "link": "/assets/FEAST/FEAST%20VERIFICA…cylinder%20under%20internal%20pressure%20load.pdf"
              },
              {
                "label": "Verification Problem 52- Static analysis of simply supported circular plate",
                "link": "/assets/FEAST/FEAST%20VERIFICA…%20of%20simply%20supported%20circular%20plate.pdf"
              },
              {
                "label": "Verification Problem 53- Static analysis of uniform thickness rotating disc",
                "link": "/assets/FEAST/FEAST%20VERIFICA…%20of%20uniform%20thickness%20rotating%20disc.pdf"
              },
              {
                "label": "Verification Problem 54- Static analysis of clamped square plate with central concentrated load",
                "link": "/assets/FEAST/FEAST%20VERIFICA…0plate%20with%20central%20concentrated%20load.pdf"
              },
              {
                "label": "Verification Problem 55- Static analysis of cylindrical shell roof under self-weight",
                "link": "/assets/FEAST/FEAST%20VERIFICA…indrical%20shell%20roof%20under%20self-weight.pdf"
              },
              {
                "label": "Verification Problem 56- Static analysis of nine layer cross-ply orthotropic plate",
                "link": "/assets/FEAST/FEAST%20VERIFICA…ine%20layer%20cross-ply%20orthotropic%20plate.pdf"
              },
              {
                "label": "",
                "link": "http://localhost:5500/verification_manual.html#"
              },
              {
                "label": "Verification Problem 58- Fundamental frequency of a cantilever beam",
                "link": "/assets/FEAST/FEAST%20VERIFICA…ntal%20frequency%20of%20a%20cantilever%20beam.pdf"
              },
              {
                "label": "Verification Problem 59- Fundamental frequency of a clamped circular plate",
                "link": "/assets/FEAST/FEAST%20VERIFICA…equency%20of%20a%20clamped%20circular%20plate.pdf"
              },

              {
                "label": "Verification Problem 61- Natural frequencies of a cantilever beam",
                "link": "/assets/FEAST/FEAST%20VERIFICA…al%20frequencies%20of%20a%20cantilever%20beam.pdf"
              },
              {
                "label": "Verification Problem 62- Natural frequencies of a simply supported square plate",
                "link": "/assets/FEAST/FEAST%20VERIFICA…0of%20a%20simply%20supported%20square%20plate.pdf"
              },
              {
                "label": "Verification Problem 63- Fundamental frequency of a cantilever triangular plate",
                "link": "/assets/FEAST/FEAST%20VERIFICA…cy%20of%20a%20cantilever%20triangular%20plate.pdf"
              },
              {
                "label": "Verification Problem 64- Natural frequencies of an earth dam",
                "link": "/assets/FEAST/FEAST%20VERIFICA…Natural%20frequencies%20of%20an%20earth%20dam.pdf"
              },
              {
                "label": "Verification Problem 65- Free vibration analysis of a cantilever beam using solid elements-1",
                "link": "/assets/FEAST/FEAST%20VERIFICA…antilever%20beam%20using%20solid%20elements-1.pdf"
              },
              {
                "label": "Verification Problem 66- Free vibration analysis of a cantilever beam using solid elements-2",
                "link": "/assets/FEAST/FEAST%20VERIFICA…antilever%20beam%20using%20solid%20elements-2.pdf"
              },

              {
                "label": "Verification Problem 68- Free vibration analysis of a cantilever beam using solid elements-3",
                "link": "/assets/FEAST/FEAST%20VERIFICA…antilever%20beam%20using%20solid%20elements-3.pdf"
              },
              {
                "label": "Verification Problem 69- Natural frequencies of a free edged square plate",
                "link": "/assets/FEAST/FEAST%20VERIFICA…cies%20of%20a%20free%20edged%20square%20plate.pdf"
              },
              {
                "label": "Verification Problem 70- Buckling of a cantilever beam under compressive load",
                "link": "/assets/FEAST/FEAST%20VERIFICA…antilever%20beam%20under%20compressive%20load.pdf"
              },
              {
                "label": "Verification Problem 71- Buckling analysis of a simply supported tapered beam",
                "link": "/assets/FEAST/FEAST%20VERIFICA…0of%20a%20simply%20supported%20tapered%20beam.pdf"
              },
              {
                "label": "Verification Problem 72- Dynamic response of a water tower subjected to a blast loading",
                "link": "/assets/FEAST/FEAST%20VERIFICA…0tower%20subjected%20to%20a%20blast%20loading.pdf"
              },
              {
                "label": "Verification Problem 73- Transient response of a simply supported beam subjected to a constant force",
                "link": "/assets/FEAST/FEAST%20VERIFICA…0beam%20subjected%20to%20a%20constant%20force.pdf"
              },
              {
                "label": "Verification Problem 74- Transient response of a beam subjected to distributed load",
                "link": "/assets/FEAST/FEAST%20VERIFICA…%20beam%20subjected%20to%20distributed%20load.pdf"
              },
              {
                "label": "Verification Problem 75- Frequency response analysis of a simply supported beam",
                "link": "/assets/FEAST/FEAST%20VERIFICA…analysis%20of%20a%20simply%20supported%20beam.pdf"
              },
              {
                "label": "Verification Problem 76- Frequency response analysis of a 2-DOF system",
                "link": "/assets/FEAST/FEAST%20VERIFICA…response%20analysis%20of%20a%202-DOF%20system.pdf"
              },
              {
                "label": "Verification Problem 77- Random vibration analysis…tem subjected to white noise ground accelelration",
                "link": "/assets/FEAST/FEAST%20VERIFICA…20to%20white%20noise%20ground%20accelelration.pdf"
              },
              {
                "label": "Verification Problem 78- One dimensional heat conduction in a bar",
                "link": "/assets/FEAST/FEAST%20VERIFICA…imensional%20heat%20conduction%20in%20a%20bar.pdf"
              },
              {
                "label": "Verification Problem 79- Heat conduction in a long hollow cylinder with prescribed temperature",
                "link": "/assets/FEAST/FEAST%20VERIFICA…%20cylinder%20with%20prescribed%20temperature.pdf"
              },
              {
                "label": "Verification Problem 80- Heat conduction in a convectively cooled orthotropic bar",
                "link": "/assets/FEAST/FEAST%20VERIFICA…a%20convectively%20cooled%20orthotropic%20bar.pdf"
              },
              {
                "label": "Verification Problem 81- Electric potential distribution inside a void(Analogous field problem)",
                "link": "/assets/FEAST/FEAST%20VERIFICA…nside%20a%20void(Analogous%20field%20problem).pdf"
              },
              {
                "label": "Verification Problem 82- Magneto-static potential distribution inside a coaxial cable",
                "link": "/assets/FEAST/FEAST%20VERIFICA…20distribution%20inside%20a%20coaxial%20cable.pdf"
              }
              ]
                .map((tutorial, index) => (
                  <li key={index} className='p-4'>
                    <input type="radio" name="accordion" id={`tutorial${index + 1}`} />
                    <label htmlFor={`tutorial${index + 1}`} className='font-bold'>{tutorial.label}</label>
                    <div className="content">
                      <p className='text-center'>
                        <i className="fa-solid fa-file-arrow-down mr-4 text-indigo-500"></i>
                        <a href={tutorial.link} target="_blank" rel="noopener noreferrer">
                          {tutorial.label}
                        </a>
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
            <button
              onClick={closeModal2}
              className="mt-4 bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {isModalOpen3 && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 md:w-1/2 max-h-[90vh] overflow-hidden">
            <h1 className="text-3xl text-center mb-4">
              <b>User Manual</b>
            </h1>
            <ul className="accordion max-h-[70vh] overflow-y-auto">
              {/* List of Tutorials */}
              {[
                {
                  "label": "01 - INTRODUCTION",
                  "link": "/assets/FEAST/FEAST%20USER%20MANUAL/01%20-INTRODUCTION.pdf"
                },
                {
                  "label": "02 - CROSS-REFERENCE TABLE",
                  "link": "/assets/FEAST/FEAST%20USER%20MANUAL/02-%20CROSS-REFERENCE%20TABLE.pdf"
                },
                {
                  "label": "03 - MODEL DATA",
                  "link": "/assets/FEAST/FEAST%20USER%20MANUAL/03-%20MODEL%20DATA.pdf"
                },
                {
                  "label": "04 - BOUNDARY CONDITIONS DATA GROUP",
                  "link": "/assets/FEAST/FEAST%20USER%20MANUAL/04%20-BOUNDARY%20CONDITIONS%20DATA%20GROUP.pdf"
                },
                {
                  "label": "05 - LOAD DATA GROUPS",
                  "link": "/assets/FEAST/FEAST%20USER%20MANUAL/05%20-LOAD%20DATA%20GROUPS.pdf"
                },
                {
                  "label": "06 - PROPERTY Data Groups",
                  "link": "/assets/FEAST/FEAST%20USER%20MANUAL/06%20-PROPERTY%20Data%20Groups.pdf"
                },
                {
                  "label": "07 - LIST OF NODES OR ELEMENTS",
                  "link": "/assets/FEAST/FEAST%20USER%20MANUAL/07%20-LIST%20OF%20NODES%20OR%20ELEMENTS.pdf"
                },
                {
                  "label": "08 - LIST OF ELEMENT FACES",
                  "link": "/assets/FEAST/FEAST%20USER%20MANUAL/08%20-LIST%20OF%20ELEMENT%20FACES.pdf"
                },
                {
                  "label": "09 - SPECIFICATION OF VARIABLE DATA",
                  "link": "/assets/FEAST/FEAST%20USER%20MANUAL/09%20-SPECIFICATION%20OF%20VARIABLE%20DATA.pdf"
                }
              ]
                .map((tutorial, index) => (
                  <li key={index} className='p-4'>
                    <input type="radio" name="accordion" id={`tutorial${index + 1}`} />
                    <label htmlFor={`tutorial${index + 1}`} className='font-bold'>{tutorial.label}</label>
                    <div className="content">
                      <p className='text-center'>
                        <i className="fa-solid fa-file-arrow-down mr-4 text-indigo-500"></i>
                        <a href={tutorial.link} target="_blank" rel="noopener noreferrer">
                          {tutorial.label}
                        </a>
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
            <button
              onClick={closeModal3}
              className="mt-4 bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-800"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Downloads;
