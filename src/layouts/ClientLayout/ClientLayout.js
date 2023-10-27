import React, { useEffect } from "react";
import { Container, Button, Icon, CardGroup } from "semantic-ui-react";
import { useParams, useHistory, Link } from "react-router-dom";

import { useTable } from "../../hooks";
import "./ClientLayout.scss";
import Menu from "../../pages/Client/Menu";
import Footer from "../../pages/Client/Footer";
import Carousel from "../../pages/Client/Carousel";
import { Cart } from "../../pages/Client/Cart";

export function ClientLayout(props) {
  const { children } = props;
  const { isExistTable } = useTable();
  const { tableNumber } = useParams();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const exist = await isExistTable(tableNumber);
      if (!exist) closeTable();
    })();
  }, [tableNumber]);

  const closeTable = () => {
    history.push("/");
  };

  const goToCart = () => {
    history.push(`/client/${tableNumber}/cart`);
    const listaPedidos = document.getElementById("lista-pedidos");
  
    // Verifica si el elemento existe
    if (listaPedidos) {
      // Realiza un desplazamiento suave hasta el elemento
      listaPedidos.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToOrders = () => {
    history.push(`/client/${tableNumber}/orders`);
    // Busca el elemento con el ID "lista-productos"
    const listaProductos = document.getElementById("lista-productos");
  
    // Verifica si el elemento existe
    if (listaProductos) {
      // Realiza un desplazamiento suave hasta el elemento
      listaProductos.scrollIntoView({ behavior: "smooth" });
    }
  };

  
  

  return (
    <>
    <div id="menu-print1">
      <div className="navbar bg-gray-900 fixed top-0 left-0 z-10">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl" to={`/client/${ClientLayout}`}><img src='https://blogger.googleusercontent.com/img/a/AVvXsEjHCGFTTX1YVieCxlh5iIFRFVzAsa4y32yDZ1F8AErdZM8kGo87lG9-lujmwbO2_1sxc6MdmAWViQ1ClgzqxscvcKhLj0WMzAuwZHHAL6Fyvt2qXTkqDb06KYjNKMwXDiVz5VtC5PuF1MtoGsdew4yO273-lGRHSPlCoXf19R3iKy5trA4Is2ob3Iqc' style={{ width: '190px',height: '50px'}}/></a>
          <p className="animate-bounce font-bold text-2xl text-red-300">Mesa {tableNumber}</p>
        </div>
        <h6>layout clientlayout</h6>
        <div className="flex-none">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator text-2xl text-amber-300"icon onClick={goToCart}>
              <Icon name="shop" />
              </div>  
              {/* <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>             */}
            </label>
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator text-2xl text-green-500" icon onClick={goToOrders}>
            <Icon name="list" />
            </div>              
          </label>
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator text-2xl text-cyan-600"icon onClick={closeTable}>
            <Icon name="sign-out" />
            </div>              
          </label>         
        </div>
      </div>
      </div>

      {/* Inicia Carrusel______pages/Cliente_______________ */}
      <Carousel/>

      {/* este es el contenedor de los producto_____________________________ */}
      <div className="client-layout-bg">
        <Container className="client-layout">
          <div className="client-layout__content">{children}</div>
        </Container>
      </div>

      {/* finaliza contenedor de los producto_____________________________ */}
      {/* <div className="">
        <a className="">{children} no se ajusta al diseño de pantalla layout/clienlayo</a> 
      </div> */}

{/* MENU INICI __________ pages/Cliente__________________________ */}
      <Menu/>

      {/* Inicia footer ___________pages/Cliente_________________ */}
      <Footer/>
    </>
  );
}