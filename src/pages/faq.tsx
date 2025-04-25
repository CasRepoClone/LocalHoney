import React from 'react';
import '../styles/faq.scss'; // Import the SCSS file for styling
import Footer from '../components/footer';
import { motion } from 'framer-motion';


// scss file for faq and about
const faq: React.FC = () => {
  return (
    
    <>
    <h3 className="faqHead"> Frequently asked questions</h3>
    <div className="about">
        
        <img src="/assets/bee.png" alt="beeB" className="beeB"/>
        
        <div className="scroll">
            <h1>How often can i buy from you?</h1>
            <p>we are only able to sell as much as we produce, so it can vary from 6-8 months
            between sales. We will post on our social media when we have honey available for sale.
            </p>
        <br></br>
        <h1>are you able to do shipping?</h1>
        <p>At the current moment - no, we are unable to provide shipping internationally. However, we are able to deliver through the UK</p>
        <br></br>
        <h1>How do you harvest your honey?</h1>
        <p>We harvest our honey using a traditional method, where we remove the frames from the hive and use a honey extractor to spin the honey out of the comb. We then filter and bottle the honey by hand.</p>
        <br></br>
        <h1>How do you know when the honey is ready to be harvested?</h1>
        <p>We know the honey is ready to be harvested when the bees have capped the honeycomb cells with wax. This indicates that the honey has reached the right moisture content and is ready for storage.</p>
        <br></br>
        <h1>How do you ensure the quality of your honey?</h1>
        <p>We ensure the quality of our honey by following strict beekeeping practices, including regular hive inspections, monitoring for pests and diseases, and using natural methods to manage our bees. We also test our honey for moisture content and purity before bottling.</p>
        <br></br>
        <h1>Do you use any chemicals or additives in your honey?</h1>
        <p>No, we do not use any chemicals or additives in our honey. Our honey is raw and unprocessed, meaning it is in its natural state and retains all of its beneficial properties.</p>
        <br></br>
        <h1>How do you store your honey?</h1>
        <p>We store our honey in a cool, dark place to preserve its quality. We recommend that you do the same once you have purchased it. Honey can be stored indefinitely if kept in the right conditions.</p>

        </div>
        <h4> ↓ scroll down for more ↓</h4>
    </div>
    <Footer />
    </>
  );
};

export default faq;