import React from 'react'
import rectangle_1 from '../../assets/Rectangle_1.png';
import rectangle_2 from '../../assets/Rectangle_2.png'; 

const Carousel = () => {
  const img =
    'https://img.restaurantguru.com/rad4-Benjamin-Steakhouse-Prime-meals-2022-10-7.jpg';
  return (
    <>
      {/* <Helmet> */}
        <title>Inicio</title>
      {/* </Helmet> */}

      <div className="bg-zinc-900 scroll-smooth">
        <section
          className="pt-40 bg-[#211e29] relative w-full overflow-hidden"
          style={{
            clipPath: 'polygon(25% 0%, 100% 0, 100% 95%, 0 100%, 0 100%, 0 0)'
          }}
        >
          <div className="pb-52 grid grid-cols-2 container mx-auto lg:px-32 px-8 lg:gap-0 gap-28">
            <div className="flex flex-col lg:col-span-1 col-span-2 gap-4">
              <h1 className="lg:text-5xl text-3xl font-bold text-orange-500">
              Prepárate para lo mejor
                <br />
                Descubre el deleite de la variedad en cada plato
              </h1>
              <h1 className="xl:text-md text-md font-semi-boldn text-blue-400">
              Imposible resistirse a un solo bocado. Sumérgete en el deleite de los alimentos, descubre los sabores auténticos que nos brinda la naturaleza. Solo tienes que tomar asiento, porque el secreto está servido en la mesa.</h1>
              {/* <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="14"
                  placeholder="Buscar por mi identificacion"
                  className="px-4 py-2 w-72 rounded-md border-[transparent] outline-none bg-zinc-50"
                />
              </div> */}
              <div className="flex flex-row gap-6">
                <button
                  type="button"
                  className="shadow-zinc-900/50 shadow-lg bg-black text-white py-3 rounded-md font-bold px-5 lg:text-sm text-xs"
                >
                  Comenzar Ahora!
                </button>
                <button type="button">
                  <h1 className="font-bold border-b-2 border-zinc-600 lg:text-sm text-xs">
                    Como funciona?
                  </h1>
                </button>
              </div>
            </div>
            <div className="flex lg:col-span-1 col-span-2 gap-4 items-center lg:justify-end justify-center relative">
              <div
                className="absolute p-32 bg-[#ECC5FB] lg:right-[120px] lg:top-2 -top-[50px] right-[180px] rounded-full"
                style={{ filter: 'blur(60px)' }}
              />
              <div
                className="absolute p-28 bg-[#FFF6BF] lg:-bottom-16 -bottom-16 -right-0 rounded-full lg:-right-16"
                style={{ filter: 'blur(30px)' }}
              />
              <img
                src={img}
                alt="img"
                className="relative xl:w-[300px] w-[400px] h-[320px] xl:h-[300px] rounded-[200px] xl:rounded-full object-cover"
              />
              <div className="w-32 absolute py-4 px-6 backdrop-saturate-50 bg-[#ca7d99]/80 backdrop-blur-sm rounded-md lg:right-[250px] lg:top-2">
                <h1 className="font-bold text-[12px] text-zinc-100 text-center">
                  Tiempo Real
                </h1>
                <h1 className="font-bold text-[10px] text-zinc-700 text-center">
                  Asistencia en tiempo real
                </h1>
              </div>
              <div className="w-32 absolute py-4 px-6 backdrop-saturate-50 bg-[#ca7d99]/80 backdrop-blur-sm rounded-md lg:top-16 lg:-right-16">
                <h1 className="font-bold text-[12px] text-zinc-100 text-center">
                  Seguridad                </h1>
                <h1 className="font-bold text-[10px] text-zinc-700 text-center">
                  Seguridad de tus datos
                </h1>
              </div>
              <div className="w-32 absolute py-4 px-6 backdrop-saturate-50 bg-[#ca7d99]/80 backdrop-blur-sm rounded-md lg:-bottom-8 lg:right-[200px]">
                <h1 className="font-bold text-[12px] text-zinc-100 text-center">
                  Facilidad
                </h1>
                <h1 className="font-bold text-[10px] text-zinc-700 text-center">
                  Facilidad de uso
                </h1>
              </div>
            </div>
          </div>
          
        </section>
        <section>
          {/* <Tickets /> */}
        </section>
      </div>
      <div className="z-0 flex flex-row items-start justify-center w-screen h-screen pt-20 -mb-16  lg:mb-20 lg:w-full lg:h-96 lg:pt-0">
          <img className="absolute left-0 lg:left-auto lg:-mt-64" src={rectangle_1} alt=""/><img className="absolute right-0 lg:right-auto lg:ml-24 lg:-mt-16" src={rectangle_2} alt=""/>
        </div>
       

      
    </>
  )
}

export default Carousel
