import './Banner.css'


export const Banner = ({title, subtitle, img}) => {
  return (
    <>
      <div className="banner">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <img src={img} alt={title} />
      </div>
    </>
  );
}


export const NewBanner = ({title, subtitle, model,img}) => {
  return (
    <div className="new-banner">
      <p className='new'>Nuevo</p>
      <h1>{title}</h1>
      <p className='model'>{model}</p>
      <h2 className='subtitle'>{subtitle}</h2>
      <img src={img} alt={title} />
    </div>
  );
}


export const BuyBanner = ({title, subtitle, price, img, phrase}) => {
  return (
    <> 
      <div className="buy-banner">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p className='phrase'>{phrase}</p>  
        <img src={img} alt={title} />
        <p className='price'>{price}</p>
      </div>
    </>
  );
}
