import React from 'react'

const Landing = () => (
    <div className="w-full h-full">
           <div className="flex w-full "> 
             




                 <div className="w-full ml-[12%] pt-[15%]">

                           <div className="font-Paprika text-8xl  ">
                                  Hi I'm Hemank Patwal
                           </div>


                           <div className="pt-[6%] h-[6.5rem]"> 
                           <div className="bg-slate-200 rounded-xl  w-[86%]"> 
                                  <div className=" font- Quattrocento text-2xl flex justify-center items-center  ">
                                         --  Hi! I’m a Web Developer. I develop creative, responsive and user friendly websites for clients all over the globe.
                                   </div>
                          </div>       
                          </div>

                          <div className="flex pt-[10%] font-Montserrat text-2xl font-semibold">
                               <div className="bg-pink-200 border rounded-full w-[25%] flex justify-center items-center h-[3.5rem]">
                                     <span>
                                         Let's Talk
                                      </span>   
                                      <span className="ml-[10%]">
                                          <img src="/images/icon1.png" /> 
                                      </span>
                               </div>

                               <div className="flex justify-center items-center border rounded-full h-[3.5rem] border-pink-300 ml-[10%] w-[25%]">
                                   Portfolio
                               </div>
                          </div>

                          <div className="pt-[20%]">
                               <img src="/images/arrow1.png" />
                          </div>


                 </div>






                <div className=" w-full flex flex-col 
                place-items-end">

                            <div className="ml-[0%]">
                                 <img src="/images/img1.png" />
                            </div>

                            <div className="absolute pt-[10%]">
                                 <img src="/images/img2.png" />
                            </div>

                            <div className="z-10 absolute mr-[15%] pt-[10%] ">
                                 <img src='/images/img3.png' />
                            </div>
             </div>
             


         


        </div>
    </div>

)

export default Landing