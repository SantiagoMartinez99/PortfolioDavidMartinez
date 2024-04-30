import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type RevealProps = {
  children: JSX.Element;
  direction?: "vertical" | "horizontal" | "horizontalReverse";
};

function Reveal({ children, direction = "vertical" }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const variants = {
    vertical: {
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    },
    horizontal: {
      hidden: { opacity: 0, x: -75 },
      visible: { opacity: 1, x: 0 },
    },
    horizontalReverse: {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0 },
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={variants[direction]} // Selecciona los variants según la dirección
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { top: 0, left: 0 },
          visible: { top: "100%", left: 0 },
        }} // La dirección horizontal no requiere desplazamiento lateral
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 1, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 0,
          left: direction === "horizontal" ? 4 : undefined, // Ajusta el desplazamiento lateral según la dirección
          right: direction === "horizontal" ? 4 : undefined,
          bottom: 0,
          zIndex: 20,
        }}
      />
    </div>
  );
}

export default Reveal;
