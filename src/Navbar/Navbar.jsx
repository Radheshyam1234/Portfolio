import "./Navbar.css";
// import { HashLink as Link } from "react-router-hash-link";

export const Navbar = () => {
  return (
    <>
      <div className="nav-wrapper">
        <div className="nav-left">
          <div className="nav-item">Radheshyam</div>
        </div>

        <div className="nav-right">
          <div className="nav-item">
            <a href="https://github.com/Radheshyam1234">
              <span class="nav-icon">
                <i class="fab fa-github"></i>
              </span>
            </a>
          </div>

          <div className="nav-item">
            <a href="https://www.linkedin.com/in/radheshyam-kumar-4738191aa/">
              <span class="nav-icon">
                <i class="fab fa-linkedin-in"></i>
              </span>
            </a>
          </div>
          <div className="nav-item">
            <a href="https://twitter.com/Radhesh13644055">
              <span class="nav-icon">
                <i class="fab fa-twitter"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
