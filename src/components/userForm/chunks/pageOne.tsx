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

const PageOne = (props: IPageOneProps) => {
  const { formData, handleChange } = props;

  return (
    <>
      <div className={styles.nameGroup}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName" className={styles.label}>
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName.value}
            onChange={handleChange}
            required
            className={styles.input}
            placeholder="Enter first name"
          />

          <p
            className={`${styles.err_msg} ${
              !formData.firstName.error &&
              formData.firstName.value &&
              styles.show_err_msg
            }`}
          >
            {formData.firstName.errorMsg}
          </p>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="lastName" className={styles.label}>
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName.value}
            onChange={handleChange}
            required
            className={styles.input}
            placeholder="Enter last name"
          />
          <p
            className={`${styles.err_msg} ${
              !formData.lastName.error &&
              formData.lastName.value &&
              styles.show_err_msg
            }`}
          >
            {formData.lastName.errorMsg}
          </p>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="mobile" className={styles.label}>
          Mobile Number *
        </label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile.value}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          className={styles.input}
          placeholder="Enter your phone number"
        />
        <p
          className={`${styles.err_msg} ${
            !formData.mobile.error &&
            formData.mobile.value &&
            styles.show_err_msg
          }`}
        >
          {formData.mobile.errorMsg}
        </p>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password.value}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder="Enter your password"
        />
        <p
          className={`${styles.err_msg} ${
            !formData.password.error &&
            formData.password.value &&
            styles.show_err_msg
          }`}
        >
          {formData.password.errorMsg}
        </p>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="confirmPassword" className={styles.label}>
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword.value}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder="Confirm your password"
        />
        <p
          className={`${styles.err_msg} ${
            !formData.confirmPassword.error &&
            formData.confirmPassword.value &&
            styles.show_err_msg
          }`}
        >
          {formData.confirmPassword.errorMsg}
        </p>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="state" className={styles.label}>
          Select State
        </label>
        <select
          id="state"
          name="state"
          value={formData.state.value}
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
    </>
  );
};

export default PageOne;
