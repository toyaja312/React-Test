import type { ChangeEvent } from "react";
import styles from "../index.module.css";
import type { IFormData } from "../UserForm";
interface IPageOneProps {
  formData: IFormData;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
}

const PageTwo = (props: IPageOneProps) => {
  const { formData, handleChange } = props;
  return (
    <>
      <div className={styles.formGroup}>
        <label htmlFor="address" className={styles.label}>
          Address
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address.value}
          onChange={handleChange}
          rows={3}
          className={styles.textarea}
          placeholder="Enter your address"
        />
        <p
          className={`${styles.err_msg} ${
            !formData.address.error &&
            formData.address.value &&
            styles.show_err_msg
          }`}
        >
          {formData.address.errorMsg}
        </p>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Gender</label>
        <div className={styles.radioGroup}>
          <label className={styles.radioOption}>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender.value === "male"}
              onChange={handleChange}
            />
            <span>Male</span>
          </label>
          <label className={styles.radioOption}>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender.value === "female"}
              onChange={handleChange}
            />
            <span>Female</span>
          </label>
          <label className={styles.radioOption}>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={formData.gender.value === "other"}
              onChange={handleChange}
            />
            <span>Other</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default PageTwo;
