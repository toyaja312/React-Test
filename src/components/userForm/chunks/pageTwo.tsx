import type { ChangeEvent } from "react";
import styles from "../index.module.css";
import type { IFormData } from "../UserForm";
import { indianStates } from "../../../utilities/constant";
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
        <label htmlFor="country" className={styles.label}>
          Country
        </label>
        <select
          id="country"
          name="country"
          value={formData.country.value}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Select Country</option>
          <option value="us">United States</option>
          <option value="in">India</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
          <option value="au">Australia</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="state" className={styles.label}>
          Select State
        </label>
        <select
          id="state"
          name="state"
          value={formData.country.value}
          onChange={handleChange}
          className={styles.select}
        >
          {indianStates.map((state, i) => (
            <option key={i} value={state.toLowerCase()}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="pinCode" className={styles.label}>
          Pin Code
        </label>
        <input
          type="text"
          id="pinCode"
          name="pinCode"
          value={formData.pinCode.value}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          className={styles.input}
          placeholder="Enter your pincode"
        />
        <p
          className={`${styles.err_msg} ${
            !formData.pinCode.error &&
            formData.pinCode.value &&
            styles.show_err_msg
          }`}
        >
          {formData.pinCode.errorMsg}
        </p>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="education" className={styles.label}>
          Education Level
        </label>
        <select
          id="education"
          name="education"
          value={formData.education.value}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Select Education</option>
          <option value="highschool">High School</option>
          <option value="bachelor">Bachelor's Degree</option>
          <option value="master">Master's Degree</option>
          <option value="phd">PhD</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="occupation" className={styles.label}>
          Occupation
        </label>
        <select
          id="occupation"
          name="occupation"
          value={formData.occupation.value}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Select Occupation</option>
          <option value="student">Student</option>
          <option value="engineer">Engineer</option>
          <option value="designer">Designer</option>
          <option value="tester">Tester</option>
          <option value="manager">Manager</option>
          <option value="other">Other</option>
        </select>
      </div>
    </>
  );
};

export default PageTwo;
