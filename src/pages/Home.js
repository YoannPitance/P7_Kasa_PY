import React from "react";
import Banner from "../components/Banner";
import Galery from "../components/Galery";

const Home = () => {
  return (
    <main>
      <section>
        <Banner
          imageUrl="/assets/banner.png"
          title="Chez vous, partout et ailleurs"
        />
        <Galery />
      </section>
    </main>
  );
};

export default Home;
