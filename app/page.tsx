import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
    <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto">
      <div className="mr-8">
        <h1 className="text-5xl font-bold text-white">
          HI. I'm Hannah.
        </h1>
        <h2 className="text-2xl text-gray-600 mt-2">
          SOFTWARE ENGINEER
        </h2>
        <p className="mt-4 text-white max-w-md">
          I'm a rising senior and 1st year master's student at Stanford studying CS.
          My career passion lies at the intersection of AI and health technology, and I have experience
          in both AI model development and full stack engineering.
        </p>
        <button className="btn btn-primary mt-6">
          Contact Me
        </button>
      </div>

      {/* Headshot Image */}
      <div className="flex-shrink-0 mt-6 ml-4 md:mt-0 md:mr-8">
        <Image
          src="/images/headshot.png" 
          alt="Hannah's Headshot"
          width={300} 
          height={300} 
          className="rounded-full"
        />
      </div>
    </div>
  </div>
    
  );
}
