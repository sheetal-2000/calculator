import styles from "./TextArea.module.css";

function TextArea({ displayValue }) {
  return (
    <input
      type="text"
      className={styles.display}
      value={displayValue}
      readOnly
    />
  );
}

export default TextArea;
