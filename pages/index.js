import ReactLenis from "@studio-freight/react-lenis";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Card from "./compontents/Card";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);
  const cardsRef = useRef([]); // Array of card refs

  useEffect(() => {
    const cards = cardsRef.current;
    const scrollInnerHeight = window.innerHeight * 3;
    const position = [14, 38, 62, 86]; // Spread positions
    const rotation = [-15, -7.5, 7.5, 15]; // Initial rotation

    // Pin the cards section
    ScrollTrigger.create({
      trigger: container.current.querySelector(".cards"),
      start: "top top",
      end: `+=${scrollInnerHeight}`,
      pin: true,
      pinSpacing: true,
    });

    // **PHASE 1: Spread the cards (0% to 50% progress)**
    cards.forEach((card, index) => {
      gsap.to(card, {
        left: `${position[index]}%`,
        rotation: rotation[index],
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: container.current.querySelector(".cards"),
          start: "top top",
          end: `${scrollInnerHeight / 2}`, // First half of scroll
          scrub: 0.5,
        },
      });
    });

    // **PHASE 2: Rotate all cards at the same time (50% to 100% progress)**
    ScrollTrigger.create({
      trigger: container.current.querySelector(".cards"),
      start: `${scrollInnerHeight / 1.6}`, // Rotation starts after spreading
      end: `${scrollInnerHeight}`, // Second half of scroll
      scrub: 0.9,

      onUpdate: (self) => {
        const progress = self.progress; // Scroll progress (0 to 1)
        const flipRotation = -180 * progress; // Rotate from 0° to -180°

        cards.forEach((card, index) => {
          const frontElement = card.querySelector(".flip-front");
          const backElement = card.querySelector(".card-backText");

          gsap.to(frontElement, { rotateY: flipRotation, duration: 0.5, ease: "power1.inOut" });
          gsap.to(backElement, { rotateY: 180 + flipRotation, duration: 0.5, ease: "power1.inOut" });
          gsap.to(card, { rotation: rotation[index], ease: "power1.out" });
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="container" ref={container}>
        <section>
          <h1 className="capitalize">scroll effect applied <br /> keep scrolling</h1>
        </section>
        <section className="cards">
          {[...Array(4)].map((_, index) => (
            <Card key={index} id={`card-${index + 1}`} ref={(el) => (cardsRef.current[index] = el)} cardImage="/assets/images/cards/card1.jpg" cardAlt={`Card ${index + 1}`} backText="Source Code <br/> <a style='font-size:16px;text-decoration:underline;color:blue;' href='https://github.com/webDeveloperRamu/too-good-animation'>github:webDeveloperRamu</a>" />))}
        </section>
        <section className="footer">
          <h1>footer</h1>
        </section>
      </div>
    </ReactLenis>
  );
}
