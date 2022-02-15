import { Link } from "react-router-dom";
import './Banner.css'

export const Banner = ({ title, subtitle, img }) => {
  return (
    <>
      <div className="banner">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <Link to='/category/iPhone' className="banner-link">Ver más &gt;</Link>
        <img src={img} alt={title} />
      </div>
    </>
  );
}

export const MacBanner = ({ title, subtitle, img }) => {
  return (
    <>
      <div className="banner">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <Link to='/category/Mac' className="banner-link">Ver más &gt;</Link>
        <img src={img} alt={title} />
      </div>
    </>
  );
}

export const NewBanner = ({ title, subtitle, model, img }) => {
  return (
    <div className="new-banner">
      <p className='new'>Nuevo</p>
      <h1>{title}</h1>
      <p className='model'>{model}</p>
      <h2 className='subtitle'>{subtitle}</h2>
      <Link to='/category/Watch' className="banner-link">Ver más &gt;</Link>
      <img src={img} alt={title} />
    </div>
  );
}


export const BuyBanner = ({ title, subtitle, price, img, phrase }) => {
  return (
    <>
      <div className="buy-banner">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p className='phrase'>{phrase}</p>
        <Link to='/category/Mac' className="banner-link">Ver más &gt;</Link>
        <img src={img} alt={title} />
        <p className='price'>{price}</p>
      </div>
    </>
  );
}
