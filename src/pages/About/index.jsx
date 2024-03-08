// import aboutImage1 from "../../assets/images/about/about-image-01.jpg";
// import aboutImage2 from "../../assets/images/about/about-image-02.jpg";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
      >
        <div className="container">
          <div className="wow fadeInUp" data-wow-delay=".2s">
            <div className="">
              <div className="w-full px-4">
                <div className="mb-12 lg:mb-0">
                  <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2] text-center">
                    Welcome to OptimumAI
                  </h2>
                  <p className="mb-10 text-base text-justify leading-relaxed text-body-color dark:text-dark-6">
                  OptimumAI is driven by the belief that humans should be at the forefront of AI and technology. As we work towards accelerating the development of intelligent products, our ultimate goal is to ensure that humans retain control over AI. We envision a future where human intelligence remains competitive with AI, fostering a symbiotic relationship between humans and technology. By empowering individuals to understand, shape, and harness the potential of AI, OptimumAI strives to enhance human productivity and contribute to the responsible and ethical evolution of artificial intelligence
                  </p>

                  {/* <Link
                    to="#"
                    className="inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark"
                  >
                    Learn More
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>           
    </>
  );
};

export default About;
