import React from "react";

import { Img, Text, List } from "components";
import { useNavigate } from "react-router-dom";

const BookingPageMumbaiPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-dmsans sm:gap-10 md:gap-10 gap-[92px] items-center justify-end mx-auto p-[26px] sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[110px] items-center justify-start max-w-[1281px] mt-[38px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-[97%] md:w-full">
            <Img
              src="images/img_logo.svg"
              className="h-[31px] w-auto"
              alt="logo"
            />
            <div className="flex flex-row items-start justify-between sm:mt-0 mt-1.5 w-[32%] sm:w-full">
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
                className="common-pointer font-normal not-italic text-gray_901 text-right w-auto"
                variant="body4"
                onClick={() => navigate("/bookingpage")}
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
          <List
            className="flex-col md:gap-10 gap-[102px] grid items-center w-full"
            orientation="vertical"
          >
            <div className="bg-bluegray_200 flex flex-1 items-start justify-end p-9 sm:px-5 rounded-[16px] w-full">
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start ml-5 md:ml-[0] mr-auto mt-4 w-[55%] md:w-full">
                <div className="bg-gray_900 h-[275px] mb-[15px] rounded-[16px] w-[275px]"></div>
                <div className="flex flex-col gap-[26px] justify-start w-[55%] md:w-full">
                  <div className="flex flex-row gap-[9px] items-start justify-start mr-[21px] w-[95%] md:w-full">
                    <Img
                      src="images/img_location_gray_910.svg"
                      className="h-[50px] mt-[7px] w-[50px]"
                      alt="location"
                    />
                    <div className="flex flex-col relative w-[83%]">
                      <Text
                        className="mx-auto not-italic text-gray_900 text-right w-auto"
                        as="h3"
                        variant="h3"
                      >
                        Snow World
                      </Text>
                      <div className="flex items-start justify-start mt-[-4.3px] w-[45%] z-[1]">
                        <div className="flex flex-row gap-1 items-start justify-start self-stretch w-auto">
                          <Img
                            src="images/img_star.svg"
                            className="h-5 w-5"
                            alt="star"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="h-5 w-5"
                            alt="star_One"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="h-5 w-5"
                            alt="star_Two"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="h-5 w-5"
                            alt="star_Three"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-5 w-5"
                            alt="star_Four"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-poppins items-start justify-start md:ml-[0] ml-[59px] w-[84%] md:w-full">
                    <div className="flex flex-row gap-[9px] items-end justify-start ml-0.5 md:ml-[0] w-full">
                      <Img
                        src="images/img_image1.png"
                        className="h-[34px] md:h-auto mt-1.5 object-cover w-[34px]"
                        alt="imageOne"
                      />
                      <Text
                        className="font-light mb-0.5 text-black_900 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Instant Confirmation
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3.5 items-start justify-start mt-[35px] w-[81%] md:w-full">
                      <Img
                        src="images/img_image2.png"
                        className="h-[34px] md:h-auto mt-[3px] object-cover w-[34px]"
                        alt="imageTwo"
                      />
                      <Text
                        className="font-light text-black_900 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Mobile Voucher
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3.5 items-start justify-start mt-[31px] w-[63%] md:w-full">
                      <Img
                        src="images/img_image3.png"
                        className="h-[34px] md:h-auto mt-[3px] object-cover w-[34px]"
                        alt="imageThree"
                      />
                      <Text
                        className="font-light text-black_900 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Fixed Ticket
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-bluegray_200 flex flex-1 items-start justify-end p-9 sm:px-5 rounded-[16px] w-full">
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start ml-5 md:ml-[0] mr-auto mt-4 w-[55%] md:w-full">
                <div className="bg-gray_900 h-[275px] mb-[15px] rounded-[16px] w-[275px]"></div>
                <div className="flex flex-col gap-[26px] justify-start w-[55%] md:w-full">
                  <div className="flex flex-row gap-[9px] items-start justify-start mr-[21px] w-[95%] md:w-full">
                    <Img
                      src="images/img_location_gray_910.svg"
                      className="h-[50px] mt-[7px] w-[50px]"
                      alt="location"
                    />
                    <div className="flex flex-col relative w-[83%]">
                      <Text
                        className="mx-auto not-italic text-gray_900 text-right w-auto"
                        as="h3"
                        variant="h3"
                      >
                        Snow World
                      </Text>
                      <div className="flex items-start justify-start mt-[-4.3px] w-[45%] z-[1]">
                        <div className="flex flex-row gap-1 items-start justify-start self-stretch w-auto">
                          <Img
                            src="images/img_star.svg"
                            className="h-5 w-5"
                            alt="star"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="h-5 w-5"
                            alt="star_One"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="h-5 w-5"
                            alt="star_Two"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="h-5 w-5"
                            alt="star_Three"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-5 w-5"
                            alt="star_Four"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-poppins items-start justify-start md:ml-[0] ml-[59px] w-[84%] md:w-full">
                    <div className="flex flex-row gap-[9px] items-end justify-start ml-0.5 md:ml-[0] w-full">
                      <Img
                        src="images/img_image1.png"
                        className="h-[34px] md:h-auto mt-1.5 object-cover w-[34px]"
                        alt="imageOne"
                      />
                      <Text
                        className="font-light mb-0.5 text-black_900 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Instant Confirmation
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3.5 items-start justify-start mt-[35px] w-[81%] md:w-full">
                      <Img
                        src="images/img_image2.png"
                        className="h-[34px] md:h-auto mt-[3px] object-cover w-[34px]"
                        alt="imageTwo"
                      />
                      <Text
                        className="font-light text-black_900 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Mobile Voucher
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3.5 items-start justify-start mt-[31px] w-[63%] md:w-full">
                      <Img
                        src="images/img_image3.png"
                        className="h-[34px] md:h-auto mt-[3px] object-cover w-[34px]"
                        alt="imageThree"
                      />
                      <Text
                        className="font-light text-black_900 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Fixed Ticket
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-bluegray_200 flex flex-1 items-start justify-end p-9 sm:px-5 rounded-[16px] w-full">
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start ml-5 md:ml-[0] mr-auto mt-4 w-[55%] md:w-full">
                <div className="bg-gray_900 h-[275px] mb-[15px] rounded-[16px] w-[275px]"></div>
                <div className="flex flex-col gap-[26px] justify-start w-[55%] md:w-full">
                  <div className="flex flex-row gap-[9px] items-start justify-start mr-[21px] w-[95%] md:w-full">
                    <Img
                      src="images/img_location_gray_910.svg"
                      className="h-[50px] mt-[7px] w-[50px]"
                      alt="location"
                    />
                    <div className="flex flex-col relative w-[83%]">
                      <Text
                        className="mx-auto not-italic text-gray_900 text-right w-auto"
                        as="h3"
                        variant="h3"
                      >
                        Snow World
                      </Text>
                      <div className="flex items-start justify-start mt-[-4.3px] w-[45%] z-[1]">
                        <div className="flex flex-row gap-1 items-start justify-start self-stretch w-auto">
                          <Img
                            src="images/img_star.svg"
                            className="h-5 w-5"
                            alt="star"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="h-5 w-5"
                            alt="star_One"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="h-5 w-5"
                            alt="star_Two"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="h-5 w-5"
                            alt="star_Three"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-5 w-5"
                            alt="star_Four"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-poppins items-start justify-start md:ml-[0] ml-[59px] w-[84%] md:w-full">
                    <div className="flex flex-row gap-[9px] items-end justify-start ml-0.5 md:ml-[0] w-full">
                      <Img
                        src="images/img_image1.png"
                        className="h-[34px] md:h-auto mt-1.5 object-cover w-[34px]"
                        alt="imageOne"
                      />
                      <Text
                        className="font-light mb-0.5 text-black_900 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Instant Confirmation
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3.5 items-start justify-start mt-[35px] w-[81%] md:w-full">
                      <Img
                        src="images/img_image2.png"
                        className="h-[34px] md:h-auto mt-[3px] object-cover w-[34px]"
                        alt="imageTwo"
                      />
                      <Text
                        className="font-light text-black_900 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Mobile Voucher
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3.5 items-start justify-start mt-[31px] w-[63%] md:w-full">
                      <Img
                        src="images/img_image3.png"
                        className="h-[34px] md:h-auto mt-[3px] object-cover w-[34px]"
                        alt="imageThree"
                      />
                      <Text
                        className="font-light text-black_900 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Fixed Ticket
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-bluegray_200 flex flex-1 items-start justify-end p-9 sm:px-5 rounded-[16px] w-full">
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start ml-5 md:ml-[0] mr-auto mt-4 w-[55%] md:w-full">
                <div className="bg-gray_900 h-[275px] mb-[15px] rounded-[16px] w-[275px]"></div>
                <div className="flex flex-col gap-[26px] justify-start w-[55%] md:w-full">
                  <div className="flex flex-row gap-[9px] items-start justify-start mr-[21px] w-[95%] md:w-full">
                    <Img
                      src="images/img_location_gray_910.svg"
                      className="h-[50px] mt-[7px] w-[50px]"
                      alt="location"
                    />
                    <div className="flex flex-col relative w-[83%]">
                      <Text
                        className="mx-auto not-italic text-gray_900 text-right w-auto"
                        as="h3"
                        variant="h3"
                      >
                        Snow World
                      </Text>
                      <div className="flex items-start justify-start mt-[-4.3px] w-[45%] z-[1]">
                        <div className="flex flex-row gap-1 items-start justify-start self-stretch w-auto">
                          <Img
                            src="images/img_star.svg"
                            className="h-5 w-5"
                            alt="star"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="h-5 w-5"
                            alt="star_One"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="h-5 w-5"
                            alt="star_Two"
                          />
                          <Img
                            src="images/img_star.svg"
                            className="h-5 w-5"
                            alt="star_Three"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-5 w-5"
                            alt="star_Four"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-poppins items-start justify-start md:ml-[0] ml-[59px] w-[84%] md:w-full">
                    <div className="flex flex-row gap-[9px] items-end justify-start ml-0.5 md:ml-[0] w-full">
                      <Img
                        src="images/img_image1.png"
                        className="h-[34px] md:h-auto mt-1.5 object-cover w-[34px]"
                        alt="imageOne"
                      />
                      <Text
                        className="font-light mb-0.5 text-black_900 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Instant Confirmation
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3.5 items-start justify-start mt-[35px] w-[81%] md:w-full">
                      <Img
                        src="images/img_image2.png"
                        className="h-[34px] md:h-auto mt-[3px] object-cover w-[34px]"
                        alt="imageTwo"
                      />
                      <Text
                        className="font-light text-black_900 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Mobile Voucher
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3.5 items-start justify-start mt-[31px] w-[63%] md:w-full">
                      <Img
                        src="images/img_image3.png"
                        className="h-[34px] md:h-auto mt-[3px] object-cover w-[34px]"
                        alt="imageThree"
                      />
                      <Text
                        className="font-light text-black_900 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Fixed Ticket
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
        <Img
          src="images/img_peoples1.png"
          className="h-[465px] md:h-auto max-w-[1387px] mb-[25px] mx-auto object-cover w-full"
          alt="peoplesOne"
        />
      </div>
    </>
  );
};

export default BookingPageMumbaiPage;
