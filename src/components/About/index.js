import { useEffect, useState } from 'react';
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a 2022 graduate in BCA with 74% and an entry-level MERN stack developer. I'm a very ambitious front-end developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects. My determination and passion towards technologies drive me to constantly learn and improve my skills.
          </p>
          <p align="LEFT">
            I'm a self-taught developer who loves to explore new technologies and build innovative projects. In addition to my technical skills, I have a strong eye for design and enjoy creating visually appealing user interfaces. I believe in the power of clean and elegant code to deliver seamless user experiences.
          </p>
          <p>
            Apart from coding, I am a movieholic and always up for discussing the latest films. I find inspiration in storytelling and strive to incorporate elements of narrative and creativity in my work. When I'm not coding or watching movies, you can find me on the beach, capturing moments through my camera lens or interacting with my fellow tech experts.
          </p>
          <p>
            I value teamwork and collaboration, and I am eager to contribute my skills to a dynamic and supportive work environment. I am excited about the opportunity to work with like-minded professionals and contribute to the success of impactful projects.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSass} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
