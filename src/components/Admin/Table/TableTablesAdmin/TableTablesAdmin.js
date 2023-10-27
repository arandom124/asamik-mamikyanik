import React, { useState } from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import { ModalBasic } from "../../../Common";
import QRCode from "qrcode.react";

import "./TableTablesAdmin.scss";
// corresponde a las mesas_________________________-
export function TableTablesAdmin(props) {
  const { tables, updateTable, deleteTable } = props;

  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);

  const openCloseModal = () => setShowModal((prev) => !prev);

  const showQr = (table) => {
    setContentModal(
      <div style={{ textAlign: "center" }}>
        <QRCode value={`${window.location.origin}/client/${table.number}`} size={300} />
      </div>
    );
    openCloseModal();
  };

  return (
    <>
      <div className="grid grid-cols-5 gap-5">
        {map(tables, (table, index) => (
          <div className="card w-55 bg-neutral text-neutral-content" key={index}>
            <div className="card-actions justify-end">
              <div className="card-body items-center text-center">
                <h2 className="card-title text-indigo-100">{table.number}</h2>
                <p className="text-cyan-600">MESA.</p>

                <Actions
                  table={table}
                  updateTable={updateTable}
                  deleteTable={deleteTable}
                  showQr={showQr}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ModalBasic
        show={showModal}
        onClose={openCloseModal}
        title="Codigo QR"
        size="mini"
        children={contentModal}
      />
    </>
  );
}

function Actions({ table, updateTable, deleteTable, showQr }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <Button icon onClick={() => showQr(table)}>
        <Icon name="qrcode" />
      </Button>
      <Button icon onClick={() => updateTable(table)}>
        <Icon name="pencil" />
      </Button>
      <Button icon negative onClick={() => deleteTable(table)}>
        <Icon name="close" />
      </Button>
    </div>
  );
}
