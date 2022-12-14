import React from "react";
import { apple, bill, google } from "../assets/index";
import styles, { layout } from "../style";

export default function Billing() {
   return (
      <section
         id="product"
         className={`${layout.sectionReverse} grid grid-cols-2 gap-x-14`}
      >
         <div
            className={`${layout.sectionReverse}  relative sm:col-span-1 col-span-2`}
         >
            <img
               src={bill}
               alt="billing"
               className="w-[100%] 
               h-[100%] z-[5] object-contain"
            />
            <div
               className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] 
         rounded-full white__gradient"
            />
            <div
               className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] 
         rounded-full pink__gradient"
            />
         </div>
         <div
            className={`${layout.sectionInfo} flex flex-col items-center sm:col-span-1 col-span-2`}
         >
            <h2 className={`text-center ${styles.heading2}`}>
               Easily control your <br className="sm:block hidden" /> billing &
               invoicing.
            </h2>
            <p className={` ${styles.paragraph} pl-3 mt-5 max-w-[471px]`}>
               Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
               aenean neque. Fusce ipsum orci rhoncus aliporttitor integer
               platea placerat.
            </p>
            <div className="flex flex-warp sm:mt010 mt-6">
               <img
                  src={apple}
                  className="w-[128px] h-[42px] object-contain 
                  mr-5 cursor-pointer"
               />
               <img
                  src={google}
                  className="w-[128px] h-[42px] object-contain 
                  cursor-pointer"
               />
            </div>
         </div>
      </section>
   );
}
