import React from 'react';

// Reusable FormInput component
// Props:
// - label: Input label text
// - type: Input type (text, email, number, select, textarea)
// - name: Input name
// - value: Input value
// - onChange: Change handler
// - options: For select type (array of {value, label})
// - placeholder: Placeholder text
// - required: Boolean
const FormInput = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  ...props
}) => {
  const baseClasses = 'w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-brand-marigold focus:outline-none font-inter transition-colors duration-300';

  if (type === 'textarea') {
    return (
      <div className="mb-4">
        <label className="block text-brand-charcoal font-semibold mb-2 font-inter">
          {label}
          {required && <span className="text-brand-marigold ml-1">*</span>}
        </label>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={5}
          className={`${baseClasses} resize-none`}
          {...props}
        />
      </div>
    );
  }

  if (type === 'select') {
    return (
      <div className="mb-4">
        <label className="block text-brand-charcoal font-semibold mb-2 font-inter">
          {label}
          {required && <span className="text-brand-marigold ml-1">*</span>}
        </label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={baseClasses}
          {...props}
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <label className="block text-brand-charcoal font-semibold mb-2 font-inter">
        {label}
        {required && <span className="text-brand-marigold ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={baseClasses}
        {...props}
      />
    </div>
  );
};

export default FormInput;
