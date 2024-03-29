// import { Link } from "react-router-dom";
import img from "../../../assets/images/about/about-image-02.jpg";

const Features = () => {
  return (
    <section className="pb-8 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Features
              </span>
              <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                Features Of OptimumAI
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Explore the cutting-edge features powered by artificial
                intelligence in OptimumAI.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full lg:w-1/3 px-8">
            <div className="mb-8 lg:mb-0">
              <img
                src={img}
                alt="Feature 1"
                className="w-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-8">
            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-bold text-dark dark:text-white">
                Soft Skills Assesment
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                Optimum AI helps you to assess your soft skills and provides you
                with a detailed report on your strengths and weaknesses.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-bold text-dark dark:text-white">
                Interview Preparation
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                Optimum AI helps you to prepare for interviews by providing you
                with a list of questions and answers.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-bold text-dark dark:text-white">
                Mental Health Assesment
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                Optimum AI helps you to assess your mental health and provides
                you with a detailed report on your strengths and weaknesses.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-bold text-dark dark:text-white">
                Financial Management 
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                Optimum AI helps you to manage your finances by providing you
                with a detailed report on your expenses and savings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
