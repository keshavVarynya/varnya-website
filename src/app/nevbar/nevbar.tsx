"use client"
import { NextPage } from "next";
import "../css/style.css"
import { useEffect, useState } from "react";
import Link from "next/link";
import AboutPage from "../ourstory/page";
import { Collapse } from "flowbite";
import type { CollapseOptions, CollapseInterface } from "flowbite";

const Nevbarpage:NextPage = () => {
    
    const [clientWindoHeight,setClientWindoHeight] = useState("");
    const [logoDisplay,setlogoDisplay] = useState("")
    const [expanded, setExpanded] = useState("hidden")
    
//     // set the target element that will be collapsed or expanded (eg. navbar menu)
// const $targetEl = document.getElementById('targetEl');

// // optionally set a trigger element (eg. a button, hamburger icon)
// const $triggerEl = document.getElementById('triggerEl');

// // optional options with default values and callback functions
// const options: CollapseOptions = {
//     onCollapse: () => {
//         console.log('element has been collapsed')
//     },
//     onExpand: () => {
//         console.log('element has been expanded')
//         // collapse.expand();
//     },
//     onToggle: () => {
//         console.log('element has been toggled')
//     }
// };
// const collapse: CollapseInterface = new Collapse($targetEl, $triggerEl, options);

/*
* $targetEl: required
* $triggerEl: optional
* options: optional
*/

// show the target element
// collapse.expand();

    const handleScroll = () => {
        console.log(window.scrollY);
        if(window.scrollY == 0){
            setClientWindoHeight("transparent")
            setlogoDisplay("block");
            console.log(document.getElementById("nevbar")?.style.backgroundColor == "green");
            console.log(clientWindoHeight);
        }
        else{
            document.getElementById("nevbar")?.style.backgroundColor == "#579581x`"
            setClientWindoHeight("#579581");
            console.log(clientWindoHeight);
            setlogoDisplay("none");

        }
    };
    const button = document.getElementById('triggerEl');
    const buttonClick = () =>{
        console.log(this)
        console.log(button);
        if (expanded === "hidden"){
            setExpanded("hidden")
            
        }
        else{
            setExpanded("")
        }
        
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll",handleScroll);
    });

    return(
       

<nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 right-0"  id="Nevbar" style={{backgroundColor:clientWindoHeight}}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" onClick={buttonClick}  id="triggerEl" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

)
}

export default Nevbarpage;