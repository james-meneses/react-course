import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button bgColor={showAdd ? "#d20" : "#09a"  } 
                    texto={showAdd ? 'Fechar' : 'Nova Tarefa' } onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Criativa Digital"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS in JS
// const headingStyle = {
//     color: '#222',
//     fontFamily: 'Open Sans, helvetica, calibri, arial, sans-serif',
//     fontSize: '2.25rem',
//     padding: '.75rem 1.25rem'
// }

export default Header