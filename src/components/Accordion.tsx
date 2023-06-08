import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

interface AccordionProps {
  name: string;
  children?: JSX.Element | JSX.Element[];
  className?: string;
  divider?: boolean;
}

const Accordion = ({ name, children, className, divider }: AccordionProps) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="accordion">
      <div
        className={`${className ?? ""} ${
          isShown && "accordion__heading--active"
        } accordion__heading`}
        onClick={() => setIsShown((prev) => !prev)}
      >
        <h4 className="accordion__title">{name}</h4>
        <button className="accordion__trigger">
          <IoIosArrowForward
            className={`accordion__trigger__icon ${
              isShown ? "arrow--down" : ""
            }`}
          />
        </button>
      </div>
      <div
        className={`accordion__content ${
          isShown && "accordion__content--shown"
        }`}
      >
        {children}
      </div>
      {divider && <hr />}
    </div>
  );
};

export default Accordion;
