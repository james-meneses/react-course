import PropTypes from 'prop-types'

const Button = ({bgColor, texto, onClick}) => {
    
    return (
        <button 
            onClick={onClick} 
            className="btn" 
            style={{backgroundColor: bgColor}}
            >
                {texto}
            </button>
    )    
}

Button.defaultProps = {
    bgColor: 'steelblue'
}

Button.propTypes = {
    texto: PropTypes.string.isRequired
}

export default Button
