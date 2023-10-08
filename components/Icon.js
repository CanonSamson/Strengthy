// components/Icon.js
import React from 'react';
import { FaGithub, FaTwitter, FaFacebook, /* ... and other icons ... */ } from 'react-icons/fa';
import {FiChevronUp, FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import { AiFillCheckCircle } from 'react-icons/ai';
const iconComponents = {
  github: FaGithub,
  twitter: FaTwitter,
  facebook: FaFacebook,
  up: FiChevronUp,
  right: FiChevronRight,
  left: FiChevronLeft,
  check: AiFillCheckCircle
};

const Icon = ({ name, ...props }) => {
  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    console.error(`Icon '${name}' not found.`);
    return null;
  }

  return <IconComponent {...props} />;
};

export default Icon;
