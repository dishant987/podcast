import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Particles from "../components/magicui/particles";
import { useTheme } from '../components/theme-provider';

const AuthLayout = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="relative h-full">
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={80}
        color={color}
        refresh
      />
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
