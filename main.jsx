import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import NavBar from './Components/NavBar.jsx';
import Notes from './Components/Notes.jsx';
import Footer from './Components/Footer.jsx';
import HTML from './Components/Notes/HTML.jsx';
import ReactJS from './Components/Notes/ReactJS.jsx';
import JavaScript from './Components/Notes/JavaScript.jsx';
import CSS from './Components/Notes/CSS.jsx';
import Python from './Components/Notes/Python.jsx';
// import Microprocessor from './Components/Notes/Microprocessor.jsx';
import Algorithm from './Components/Notes/Algorithm.jsx';
import Java from './Components/Notes/Java.jsx';
import C from './Components/Notes/C.jsx';
import DotNet from './Components/Notes/DotNet.jsx';
import TypeScript from './Components/Notes/TypeScript.jsx';
import Cplus from './Components/Notes/Cplus.jsx'
import SQL from './Components/Notes/SQL.jsx';

import AboutUs from './Components/Links/AboutUs.jsx';
import ContactUs from './Components/Links/ContactUs.jsx';

import { pdfjs } from 'react-pdf';
import CSharp from './Components/Notes/CSharp.jsx';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();



const router = createBrowserRouter([
  {
    path: "/",
    element:<App/> ,
  },
  {
    path: "/notes",
    element:[<NavBar/>,<Notes/>,<Footer/>] ,
  },
  {
    path: "/aboutus",
    element:[<NavBar/>,<AboutUs/>,<Footer/>] ,
  },
  {
    path: "/contactus",
    element:[<NavBar/>,<ContactUs/>,<Footer/>] ,
  },
  
  {
    path:'/C Language',
    element:[<NavBar/>,<C/>,<Footer/>] ,
  },
  {
    path:'notes/C Language',
    element:[<NavBar/>,<C/>,<Footer/>] ,
  },
  // {
  //   path:'/Data Structure',
  //   element:[<NavBar/>,<DataStructure/>,<Footer/>] ,
  // },
  // {
  //   path:'notes/Data Structure',
  //   element:[<NavBar/>,<DataStructure/>,<Footer/>] ,
  // },
  // {
  //   path:'/DBMS Notes',
  //   element:[<NavBar/>,<DBMS/>,<Footer/>] ,
  // },
  // {
  //   path:'notes/DBMS Notes',
  //   element:[<NavBar/>,<DBMS/>,<Footer/>] ,
  // },
  // {
  //   path:'/Operating System Notes',
  //   element:[<NavBar/>,<OperatingSystem/>,<Footer/>] ,
  // },
  // {
  //   path:'notes/Operating System Notes',
  //   element:[<NavBar/>,<OperatingSystem/>,<Footer/>] ,
  // },
  
  {
    path:'notes/Algorithm Notes',
    element:[<NavBar/>,<Algorithm/>,<Footer/>] ,
  },
  {
    path:'/Algorithm Notes',
    element:[<NavBar/>,<Algorithm/>,<Footer/>] ,
  },
  // {
  //   path:'notes/Microprocessor Notes',
  //   element:[<NavBar/>,<Microprocessor/>,<Footer/>] ,
  // },
  // {
  //   path:'/Microprocessor Notes',
  //   element:[<NavBar/>,<Microprocessor/>,<Footer/>] ,
  // },
  {
    path:'notes/Python Notes',
    element:[<NavBar/>,<Python/>,<Footer/>] ,
  },
  {
    path:'/Python Notes',
    element:[<NavBar/>,<Python/>,<Footer/>] ,
  },
  {
    path:'notes/HTML Notes',
    element:[<NavBar/>,<HTML/>,<Footer/>] ,
  },
  {
    path:'/HTML Notes',
    element:[<NavBar/>,<HTML/>,<Footer/>] ,
  },
  {
    path:'notes/CSS Notes',
    element:[<NavBar/>,<CSS/>,<Footer/>] ,
  },
  {
    path:'/CSS Notes',
    element:[<NavBar/>,<CSS/>,<Footer/>] ,
  },
  {
    path:'notes/JavaScript Notes',
    element:[<NavBar/>,<JavaScript/>,<Footer/>] ,
  },
  {
    path:'/JavaScript Notes',
    element:[<NavBar/>,<JavaScript/>,<Footer/>] ,
  },
  {
    path:'notes/ReactJS Notes',
    element:[<NavBar/>,<ReactJS/>,<Footer/>] ,
  },
  {
    path:'/ReactJS Notes',
    element:[<NavBar/>,<ReactJS/>,<Footer/>] ,
  },
  {
    path:'notes/Java Notes',
    element:[<NavBar/>,<Java/>,<Footer/>] ,
  },
  {
    path:'/Java Notes',
    element:[<NavBar/>,<Java/>,<Footer/>] ,
  },
  {
    path:'notes/C++ Notes',
    element:[<NavBar/>,<Cplus/>,<Footer/>] ,
  },
  {
    path:'/C++ Notes',
    element:[<NavBar/>,<Cplus/>,<Footer/>] ,
  },
  {
    path:'notes/.Net Notes',
    element:[<NavBar/>,<DotNet/>,<Footer/>] ,
  },
  {
    path:'/.Net Notes',
    element:[<NavBar/>,<DotNet/>,<Footer/>] ,
  },
  {
    path:'notes/TypeScript Notes',
    element:[<NavBar/>,<TypeScript/>,<Footer/>] ,
  },
  {
    path:'/TypeScript Notes',
    element:[<NavBar/>,<TypeScript/>,<Footer/>] ,
  },
  {
    path:'notes/SQL Notes',
    element:[<NavBar/>,<SQL/>,<Footer/>] ,
  },
  {
    path:'/SQL Notes',
    element:[<NavBar/>,<SQL/>,<Footer/>] ,
  },
  {
    path:'notes/cSharp Notes',
    element:[<NavBar/>,<CSharp/>,<Footer/>] ,
  },
  {
    path:'/cSharp Notes',
    element:[<NavBar/>,<CSharp/>,<Footer/>] ,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);
