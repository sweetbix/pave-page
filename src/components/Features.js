'use client';
import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      title: "Public logs",
      description:
        "Our public log displays de-identified verification data, time stamped and tamper proof, as verification evidence and to demonstrate legal compliance",
    },
    {
      title: "Reusable Token",
      description:
        "Users will only need to verify themselves once, and we will return a reusuable authentication token stored on their device - the next time they access a website, they won't need to verify themselves again.",
    },
    {
      title: "Admin dashboard",
      description:
        "Our admin dashboard allows for auditing, where any suspicious activity is flagged, and issuers can easily be removed from our systems - this is to ensure our list of issuers are secure and trusted.",
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const textMotion = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageMotion = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textGlow = {
    animate: {
      textShadow: [
        "0 0 8px rgba(147,0,190,0.5), 0 0 16px rgba(147,0,190,0.7)",
        "0 0 12px rgba(180,0,230,0.7), 0 0 24px rgba(180,0,230,1)",
        "0 0 8px rgba(147,0,190,0.5), 0 0 16px rgba(147,0,190,0.7)",
      ],
    },
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  };

  const pulseMotion = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(147,127,191,0.2)",
        "0 0 40px rgba(147,127,191,0.5)",
        "0 0 20px rgba(147,127,191,0.2)",
      ],
    },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 space-y-32">
      {features.map((feature, i) => (
        <motion.div
          key={i}
          className={`flex flex-col md:flex-row items-center gap-16 ${
            i % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={container}
        >
          {/* Text */}
          <motion.div className="flex-1 space-y-4" variants={container}>
            <motion.h2
              className="text-4xl font-bold mb-4 text-purple-400"
              variants={textMotion}
              {...textGlow}
            >
              {feature.title}
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              variants={textMotion}
            >
              {feature.description}
            </motion.p>
          </motion.div>

          {/* Image placeholder with glowing/pulse */}
          <motion.div
            className="flex-1 h-[350px] rounded-2xl bg-gradient-to-br from-purple-600 to-blue-500 relative overflow-hidden"
            variants={imageMotion}
            whileHover={{ scale: 1.05 }}
          >
            {/* Pulsing glow behind image */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              {...pulseMotion}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
