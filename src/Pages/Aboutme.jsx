import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import pic from "../../public/images/nt.png";
import close from "../../public/icons/close-mail.png";
import instagram from "../../public/icons/thatguywithabook.png";
import tweets from "../../public/icons/quakes.png";
import tumblr from "../../public/icons/tumblrblog.png";

export default function Aboutme() {
  function handleMail() {
    window.location.href = `mailto:${"ntadingi5@gmail.com"}`;
  }
  return (
    <div>
      <Navigation />
      <h2 className="author--book--title">The Creator</h2>
      <div className="author--intro--card--container">
        <div className="nagraj--intro--card">
          <div>
            <img className="nagraj-image" src={pic} alt="Nagraj Tadingi" />
            <div className="author-info">
              {/* <h2 className='info-name'>{info.name}</h2> */}
              <p className="info-genre">
                Hello! I'm Nagraj Tadingi, the creator and curator behind this
                books website. As an avid reader and lifelong learner, I've
                always found solace, inspiration, and endless possibilities
                within the pages of books. My favorite genre is speculative
                fiction, with its captivating blend of imagination, science, and
                fantasy. I have a particular admiration for authors like Andy
                Weir, whose scientific thrillers take us on thrilling journeys
                through space and beyond. I also find myself immersed in the
                intricate worlds crafted by Brandon Sanderson, whose epic
                fantasy novels are known for their rich characters and intricate
                magic systems. And when it comes to the enigmatic and
                thought-provoking, Haruki Murakami's surreal and introspective
                works never fail to captivate me. This website is a platform
                where I aim to share my love for speculative fiction and other
                genres, offering book reviews, author interviews, and
                recommendations. My mission is to ignite the joy of reading,
                foster meaningful conversations, and celebrate the incredible
                power of storytelling.
              </p>
              <div className="nagraj--links">
                <a href="https://www.instagram.com/thatguywithabook">
                  <img
                    src={instagram}
                    alt="Instagram"
                    className="nagraj--social"
                  />
                </a>
                <a href="https://thatguywithabook.tumblr.com/">
                  <img src={tumblr} alt="Tumblr" className="nagraj--social" />
                </a>
                <a href="https://twitter.com/studyingquakes">
                  <img src={tweets} alt="Twitter" className="nagraj--social" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright--card">
        <h2 className="copyright--title">Copyright</h2>
        <p className="copyright--para">
          All the pictures and ebooks featured on my website have been sourced
          from the internet. I would like to make it clear that I do not claim
          any ownership or copyright over these materials. They are used solely
          for informational and educational purposes on my website. I am
          grateful to the original creators for sharing their work online, and I
          have made every effort to credit and acknowledge their contributions
          wherever possible. If any copyright holder believes that their rights
          have been violated, kindly contact me so that I can promptly address
          the concern.
        </p>
        <div>
          <a href="" onClick={handleMail}>
            <img src={close} alt="" className="mail-icon" />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
