"use client";
import { useStore } from "@/store/store";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { LuXCircle } from "react-icons/lu";

const AddBikeDrawer = () => {
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const { toggleAddBikeDrawer, setToggleAddBikeDrawer } = useStore(); 

  const handleClickOutside = (e:MouseEvent )=>{
    if(drawerRef.current && !drawerRef.current.contains(e.target as Node)){
      setToggleAddBikeDrawer(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <AnimatePresence >
      {toggleAddBikeDrawer && (
        <motion.div 
         key="add-bike-drawer"
          ref={drawerRef}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }} 
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed right-0 top-0 xl:w-2/5 rounded-s-lg flex flex-col gap-4 bg-white text-black h-screen shadow-lg"
        >
          <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">Add New Bike</h1>
            <LuXCircle
              size={32}
              onClick={() => setToggleAddBikeDrawer(false)} 
              className="cursor-pointer"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddBikeDrawer;
