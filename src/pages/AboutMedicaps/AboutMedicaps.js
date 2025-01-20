    import React from 'react'
    import StartHero from '../../components/StartHero/StartHero'
    import Footer from '../../components/Footer/Footer'
    import medicapsLogo from '../../img/medicaps_logo.png'
    import aboutMedicapsGallery from '../../img/aboutMedicapsGallery.jpeg'
    import aboutMedi1 from '../../img/aboutMedi1-min.jpg'
    import aboutMedi2 from '../../img/aboutMedi2-min.jpg'
    import aboutMedi3 from '../../img/aboutMedi3-min.jpg'
    import aboutMedi4 from '../../img/aboutMedi4-min.jpg'
    import Nav from '../../components/Navbar/Nav'


    function AboutMedicaps() {
        return (
            <>
                <Nav />
                {/* <StartHero /> */}
                <section className="text-gray-600 body-font ">
                    <div className="container px-5 pt-8 pb-4 mx-auto bg-[#E3F0FB] mt-4">
                        <div className="w-full mx-auto text-left">

                            <div className="flex items-center mb-3 mr-8 justify-center" >

                                <h1 className='sm:text-4xl text-xl font-black text-black sm:ml-12 bodyFont2'>ABOUT MEDI-CAPS UNIVERSITY
                                </h1>
                                <img className='ml-4' src={medicapsLogo} alt="" width={100} />
                            </div>

                            {/* IMAGE SECTION */}

                            <section className="text-gray-600 body-font">
                                <div className="container px-5 py-8 mx-auto flex flex-wrap">
                                    <div className="flex flex-wrap md:-m-2 -m-1">
                                        <div className="flex flex-wrap w-1/2">
                                            
                                            <div className="md:p-2 p-1 w-1/2">
                                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://cache.careers360.mobi/media/presets/500X333/colleges/social-media/media-gallery/1760/2019/7/8/Auditorium%20of%20Medi-Caps%20University%20Indore_Auditorium.jpg" />
                                            </div>
                                            <div className="md:p-2 p-1 w-1/2">
                                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={aboutMedi3} />
                                            </div>
                                            <div className="md:p-2 p-1 w-1/2">
                                                <img alt="gallery" className="w-full h-full object-cover object-center block" src={aboutMedicapsGallery} />
                                            </div>
                                            <div className="md:p-2 p-1 w-1/2">
                                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={aboutMedi1} />
                                            </div>
                                            {/* <div className="md:p-2 p-1 w-full">
                                                
                                            </div> */}
                                        </div>
                                        <div className="flex flex-wrap w-1/2">
                                        <div className="md:p-2 p-1 w-1/2">
                                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={aboutMedi4} />
                                            </div>
                                            <div className="md:p-2 p-1 w-1/2">
                                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={aboutMedi2} />
                                            </div>
                                            <div className="md:p-2 p-1 w-1/2">
                                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.shiksha.com/mediadata/images/1646118831php5BYvIx.jpeg" />
                                            </div>
                                            
                                            <div className="md:p-2 p-1 w-1/2">
                                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcN6SeANT_aCemZbHeeXvlwdkXCm_Ua5xiR6ZM1KTCA3cs608pwv0yJqMQ6Eh2-HQ_JGo&usqp=CAU" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <p className="leading-relaxed  mt-12 sm:text-xl text-sm font-semibold text-black">Medi-Caps University is one of the brand name in the arena of technical education and contributing in making Indore an educational hub. Since its inception in July 2000, the group consistently aims at creating an ideal ambiance for budding technocrats and helping them grow like professionals. The main strength of Medi-Caps University is its highly qualified faculty. We have optimal blend of academic brilliance and industry exposure, which is supplemented by highly specialized visiting faculty and industry experts, Medical senior professionals from various segments of different industry/ business houses. This helps in refining the works, candidature of our students from different fields.</p>
                        </div>
                        <div className="text-center">
                            <span className="inline-block h-1 w-24 mt-8rounded bg-[#016698] mt-8 mb-6"></span>
                        </div>
                        <section className="text-gray-600 body-font ">
                            <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
                                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                    <h1 className="sm:text-4xl text-3xl mb-8 font-black text-black bodyFont2">VISION
                                    </h1>
                                    <p className="mb-8 leading-relaxed text-black sm:text-xl font-semibold text-sm text-justify">Be an internationally acclaimed University recognised for its excellent teaching, research, innovation, outreach and creating top class technocrats and professionals who can serve mankind as multi skilled global citizens.</p>

                                </div>


                                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                    <img className="object-cover object-center rounded " alt="hero" src="https://www.medicaps.ac.in/sitefront/university/assets/img/vision-img.jpg" />
                                </div>
                            </div>
                            <div className="text-center mt-0">
                                <span className="inline-block h-1 w-24 rounded bg-[#016698] mb-6"></span>
                            </div>
                        </section>
                        <section className="text-gray-600 body-font ">
                            <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
                                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                    <h1 className="sm:text-4xl text-3xl mb-8 font-black text-black bodyFont2">MISSION
                                    </h1>
                                    <p className="mb-8 leading-relaxed text-black sm:text-xl font-semibold text-sm">
                                        <ul>
                                                <li># Establish state-of-the-art facilities for world class education and research.</li>
                                                <li># Conduct scholarly research and creative endeavors that impact quality of life.</li>
                                                <li># Attract quality staff and students to cater for diverse needs and preferences and widen participation.</li>
                                                <li># Build a foundation for students to be successful at all levels through high-quality, innovative programs.</li>
                                                <li># Collaborate with institute, industry, and society to address current issues through research and align curriculum.</li>
                                                <li># Involve in societal outreach programs to identify concerns and provide sustainable ethical solutions.</li>
                                                <li># Encourage life-long learning and team-based problem solving through an enabling environment.</li>       
                                        </ul>
</p>

                                </div>


                                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                    <img className="object-cover object-center rounded " alt="hero" src="https://res.cloudinary.com/gumlapolytechnic/image/upload/v1592215842/General/mission.png" />
                                </div>
                            </div>
                            <div className="text-center mt-0">
                                <span className="inline-block h-1 w-24 rounded bg-[#016698] mb-6"></span>
                            </div>
                        </section>
                    </div>
                </section>

                <Footer />
            </>
        )
    }

    export default AboutMedicaps