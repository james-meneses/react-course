import { Link, BrowserRouter as Router, Route } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <p>Copyright &copy; 2021</p>
            <Route path="/" exact render={(props) => (
                <Link to="/sobre">Sobre</Link>
           )}/>
            
        </footer>
    )
}

export default Footer
