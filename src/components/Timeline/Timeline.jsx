import { FaCheckCircle as Point } from "react-icons/fa";

export default function Timeline() {
  return (
    <section className="container my-16 mb-20">
      <h1 className="text-4xl text-center font-monsterate my-16 mb-16">
        Events
      </h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <Point className="size-4 text-primary" />
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2020</time>
            <div className="text-lg font-black">Beginning</div>
            My initial foray into the world of web development began with the
            languages Java and Python. I created a few basic websites and simple
            console games to gain a foundation in the field.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <Point className="size-4 text-primary" />
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2022</time>
            <div className="text-lg font-black font-monsterate">
              Obtained Baccalaureate
            </div>
            The Baccalaureat was challenging, particularly given the
            circumstances in my current country of residence and the stress I
            was under. However, I was able to achieve a passing grade at the
            end.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <Point className="size-4 text-primary" />
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2024</time>
            <div className="text-lg font-black font-monsterate">
              Obtained Diploma Of Full Stack Web Development
            </div>
            The Diploma course was particularly engaging and rewarding. It
            offered the opportunity to acquire new skills and expand my
            professional network, and I am pleased to say that I achieved an
            excellent grade.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <Point className="size-4 text-primary" />
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2025</time>
            <div className="text-lg font-black">
              Obtained Computer Engineering and Governance Digital Diploma
            </div>
            This Diploma represented a somewhat unconventional experience for
            me, given that I had previously studied in a different city. While I
            had the opportunity to make new connections, I was able to leverage
            my existing network to achieve the necessary results.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <Point className="size-4 text-primary" />
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">Near Future...</time>
            <div className="text-lg font-black font-monsterate">
              To Be Continued
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
