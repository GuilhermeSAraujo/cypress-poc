import { useState } from "react";

interface IModalAddPerson {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  addPerson: (name: string) => void;
}

export function ModalAddPerson({
  modalOpen,
  addPerson,
  setModalOpen,
}: IModalAddPerson) {
  const [newPersonName, setNewPersonName] = useState("");

  function createPerson() {
    if (newPersonName) {
      addPerson(newPersonName);
      setNewPersonName("");
      setModalOpen(false);
    }
  }

  return (
    <dialog
      open={modalOpen}
      style={{
        padding: 10,
        width: "25%",
        zIndex: 2,
        border: "1px solid grey",
        borderRadius: "5%",
      }}
    >
      <input
        type="text"
        placeholder="Nome"
        value={newPersonName}
        onChange={(e) => setNewPersonName(e.target.value)}
        style={{
          width: "50%",
          marginRight: "10px",
          height: "28px",
          fontSize: "15px",
        }}
      />
      <button onClick={createPerson}>Adicionar</button>
    </dialog>
  );
}
