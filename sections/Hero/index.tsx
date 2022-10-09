import React from "react";
import styles from "./styles.module.scss";

import { Wrapper, SocialLinks, ThemeSwitcher } from "../../components/";

function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

const Hero: React.FC = () => {
  const handVideoRef = React.useRef<HTMLVideoElement>(null);

  const [playHand, setPlayHand] = React.useState(false);
  const [isSafariBrowser, setIsSafariBrowser] = React.useState(false);

  React.useEffect(() => {
    // console.log("isSafariBrowser", isSafari());
    setIsSafariBrowser(isSafari());
  }, []);

  React.useEffect(() => {
    if (handVideoRef.current) {
      if (playHand) {
        handVideoRef.current.currentTime = 0;
        handVideoRef.current.play();
      }

      // if video  is ended, set playHand to false
      const handleVideoEnded = () => {
        setPlayHand(false);
      };

      if (handVideoRef.current) {
        handVideoRef.current.addEventListener("ended", handleVideoEnded);
      }

      return () => {
        if (handVideoRef.current) {
          handVideoRef.current.removeEventListener("ended", handleVideoEnded);
        }
      };
    }
  }, [playHand]);

  return (
    <Wrapper className={`${styles.hero}`}>
      <section className={styles.content}>
        <div className={styles.icons}>
          <SocialLinks className={styles.social} />
          <ThemeSwitcher className={styles.themeSwitcher} />
        </div>

        <section className={styles.helloWrap}>
          <section
            className={styles.hello}
            onMouseEnter={() => {
              setPlayHand(true);
            }}
          >
            <span className={styles.helloText}>Hi</span>

            <video
              controls={false}
              className={styles.wavingHand}
              ref={handVideoRef}
              playsInline
              autoPlay={false}
              muted
              src={`./assets/waving-hand.${isSafariBrowser ? "mov" : "webm"}`}
              poster="./assets/hand-poster.png"
            />

            <h1 className={styles.helloText}>
              I’m Pavel, a{" "}
              <span
                style={{
                  background: `linear-gradient(261.62deg, #AB66E8 -4.66%, #FFC773 110.39%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                digital designer
              </span>{" "}
              based in Berlin.
            </h1>
            <h3 className={styles.slavaUkraini}>
              I’m against war in Ukraine. Against Putin. Слава Україні!
            </h3>
          </section>
        </section>
      </section>
    </Wrapper>
  );
};

export default Hero;
