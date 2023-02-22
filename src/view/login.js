import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <nav className="nav">
        <div className="homeImg">
          <Link to="/">
            <img className="vendiaLogo" src={require("../vendiaLogo.png")} />
          </Link>
        </div>
        <Link to="/" className="title">Vendia Care</Link>
      </nav>

      <div className="login-container">
        <h1>Login</h1>
        <form className="login-form">
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}





