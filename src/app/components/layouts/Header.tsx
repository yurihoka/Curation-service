import personMale from "../../public/personMale.png";
import clock from "../../public/clock.png";

const Header = () => {
  return (
    <div>
      <header className="shadow-md font-sans tracking-wide relative z-50">
        <div className="py-2 bg-black text-white text-left px-10">
          <p className="text-sm">
            <strong className="mx-3">
              Frontend Coding Challenge by bajji, Inc.
            </strong>
            |
            <img
              width="16"
              height="16"
              src={personMale.src}
              alt="person-male"
              className="display: inline"
            />
            <strong className="mx-3">Yurika Hokama</strong>
            |
            <img
              width="16"
              height="16"
              src={clock.src}
              alt="clock"
              className="display: inline"
            />
          </p>
        </div>
      </header>
    </div>
  );
};

export default Header;
