import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    
    const onClick = (e) => {
        console.log('clicked', e)
    }

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button bgColor='#09a' texto="Add" onClick={onClick}/>
            <Button bgColor='#d20' texto="Remover" onClick={onClick}/>
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