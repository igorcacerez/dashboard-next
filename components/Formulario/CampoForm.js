const CampoForm = ({ label, name, type, value, options, onChange, error }) => {
    return (
        <div className="form-group">
            {type === 'textarea' ?
                <>
                    <label htmlFor={name}>{label}</label>
                    <textarea className="form-control" id={name} name={name} value={value} onChange={onChange} />
                </>
                :
                    type === 'select' ?
                        <>
                            <label htmlFor={name}>{label}</label>
                            <select className="form-control" id={name} name={name} value={value} onChange={onChange}>   
                                {options.map((item, index) => {
                                    return (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    )
                                })}
                            </select>
                        </>
                    :
                        type === 'checkbox' ?
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id={name} name={name} value={value} onChange={onChange} />
                                <label claNssame="form-check-label" htmlFor={name}>
                                    {label}
                                </label>
                            </div>
                        :
                            <>
                                <label htmlFor={name}>{label}</label>
                                <input type={type} className="form-control" id={name} name={name} value={value} onChange={onChange} />
                            </>

            }

            
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default CampoForm;