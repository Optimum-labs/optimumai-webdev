import React from "react";

const ChallengeCard = ({ title, description, imageUrl, tags }) => {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-40 object-cover" src={imageUrl} alt={title} />
      <div className="px-2 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-2 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Products = () => {
  const products = [
    {
      title: "Soft Skills Assessment",
      description:
        "Evaluate and improve your soft skills to excel in your career.",
      imageUrl: "https://via.placeholder.com/300x200",
      tags: ["Soft Skills", "Assessment", "Career Development"],
    },
    {
      title: "Interview Preparation",
      description:
        "Prepare for interviews with tailored guidance and mock interviews.",
      imageUrl: "https://via.placeholder.com/300x200",
      tags: ["Interview", "Preparation"],
    },
    {
      title: "Mental Health Ass...",
      description:
        "Assess your mental well-being and access resources for support.",
      imageUrl: "https://via.placeholder.com/300x200",
      tags: ["Mental Health", "Assessment"],
    },
    {
      title: "Financial Management",
      description:
        "Learn to manage your finances effectively and plan for your future.",
      imageUrl: "https://via.placeholder.com/300x200",
      tags: ["Financial Management"],
    },
  ];

  return (
    <section className="bg-gray-100 mt-16 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Our Products
        </h2>

        <p className="mb-10 text-base text-justify leading-relaxed text-body-color dark:text-dark-6">
          Our showcases a range of offerings designed to empower users in
          various aspects of personal and professional development. Through
          concise and visually appealing product cards, visitors can discover
          services tailored to enhance soft skills, prepare for interviews,
          assess mental well-being, and manage finances effectively. Each card
          provides key details about the product, including its title,
          description, and relevant tags. With a clean and intuitive layout,
          this page offers a seamless browsing experience for individuals
          seeking resources to thrive in both their personal and professional
          lives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="flex justify-center">
              <ChallengeCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
