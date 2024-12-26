import React from 'react';

export default function Feature (){
    return(
        <div>
            <section className='py-8 bg-neutral-50 mb-40'>
                <h2 className='text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out
                transform hover:translate-y-[-5px] hover:text-black text-red-600'>
                     Syeda Manahil :  Navigation the Secrets of Technology in Teach Chronicles
                </h2>
                <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
                My name is Syeda Manahil Atif, and I am currently in matric. I have a keen interest in computers, and I aspire to become a web developer. I love the idea of creating websites and learning new technologies that can help me build amazing online experiences. I believe that with dedication and practice, I can achieve my goal and make a mark in the tech world!

                </p>
 <div className="mx-auto max-w-7xl px-5">
    <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">Exploring Our Categories </h1>

    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-u delay-100">
        {[
            "Technology" ,
            "Artifical Intelligence",
            "Html",
            "Next Js",
            "Web Develoment",

        ].map((category, index)=> (
            <div key={index}
            className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600" >
                <p className="text-center text-lg font-semibold">{category}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out ga-">

                </div>

            </div>
        ))}

    </div>

 </div>
            </section>
        </div>
    );
}
