import React from 'react';
import { map } from 'lodash'

export function Menu(props) {
  const { products } = props;

 
  const handlePrint = () => {
    const printContent = document.getElementById('menu-print1');
    const printContent1 = document.getElementById('menu-print');
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent.innerHTML + printContent1.innerHTML;
    window.print();
    document.body.innerHTML = originalContent;
  };

  return (
    <>
    <div id="menu-print">
      <section className="container mx-auto">
      <h2 className="pt-10 pb-5 text-4xl font-black text-center text-white sm:text-4xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-400">
          Nuestro Menú
          </span>
      </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
          <div className="menu-restaurante bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: 'url(https://img.freepik.com/free-vector/abstract-black-texture-background-hexagon_206725-413.jpg)'
          }}
          >
            <h3 className="text-xl font-bold bg-white p-1 rounded-full text-center ">ENTRADAS</h3>
            <hr className="my-2" />
            <div className="flex font-sans">              
              <form className="flex-auto p-6">
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400  ">PATACONES CON HOGADO</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">=====</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 7.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">PORCION DE RELLENA</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">=======</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 4.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">EMPANADAS DE PIPIAN</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">=======</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 300</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">PORCION DE BOFE AHUMADO</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">=</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 4.000</div>
                </div>
              </form>
            </div>
            
            <div className="flex font-sans">              
              <form className="flex-auto p-6">
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400  ">Nota:</h1>
                  <h1 className="flex-auto text-lg font-serif  text-red-500">TODOS LOS PLATOS VIENEN ACOMPAÑADOS DE SANCOCHO, ARROZ, ENSALADA, PAPA AL VAPOR, PATACON Y LIMONADA
                    </h1>
                </div>
                
                
                
              </form>
            </div>
          </div>
{/* ---------------------------------------------------------- */}
          <div className="menu-restaurante bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: 'url(https://i.pinimg.com/originals/cc/02/90/cc0290c0b89b7657d4b3854e4e6866f7.png)'
          }}
          >
            <h3 className="text-xl bg-white p-1 rounded-full text-center font-bold">ESPECIALIDADES</h3>
            <hr className="my-2" />
            <div className="flex font-sans">
              <form className="flex-auto p-6">
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">SANCOCHO DE GALLINA</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">========</h1>
                  <div className="text-2xl font-serif  text-orange-400  ">$ 18.000</div>
                </div>
                
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">SANCOCHO DE ESPINAZO</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">========</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 18.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">PICADA LEÑOS PARA PERSONA</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">===</h1><div className="text-2xl font-serif  text-orange-400 ">$ 35.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">BANDEJA PAISA</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">============</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 28.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">BANDEJA LEÑOS</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">===========</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 28.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">PLATO MONTANERO</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">=========</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 28.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">FRIJOLES CON COSTILLA</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">=======</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 26.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">LOMO ASADO A LA PLANCHA</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">====</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 26.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">FILETE DE POLLO ASADO</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">=======</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 26.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">POLLO O CERDO EN <br/>SALSA DE CHAMPIRONES</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">========</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 26.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">CARNE AHUMADA DE CERDO</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">===</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 26.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">COSTILLA AHUMADA DE CERDO</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">==</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 28.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">CHULETA DE CERDO O POLLO</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">===</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 26.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">TILAPIA FRITA</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">==============</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 20.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">TILAPIA EN BISTEC</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">===========</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 28.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">TRUCHA AHUMADA</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">==========</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 26.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">COSTILLA BBQ</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">=============</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 20.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">BANDEJA MIXTA 2 CARNES</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">====</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 26.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">BANDEJA MIXTA 3 CARNES</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">====</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 28.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">SOBREBARRIGA A LA CRIOLLA</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">===</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 28.000</div>
                </div>
              </form>
            </div>
          </div>
{/* --------------------------------------------------------------- */}
          <div className="menu-restaurante bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: 'url(https://img.freepik.com/premium-photo/hot-black-coffee-white-marble-cup-paste-reflected-black-glass-floor_44271-56.jpg)'
          }}
          >
            <h3 className="text-xl  bg-white p-1 rounded-full text-center font-bold">BEBIDAS</h3>
            <hr className="my-2" />
            <div className="flex font-sans">
              <form className="flex-auto p-6">
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">JUGOS NATURALES EN AGUA</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">=====</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 5.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">JUGOS NATURALES EN LECHE</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">=====</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 6.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">JARRA JUGO AGUA</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">========</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 8.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">JARRA JUGO LECHE</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">========</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 10.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">LIMONADA NATURAL</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">========</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 4.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">GASEOSA PERSONAL</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">========</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 4.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">BOTELLA AGUA</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">========</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 2.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">CERVEZA POKER</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">========</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ 5.000</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">CAFE</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">========</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ ....</div>
                </div>
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">CHOCOLATE</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">========</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ ....</div>
                </div>
             
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-serif text-cyan-400 ">AROMATICAS</h1>
                  <h1 className="flex-auto text-lg font-serif  text-lime-200">========</h1>
                  <div className="text-2xl font-serif  text-orange-400 ">$ ....</div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="btn btn-outline btn-success"
            onClick={handlePrint}
          >
            Imprimir
          </button>
        </div>
      </section>
      </div>
    </>
  );
};

export default Menu;