import React from 'react';
import '../styles/faq.scss'; // Import the SCSS file for styling
import Footer from '../components/footer';




const privatePolicy: React.FC = () => {
  return (
    <>
        <h5 className="titleAbout">Privacy Policy</h5>
        <div className="about">
            <div className="scroll">
            <p>At Cotford Honey, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information.</p>
            <p>We may collect personal information such as your name, email address, and shipping address when you place an order or subscribe to our newsletter. We use this information to process your orders and communicate with you.</p>
            <p>We do not share your personal information with third parties except as necessary to fulfill your order or as required by law.</p>
            <p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, or misuse.</p>
            <p>By using our website, you consent to the collection and use of your personal information as described in this Privacy Policy.</p>
            
            <h1>Request Data Erasure</h1>
            <p>If you would like to request the erasure of your personal data, please contact us at <a href="mailto:privacy@cotfordhoney.com">privacy@cotfordhoney.com</a>. Provide your name and any relevant details to help us process your request efficiently.</p>
            <p>We will comply with your request in accordance with applicable data protection laws. within 3-5 days</p>
            </div>
            <h4> ↓ scroll down for more ↓</h4>
        </div>
    <Footer />
    </>
  );
};

export default privatePolicy;