import { FC, ReactElement, useEffect, useState } from "react";
import styles from "./dropdown.module.css";
import { ReactComponent as ArrowDownIcon } from "../../assets/icons/arrow-down.svg";
import DropDownList from "./dropdown-list/DropdownList";
import { wait } from "../../utils";
import { Option } from "../../types";

interface DropdownProps {
  options: Option[];
}

const Dropdown: FC<DropdownProps> = ({ options }): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  async function handleOptionClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const value = e.currentTarget.textContent;
    if (!value) {
      return;
    }

    setSelected(value);
    await wait(100);
    toggleIsOpen();
  }

  useEffect(() => {
    if (selected.length > 0) {
      console.log("Request for", selected);
    }
  }, [selected]);

  return (
    <>
      <div className={styles.wrapper}>
        <button onClick={toggleIsOpen} className={styles.header}>
          <p>Filter by Region...</p>
          <ArrowDownIcon />
        </button>
        {isOpen && (
          <DropDownList
            handleOptionClick={handleOptionClick}
            options={options}
            close={toggleIsOpen}
          />
        )}
      </div>
    </>
  );
};

export default Dropdown;
