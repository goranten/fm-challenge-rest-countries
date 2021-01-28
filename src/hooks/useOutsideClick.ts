import { useEffect } from "react";

function useOutsideClick(elementTag: string, cb?: () => void) {
  useEffect(() => {
    function handleOutsideClick(e: MouseEvent): void {
      const element = e.target;
      if (!(element instanceof HTMLElement)) {
        return;
      }
      if (!element.closest(elementTag)) {
        if (cb) {
          cb();
        }
      }
    }
    document.body.addEventListener("click", handleOutsideClick);

    return () => document.body.removeEventListener("click", handleOutsideClick);
  }, [cb, elementTag]);
}

export default useOutsideClick;
