const Footer = () => {
    return ( 
        <div className="flex flex-col">
            <h3>&copy; Ovum - 2022</h3>

            <p>Contact us through email or via phone below OR visit us directly!</p>

            <nav className="flex">
                <a href="#" target="blank">
                    <img src="../../public/images/mail.png" alt="Email" />
                </a>
                <a href="#" target="blank">
                    <img src="../../public/images/phone.png" alt="Phone" />
                </a>
                <a href="https://goo.gl/maps/SzKAPw658AtNWiJc8" target="blank">
                    <img src="../../public/images/location.png" alt="Location" />
                </a>
            </nav>
        </div>
     );
}
 
export default Footer;