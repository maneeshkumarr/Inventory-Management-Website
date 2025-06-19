'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const isAuthenticated = localStorage.getItem('authToken');
      if (!isAuthenticated) {
        setShowAuthModal(true);
      }
    }, 4000);

    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#031B34] text-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section
        className="py-24 px-6 text-center relative overflow-hidden"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="text-white">Inventory</span>{' '}
            <span className="inline-block transform translate-y-[-4px]">➡️</span>
            <br />
            <span className="text-white">Management Software</span><br />
            <span className="text-blue-400">for Growing Businesses</span>
          </h1>
          <p className="text-lg mt-6 text-gray-300 max-w-2xl mx-auto">
            Increase your sales and keep track of every unit with our powerful stock management, order fulfillment, and inventory control software.
          </p>
          <motion.a
            href="/login"
            className="mt-8 inline-block bg-green-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-green-300 transition"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Log in - It’s Free →
          </motion.a>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="bg-[#021324] py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: 'Total Products', value: '25,430', color: 'green-400' },
            { title: 'New Orders', value: '97%', color: 'pink-400' },
            { title: 'Product Parking', value: '85%', color: 'yellow-300' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-[#092c4c] p-6 rounded-xl shadow-md"
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { type: 'spring', stiffness: 300 },
              }}
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{stat.title}</h3>
              <p className={`text-4xl font-bold text-${stat.color}`}>{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="bg-[#041C2C] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Why Choose Our Inventory System?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: '📦',
                title: 'Real-Time Tracking',
                desc: 'Track inventory in real-time with auto-sync capabilities.',
              },
              {
                icon: '📈',
                title: 'Insightful Reports',
                desc: 'Generate visual reports and dashboards instantly.',
              },
              {
                icon: '💬',
                title: '24/7 Support',
                desc: 'Dedicated technical support anytime you need it.',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-[#092C4C] rounded-xl p-6 shadow-md text-left"
                whileHover={{
                  scale: 1.1,
                  rotate: -3,
                  transition: { type: 'spring', stiffness: 400 },
                }}
                data-aos="fade-up"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#031B34] py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Ravi Kumar',
                text: '“A truly seamless way to manage stock. My team can now focus more on fulfillment than logging.”',
              },
              {
                name: 'Ananya Sharma',
                text: '“Beautiful UI, fast response time, and detailed analytics. Love it!”',
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-[#0D2A46] p-6 rounded-xl shadow-lg"
                whileHover={{ scale: 1.05, rotate: 2 }}
                data-aos="fade-up"
              >
                <p className="italic text-lg mb-3">"{testimonial.text}"</p>
                <p className="text-green-300 font-bold">– {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#041C2C] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: 'Can I use this system for free?',
                answer: 'Yes, we offer a free tier with basic features. Upgrade anytime!',
              },
              {
                question: 'Is it mobile-friendly?',
                answer: 'Absolutely! You can manage inventory from any device.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-[#0A2A43] p-4 rounded-lg"
                data-aos="fade-up"
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <p className="text-gray-300 mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-green-400 to-blue-500 py-24 px-6 text-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Start Managing Smarter Today</h2>
          <p className="text-lg mb-6">
            Streamline your operations, reduce errors, and increase efficiency. Sign up now!
          </p>
          <motion.a
            href="/login"
            className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started →
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
