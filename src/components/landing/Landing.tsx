import React from 'react'

const Landing = () => (
     <div className="w-full h-full">
          <div className="md:flex w-full ">    
               <div className="w-full lg:ml-[5%] lg:pt-[12%] md:pt-[30%] pt-[30%] ml-[9%]">
                     <div className="font-Paprika lg:text-8xl md:text-4xl text-5xl w-[90%] ">
                         Hi I'm Hemank Patwal
                     </div>  
                     <div className="pt-[6%] h-[6.5rem]"> 
                         <div className="bg-slate-200 rounded-xl md:w-[90%]  w-[86%]"> 
                              <div className=" font- Quattrocento text-2xl md:text-xl flex justify-center items-center  ">
                                   --  Hi! I’m a Web Developer. I develop creative, responsive and user friendly websites for clients all over the globe.
                              </div>
                         </div>       
                    </div>
                    <div className="lg:flex lg:pt-[10%] md:pt-[20%] pt-[20%] font-Montserrat text-2xl font-semibold">
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
                     <div className="pt-[22%] lg:mt-[3%] md:pt-[19%] hidden md:block">
                          <img src="/images/arrow1.png" />
                    </div>                                                  
               </div>
               <div className=" w-full flex flex-col place-items-end">
                    <div className="hidden  md:block ">
                         <img src="/images/img1.png" />
                    </div>
                    <div className="absolute lg:w-[90%] lg:pt-[10%] lg:pl-[62%] hidden md:block md:pt-[25%] pt-[10%]">
                         <div className='md:w-[70%] md:ml-[40%]'>
                              <img src="/images/img2.png" />
                         </div>
                    </div>
                    <div className="z-10 hidden md:block absolute lg:mr-[13%] mr-[15%] pt-[10%] lg:pt-[0%] ">
                         <div className="md:w-[90%] md:mt-[60%]">
                              <img src='/images/img3.png' />
                         </div>     
                    </div>
                    <div className="lg:space-y-5 lg:mt-[33%] lg:mr-[20%] md:mt-[99%]  mt-[10%] ml-[10%]  space-y-2">
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
               <div className=" flex flex-col w-full h-full lg:mb-[8%] lg:ml-[5%] ml-[12%] md:ml-[25%] ">
                    <div className="flex rounded-2xl mt-[10%] lg:w-[50%] md:w-[40%] lg:h-[7rem] w-[70%] shadow-xl justify-center items-center space-x-[10%]">
                         <div>
                              <img src="/images/icon2.png" />
                         </div>
                         <div className="">
                              <div className="font-Montserrat  font-semibold lg:text-3xl md:text-2xl text-xl ">
                                   Website Design
                              </div>
                              <div className="  text-right">
                                   0 Projects
                              </div>
                         </div>
                    </div>
                    <div className="pt-[10%]">
                         <div className="flex  rounded-2xl lg:w-[50%] md:w-[40%] lg:h-[7rem] w-[70%] shadow-xl justify-center items-center space-x-[2%]">
                              <div>
                                   <img src="/images/icon3.png" />
                              </div>
                              <div className="">
                                   <div className="font-Montserrat font-semibold lg:text-3xl md:text-2xl text-xl ">
                                        Mobile App Design
                                   </div>
                                   <div className="text-right">
                                        0 Projects
                                   </div>   
                              </div>
                        </div>
                    </div>
                    <div className="pt-[10%]">
                         <div className="flex  rounded-2xl lg:w-[50%]  lg:h-[7rem] md:w-[40%] w-[70%] shadow-xl justify-center items-center space-x-[30%]">
                              <div className="">
                                   <img src="/images/icon4.png" />
                              </div>
                              <div className="">
                                   <div className="font-Montserrat font-semibold lg:text-3xl md:text-2xl font-xl ">
                                        Feedbacks
                                   </div>               
                              </div>
                         </div>
                    </div>            
               </div>
               <div className="flex-col lg:mt-[5%] w-full lg:mr-[10%]">
                    <div className="font-Montserrat font-bold text-4xl md:text-5xl lg:text-7xl ml-[10%]" >
                         What Do I Help?
                    </div>
               <div className="font-Montserrat font-medium lg:text-3xl md:text-2xl text-xl ml-[10%] md:pt-[5%] pt-[10%] w-[80%] lg:w-[92%]">
                    <div> 
                         I help you with finding a solution and solve your problems. I use Next.js, Tailwind CSS and Typescript to make WebApp.
                    </div>     
                    <div className="pt-[5%]">
                         I give my best to fulfill your requirements and make website more user-friendly.
                    </div>
               </div>
               <div className="flex lg:space-x-[30%] space-x-[20%] md:mr-[20%] lg:justify-center md:justify-center pt-[4.5%]">
                    <div className="flex flex-col ml-[10%]">
                         <div className="lg:text-7xl text-5xl text-center" >                                       
                               0+
                         </div>
                         <div className="font-Montserrat">
                              Projects Completed
                         </div>
                    </div>
                    <div className="flex flex-col">
                         <div className="lg:text-7xl text-5xl text-center" >
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