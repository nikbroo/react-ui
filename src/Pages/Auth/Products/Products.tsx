import React, { useState } from "react";
import Container from "../../../components/Container";
import Product from "../../../assets/images/product.png";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [activePage, setActivePage] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <Container className="py-6 relative">
        <h2 className="text-[20px] font-bold">Shop From Our Top Categories</h2>
        <div className="w-full grid md:grid-cols-4 grid-cols-1 gap-[15px] pt-4 gap-y-3">
          {[...Array(16)].map((_, index) => (
            <div key={index} className="flex flex-col mb-3">
              <img
                src={Product}
                alt="product"
                className="w-full cursor-pointer"
                onClick={() => navigate(`/products/dhoop_incense_cones`)}
              />
              <h3
                className="text-[16px] font-semibold text-[#FA5C98] pt-3 cursor-pointer"
                onClick={() => navigate(`/products/dhoop_incense_cones`)}
              >
                DHOOP INCENSE CONES
              </h3>
              <p className="text-[14px] font-normal pb-1">
                4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use
              </p>
              <span className="flex gap-[2px]">
                {[...Array(4)].map((_, index) => (
                  <FaStar key={index} color="#FFBB0E" size={16} />
                ))}
                <FaRegStar color="#FFBB0E" size={16} />
              </span>
              <p className="text-[20px] font-semibold text-[#C0590E] pt-1">
                $2.05
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-12 pb-8">
          {activePage > 1 && (
            <span
              className="text-[#E08468] text-[16px] font-medium cursor-pointer"
              onClick={() => setActivePage(activePage - 1)}
            >
              Previous
            </span>
          )}
          {[...Array(6)].map((_, index) => (
            <span
              key={index}
              className={`text-[16px] font-medium cursor-pointer flex items-center justify-center h-8 w-8 rounded-full`}
              style={
                activePage === index + 1
                  ? {
                      background:
                        "linear-gradient(90deg, #DC8064 -11.11%, #E98C70 6.02%, #FB9E82 23.14%, #FDBB9F 48.17%, #FFCAAE 63.98%, #F8AD92 78.48%, #F19176 95.6%)",
                      color: "white",
                    }
                  : {}
              }
              onClick={() => setActivePage(index + 1)}
            >
              {index + 1}
            </span>
          ))}
          {activePage < [...Array(6)].length && (
            <span
              className="text-[#E08468] text-[16px] font-medium cursor-pointer"
              onClick={() => setActivePage(activePage + 1)}
            >
              Next
            </span>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Products;
