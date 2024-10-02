import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "../../utils/cn";
import Explosion from "./Explosion";

export const CollisionMechanism = React.forwardRef(
  ({ parentRef, containerRef, beamOptions }, ref) => {
    const beamRef = useRef(null);
    const [collision, setCollision] = useState({
      detected: false,
      coordinates: null,
    });
    const [beamKey, setBeamKey] = useState(0);
    const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

    // Collision check function
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        // Check if the beam hits the bottom of the container
        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: { x: relativeX, y: relativeY },
          });
          setCycleCollisionDetected(true);
        }
      }
    };

    // Run the collision check at intervals
    useEffect(() => {
      const animationInterval = setInterval(checkCollision, 50);
      return () => clearInterval(animationInterval);
    }, [cycleCollisionDetected, containerRef]);

    // Handle resetting the collision and beam state after a delay
    useEffect(() => {
      if (collision.detected && collision.coordinates) {
        setTimeout(() => {
          setCollision({ detected: false, coordinates: null });
          setCycleCollisionDetected(false); // Reset the collision state
        }, 2000);

        setTimeout(() => {
          setBeamKey((prevKey) => prevKey + 1); // Trigger beam rerender
        }, 2000);
      }
    }, [collision]);

    return (
      <>
        <motion.div
          key={beamKey}
          ref={beamRef}
          animate="animate"
          initial={{
            translateY: "-200px",
            translateX: beamOptions.initialX,
            rotate: 0,
          }}
          variants={{
            animate: {
              translateY: "1800px",
              translateX: beamOptions.translateX,
              rotate: 0,
            },
          }}
          transition={{
            duration: beamOptions.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: beamOptions.delay,
            repeatDelay: beamOptions.repeatDelay,
          }}
          className={cn(
            "absolute z-50 left-[10%] top-20 h-28 w-px rounded-full bg-gradient-to-t from-gray-300 via-gray-500 to-transparent",
            beamOptions.className
          )}
        />
        {/* Render Explosion when collision is detected */}
        <AnimatePresence>
          {collision.detected && collision.coordinates && (
            <Explosion
              key={`${collision.coordinates.x}-${collision.coordinates.y}`}
              style={{
                left: `${collision.coordinates.x}px`,
                top: `${collision.coordinates.y}px`,
                transform: "translate(-50%, -50%)",
              }}
            />
          )}
        </AnimatePresence>
      </>
    );
  }
);

CollisionMechanism.displayName = "CollisionMechanism";
