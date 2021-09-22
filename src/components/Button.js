const Button = ( {text, color, onClick, onKeyPress} ) => {
    
    return (
        <div>
            <input
                type="hidden"
                onKeyPress={onKeyPress}
            />
            <button 
                className='btn btn-block'
                style={{ backgroundColor: color }}
                onClick={onClick}
            >
                    {text}
            </button>
        </div>
    )
}

export default Button
