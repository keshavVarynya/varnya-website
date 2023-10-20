"use client"
import location from "../images/FLASHMEUP-38.jpg"
import Image from "next/image";
import { NextPage } from "next";
import { Card,CardBody,Button } from "@nextui-org/react";

const Location:NextPage = () =>{
    return(
        <div className="container mx-auto">
        <div className="locationMainDiv">
        <div className="flex justify-between p-24">
            <div className="p-24">
                <h1>The place where</h1><h3> we meet soon.</h3>
                <p>LEMO is an electronic and fiber optic connector manufacturer,<br/> based in Écublens, Switzerland.<br/> It is known for producing the push-pull connectors  LEMO connectors <br/> are used in medical, industrial</p><br />
                <button className="locationContactButton focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Contact Us</button>
            </div>
        <div className="p-24">
            <Image className="varnyaLocationImg" src={location} alt="..." width={500} height={200} /></div>
        </div>
        </div>
        <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/80 max-w-[610px]  m-2 mx-auto"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={400}
              src={location}
              width={300}
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            


            
          </div>
        </div>
      </CardBody>
    </Card>
        </div>
    );
}

export default Location;