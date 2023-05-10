import React from 'react'
import { useState } from 'react';
import "./faq.css";

export const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Sharona?',
      answer: ' Sharona is for buying and selling utility NFTs of <span style="color: #fcf285;"> meeting time </span> with influencers, executives, celebrities and experts who mint NFTs of their valuable time and post them in marketplaces within a crypto environment. Sharona can also be utilized to mint <span style="color: #fcf285;"> event and sponsorship </span> parameters to be redeemed through the safe platform.',
    },
    {
      question: 'What is a utility NFT?',
      answer: 'Unlike well-known art NFTs that are digital assets, utility NFTs are non-fungible tokens with real world use-cases that grant their owner privileges, rights or rewards which they would not otherwise be able to access.<span style="color: #fcf285;"> Their value is in the experience </span>, more so than the art.',
    },
    {
      question: 'Why are Sharona NFTs so valuable?',
      answer: 'Besides their exchange value in the secondary market after initial purchase, Sharona NFTs provide a <span style="color: #fcf285;"> collectable element </span>after the NFTs are redeemed, as a cherished memento of the experience for both buyer and minter.',
    },
    {
      question: 'Can Sharona be used by service providers?',
      answer: "Yes. Sharona/’/s minting wizard is specifically designed for an expert or consultant of any kind to set parameters for  <span style='color: #fcf285;'> selling time or services. </span> .",
    },
    {
      question: 'Are the meetings virtual or in person?',
      answer: 'Any kind of meeting, including virtual, in-person, a phone call, a destination experience…<span style="color: #fcf285;">all can be minted </span> on Sharona.',
    },
    {
      question: 'How does the seller and buyer coordinate to meet?',
      answer: 'During the minting process, the minter provides <span style="color: #fcf285;"> secret contact information </span> that will only be viewed by the actual buyer. Pursuant to the terms outlined by the minter during the minting process, the parties coordinate outside of the Sharona platform by whatever means the minter specifies in the parameters.',
    },
    {
      question: 'How does the redeem functionality work?',
      answer: 'The buyer of a Sharona NFT navigates to the Sharona site, and connects their wallet to view the NFT which he/she purchased. The buyer clicks the Redeem button which initiates the transaction in a blockchain. Then the NFT will be locked from subsequent reselling and <span style="color: #fcf285;">the meeting secret contact information will be revealed to the Buyer</span> about how to setup the actual meeting.',
    },
    {
      question: 'Is there a fee to create/mint a Sharona utility NFT?',
      answer: 'Only the Ethereum blockchain <span style="color: #fcf285;">gas fees apply</span> during the NFT minting process.',
    },
    {
      question: 'How does Sharona make money?',
      answer: 'A <span style="color: #fcf285;"> 10% </span> fee is written into the smart contract behind all NFTs, that Sharona receives <span style="color: #fcf285;"> at each sale </span> of a Sharona minted NFT.',
    },
    {
      question: 'Can a minter add a video pitch to buyers?',
      answer: '<span style="color: #fcf285;"> Soon </span> we will be deploying premium features like the ability to include a video pitch to your buyers, similar to the ones you see in the Featured NFTs above.',
    },
    {
      question: 'Can I buy Sharona token?',
      answer: 'When available, anyone will be able to purchase and exchange Sharona token. The model is designed to increase Sharona token value through <span style="color: #fcf285;"> buy and hold incentives.</span>',
    },
  ];

  function togglePopUp() {
    setIsOpen(!isOpen);
  }

  function handleAccordionClick(index) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <div className='faq-container'>
      <button className="faq-btn" onClick={togglePopUp}>FAQ</button>
      {isOpen ? (
        <div className="popup-content">
          <button className="close-btn" onClick={togglePopUp}>
            X
          </button>
          <h2>FAQs</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => handleAccordionClick(index)}
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                // <div className="faq-answer">{faq.answer}</div>
                <div className="faq-answer" dangerouslySetInnerHTML={{ __html: faq.answer }} />
              )}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
