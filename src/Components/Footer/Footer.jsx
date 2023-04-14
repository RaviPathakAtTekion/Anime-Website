import "./Footer.scss";

function Footer() {
  const dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1;
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  const date = year + "/" + month + "/" + day;

  return (
    <footer className="footer_container">
      <h3>Anime Website 😎</h3>
      <div className="footer_inner_details">
        <p>Made By - Ravi Pathak</p>
        <p>Date - {date}</p>
      </div>
    </footer>
  );
}

export default Footer;
