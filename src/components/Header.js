const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

Header.defaultProps = {
    title: "Criativa Digital"
}

export default Header