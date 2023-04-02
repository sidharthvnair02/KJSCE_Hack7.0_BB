import React from "react";

import { Img, Text, Button, Input } from "components";
import HomePageCarousel from "components/HomePageCarousel";
import { useNavigate } from "react-router-dom";

const HomePagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_100 font-roboto h-[2215px] mx-auto pt-[58px] relative w-full">
        <div className="flex items-center justify-start max-w-[1282px] mb-[-63px] mx-auto md:px-5 w-full z-[1]">
          <div className="flex flex-col md:gap-10 gap-36 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Img
                src="images/img_logo.svg"
                className="h-[31px] w-auto"
                alt="logo"
              />
              <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between w-[53%] md:w-full">
                <Text
                  className="font-dmsans font-normal sm:mt-0 mt-3 not-italic text-gray_901 text-right w-auto"
                  variant="body4"
                >
                  Home
                </Text>
                <Text
                  className="font-dmsans font-normal sm:mt-0 mt-3 not-italic text-gray_901 text-right w-auto"
                  variant="body4"
                >
                  About
                </Text>
                <Text
                  className="common-pointer font-dmsans font-normal sm:mt-0 mt-3.5 not-italic text-gray_901 text-right w-auto"
                  variant="body4"
                  onClick={() => navigate("/bookingpage")}
                >
                  Bookings
                </Text>
                <Text
                  className="font-dmsans font-normal sm:mt-0 mt-3 not-italic text-gray_901 text-right w-auto"
                  variant="body4"
                >
                  Contact Us
                </Text>
                <Button className="bg-indigo_A400 cursor-pointer font-normal font-roboto leading-[normal] min-w-[102px] not-italic py-3 rounded-[21px] shadow-bs text-[17px] text-center text-gray_50 tracking-[1.02px] w-auto"
                 onClick={() => navigate("/loginpage")}
                >
                  Login{" "}
                </Button>
                <Button className="bg-indigo_A400 cursor-pointer font-normal font-roboto leading-[normal] min-w-[102px] not-italic py-3 rounded-[21px] shadow-bs text-[17px] text-center text-gray_50 tracking-[1.02px] w-auto"
                 onClick={() => navigate("/signuppage")}
                >
                  Sign Up
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-11 items-start justify-between w-[97%] md:w-full">
              <div className="flex items-center justify-start md:mt-0 mt-[62px] w-auto md:w-full">
                <div className="flex items-center justify-start w-full">
                  <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                    <div className="flex items-center justify-start w-full">
                      <Text
                        className="leading-[90.00px] not-italic text-bluegray_900 text-left w-full"
                        as="h2"
                        variant="h2"
                      >
                        Confuse where to go?
                      </Text>
                    </div>
                    <div className="flex font-dmsans items-center justify-start w-auto md:w-full">
                      <Text
                        className="leading-[44.00px] not-italic text-bluegray_900_96 text-left w-full"
                        variant="body3"
                      >
                        Sightscenes is the place where you can book all the
                        tourist places of your favorite destination under one
                        roof. On bonus, we also give you an option to choose a
                        tour guide and all provide near by amazing food-joints
                        in that local area.{" "}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_group17_gray_300.svg"
                className="h-[523px] w-auto"
                alt="groupSeventeen"
              />
            </div>
          </div>
        </div>
        <HomePageCarousel className="flex flex-col h-[560px] md:h-auto items-center justify-start max-w-[1428px] mb-[undefinedpx] mt-auto mx-auto md:px-5 py-10 w-full z-[1]" />
        <div className="flex items-center justify-start mt-auto mx-auto w-full">
          <div className="flex flex-col md:gap-10 gap-[89px] items-center justify-start w-full">
            <div className="flex items-center justify-start max-w-[1282px] mx-auto md:px-5 py-[167px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-0.5 w-full">
                <Img
                  src="images/img_mumbaicst1.png"
                  className="md:flex-1 h-[374px] sm:h-auto object-cover w-auto md:w-full"
                  alt="mumbaicstOne"
                />
                <div className="flex md:flex-1 flex-col gap-12 justify-start w-auto md:w-full">
                  <div className="flex items-center justify-start w-full">
                    <div className="flex items-center justify-start w-full">
                      <div className="flex items-center justify-start w-full">
                        <Text
                          className="leading-[90.00px] not-italic text-bluegray_900 text-left w-full"
                          as="h2"
                          variant="h2"
                        >
                          Book Places under one Roof
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start md:ml-[0] ml-[129px] w-[45%] md:w-full">
                    <Button className="bg-indigo_A400 cursor-pointer font-normal min-w-[270px] not-italic py-[22px] rounded-[16px] shadow-bs1 sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray_50 w-auto">
                      Book your tickets
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex font-dmsans sm:h-[295px] md:h-[560px] h-[710px] justify-end pt-[415px] md:px-5 relative w-full">
              <div className="bg-indigo_300 h-[295px] mt-auto mx-auto w-full"></div>
              <div className="absolute bottom-[1%] flex md:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto w-[85%]">
                <Text
                  className="leading-[50.00px] not-italic text-gray_900 text-left"
                  variant="body2"
                >
                  <>
                    Home
                    <br />
                    About
                    <br />
                    Booking
                    <br />
                    Places
                  </>
                </Text>
                <div className="flex flex-col justify-start md:mt-0 mt-[18px] w-auto md:w-full">
                  <Text
                    className="font-normal ml-3.5 md:ml-[0] not-italic text-gray_900 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Sign Up to Get Interesting Facts
                  </Text>
                  <div className="flex md:flex-col flex-row font-roboto gap-[27px] items-center justify-between mt-2.5 w-full">
                    <Input
                      wrapClassName="bg-gray_100 md:flex-1 pl-[30px] pr-3 py-[22px] rounded-[16px] w-auto md:w-full"
                      className="font-normal md:text-[23px] not-italic p-0 placeholder:text-gray_500 sm:pl-5 sm:text-[21px] text-[25px] text-gray_500 text-left w-full"
                      type="email"
                      name="groupOne"
                      placeholder="Enter Email Address"
                    ></Input>
                    <div className="flex md:flex-1 items-center justify-start w-auto md:w-full">
                      <Button className="bg-indigo_A400 cursor-pointer font-normal min-w-[149px] not-italic py-[22px] rounded-[16px] shadow-bs1 sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray_50 w-auto">
                        Sign Up
                      </Button>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[268px] mt-[73px] not-italic text-gray_900 text-left w-auto"
                    variant="body2"
                  >
                    Copyright © 2023 Sightscenes
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePagePage;
