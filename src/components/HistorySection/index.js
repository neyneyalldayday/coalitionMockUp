import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components';
import background from '../../images/moutains2.jpg'
import { motion, AnimatePresence } from 'framer-motion';



const HistoryContainer = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;  
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;  
  overflow: hidden;
`;

const HistoryBg = styled.div`
background-image: url(${background}); 
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  max-height: 100vh;
  background-size: cover;
  object-fit: contain;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const HistoryContent = styled.div`
display: flex;
flex-direction: column;
`;


const HistoryHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: center;

`;

const H1 = styled.h1`
color: blue;
opacity: 30%;
font-size: 10rem;
margin-right: 30rem;
margin-left: 1rem;
margin-top: 6rem;
justify-items: flex-start;

`;
const H3 = styled.h3`
  color: blue;
  font-size: 3rem;
  padding: 0rem 2rem;
  position: relative;
  bottom: -10rem;
  margin-left: -5rem;
  right: 29rem;
  
`;
const P = styled.p`
position: relative;
display: flex;
max-width: 35rem;
min-height: 3rem;
flex-direction: column;
font-size: 1.2rem;
text-align: center;
top: -60px;



`;

const ParagraphWrap = styled.div`
font-size: 16px;
max-width: 50rem;
padding: 3rem 0;
display: block;
  	margin-left: auto;
	margin-right: auto;
;
`;

const HistoryCarousel = styled.div`
display: flex;
flex-direction: column;
margin: 0rem;
justify-content: center;

`;

const HistoryCardSlide = styled.div`
z-index: 1;
width: 100%;
height: 20%;
`;
const HistoryRails = styled.div`
 position: absolute;
 left: 0;
 width: 100%;
 height: 20%;
 display: flex;
 align-items: center;
 justify-content: center;
 bottom: 5rem;

 &::before {
     content: '';
     position: absolute;
     z-index: 2;
     width: 100%;
     height: 20vh;
    
     left: 0;
    
     overflow: hidden;
     opacity: 0.4;
     background: #1A2670
 }
`;
const MountainCard = styled(motion.img)`
    position: absolute;
    top: 0;
    left: 50;
    width: 20vh;
    height: 20vh;
    object-fit: contain;
    
    
`;





const History = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(
        () => {
          const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1));
          };
    
          timeout.current = setTimeout(nextSlide, 3000);
    
          return function() {
            if (timeout.current) {
              clearTimeout(timeout.current);
            }
          };
        },
        [current, length]
      );

      if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
      }

      const fadeAnimation = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
        exit: { opacity: 0 }
      };

    return (
        <HistoryContainer>
            <HistoryBg>
            <HistoryContent>
                <HistoryHeader>
                   <H1>01.</H1><H3>HISTORY</H3>
                </HistoryHeader>
                   <ParagraphWrap>
                   <P>Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Ea quibusdam numquam
                      dicta obcaecati! Maxime, consequuntur 
                      impedit! Quo, fuga? Libero dolorem odio
                       ipsam minus quae, facere, possimus rem,
                      iusto harum nulla modi hic.                   
                      impedit! Quo, fuga? Libero dolorem odio
                       ipsam minus quae, facere, possimus rem,
                      iusto harum nulla modi hic.</P> 
                      </ParagraphWrap>                   
               
               
               <AnimatePresence>
               <HistoryCarousel>
                   {slides.map((slide, index) => {
                       return (
                          <HistoryCardSlide key={index}> 
                          {index === current && (
                              <HistoryRails>
                                  <MountainCard
                                  src={slide.image}
                                  alt={slide.alt}
                                  initial='hidden'
                                  animate='visible'
                                  exit='exit'
                                  variants={fadeAnimation}
                                  />
                              </HistoryRails>
                          )}
                          </HistoryCardSlide> 
                       )
                   })}               
               
                </HistoryCarousel>
                </AnimatePresence>
            </HistoryContent>
            </HistoryBg>            
        </HistoryContainer>
    )
}

export default History
