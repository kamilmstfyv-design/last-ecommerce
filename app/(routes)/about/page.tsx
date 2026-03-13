import React from "react";

const AboutUs = () => {
  return (
    <div className="px-container py-10 space-y-10">
      <section className="max-w-3xl space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">
          About <span className="text-orange-600">Shopaz</span>
        </h1>
        <p className="text-gray-600">
          Shopaz is an online shopping platform built to make finding and buying your
          favorite products simple, fast, and enjoyable. We focus on a clean shopping
          experience with clear product information and a smooth checkout flow.
        </p>
        <p className="text-gray-600">
          Our goal is to combine a modern design with a user-friendly experience, so you
          can discover new products, manage your cart and wishlist easily, and shop with
          confidence.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="bg-gray-100 rounded-2xl p-5 space-y-2">
          <h2 className="text-lg font-semibold text-gray-800">Fast & Simple</h2>
          <p className="text-sm text-gray-600">
            From browsing to checkout, every step is designed to be quick and intuitive.
          </p>
        </div>
        <div className="bg-gray-100 rounded-2xl p-5 space-y-2">
          <h2 className="text-lg font-semibold text-gray-800">Wishlist & Cart</h2>
          <p className="text-sm text-gray-600">
            Save your favorite products to your wishlist or add them to your cart in one click.
          </p>
        </div>
        <div className="bg-gray-100 rounded-2xl p-5 space-y-2">
          <h2 className="text-lg font-semibold text-gray-800">Secure Shopping</h2>
          <p className="text-sm text-gray-600">
            We care about a safe and reliable shopping experience from start to finish.
          </p>
        </div>
      </section>

      <section className="max-w-3xl space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
        <p className="text-gray-600">
          We want Shopaz to feel like your go-to place when you think about online shopping.
          Clean design, clear information, and a smooth flow across all pages &mdash; from home
          to cart, wishlist, contact, and beyond.
        </p>
        <p className="text-gray-600">
          As we grow, we plan to expand our product range, improve performance, and keep polishing
          the user experience so that shopping stays fast and enjoyable.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
