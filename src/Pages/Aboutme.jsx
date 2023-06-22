import Navigation from "../Components/Navigation";
import pic from "../../public/images/nagraj.jpg";
import instagram from "../../public/icons/thatguywithabook.png";
import tweets from "../../public/icons/quakes.png";
import tumblr from "../../public/icons/tumblrblog.png";

export default function Aboutme() {
  
  return (
    <div>
      <Navigation />
      <h2 className="author--book--title">The Creator</h2>
      <div className="author--intro--card--container">
        <div className="nagraj--intro--card">
          <div>
            <img className="nagraj-image" src={pic} alt="Nagraj Tadingi" />
            <div className="author-info">
              <p className="nagraj-para">
                Hello! I&apos;m Nagraj, the creator and curator behind this
                books website. As an avid reader and lifelong learner, I&apos;ve
                always found solace, inspiration, and endless possibilities
                within the pages of books. 
                <br/>
                <br />
                I have a particular admiration for authors like Andy
                Weir, whose scientific thrillers take us on thrilling journeys
                through space and beyond. I also find myself immersed in the
                intricate worlds crafted by Brandon Sanderson, whose epic
                fantasy novels are known for their rich characters and intricate
                magic systems. And when it comes to the enigmatic and
                thought-provoking, Haruki Murakami&apos;s surreal and introspective
                works never fail to captivate me. 
                <br />
                <br />
                This website is a platform
                where I aim to share my love for books.
                My mission is to ignite the joy of reading,
                foster meaningful conversations, and celebrate the incredible
                power of storytelling.
              </p>
              <div className="nagraj--links">
                <a
                  href="https://www.instagram.com/thatguywithabook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instagram}
                    alt="Instagram"
                    className="nagraj--social"
                  />
                </a>
                <a
                  href="https://thatguywithabook.tumblr.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tumblr} alt="Tumblr" className="nagraj--social" />
                </a>
                <a
                  href="https://twitter.com/studyingquakes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tweets} alt="Twitter" className="nagraj--social" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
