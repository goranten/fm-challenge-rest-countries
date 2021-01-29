import { FC, RefObject } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import styles from "./dropdown-list.module.css";

interface DropDownListProps {
  options: string[];
  handleOptionClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  close(): void;
  id: string;
  listRef: RefObject<HTMLLIElement>;
}

const DropDownList: FC<DropDownListProps> = ({
  options,
  handleOptionClick,
  close,
  id,
  listRef,
}) => {
  useOutsideClick("ul.dropdown", close);

  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <ul id={id} role="list" className={`${styles.options} dropdown`}>
      {options.map((option, i) => {
        // Set the ref on the first list element
        if (i === 0) {
          return (
            <li ref={listRef} key={option} className={styles.option}>
              <button onClick={handleOptionClick} type="button">
                {option}
              </button>
            </li>
          );
        }
        return (
          <li key={option} className={styles.option}>
            <button onClick={handleOptionClick} type="button">
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default DropDownList;
