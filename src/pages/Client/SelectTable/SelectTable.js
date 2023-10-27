import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

import { useTable } from "../../../hooks";
import "./SelectTable.scss";

export function SelectTable(props) {
  const { history } = props;

  const [tableNum, setTableNum] = useState(null);
  const [error, setError] = useState(null);
  const { isExistTable } = useTable();

  const onSubmit = async () => {
    setError(null);
    if (tableNum === null) {
      setError("No has introducido ninguna mesa");
    } else {
      const exist = await isExistTable(tableNum);
      if (exist) history.push(`/client/${tableNum}`);
      else setError("El número de la mesa no existe");
    }
  };

  return (
    <>
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.restaurantguru.com/r806-Lenos-del-Sur-facade.jpg")` }}>
        <div className="hero-overlay bg-opacity-90"></div> {/*  esto mantiene la opcidad */}
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold text-orange-500">Bienvenid@s </h1>
            <a className=" text-red-100 text-xl"><img src='https://blogger.googleusercontent.com/img/a/AVvXsEjHCGFTTX1YVieCxlh5iIFRFVzAsa4y32yDZ1F8AErdZM8kGo87lG9-lujmwbO2_1sxc6MdmAWViQ1ClgzqxscvcKhLj0WMzAuwZHHAL6Fyvt2qXTkqDb06KYjNKMwXDiVz5VtC5PuF1MtoGsdew4yO273-lGRHSPlCoXf19R3iKy5trA4Is2ob3Iqc' style={{ width: '360px',height: '92px'}}/> </a>
              <h1 className="mb-5 text-4xl font-bold text-orange-500">Restaurante Leños del Sur</h1>
              <p className="mb-5 text-2xl text-lime-500">Introduce tu numero de mesa.</p>
              <Form onSubmit={onSubmit}>
                  <Form.Input
                    placeholder="Ejemplo: 1, 2, 3"
                    type="number"
                    onChange={(_, data) => setTableNum(data.value)}
                  />
                  <button className="btn btn-outline btn-success text-2xl" type="submit" fluid>Entrar</button>          
                </Form>
                <p className="select-table__content-error text-2xl">{error}</p>      
            </div>
          </div>
        </div>
    </>
  );
}