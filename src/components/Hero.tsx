export function Hero() {
  return (
    <section className="hero h-screen relative">
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src="/HeaderVideo.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <h5 className="font-thin text-white z-10 text-2xl md:text-3xl xl:text-4xl mb-6">
          Maßgeschneidertes
        </h5>
        <h1 className="font-thin uppercase text-white z-10 text-[8vw] md:text-[9vw] xl:text-[10vw] leading-[0.9] tracking-[-0.02em]">
          Maschinendesign<br />und Innovation
        </h1>
      </div>
    </section>
  );
}