import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""
      />

      {/* Product id,title,price,rating,image */}
      <div className="home__row">
        <Product
          id="123123"
          title="The Lean Startup , Eric Ries"
          price="{11.98}"
          rating="{5}"
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
        />

        <Product
          id="456456"
          title="Kenwood kMix Stand Mixer for Baking"
          price="{239.99}"
          rating="{4}"
          image="https://images-na.ssl-images-amazon.com/images/I/41hbQSkaNxL._AC_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="1232390"
          title="apple smart watch"
          price="{111.98}"
          rating="{5}"
          image="https://images-na.ssl-images-amazon.com/images/I/61Ski219aFL._AC_SL1500_.jpg"
        />

        <Product
          id="12345678"
          title="Samsung echo ,great bluetooth speaker"
          price="{79.98}"
          rating="{5}"
          image="https://images-na.ssl-images-amazon.com/images/I/612TnHGeiQL._AC_SL1000_.jpg"
        />

        <Product
          id="123123"
          title="Asus ROG-Threadripper-Motherboard-802-11Ax-Lighting/ "
          price="{1789.98}"
          rating="{5}"
          image="https://images-na.ssl-images-amazon.com/images/I/81e4JxoWKWL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123123"
          title="Samsung 72 inch Ultrawide Tv with 4K display"
          price="{459,99}"
          rating="{5}"
          image="https://m.media-amazon.com/images/I/81B0xCF+PWL.jpg"
        />
      </div>

      {/*  Product */}
    </div>
  );
}

export default Home;
