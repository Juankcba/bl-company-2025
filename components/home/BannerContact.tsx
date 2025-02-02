'use client';
import { Button, Card } from "@heroui/react";
import Link from "next/link";
import React from "react";

const BannerContact = () => {

  return (
    
    <div className="bg-primary-custom bg-black flex justify-center flex-col gap-4">
          <h1 className="text-white text-center font-2xl font-bold">Blade Link Company</h1>
          <h2 className="text-white text-center font-4xl">ÚNETE Y NOS ENCARGAMOS DEL RESTO </h2>
          <p className="text-white text-center font-xl">Crea, comparte y muestra a todo el mundo el poder de tu creatividad</p>
          <div className="mx-auto">
          <Button
            
className="flex items-center justify-center h-10 w-32 p-[2.5px] bg-gradient-to-tr from-[#04e7f7] to-[#8c04f6] text-white hover:shadow-2xl hover:shadow-purple-600/30 group"
      radius="full"
            as={Link}
            target="_blank"

            href="https://wa.me/17873740662?text=Hola%2C%20necesito%20ayuda..."
          >
            <span className="bg-gray-900 group-hover:bg-gradient-to-tr group-hover:from-[#04e7f7] group-hover:to-[#8c04f6] group-hover:transition group-hover:ease-in-out group-hover:duration-300 w-full h-full  rounded-full flex items-center justify-center">
            Contactanos
            </span>
          </Button>
          </div>
       </div>
  );
};

export default BannerContact;
