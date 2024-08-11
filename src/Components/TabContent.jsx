import { motion } from "framer-motion";
const TabContent = ({ direction, selected }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className=" absolute left-44 top-[calc(100%_+_12px)] w-96 rounded-lg border border-neutral-100 bg-gradient-to-b from-neutral-100 via-neutral-100 to bg-neutral-100 p-4"
    >
      <div>
        <h5>{selected}</h5>
      </div>
    </motion.div>
  );
};

export default TabContent;
