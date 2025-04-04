import { motion } from 'framer-motion';

export default function FounderSection() {
  const founderImageUrl = "https://media.licdn.com/dms/image/v2/D4D03AQHqpHmkVhjIHQ/profile-displayphoto-shrink_200_200/B4DZPekzYpGoAY-/0/1734606010270?e=2147483647&v=beta&t=vVxWCd5K4T3ykzf2YmOkkbQl9ZMecPFMdwhuvmxHXH0";
  
  const brands = [
    {
      name: 'CallFluent AI',
      logo: 'https://callfluent.com/wp-content/themes/callfluent2023/assets/marketing/images/logo.svg',
      description: 'AI-Powered Call Center Solutions'
    },
    {
      name: 'Creativio AI',
      logo: 'https://creativio.io/wp-content/uploads/2023/08/logo_white_transparent.png',
      description: 'Creative AI Content Generation'
    },
    {
      name: 'Localio AI',
      logo: 'https://app.localio.ai/app-assets/images/logos/color_logo_full_size.png',
      description: 'Local Business AI Marketing Platform'
    }
  ];

  return (
    <section className="founder-section py-16 bg-gradient-to-b from-[#0A0A0A] to-[#121212]">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="founder-card"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="founder-image-wrapper"
            >
              <img 
                src={founderImageUrl} 
                alt="Adrian Isfan - Founder" 
                className="founder-image"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Ccircle cx='60' cy='60' r='50' fill='%234338CA' /%3E%3Ccircle cx='60' cy='45' r='15' fill='%23FFF' /%3E%3Cpath d='M30,95 Q60,65 90,95 Q60,120 30,95 Z' fill='%23FFF' /%3E%3C/svg%3E";
                }}
              />
            </motion.div>
            
            <div className="founder-content">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="founder-label">FROM THE DESK OF</span>
                <h2 className="founder-name">Adrian Isfan</h2>
                <h3 className="founder-subtitle">Your 7-Figure AI Marketing Expert, Partner & Friend</h3>
                <p className="founder-bio">
                  I'm a visionary entrepreneur and AI technology pioneer with a passion for creating 
                  innovative solutions that help businesses like yours grow and thrive. 
                </p>
                <p className="founder-bio mt-4">
                  With over a decade of experience in software development and business automation, 
                  I've built multiple successful SaaS platforms that are transforming how businesses 
                  leverage AI for better results and higher profits.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="brands-showcase"
              >
                <p className="brands-title">Creator of:</p>
                <div className="brands-grid">
                  {brands.map((brand, index) => (
                    <motion.div 
                      key={brand.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                      className="brand-item"
                    >
                      <div className="brand-logo-container">
                        <motion.img 
                          src={brand.logo} 
                          alt={`${brand.name} Logo`} 
                          className="brand-logo"
                          whileHover={{ 
                            scale: 1.15, 
                            rotate: [0, -2, 2, -2, 0],
                            filter: "brightness(1.3)"
                          }}
                          transition={{
                            duration: 0.5,
                            rotate: {
                              duration: 0.5,
                              repeat: 0
                            }
                          }}
                          onError={(e) => {
                            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='30' viewBox='0 0 120 30'%3E%3Crect width='120' height='30' fill='%23333' /%3E%3Ctext x='60' y='20' font-family='Arial' font-size='12' fill='%23FFF' text-anchor='middle'%3E" + brand.name + "%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </div>
                      <p className="brand-description">{brand.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 