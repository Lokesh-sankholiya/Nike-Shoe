const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-cont">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="sec-btn">Categroy</button>
        </div>
        <div className="ave">
          <p>Also Available On</p>

          <div className="brand-icon">
            <img src="/image/flipkart.png" alt="" />
            <img src="/image/amazon.png" alt="" />
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src="/image/xyz.png" alt="" className="img" />
      </div>
    </main>
  );
};

export default Hero;
