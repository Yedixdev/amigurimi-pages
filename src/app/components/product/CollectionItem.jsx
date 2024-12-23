'use client';
import { motion } from "framer-motion"
import AnimatedShinyText from "../../../components/ui/animated-shiny-text";

export default function CollectionItem({ item, onClick }) {
   return (
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }} 
      className="flex items-center rounded-lg cursor-pointer w-72 h-16 justify-center shadow-gray-400 shadow-md gap-5 bg-[rgba(255,255,255,0.5)] hover:bg-[#1f6c765b] transition duration-300 ease-in-out"
      onClick={onClick}>
         {item.icon}
         <div className="font-lato">
            <AnimatedShinyText>
               <div className="text-lg font-bold">{item.category}</div>
               <div className="text-gray-500 font-itim">{item.description}</div>
            </AnimatedShinyText>
         </div>
      </motion.div>
   );
}
