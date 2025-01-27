import personMale from "../../public/personMale.png";
import clock from "../../public/clock.png";

export default function Header() {
  return (
    <header className="shadow-md tracking-wide fixed top-0 left-0 w-full z-50">
      <div className="bg-black text-white text-xs md:text-sm">
        <div className="mx-auto max-w-screen-xl py-2 flex flex-col md:flex-row items-center justify-left">
          <div>
            <strong>Frontend Coding Challenge by bajji, Inc.</strong>
          </div>
          <div className="flex items-center mt-2 md:mt-0">
            <span className="mx-2">|</span>
            <img
              width="15"
              height="15"
              src={personMale.src}
              alt="person-male"
              className="inline"
            />
            <strong className="md:mx-3">Yurika Hokama</strong>
            <span className="mx-2">|</span>
            <img
              width="15"
              height="15"
              src={clock.src}
              alt="clock"
              className="inline"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
