import { Banner, NewBanner } from '../Banner/Banner';

function Home() {
  return (
    <>
      <Banner title="iPhone 13 Pro" subtitle="Muy muy Pro." img="https://www.prensalibre.com/wp-content/uploads/2021/09/iphone-13-1.jpg?quality=52"/>
      <NewBanner title="Apple Watch" subtitle="El fututo es a toda pantalla." model="SERIES 7" img="https://playjuego.com/wp-content/uploads/Apple-Watch-7-fecha-de-lanzamiento-precio-caracteristicas-y-fugas.png"/>
      <Banner title="MacBook Pro" subtitle="Todo el poder para los Pro." img="https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png"/>
    </>
  )
}

export default Home;
