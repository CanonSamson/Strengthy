// components/Icon.js
import React from 'react';
import { FaGithub, FaTwitter, FaFacebook, /* ... and other icons ... */ } from 'react-icons/fa';
import { FiChevronUp, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { AiFillCheckCircle, AiOutlineMail, AiOutlineDown } from 'react-icons/ai';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5'
const iconComponents = {
  github: FaGithub,
  twitter: FaTwitter,
  facebook: FaFacebook,
  down: AiOutlineDown,
  up: FiChevronUp,
  right: FiChevronRight,
  left: FiChevronLeft,
  check: AiFillCheckCircle,
  phone: IoCallOutline,
  mail: AiOutlineMail,
  location: IoLocationOutline
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
