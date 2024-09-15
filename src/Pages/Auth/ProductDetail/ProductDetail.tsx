import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "../../../components/Container";
import image1 from "../../../assets/images/image1.png";
import image2 from "../../../assets/images/image2.png";
import image3 from "../../../assets/images/image3.png";
import image4 from "../../../assets/images/image4.png";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import Carousel from "react-multi-carousel";
import RelatedImage from "../../../assets/images/relative_image.png";
import { BsCart } from "react-icons/bs";

const images = [image1, image2, image3, image4];
const tabs = ["Description", "Product Information", "Reviews"];
const data = [
  {
    name: "Musk INCENSE CONES",
    oPrice: "$2.66",
    dPrice: "$0.75",
    tag: "NEW",
    tagType: "new",
    img: RelatedImage,
    liked: true,
    available: true,
  },
  {
    name: "Musk INCENSE CONES",
    oPrice: "$2.66",
    dPrice: "$0.75",
    tag: "-10%",
    tagType: "discount",
    img: RelatedImage,
    liked: true,
    available: true,
  },
  {
    name: "Musk INCENSE CONES",
    oPrice: "$2.66",
    dPrice: "$0.75",
    tag: "HOT",
    tagType: "hot",
    img: RelatedImage,
    liked: false,
    available: true,
  },
  {
    name: "Musk INCENSE CONES",
    oPrice: "$2.66",
    dPrice: "$0.75",
    tag: "NEW",
    tagType: "new",
    img: RelatedImage,
    liked: true,
    available: true,
  },
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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

const ProductDetail = () => {
  const { pathname } = useLocation();
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="w-full">
      <Container className="py-2 relative capitalize text-[16px] font-medium text-[#C1C1C1]">
        {pathname?.split("/")?.map((item, index) => {
          if (item) {
            const temp = item
              .split("_")
              ?.map((ele, i) => (
                <React.Fragment key={i}>{ele} </React.Fragment>
              ));

            if (pathname?.split("/").length - 1 === index) {
              return <span key={index}>{temp}</span>;
            } else {
              return (
                <span key={index}>
                  {temp}
                  {"> "}
                </span>
              );
            }
          }
        })}
      </Container>

      <Container className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col flex-col-reverse md:flex-row">
          <div className="flex md:flex-col gap-3 w-full md:w-[25%]">
            {images.map((item, index) => (
              <img
                key={index}
                src={item}
                alt="product images"
                onClick={() => setSelectedImage(item)}
                className={`w-[80px] md:w-[100px] h-[70px] md:h-[80px] object-contain p-2 md:p-3 cursor-pointer ${
                  selectedImage === item &&
                  "border border-solid rounded-sm border-[#E6896D]"
                }`}
              />
            ))}
          </div>
          <div className="w-full md:w-[75%] p-3 md:p-5 bg-[#FFF2F8] rounded-lg overflow-hidden">
            <img src={selectedImage} alt="product images" className="w-full" />
          </div>
        </div>

        <div className="pl-0 md:pl-6 flex flex-col justify-between gap-4">
          <div>
            <p className="text-[12px] font-normal pb-1">
              <span className="font-medium">Brand:</span> Rashmi Divine Solutions
            </p>
            <p className="text-[12px] font-normal pb-1">
              <span className="font-medium">Scent:</span> Floral
            </p>
            <p className="text-[12px] font-normal pb-1">
              <span className="font-medium">Availability:</span> Only 2 in Stock
            </p>

            <h2 className="text-[#191919] text-[18px] md:text-[22px] font-medium">
              Lavender Dhoop Cone Sticks Pack of 100-Piece/Jar by Rashmi Divine
            </h2>
            <span className="flex gap-[2px]">
              {[...Array(4)].map((_, index) => (
                <FaStar key={index} color="#FFBB0E" size={16} />
              ))}
              <FaRegStar color="#FFBB0E" size={16} />
            </span>

            <ul className="list-disc pl-4 md:pl-6 pt-2 text-[10px] md:text-[12px]">
              <li className="pb-2">
                Lavender Dhoop sticks activate your senses and relax the nerves.
              </li>
              <li className="pb-2">
                Crafted from the finest ingredients, with an alluring fragrance.
              </li>
              <li className="pb-2">
                Charcoal-free Dhoop sticks with soothing fragrance.
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[12px] text-[#191919] font-normal pb-1">
              USD (incl. of all taxes)
            </p>
            <p className="text-[20px] md:text-[22px] text-[#191919] font-semibold pb-1">
              ${(4.05*quantity).toFixed(2)}{" "}
              <span className="pl-2 text-[14px] md:text-[16px] text-[#D9D9D9] font-medium line-through">
                ${(8.00*quantity).toFixed(2)}
              </span>
            </p>

            <div className="flex gap-4 md:gap-5 pt-2 md:pt-3">
              <div className="flex border border-[#F0F0F0] text-[18px] md:text-[22px] font-semibold">
                <span
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center cursor-pointer"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  <LuMinus />
                </span>
                <span className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center cursor-pointer border-x">
                  {quantity}
                </span>
                <span
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center cursor-pointer"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <GoPlus />
                </span>
              </div>

              <button
                className="rounded-md py-[2px] px-8 md:px-10 text-white text-[12px] font-semibold"
                style={{
                  background:
                    "linear-gradient(90deg, #DC8064 -11.11%, #E98C70 6.02%, #FB9E82 23.14%, #FDBB9F 48.17%, #FFCAAE 63.98%, #F8AD92 78.48%, #F19176 95.6%)",
                }}
              >
                Buy Now
              </button>

              <button className="rounded-md py-[2px] px-6 md:px-8 text-[#E98C70] text-[12px] font-semibold border-[#E98C70] border">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Container>

      <Container className="py-6 relative">
        <div className="flex gap md:gap-8 justify-center items-center w-full border-b">
          {tabs?.map((item, index) => (
            <span
              key={index}
              onClick={() => setSelectedTab(item)}
              className={`relative text-[16px] font-medium pb-2 px-2 text-center cursor-pointer ${
                selectedTab === item &&
                "before:h-[2px] rounded-sm before:bottom-0 before:w-full before:bg-[#FA5C98] before:absolute before:left-0"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="max-w-[700px] mx-auto pt-5">
          <p className="text-[12px] font-normal">
            Dhoop incence cone made from natual hurbs and scented.Long lasting
            enthralling dhoop batti for regular use - encouraging and cheering
            dhoop incense cones. Use dhoop bati for offering your prayers or
            while meditating or relaxing. It will unquestionably boost up your
            confidence, create encouraging environment and purify the atmosphere
            while spreading the lingering aroma all around. Use it every morning
            while doing prayers, while meditating or exercising. It's one of the
            best incense cones that spread mesmerizing fragrance all around.
            Simply relax and have the time of your lives by getting these
            incense cones. can we use for spiritual and meditation purpose. Its
            great fragrance and long lasting effect. Its heavenly aroma
            encourages your soul and thoughts to be pure and beautiful. For
            uplifting and purifying the ambience.
          </p>
        </div>
      </Container>

      <Container mainClass="relative" className="py-6 mb-8">
        <h2 className="text-center text-[22px] font-semibold pb-6">
          Related Products
        </h2>

        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all 1s"
          transitionDuration={2000}
          containerClass="carousel-container static arrow2 pb-8"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px px-2"
        >
          {data?.map((item, index) => (
            <div key={index}>
              <div className="rounded-md overflow-hidden mb-2 border-2 border-[#E6896DCC] p-3 flex flex-col items-center relative">
                <span
                  className={`absolute top-3 left-3 px-3 text-[8px] font-medium text-white flex items-center justify-center rounded-lg pt-[2px] ${
                    item?.tagType === "new"
                      ? "bg-[#12A05C]"
                      : item?.tagType === "discount"
                      ? "bg-[#E73C17]"
                      : "bg-[#FF9900]"
                  }`}
                >
                  {item?.tag}
                </span>
                <span
                  className={`absolute top-3 right-3 h-8 w-8 flex items-center justify-center text-[16px] rounded-full ${
                    item?.liked
                      ? "text-[#FA5C98] bg-[#FFF2F8]"
                      : "text-[#D7D7D7] border border-[#D7D7D7]"
                  }`}
                >
                  <FaHeart />
                </span>
                <img
                  src={item?.img}
                  alt="Mindfulness"
                  className="w-[90%] mx-auto"
                />
                <button
                  className="rounded-md py-2 px-5 text-white text-[12px] font-medium flex gap-2 items-center"
                  style={{
                    background:
                      "linear-gradient(90deg, #DC8064 -11.11%, #E98C70 6.02%, #FB9E82 23.14%, #FDBB9F 48.17%, #FFCAAE 63.98%, #F8AD92 78.48%, #F19176 95.6%)",
                  }}
                >
                  <BsCart />
                  {item?.available ? "Add to cart" : "Out of Stock"}
                </button>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-[#FA5C98] text-[16px] font-medium py-1">
                  {item?.name}
                </h3>
                <p className="text-[18px] text-[#E28569] font-semibold pb-1">
                  {item?.dPrice}{" "}
                  {item?.oPrice && (
                    <span className="pl-1 text-[18px] text-[#D9D9D9] font-normal line-through">
                      {item?.oPrice}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default ProductDetail;
