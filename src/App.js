import { useEffect, useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup";
import ModalConfirmation from "./components/ModalConfirmation";

function App() {
  const [receipts, setReceipts] = useState([]);
  const [creditNotes, setCreditNotes] = useState([]);

  // retrieve the data from the API
  useEffect(() => {
    fetch("https://recruiting.api.bemmbo.com/invoices/pending")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const receivedReceipts = data.filter(
          (item) => item.type === "received"
        );
        setReceipts(receivedReceipts);

        const creditNotesData = data.filter(
          (item) => item.type === "credit_note"
        );
        setCreditNotes(creditNotesData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // define the state for necessary data
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [selectedCreditNote, setSelectedCreditNote] = useState(null);
  const [modalState, setModalState] = useState(false);

  // define the function to handle the modal state
  const handleModalState = () => {
    setModalState(!modalState);
    if (modalState) {
      setSelectedCreditNote(null);
      setSelectedReceipt(null);
    }
  };

  // Filter credit notes by selected receipt
  const filteredCreditNotes = selectedReceipt
    ? creditNotes.filter((note) => note.reference === selectedReceipt.id)
    : [];

  return (
    <div className="p-6 m-1 shadow-lg md:p-12 App md:m-6">
      <div className="pt-4 text-center">
        <h1 className="text-3xl font-semibold text-[#5579EC]">
          <span className="text-black">Bemmbo</span> test
        </h1>
        <hr className="mt-4" />
      </div>
      <ListGroup
        title="Selecciona una factura"
        items={receipts}
        onSelectItem={(receipt) => {
          setSelectedReceipt(receipt);
          setSelectedCreditNote(null); // Limpia la nota de crédito al cambiar de factura
        }}
        selectedItem={selectedReceipt}
      />

      {selectedReceipt && (
        <>
          <ListGroup
            title="Selecciona una nota de crédito"
            items={filteredCreditNotes}
            onSelectItem={setSelectedCreditNote}
            selectedItem={selectedCreditNote}
          />
        </>
      )}

      {selectedCreditNote && (
        <div className="flex justify-center">
          <button
            className="bg-[#5579EC] px-4 py-2 rounded-md text-white"
            onClick={handleModalState}
          >
            Asignar
          </button>
          {modalState && (
            <ModalConfirmation changeModalState={handleModalState} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
