import React from "react";
import slide1 from '../../../../Images/Accueil/slide1.jpg';
import slide2 from '../../../../Images/Accueil/slide2.jpg';
import slide3 from '../../../../Images/Accueil/slide3.jpg';
import Style from './Accueil.module.css';
import Footer from '../../Footer/Footer';
const style = {
  carouselItem: {
    height: '32rem',

    background: '#777',
    color: 'white',
    position: 'relative',
  },
  container: {
    position: 'absolute',
    bottom: ' 0',
    left: '0',
    right: '0',
    padding: '0 0 50px',
  },
  overlayImage: {
    position: 'absolute',
    bottom: ' 0',
    left: '0',
    right: '0',
    top: '0',
    backgroundPosition: 'center', // Utilisation de tirets
    backgroundSize: 'cover',     // Utilisation de tirets
    opacity: 0.5,
  },
};

export const Accueil = () => {
  return (
    <>
     
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">

<ol className="carousel-indicators">
  <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
  <li data-bs-target="#myCarousel" data-bs-slide-to="1" ></li>
  <li data-bs-target="#myCarousel" data-bs-slide-to="2" ></li>
</ol>

<div className="carousel-inner" >
  <div style={style.carouselItem} className="carousel-item active">
    <div style={{ ...style.overlayImage, backgroundImage: `url(${slide1})` }}></div>


    <div style={style.container} className="container">
      <div style={style.carouselCaption} className="carousel-caption text-start">
        <h1 style={style.h1}>Hôpital central de l'Armée "Docteur Mohamed Seghir Nekache" à Aïn Naadja.</h1>
        <p style={style.p}>Chanegriha : l'ANP prête à soutenir le système sanitaire national contre le coronavirus | Radio Algérienne</p>
        <p><a style={style.btn} className="btn btn-lg btn-primary" href="#">Détail</a></p>
      </div>
    </div>
  </div>
  <div style={style.carouselItem} className="carousel-item">
    <div style={{ ...style.overlayImage, backgroundImage: `url(${slide2})` }}></div>

    <div style={style.container} className="container">
      <div style={style.carouselCaption} className="carousel-caption">
        <h1 style={style.h1}>Hôpital Central des Armées « Mohamed Seghir Nekkache » à Ain Naadja (Alger).</h1>
        <p style={style.p}>Service de santé militaire ouvert à l’hôpital central de l’armée.</p>
        <p><a style={style.btn} className="btn btn-lg btn-primary" href="#">Détail</a></p>
      </div>
    </div>
  </div>
  <div style={style.carouselItem} className="carousel-item">
    <div style={{ ...style.overlayImage, backgroundImage: `url(${slide3})` }}></div>

    <div style={style.container} className="container">
      <div style={style.carouselCaption} className="carousel-caption">
        <h1 style={style.h1}>Another example headline 2.</h1>
        <p style={style.p}>Some representative placeholder content for the second slide of the carousel.</p>
        <p><a style={style.btn} className="btn btn-lg btn-primary" href="#">Détail</a></p>
      </div>
    </div>
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>

</div>
<div className={`${Style.container} ${Style.marketing}`}>
<div className="row">
  <div className="col-lg-4">
    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#777" />
      <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
    </svg>

    <h3>Urgences</h3>
    <h2>24 heures sur 24 et sept jours sur sept </h2>
    <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
  </div>
  <div className="col-lg-4">
    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#777" />
      <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
    </svg>

    <h3>Nombre de lits</h3>
    <h2>2000 </h2>
    <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
  </div>
  <div className="col-lg-4">
    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#777" />
      <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
    </svg>

    <h2>Heading</h2>
    <p>And lastly this, the third column of representative placeholder content.</p>
    <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
  </div>
</div>
</div>
     
     
      <Footer />
      {/* <div className={`${Style.container} ${Style.marketing}`}>
      <div className={Style.row}>
        <div className={Style.colLg4}>
          <svg className={Style.bdPlaceholderImg} width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>
          <h2>Heading</h2>
          <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          <p><a className={`${Style.btn} ${Style.btnSecondary}`} href="#">View details &raquo;</a></p>
        </div>

        <div className={Style.colLg4}>
          <svg className={Style.bdPlaceholderImg} width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>
          <h2>Heading</h2>
          <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
          <p><a className={`${Style.btn} ${Style.btnSecondary}`} href="#">View details &raquo;</a></p>
        </div>

        <div className={Style.colLg4}>
          <svg className={Style.bdPlaceholderImg} width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>
          <h2>Heading</h2>
          <p>And lastly this, the third column of representative placeholder content.</p>
          <p><a className={`${Style.btn} ${Style.btnSecondary}`} href="#">View details &raquo;</a></p>
        </div>
      </div>
    </div> */}

    </>
  );
};
