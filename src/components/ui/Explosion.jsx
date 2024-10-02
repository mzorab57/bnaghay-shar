import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const Explosion = ({ style }) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    directionX: Math.random() * 80 - 40,
    directionY: Math.random() * -50 - 10,
  }));

  return (
    <div style={style} className={cn("absolute z-50 h-2 w-2")}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-56 w-10 rounded-full bg-gradient-to-r from-transparent via-gray-400 to-transparent blur-sm"
      />
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x: span.directionX, y: span.directionY, opacity: 0 }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute size-1 rounded-full bg-gradient-to-b from-gray-300 via-gray-500"
        />
      ))}
    </div>
  );
};

export default Explosion;
