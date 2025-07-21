// UserForm.tsx
import React, { useState, type ChangeEvent } from "react";
import styles from "./index.module.css";
import PageOne from "./chunks/pageOne";
import PageTwo from "./chunks/pageTwo";
import PageThree from "./chunks/pageThree";

// Type definitions
interface IField {
  value: string;
  error: boolean;
  errorMsg: string;
}
export interface IFormData {
  firstName: IField;
  lastName: IField;
  mobile: IField;
  password: IField;
  confirmPassword: IField;
  address: IField;
  gender: IField;
  country: IField;
  occupation: IField;
  birthDate: IField;
  education: IField;
  pinCode: IField;
}

type InputType =
  | "firstName"
  | "lastName"
  | "mobile"
  | "password"
  | "birthDate"
  | "confirmPassword"
  | "pinCode";

const pages = [PageOne, PageTwo, PageThree];
const initialFormData = {
  firstName: {
    value: "",
    error: false,
    errorMsg: "Name must be 3 character and must be alphabet",
  },
  lastName: {
    value: "",
    error: false,
    errorMsg: "Name must be 3 character and must be alphabet",
  },
  mobile: {
    value: "",
    error: false,
    errorMsg: "Phone number must be Indian 10-digit number starting with 6-9",
  },
  password: {
    value: "",
    error: false,
    errorMsg: "6-20 char, letters ,numbers and special symbol",
  },
  confirmPassword: {
    value: "",
    error: false,
    errorMsg: "Password Does not match",
  },
  pinCode: { value: "", error: false, errorMsg: "Enter a valid pin code" },
  address: { value: "", error: false, errorMsg: "Must me 5 character long" },
  gender: { value: "", error: false, errorMsg: "" },
  country: { value: "", error: false, errorMsg: "" },
  state: { value: "", error: false, errorMsg: "" },
  occupation: { value: "", error: false, errorMsg: "" },
  birthDate: {
    value: "",
    error: false,
    errorMsg: "Not valid format: DD/MM/YYYY",
  },
  education: { value: "", error: false, errorMsg: "" },
};

const UserForm: React.FC = () => {
  // states
  const [formData, setFormData] = useState<IFormData>(initialFormData);
  const [activePageIndex, setActivePageIndex] = useState<number>(0);
  const [modalText, setModalText] = useState<string | undefined>(undefined);

  // vars
  const ActivePage = pages[activePageIndex];

  // actions and functions
  function validateInput(type: InputType, value: string): boolean {
    const patterns: Record<string, RegExp> = {
      firstName: /^[A-Za-z\s]{3,50}$/, // only letters and spaces, 2 to 50 chars
      lastName: /^[A-Za-z\s]{3,50}$/, // only letters and spaces, 2 to 50 chars
      mobile: /^[6-9]\d{9}$/, // Indian 10-digit number starting with 6-9
      password:
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,20}$/,
      birthDate: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
      address: /^[a-zA-Z0-9\s,'#.-/()]{5,100}$/,
      pinCode: /^[1-9][0-9]{5}$/,
    };

    if (type === "confirmPassword") {
      return value === formData.password.value;
    }

    const pattern = patterns[type];
    return pattern?.test(value);
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const val =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    const isError = validateInput(name as InputType, value);

    setFormData((prev) => {
      return {
        ...prev,
        [name]: {
          ...prev[name as keyof IFormData],
          value: val as string,
          error: isError,
        },
      };
    });
  };

  const onNextPage = () => {
    if (activePageIndex === pages.length - 1) {
      const res = Object.values(formData).every((data) => {
        return data.value;
      });
      if (!res) {
        setModalText("Please Fill all fields");
        return;
      }
      setModalText("Form submitted successfully");
      setActivePageIndex(0);
      setFormData(initialFormData);
    }
    setActivePageIndex((activePageIndex + 1) % pages.length);
  };

  const onPreviousPage = () => {
    if (activePageIndex > 0) setActivePageIndex(activePageIndex - 1);
  };

  return (
    <div className={styles.outer_container}>
      {/* --------Shapes --------- */}
      <div className={styles.shape_1}></div>
      <div className={styles.shape_2}></div>

      {/* ------Modal -------- */}
      {modalText && (
        <div className={styles.modal}>
          <div>
            <p>{modalText}</p>
            <span onClick={() => setModalText(undefined)}>X</span>
          </div>
        </div>
      )}

      {/* -------Form----------- */}
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>User Registration Form</h2>
        <h3 className={styles.page}>
          Page {activePageIndex + 1}/{pages.length}
        </h3>
        <form className={styles.form}>
          <ActivePage formData={formData} handleChange={handleChange} />

          <div className={styles.nameGroup}>
            <button
              type="button"
              className={`${styles.submitButton} ${
                activePageIndex === 0 ? styles.disabled_btn : ""
              }`}
              onClick={onPreviousPage}
              disabled={activePageIndex === 0}
            >
              Prev
            </button>
            <button
              type="button"
              className={styles.submitButton}
              onClick={onNextPage}
            >
              {activePageIndex === pages.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
