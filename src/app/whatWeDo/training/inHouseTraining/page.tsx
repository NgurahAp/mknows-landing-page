export default function Training() {
  return (
    <main>
      <section
        className="md:min-h-[60vh] min-h-[30vh] md:mt-[4rem] mt-[4rem] bg-cover bg-no-repeat bg-center max-w-screen flex items-center"
        style={{
          backgroundImage: "url('/assets/bootcamp/hero-image-bootcamp.png')",
        }}
      >
        <div className="w-1/2">
          <div className="md:pl-20 pl-5 flex flex-col justify-center">
            <h1 className="font-bold text-xl md:text-[35px] md:leading-[48px] text-left">
              Inhouse Training
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
