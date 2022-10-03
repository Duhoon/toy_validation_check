function Input({placeholder, className, changeHandler, value, valid , valid_message, type}){
    return (
        <div className="input-group">
            <input className={className} placeholder={placeholder} onChange={changeHandler} value={value} type={type === "password" ? "password" : "text"}/>
            {value.length > 0 && !valid ? <p className="notice-error">{valid_message}</p>: undefined }
        </div>
    )
}

export default Input ;