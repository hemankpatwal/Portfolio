import React from 'react'

const Landing = () => (
     <div className="w-full h-full">
          <div className="md:flex w-full ">    
               <div className="w-full lg:ml-[12%] lg:pt-[15%] pt-[30%] ml-[9%]">
                     <div className="font-Paprika lg:text-8xl text-5xl w-[90%] ">
                         Hi I'm Hemank Patwal
                     </div>  
                     <div className="pt-[6%] h-[6.5rem]"> 
                         <div className="bg-slate-200 rounded-xl  w-[86%]"> 
                              <div className=" font- Quattrocento text-2xl flex justify-center items-center  ">
                                   --  Hi! I’m a Web Developer. I develop creative, responsive and user friendly websites for clients all over the globe.
                              </div>
                         </div>       
                    </div>
                    <div className="lg:flex lg:pt-[10%] pt-[20%] font-Montserrat text-2xl font-semibold">
                         <div className="bg-pink-200 border rounded-full lg:w-[25%] w-[50%] flex justify-center items-center h-[3.5rem]">
                              <span>
                                    Let's Talk
                              </span>   
                              <span className="ml-[10%]">
                                    <img src="/images/icon1.png" /> 
                              </span>
                         </div>
                         <div className=" flex justify-center items-center border rounded-full h-[3.5rem] border-pink-300 lg:ml-[10%] lg:w-[25%] w-[50%] lg:mt-0 mt-10">
                              Portfolio
                         </div>
                    </div>       
                     <div className="pt-[22%] hidden md:block">
                          <img src="/images/arrow1.png" />
                    </div>                                                  
               </div>
               <div className=" w-full flex flex-col place-items-end">
                    <div className="hidden md:block ml-[0%]">
                         <img src="/images/img1.png" />
                    </div>
                    <div className="absolute hidden md:block pt-[10%]">
                         <img src="/images/img2.png" />
                    </div>
                    <div className="z-10 hidden md:block absolute mr-[15%] pt-[10%] ">
                         <img src='/images/img3.png' />
                    </div>
                    <div className="lg:space-y-5 lg:mt-[40%] lg:mr-[20%]  mt-[10%] ml-[10%]  space-y-2">
                         <div className=" text-left font-Salsa font-regular text-2xl">
                              Check Out
                         </div>
                         <div className="flex space-x-9">
                              <div>
                                   <img src="/images/icon5.png" /> 
                              </div>             
                              <div>
                                   <img src="/images/icon6.png" />
                              </div>                                         
                              <div>
                                   <img src="/images/icon7.png" />
                              </div>                              
                         </div>
                    </div>
               </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row w-full pt-[10%] pb-[5%] ">
               <div className=" flex flex-col w-full h-full ml-[12%] ">
                    <div className="flex rounded-2xl w-[50%] h-[7rem] shadow-xl justify-center items-center space-x-[10%]">
                         <div>
                              <img src="/images/icon2.png" />
                         </div>
                         <div className="">
                              <div className="font-Montserrat   font-semibold text-3xl  ">
                                   Website Design
                              </div>
                              <div className="  text-right">
                                   0 Projects
                              </div>
                         </div>
                    </div>
                    <div className="pt-[10%]">
                         <div className="flex  rounded-2xl w-[50%]  h-[7rem] shadow-xl justify-center items-center space-x-[2%]">
                              <div>
                                   <img src="/images/icon3.png" />
                              </div>
                              <div className="">
                                   <div className="font-Montserrat font-semibold text-3xl  ">
                                        Mobile App Design
                                   </div>
                                   <div className="text-right">
                                        0 Projects
                                   </div>   
                              </div>
                        </div>
                    </div>
                    <div className="pt-[10%]">
                         <div className="flex  rounded-2xl w-[50%]  h-[7rem] shadow-xl justify-center items-center space-x-[30%]">
                              <div className="">
                                   <img src="/images/icon4.png" />
                              </div>
                              <div className="">
                                   <div className="font-Montserrat font-semibold text-3xl  ">
                                        Feedbacks
                                   </div>               
                              </div>
                         </div>
                    </div>            
               </div>
               <div className="flex-col  w-full">
                    <div className="font-Montserrat font-bold text-7xl">
                         What Do I Help?
                    </div>
               <div className="font-Montserrat font-medium text-3xl pt-[10%] w-[92%]">
                    <div> 
                         I help you with finding a solution and solve your problems. I use Next.js, Tailwind CSS and Typescript to make WebApp.
                    </div>     
                    <div className="pt-[5%]">
                         I give my best to fulfill your requirements and make website more user-friendly.
                    </div>
               </div>
               <div className="flex space-x-[30%] justify-center pt-[4.5%]">
                    <div className="flex flex-col">
                         <div className="text-7xl text-center" >                                       
                               0+
                         </div>
                         <div className="font-Montserrat">
                              Projects Completed
                         </div>
                    </div>
                    <div className="flex flex-col">
                         <div className="text-7xl text-center" >
                               0+
                         </div>
                         <div className="font-Montserrat">
                               Happy Clients
                         </div>
                    </div>
               </div>
          </div> 
     </div>
</div>

)

export default Landing