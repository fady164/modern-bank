import React from "react";
import { card } from "../assets/index";
import styles from "../style";
import FeedbackCard from "./FeadbackCard";
import { feedback } from "../constants/index";

export default function Testimonials() {
   return (
      <section
         id="clients"
         className={`${styles.flexCenter} ${styles.paddingY} 
         flex-col relative`}
      >
         {/* TODO */}
         <div
            className="absolute z-0 w-[60%] h-[60%] -right-1/2 
         rounded-full blue__gradient"
         />

         <div
            className="w-full flex justify-between items-center 
            md:flex-row flex-col sm:mb-1 mb-6 z-[1]"
         >
            <h1 className={`${styles.heading2} text-center md:text-left`}>
               What people are <br className="sm:block hidden" />
               saying about us
            </h1>
            <div className="w-full md:mt-0 mt-6">
               <p
                  className={`${styles.paragraph} text-center md:text-left max-w-[470]`}
               >
                  Everything you need to accept card payments and grow your
                  business anywhere on the planet.
               </p>
            </div>
         </div>
         <div
            className="flex md:flex-row flex-col felx-wrap items-center  
            justify-center w-full feedback-container relative z-[1]"
         >
            {feedback.map((card, index) => (
               <FeedbackCard key={card.id} {...card} />
            ))}
         </div>
      </section>
   );
}
