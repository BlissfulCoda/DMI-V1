import { motion } from "framer-motion";
import Bridge from "../Utilties/Bridge";
import Nub from "../Utilties/Nub";
const TabContent = ({ direction, selected, TABS }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className=" absolute left-40 top-[calc(100%_+_12px)] w-56 rounded-lg border border-neutral-100 bg-gradient-to-b from-neutral-100 via-neutral-100 to bg-neutral-100 p-4"
    >
      <Bridge />
      {TABS.map((tab) => {
        return (
          <div className="overflow-hidden" key={tab.id}>
            {selected === tab.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: direction === "l" ? 100 : direction === "r" ? -100 : 0,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
              >
                <tab.Component />
                <Nub selected={selected} />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

export default TabContent;
