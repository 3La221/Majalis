import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/assets/islamic_hero.jpg"
        alt="Islamic geometric pattern"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-primary z-10 opacity-80"> </div> {/* Change here */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="xl:text-8xl md:text-6xl font-bold text-white mb-4">
            إِذَا مَرَرْتُمْ بِرِيَاضِ الْجَنَّةِ فَارْتَعُوا
          </h1>
          <p className="text-xl md:text-2xl text-white mt-8">
            أخرجه الترمذي (3510)، وأحمد (12545)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
