import React from 'react';

export default function ItemForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

      const onChange = evt => {
        /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
        const { name, value, checked, type } = evt.target
        const realValue = type === 'checkbox' ? checked : value;
        change(name, realValue)
      }
      return (
          <form className='form'onSubmit={onSubmit}>
              <div>
                <h2>Add Item</h2>

                {/* 🔥 DISABLE THE BUTTON */}
                <button disabled={disabled}>submit</button>

                    <div className='errors'>
                {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                        <div>{errors.username}</div>
                        <div>{errors.location}</div>
                        <div>{errors.name}</div>
                        <div>{errors.description}</div>
                        <div>{errors.price}</div>
                    </div>
                </div>
                <div className='inputs'>
                    <label>Item;
                        <input
                        value={values.name}
                        onChange={onChange}
                        name='item'
                        type='text'
                        />
                    </label>
                    <label>Price;
                        <input
                        value={values.price}
                        onChange={onChange}
                        name='price'
                        type='text'
                        />
                    </label>
                    <label>Description;
                        <input
                        value={values.description}
                        onChange={onChange}
                        name='description'
                        type='text'
                        />
                    </label>
                    <label>Location;
                        <input
                        value={values.location}
                        onChange={onChange}
                        name='location'
                        type='text'
                        />
                    </label>
                </div>
          </form>
      )
}
