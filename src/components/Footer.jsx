const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">
          <h3>Tadisetti Akshaya</h3>
          <p>Computer Science and Engineering Undergraduate</p>
        </div>


        <div className="footer-right">
          <span>
            © {new Date().getFullYear()} Portfolio. All Rights Reserved.
          </span>
        </div>

      </div>

    </footer>
  );
};

export default Footer;