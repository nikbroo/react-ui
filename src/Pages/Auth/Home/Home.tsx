import Container from "../../../components/Container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bannerImg from "../../../assets/images/bannerImg.png";
import coneDhoop from "../../../assets/images/ConeDhoop.png";
import FLAMINGO from "../../../assets/images/FLAMINGO.png";
import Mindfulness from "../../../assets/images/Mindfulness.png";
import { BsCheck2Circle } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const responsive1 = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  return (
    <div className="w-full">
      <Container mainClass="bg-[#FFEEF68A] relative" className="py-2">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all 1s"
          transitionDuration={2000}
          containerClass="carousel-container static"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-center py-10">
              <div className="w-full md:w-[50%]">
                <img src={bannerImg} alt="banner" className="w-full" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-[32px] md:text-[48px] font-bold">
                  Transform Your Mind & Soul: Discover Your Spiritual Path with
                  Our Courses
                </h2>
              </div>
            </div>
          ))}
        </Carousel>
      </Container>

      <Container className="py-6 relative">
        <h2 className="text-[20px] font-bold">Shop From Our Top Categories</h2>
        <div className="w-full flex flex-wrap gap-[1%] justify-between pt-4 gap-y-3">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="w-[49%] md:w-[32%] lg:w-[15.5%] flex flex-col gap-1 items-center"
            >
              <img src={coneDhoop} alt="Cone Dhoop" className="w-full" />
              <h3 className="text-[16px] font-semibold">Cone Dhoop</h3>
              <p className="text-[14px] font-medium text-[#FA5C98]">Shop Now</p>
            </div>
          ))}
        </div>
      </Container>

      <Container className="py-6 relative bg-[#FFEEF68A]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-center text-[32px] md:text-[46px] font-extrabold pb-6">
            Why PINK FLAMINGO ?
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div>
              <img src={FLAMINGO} alt="FLAMINGO" className="w-full md:w-auto" />
            </div>
            <div>
              <ul>
                <li className="text-[12px] font-normal flex gap-2 pb-3">
                  <span>
                    <BsCheck2Circle color="#EC407A" size={18} />
                  </span>
                  Spirituality can provide them with a framework for
                  understanding the universe and their role in it
                </li>
                <li className="text-[12px] font-normal flex gap-2 pb-3">
                  <span>
                    <BsCheck2Circle color="#EC407A" size={18} />
                  </span>
                  Coping with stress and uncertainty
                </li>
                <li className="text-[12px] font-normal flex gap-2 pb-3">
                  <span>
                    <BsCheck2Circle color="#EC407A" size={18} />
                  </span>
                  Spirituality can be a path to personal growth and
                  self-discovery
                </li>
                <li className="text-[12px] font-normal flex gap-2">
                  <span>
                    <BsCheck2Circle color="#EC407A" size={18} />
                  </span>
                  Spirituality can provide people with a sense of community and
                  connection with others
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      <Container mainClass="relative" className="py-6">
        <h2 className="text-center text-[32px] md:text-[46px] font-extrabold pb-6">
          Our Latest Blogs
        </h2>

        <Carousel
          responsive={responsive1}
          swipeable={true}
          draggable={true}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all 1s"
          transitionDuration={2000}
          containerClass="carousel-container static arrow2"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px px-2"
        >
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="rounded-md overflow-hidden mb-2"
              style={{ boxShadow: "0px 4px 13px 0px #BEBEBE33" }}
            >
              <img src={Mindfulness} alt="Mindfulness" className="w-full" />
              <div className="py-3 px-4">
                <h3 className="text-[16px] md:text-[18px] font-bold text-center pb-2">
                  The Power of Mindfulness
                </h3>
                <p className="text-[14px] md:text-[16px] font-normal">
                  Mindfulness is the practice of being present and fully engaged
                  in the moment. It is about paying attention to our thoughts,
                  feelings, and sensations in a non-judgmental way.
                </p>
                <p className="text-center pt-10 pb-6">
                  <button
                    className="rounded-md py-1 px-5 text-white text-[14px] font-semibold"
                    style={{
                      background:
                        "linear-gradient(90deg, #DC8064 -11.11%, #E98C70 6.02%, #FB9E82 23.14%, #FDBB9F 48.17%, #FFCAAE 63.98%, #F8AD92 78.48%, #F19176 95.6%)",
                    }}
                  >
                    Read More
                  </button>
                </p>
                <span className="text-[12px] md:text-[14px] font-medium text-[#B9B9B9]">
                  08-05-2022
                </span>
              </div>
            </div>
          ))}
        </Carousel>
      </Container>

      <Container className="py-6 relative">
        <h2 className="text-center text-[32px] md:text-[46px] font-extrabold pb-6">
          Let’s Connect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <form className="w-full flex flex-wrap">
              <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-3 pb-3">
                <div
                  className="flex items-center py-4 px-3 rounded-lg w-full"
                  style={{ boxShadow: "0px 4px 13px 0px #BEBEBE33" }}
                >
                  <div className="pr-3">
                    <GoPerson color="#FA5C98" size={24} />
                  </div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="outline-none border-l-2 border-solid pl-5 pr-3 w-full text-[14px]"
                  />
                </div>
                <div
                  className="flex items-center py-4 px-3 rounded-lg w-full"
                  style={{ boxShadow: "0px 4px 13px 0px #BEBEBE33" }}
                >
                  <div className="pr-3">
                    <FiPhone color="#FA5C98" size={24} />
                  </div>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="outline-none border-l-2 border-solid pl-5 pr-3 w-full text-[14px]"
                  />
                </div>
              </div>

              <div
                className="flex items-center py-4 px-3 rounded-lg w-full mb-3"
                style={{ boxShadow: "0px 4px 13px 0px #BEBEBE33" }}
              >
                <div className="pr-3">
                  <TfiEmail color="#FA5C98" size={24} />
                </div>
                <input
                  type="text"
                  placeholder="Email address"
                  className="outline-none border-l-2 border-solid pl-5 pr-3 w-full text-[14px]"
                />
              </div>

              <div
                className="flex items-center py-4 px-2 rounded-lg w-full mb-3"
                style={{ boxShadow: "0px 4px 13px 0px #BEBEBE33" }}
              >
                <textarea
                  placeholder="Write your message here!"
                  className="outline-none px-2 w-full h-[120px] text-[14px]"
                />
              </div>
            </form>
          </div>
          <div className="bg-[url('././assets/images/connect.png')] bg-contain bg-no-repeat bg-center h-[300px] md:h-auto"></div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
