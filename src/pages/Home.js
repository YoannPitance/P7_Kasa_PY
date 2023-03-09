import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <main>
      <section>
        <Banner
          imageUrl="/assets/banner.png"
          title="Chez vous, partout et ailleurs"
        />
      </section>
      <section>
        <Gallery />
      </section>
    </main>
  );
};

export default Home;
