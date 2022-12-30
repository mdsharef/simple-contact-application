const InputField = ({ name, label, type, value, onChange, placeholder, options }) => {
    return (
        <div>
            {type === 'select' ? (
                <>
                    <label htmlFor={name}>{label}</label>
                    <select 
                        name={name} 
                        id={name} 
                        value={value} 
                        onChange={onChange}
                    >
                        {options.map(option => (
                            <option key={option.id} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </>
            ) : (
                <>
                    <label htmlFor={name}>
                            {label}
                    </label>
                    <input 
                        type={type} 
                        name={name} 
                        id={name}
                        value={value} 
                        onChange={onChange} 
                        placeholder={placeholder} 
                    />
                </>
            )}
        </div>
    )
}

export default InputField;