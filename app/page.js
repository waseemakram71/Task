import Image from 'next/image';
import Hero from '../public/images/Hero.png';
import Categories from "@/src/components/Categories";
import Skills from "@/src/components/Skills";
import Posts from "@/src/components/Posts";
import List from "@/src/components/List";

export default function Home() {
  return (
    <main>
      <div className="w-screen flex flex-col md:flex-row items-center justify-center p-8">
        <div className="md:w-3/5 md:flex items-center"> {/* Centering content */}
          <div className="md:mr-10">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              What's Up Teach?
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-500">
              Keep yourself updated with the latest happenings in the tech industry with insight into what happens at Geeks of Kolachi.
            </p>
          </div>
          <div>
            <Image
              src={Hero}
              width={900}
              height={700}
              objectFit="contain"
              alt="hero image"
            />
          </div>
        </div>
      </div>

    
    </main>
  );
}












