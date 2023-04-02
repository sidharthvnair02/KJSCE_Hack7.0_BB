import React from "react";

import { Img, Text, List, SelectBox } from "components";
import { useNavigate } from "react-router-dom";

const BookingPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-dmsans sm:gap-10 md:gap-10 gap-[110px] items-center justify-end mx-auto sm:pr-5 pr-[38px] py-[38px] w-full">
        <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between max-w-[1233px] mt-[26px] mx-auto md:px-5 w-full">
          <Img
            src="images/img_logo.svg"
            className="h-[31px] w-auto"
            alt="logo"
          />
          <div className="flex sm:flex-1 flex-row items-start justify-between sm:mt-0 mt-1.5 w-[32%] sm:w-full">
            <Text
              className="common-pointer font-normal not-italic text-gray_901 text-right w-auto"
              variant="body4"
              onClick={() => navigate("/")}
            >
              Home
            </Text>
            <Text
              className="font-normal not-italic text-gray_901 text-right w-auto"
              variant="body4"
            >
              About
            </Text>
            <Text
              className="font-normal not-italic text-gray_901 text-right w-auto"
              variant="body4"
            >
              Bookings
            </Text>
            <Text
              className="font-normal not-italic text-gray_901 text-right w-auto"
              variant="body4"
            >
              Contact Us
            </Text>
          </div>
        </div>
        <div className="font-playfairdisplay md:h-[465px] h-[614px] max-w-[1400px] mx-auto md:px-5 relative w-full">
          <div className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-10 gap-[100px] h-[187px] md:h-auto items-center justify-between left-[0] max-w-[1271px] md:pl-10 sm:pl-5 pl-[99px] rounded-bl-none rounded-br-[20px] rounded-tl-none rounded-tr-[20px] shadow-bs2 top-[0] w-full">
            <div className="flex flex-1 md:flex-col flex-row gap-10 items-start justify-start w-full">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-10 grid sm:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-3 items-start justify-center w-full">
                  <Text
                    className="font-normal font-rubik not-italic text-gray_601 text-left uppercase w-auto"
                    variant="body4"
                  >
                    Destination
                  </Text>
                  <Text
                    className="border-b border-black_900 border-solid font-playfairdisplay not-italic pb-2.5 text-gray_909 text-left w-full"
                    variant="body2"
                  >
                    Mumbai
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-start justify-center w-full">
                  <Text
                    className="font-normal font-rubik not-italic text-gray_601 text-left uppercase w-auto"
                    variant="body4"
                  >
                    Tourist place
                  </Text>
                  <Text
                    className="border-b border-black_900 border-solid font-playfairdisplay not-italic pb-2.5 text-gray_909 text-left w-full"
                    variant="body2"
                  >
                    Imagicaa
                  </Text>
                </div>
              </List>
              <div className="flex flex-1 flex-col gap-[15px] items-start justify-center w-full">
                <Text
                  className="font-normal font-rubik not-italic text-gray_601 text-left uppercase w-auto"
                  variant="body4"
                >
                  Date
                </Text>
                <SelectBox
                  className="border-b border-black_900 border-solid font-normal font-playfairdisplay leading-[normal] not-italic pb-2.5 text-gray_909 text-left text-lg w-full"
                  placeholderClassName="text-gray_909"
                  name="date_One"
                  placeholder="04/03/2023"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-6 w-6"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </div>
            </div>
            <div className="bg-indigo_A100 flex flex-row gap-3 h-[187px] md:h-auto items-center justify-start px-5 py-[60px] rounded-bl-none rounded-br-[20px] rounded-tl-none rounded-tr-[20px] w-[170px]">
              <Text
                className="flex-1 max-w-[97px] md:max-w-full not-italic text-left text-white_A700"
                as="h5"
                variant="h5"
              >
                Book Now
              </Text>
              <Img
                src="images/img_arrow1.svg"
                className="h-0.5 w-[21px]"
                alt="arrowOne"
              />
            </div>
          </div>
          <Img
            src="images/img_peoples1.png"
            className="absolute bottom-[0] h-[465px] inset-x-[0] mx-auto object-cover w-full"
            alt="peoplesOne"
          />
        </div>
      </div>
    </>
  );
};

export default BookingPagePage;
