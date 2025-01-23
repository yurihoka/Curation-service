import personMale from "../../public/personMale.png";
import clock from "../../public/clock.png";

const Header = () => {
  return (
    <div>
      <header className="shadow-md tracking-wide relative z-50">
        <div className="md:flex md:items-center md:justify-start gap-4 py-2 bg-black text-white text-lef md:px-10 text-xs md:text-sm text-center">
          <div>
            <strong className="md:mx-3">
              Frontend Coding Challenge by bajji, Inc.
            </strong>
          </div>
          <div>
            |
            <img
              width="15"
              height="15"
              src={personMale.src}
              alt="person-male"
              className="display: inline"
            />
            <strong className="md:mx-3">Yurika Hokama</strong>
            |
            <img
              width="15"
              height="15"
              src={clock.src}
              alt="clock"
              className="display: inline"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
