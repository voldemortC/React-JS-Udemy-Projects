import Card from "./Card";
import Button from "./Button";
import ReactDOM from "react-dom";
import "./ErrorModal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.closeModal}></div>;
};

const Modal = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <section className="content">
        <p>{props.message}</p>
      </section>
      <footer className="actions">
        <Button onClick={props.closeModal}>Close</Button>
      </footer>
    </Card>
  );
};

export default function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeModal={props.closeModal} />,
        document.getElementById("backdrop__")
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          closeModal={props.closeModal}
        />,
        document.getElementById("modal__")
      )}
    </>
  );
}
