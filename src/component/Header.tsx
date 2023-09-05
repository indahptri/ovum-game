const Header = () => {
    return ( 
        <div className=" bg-purple-500">
            {/* <style>"background-color: #7e52ac; padding: 3px;"</style> */}
            <a href="/">
                <img src="../../public/images/logo.png" alt="Ovum" />
            </a>

            <nav>
                <ul>
                    <li><a href="team.html">Team</a></li>
                    <li><a href="merch.html">Merchandise</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Header;