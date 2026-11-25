import styles from './FilterGroup.module.css'

function FilterGroup({
  title,
  inputType = 'checkbox',
  options = [],
  name = 'filter',
  selectedValues = [],
  onChange,
}) {
  return (
    <fieldset className={styles.group}>
      <legend className={styles.title}>{title}</legend>

      <div className={styles.options}>
        {options.map((option, index) => {
          const value = option.value ?? option.text
          const inputId = `${name}-${index}`
          const checked = selectedValues.includes(value)

          return (
            <label key={value} htmlFor={inputId} className={styles.option}>
              <input
                id={inputId}
                type={inputType}
                name={name}
                value={value}
                checked={checked}
                onChange={(event) => onChange?.(value, event.target.checked)}
                className={styles.input}
              />
              <span>{option.text}</span>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}

export default FilterGroup
