import React, { Component } from 'react';
import { Formik } from 'formik';

export default class SearchBar extends Component {
  
  submit = (values, actions) => {
    this.props.fetchMovies(values).then( () => actions.setSubmitting(false));        
  }
  
  render() {
    return (
      <Formik
        onSubmit={ this.submit }
        initialValues={ { query: '', language: 'en-US' } }
      >
        { ({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
          <form className="d-flex flex-row p-2 m-2" onSubmit={ handleSubmit }>
            <input name="query" className="flex-fill form-control mr-2" placeholder="Search ..." onChange={ handleChange } onBlur={ handleBlur } />
            <select className="mr-2 form-control w-25" name="language"  onChange={ handleChange } onBlur={ handleBlur }>
              <option value="en-US"> Anglais </option>
              <option value="fr-FR"> Francais </option>
            </select>
            <button className="btn btn-small btn-success" type="submit" disabled={ isSubmitting } >Submit</button>
          </form>
        )}

      </Formik>
    )
  }
}