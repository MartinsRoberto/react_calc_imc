function Buttons({type, nameclass, text, action}) {

  const handleAction = (e) => {
    action(e);
  };

  return (
    <button type={type} className={nameclass} onClick={handleAction}>{text}</button>
  )
}

export default Buttons