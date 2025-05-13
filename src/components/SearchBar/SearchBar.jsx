import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Header from "../Header/Header";
import style from "./SearchBar.module.css";

const validationSchema = Yup.object({
  searchInput: Yup.string().trim().required("Please enter a search query"),
});

const SearchBar = ({ onSubmit }) => {
  return (
    <Header>
      <Formik
        initialValues={{ searchInput: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <Field
              type="text"
              name="searchInput"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              className={style.fieldForm}
            ></Field>
            <button type="submit" className={style.btnForm}>
              Search
            </button>
            <ErrorMessage
              name="searchInput"
              component="span"
              className={style.errorMessage}
            />
          </Form>
        )}
      </Formik>
    </Header>
  );
};

export default SearchBar;
