import React, { useRef } from "react";
import {useGSAP} from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
useGSAP(() => {
  gsap.to(imageDivRef.current, {
    scrollTrigger: {
      trigger: imageDivRef.current,
      markers:true,
      start:'top 19%',
      end:'top -100%',
      // scrub:true,
      pin:true,
      pinSpacing:false,
    }  
  }) 
})
  return (
    <div>
      <div className="sectio-1">
        <div ref={imageDivRef} className="absolute top-56 left-[31vw] h-[20vw] w-[15vw] rounded-3xl bg-red-500 overflow-hidden">
          <img
            className="h-full w-full object-cover rounded-3xl"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt="Carl image"
          />
        </div>
        <div className="relative font-[Lausanne-300]">
          <div className="mt-[55vh]">
            <h1 className=" text-[19vw] text-center leading-[17vw] uppercase">
              Soixan7e
              <br />
              Douze
            </h1>
          </div>
          <div className="pl-[40%]">
            <p className="text-6xl">
              &nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité.
              On reste humbles et on dit non aux gros egos, même le vôtre. Une
              marque est vivante. Elle a des valeurs, une personnalité, une
              histoire. Si on oublie ça, on peut faire de bons chiffres à court
              terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à
              donner de la perspective, pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section-2 h-screen"></div>
    </div>
  );
};
export default Agence;
