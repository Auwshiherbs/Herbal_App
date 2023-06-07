import '@fortawesome/fontawesome-free/css/all.min.css';

export  default function Footer (){
    return (
        <footer className="bg-light text-center text-lg-start">
  {/* Copyright */}
  <div
    className="p-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
  >
<div className="container">
  <div className="row text-left">
    <div className="col-6 foot">    © 2023 Copyright:
    <a className="text-dark" href="#">
      Auwshiherbs.com
    </a>
    </div>
    <div className="col-6 text-right"> 
    {/* Facebook */}
    <a
      className="btn btn-outline-light btn-floating m-1"
      href="#!"
      role="button"
    >
      <i className="fab fa-facebook-f" />
    </a>
    {/* Instagram */}
    <a
      className="btn btn-outline-light btn-floating m-1"
      href="#!"
      role="button"
    >
      <i className="fab fa-instagram" />
    </a>
    {/* Linkedin */}
    <a
      className="btn btn-outline-light btn-floating m-1"
      href="#!"
      role="button"
    >
      <i className="fab fa-linkedin-in" />
    </a>
   </div>
  </div>
</div>

  </div>
</footer>
    )
}