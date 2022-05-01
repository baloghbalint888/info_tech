import computer from "../img/computer.png";
function Error() {
  return (
    <div className="err">
      <p className="display-1 h1error">404</p>
      <img className="" src={computer} alt="" />
      <p>page not found!</p>
    </div>
  );
}

export default Error;
