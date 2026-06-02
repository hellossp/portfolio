import { useEffect, useState } from 'react';

export default function BackgroundGrid() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden bg-darkBg">
      {/* Base Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.35]" />

      {/* Static Ambient Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accentPurple/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-accentBlue/10 blur-[120px]" />
      <div className="absolute top-[40%] left-[60%] w-[35vw] h-[35vw] rounded-full bg-emerald-500/5 blur-[100px]" />

      {/* Dynamic Mouse Tracker Glow */}
      <div
        className="pointer-events-none fixed rounded-full bg-radial-glow blur-[80px] transition-opacity duration-500 ease-out"
        style={{
          width: '500px',
          height: '500px',
          left: `${mousePos.x - 250}px`,
          top: `${mousePos.y - 250}px`,
          opacity: isHovered ? 0.7 : 0,
        }}
      />
    </div>
  );
}
