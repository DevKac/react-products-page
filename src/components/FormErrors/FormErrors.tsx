import React from 'react';

import './FormErrors.scss';
import FormErrorType from '../../helpers/formErrorType/formErrorType';
import { inputMinLength, inputMaxLength } from '../../config/formConfig';

interface FormErrorsProps {
  formErrors: FormErrorType[];
}

function FormErrors({formErrors}: FormErrorsProps) {
  function getMessageForError(formError: FormErrorType): string {
    switch(formError) {
      case FormErrorType.EMPTY:
        return 'Wartość nie może być pusta';
      case FormErrorType.TOO_SHORT:
        return `Wartość jest za krótka, minimum ${ inputMinLength } znaków`;
      case FormErrorType.TOO_LONG:
        return `Wartość jest za długa, maksimum ${ inputMaxLength } znaków`;
      default:
        return 'Nieprawidłowa wartość'
    }
  }

  return (
    <React.Fragment>
      { !!formErrors?.length &&
        <div className='form-errors'>
          { formErrors.map((formError: FormErrorType, i: number) => <span key={i} className='form-error'>{
            getMessageForError(formError)
          }</span>)}
        </div>
      }
    </React.Fragment>
  );
}

export default FormErrors;
