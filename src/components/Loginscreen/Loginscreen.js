import "./Loginscreen.css";

const Loginscreen = () => {
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt=""
          className="loginScreen__logo"
        />
        <button className="loginScreen__button">Sign IN </button>
        <div className="loginScreen__gradient"></div>
        <div className="loginScreen__body">
          <>
            <h1>Unlimited flims, TV Programs and more,</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
          </>
        </div>
      </div>
    </div>
  );
};

export default Loginscreen;
