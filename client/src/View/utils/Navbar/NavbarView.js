import React, { useState, useEffect } from "react";

export const MobileMenuToggler = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleOpen = () => {
    return setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    return setMobileMenuOpen(false);
  };

  return { mobileMenuOpen, toggleOpen, closeMobileMenu };
};
