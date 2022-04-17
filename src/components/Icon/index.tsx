import React from 'react';
import Image from 'next/image';
import emailPng from '@/resources/email.png';
import reactPng from '@/resources/react.png';
import stackPng from '@/resources/stack.png';
import telePng from '@/resources/tele.png';
import githubPng from '@/resources/github.png';
import nodePng from '@/resources/node.png';
import nextPng from '@/resources/next.png';
import springPng from '@/resources/spring.png';
import nestSvg from '@/resources/nest.svg';
import webPng from '@/resources/web.png';

interface Props {
  name?: String;
  style?: React.CSSProperties;
}

const Icon: React.FunctionComponent<Props> = ({ name, style }) => {

  const getIcon = () => {
    switch (name) {
      case 'email': 
        return emailPng;
      case 'react': 
        return reactPng;
      case 'stack': 
        return stackPng;
      case 'tele': 
        return telePng;
      case 'github': 
        return githubPng;
      case 'next': 
        return nextPng;
      case 'node': 
        return nodePng;
      case 'spring': 
        return springPng;
      case 'nest': 
        return nestSvg;
      case 'web': 
        return webPng;
      default:
        return emailPng;
    }
  }

  return (
    <Image src={getIcon()} className="icon" alt="image" style={style} />
  );
};

export default Icon;