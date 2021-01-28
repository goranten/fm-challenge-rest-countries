import { FC } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { Option } from "../../../types";
import styles from "./dropdown-list.module.css";

interface DropDownListProps {
  options: Option[];
  handleOptionClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  close(): void;
}

const DropDownList: FC<DropDownListProps> = ({
  options,
  handleOptionClick,
  close,
}) => {
  // TODO: Handle Focus

  useOutsideClick("ul.dropdown", close);

  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <ul role="list" className={`${styles.options} dropdown`}>
      {options.map((option) => (
        <li key={option.value} className={styles.option}>
          <button onClick={handleOptionClick} type="button">
            {option.value}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DropDownList;
