import React, { useState } from 'react';

import './AddProductForm.scss';
import { Product } from '../../domain/interfaces/product';
import FormErrorType from '../../helpers/formErrorType/formErrorType';
import { inputMinLength, inputMaxLength } from '../../config/formConfig';
import FormErrors from '../FormErrors/FormErrors';

interface AddProductFormProps {
  isSaving: boolean;
  addProductFn: (newProduct: Product) => void;
}

interface NewProductForm {
  title: string,
  titleValid: boolean,
  description: string,
  descriptionValid: boolean,
  formErrors: NewProductFormErrors,
  formValid: boolean
}

interface NewProductFormErrors {
  title: FormErrorType[],
  description: FormErrorType[]
}

const defaultNewProductForm: NewProductForm = {
  title: '',
  titleValid: false,
  description: '',
  descriptionValid: false,
  formErrors: {
    title: [],
    description: []
  },
  formValid: false
}

function AddProductForm({isSaving, addProductFn}: AddProductFormProps) {
	const [newProductForm, setNewProductForm] = useState<NewProductForm>(defaultNewProductForm);

	function validateNewProductForm(newProductForm: NewProductForm): NewProductForm {
    const titleErrors: FormErrorType[] = [];
    if (!newProductForm?.title?.length) {
      titleErrors.push(FormErrorType.EMPTY);
    }

    const descriptionErrors: FormErrorType[] = [];
    if (!newProductForm?.description?.length) {
      descriptionErrors.push(FormErrorType.EMPTY);
    }
    if (newProductForm?.description?.length && newProductForm?.description?.length < inputMinLength) {
      descriptionErrors.push(FormErrorType.TOO_SHORT);
    }
    if (newProductForm?.description?.length && newProductForm?.description?.length > inputMaxLength) {
      descriptionErrors.push(FormErrorType.TOO_LONG);
    }
    
    // @TODO: obsługa dirty stanów
    return {
      ...newProductForm,
      titleValid: !titleErrors.length,
      descriptionValid: !descriptionErrors.length,
      formErrors: {
        title: titleErrors,
        description: descriptionErrors
      },
      formValid: !titleErrors.length && !descriptionErrors.length
    }
  }
  
  function onUserInput(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void {
    const name: string = event.target.name;
    const value: string = event.target.value;
    console.log(name, value);

    setNewProductForm(validateNewProductForm({...newProductForm, [name]: value}));
  }
  
  function onSubmit(event: React.FormEvent): void {
		event.preventDefault();
    if (isSaving || !newProductForm.formValid) {
      return;
    }

    addProductFn({
      id: -1,
      title: newProductForm.title,
      description: newProductForm.description
    });
    setNewProductForm(defaultNewProductForm);

	};

	return (
    <form onSubmit={ onSubmit }>
      <h2>Dodaj nowy produkt</h2>
      
      <div className='form-group'>
        <label htmlFor='title'>Nazwa</label>
        <input
          name='title'
          type='text'
          placeholder='Wpisz nazwę produktu...'
          value={ newProductForm.title }
          onChange={ onUserInput }
        ></input>
        <FormErrors formErrors={newProductForm.formErrors.title} />
      </div>

      <div className='form-group'>
        <label htmlFor='description'>Opis</label>
        <textarea
          name='description'
          placeholder='Wpisz opis produktu...'
          rows={3}
          value={ newProductForm.description }
          onChange={ onUserInput }
        ></textarea>
        <FormErrors formErrors={newProductForm.formErrors.description} />
      </div>

      <div className='form-submit'>
        { isSaving ?
          <span>Zapisuję...</span> :
          <button type='submit' className={newProductForm.formValid ? '' : 'disabled'}>
            Zapisz
          </button>
        }
      </div>
    </form>
	);
};

export default AddProductForm;
