const useFadeIn = (delay = 0) => {
  const fadeIn = {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1, transition: { delay, duration: 0.5 } },
    viewport: { once: true, amount: 0.2 },
  };

  return { fadeIn };
};

export default useFadeIn;
