import React from 'react'

const Header = () => (
    <div className="w-full">
       <div className="flex w-full lg:justify-center justify-around items-center pt-5 lg:space-x-[55%] md:space-x-[30%] fixed z-30">
           <div className="font-Risque lg:text-4xl md:text-3xl text-2xl ">
               Hemank
            </div>
           <div className="flex lg:space-x-10 md:space-x-8 lg:text-base text-sm space-x-2  font-Oxygen pt-3 z-10" >
                <div>
                    About
                </div>
                <div>
                    Services
                </div>
                <div>
                    Projects
                </div>
           </div>
        </div> 
    </div>
)

export default Header