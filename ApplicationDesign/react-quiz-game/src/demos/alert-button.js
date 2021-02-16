import "./alert-button.css";

function AlertButton({buttonText = "Alert", alertMessage }) {
  const triggerAlert = () => alert(alertMessage);

  return (
    <button className="alert-button" onClick={triggerAlert}>
      {buttonText}
    </button>
  );
}
export default AlertButton;
