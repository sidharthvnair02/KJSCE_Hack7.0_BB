import React from "react";

import { Text, Img, Line } from "components";
import LoginPageLoginform from "components/LoginPageLoginform";

const LoginPagePage = () => {
  return (
    <>
      <div className="bg-gray_100 flex font-dmsans h-[1024px] justify-end mx-auto pt-[104px] relative w-full">
        <div className="md:h-[743px] h-[920px] mt-auto mx-auto md:px-5 w-full">
          <div className="absolute md:h-[743px] h-[884px] inset-[0] justify-center m-auto w-full">
            <div
              className="absolute bg-cover bg-no-repeat flex h-[743px] items-end justify-start p-[73px] md:px-10 sm:px-5 right-[0] top-[0] w-[87%]"
              style={{ backgroundImage: "url('images/img_group3.png')" }}
            >
              <div className="bg-gray_50 flex flex-col gap-8 h-[513px] md:h-auto items-center justify-start my-[42px] md:px-10 sm:px-5 px-[72px] py-10 rounded-[24px] shadow-bs2 w-[510px] sm:w-full">
                <Text
                  className="text-gray_902 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Login
                </Text>
                <div className="flex flex-col font-outfit gap-8 items-center justify-start w-full">
                  <div className="flex items-center justify-start w-full">
                    <LoginPageLoginform
                      className="flex flex-col items-center justify-start w-full"
                      labelTwo="Remember Me"
                    />
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-center w-full">
                    <Text
                      className="font-normal not-italic text-gray_902 text-left w-auto"
                      variant="body4"
                    >
                      New Member?
                    </Text>
                    <div className="flex items-center justify-center rounded-lg self-stretch w-auto">
                      <div className="flex items-center justify-center px-2 py-1 rounded-lg self-stretch w-auto">
                        <Text
                          className="capitalize font-semibold text-blue_A700 text-left tracking-[0.32px] w-auto"
                          variant="body4"
                        >
                          Signup
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="images/img_border11.png"
              className="absolute bottom-[0] h-64 left-[0] object-cover w-auto"
              alt="borderEleven"
            />
          </div>
          <Img
            src="images/img_indiamap1.svg"
            className="absolute h-[687px] left-[1%] top-[0] w-auto"
            alt="indiamapOne"
          />
        </div>
        <div className="absolute bottom-[6%] flex font-inter items-center justify-start left-[10%] md:px-5 shadow-bs3 w-[42%]">
          <div className="flex items-center justify-start w-full">
            <div className="flex items-center justify-start w-full">
              <div className="flex flex-col justify-start w-full">
                <div className="flex flex-row gap-3 items-center justify-end ml-auto w-[29%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex h-[31px] items-center justify-start p-[5px] w-[31px]"
                    style={{ backgroundImage: "url('images/img_group12.svg')" }}
                  >
                    <Img
                      src="images/img_checkmark_blue_a200.svg"
                      className="h-[15px] my-0.5 w-auto"
                      alt="checkmark_One"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-[74%]">
                    <Img
                      src="images/img_vector_bluegray_100.svg"
                      className="h-[9px] w-auto"
                      alt="vector"
                    />
                    <Img
                      src="images/img_vector_bluegray_100.svg"
                      className="h-[9px] w-auto"
                      alt="vector_One"
                    />
                  </div>
                </div>
                <div className="md:h-[493px] h-[507px] sm:h-[563px] mr-[5px] mt-0.5 relative w-[99%] sm:w-full">
                  <div className="absolute md:h-[491px] h-[507px] sm:h-[561px] inset-y-[0] left-[0] my-auto w-[90%] sm:w-full">
                    <div className="absolute md:h-[491px] h-[507px] sm:h-[561px] inset-[0] justify-center m-auto w-full">
                      <div className="md:h-[491px] h-[507px] sm:h-[561px] m-auto w-full">
                        <div className="md:h-[491px] h-[507px] sm:h-[561px] m-auto w-full">
                          <div className="md:h-[491px] h-[507px] sm:h-[561px] m-auto w-full">
                            <div className="flex flex-col m-auto w-full">
                              <div className="h-[491px] sm:h-[561px] m-auto w-full">
                                <div className="absolute flex sm:flex-col flex-row sm:gap-10 h-full inset-[0] items-start justify-center m-auto w-full">
                                  <div className="h-[491px] relative w-[83%] sm:w-full">
                                    <div className="h-[491px] m-auto w-full">
                                      <div className="h-[491px] m-auto w-full">
                                        <div className="h-[491px] m-auto w-full">
                                          <div className="h-[491px] m-auto w-full">
                                            <div className="absolute h-[491px] inset-[0] justify-center m-auto w-full">
                                              <div className="absolute h-[491px] inset-[0] justify-center m-auto w-[98%] sm:w-full">
                                                <div className="h-[491px] m-auto w-full">
                                                  <div className="flex h-full items-center justify-start m-auto w-full">
                                                    <div className="flex sm:flex-col flex-row gap-4 items-start justify-between w-full">
                                                      <Img
                                                        src="images/img_vector_bluegray_800.svg"
                                                        className="h-[11px] sm:mt-0 mt-72 w-auto"
                                                        alt="vector_Two"
                                                      />
                                                      <div className="md:h-[436px] h-[491px] relative w-[96%] sm:w-full">
                                                        <div className="md:h-[436px] h-[491px] m-auto w-full">
                                                          <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
                                                            <div className="md:h-[436px] h-[461px] mx-auto w-full">
                                                              <div className="md:h-[436px] h-[461px] m-auto w-full">
                                                                <div className="absolute md:h-[436px] h-[443px] right-[20%] top-[0] w-[55%]">
                                                                  <Img
                                                                    src="images/img_vector_bluegray_500.svg"
                                                                    className="h-[436px] ml-[7px] my-auto w-auto"
                                                                    alt="vector_Three"
                                                                  />
                                                                  <div
                                                                    className="absolute bg-cover bg-no-repeat md:h-[433px] h-[443px] inset-[0] justify-center m-auto w-full"
                                                                    style={{
                                                                      backgroundImage:
                                                                        "url('images/img_group4.png')",
                                                                    }}
                                                                  >
                                                                    <div
                                                                      className="absolute bg-cover bg-no-repeat md:h-[154px] h-[436px] inset-[0] justify-center m-auto p-8 sm:px-5 w-[85%]"
                                                                      style={{
                                                                        backgroundImage:
                                                                          "url('images/img_group14.svg')",
                                                                      }}
                                                                    >
                                                                      <Img
                                                                        src="images/img_vector_bluegray_800_154x32.svg"
                                                                        className="absolute bottom-[11%] h-[154px] left-[7%] w-auto"
                                                                        alt="vector_Four"
                                                                      />
                                                                      <div className="absolute bg-bluegray_800 bottom-[46%] h-[7px] left-[7%] rotate-[-180deg] w-[19%]"></div>
                                                                    </div>
                                                                    <Img
                                                                      src="images/img_group4.png"
                                                                      className="absolute bottom-[0] h-[148px] left-[6%] object-cover w-auto"
                                                                      alt="vector_Six"
                                                                    />
                                                                    <div
                                                                      className="absolute bg-cover bg-no-repeat flex h-max inset-[0] items-end justify-center m-auto p-[13px] w-[88%]"
                                                                      style={{
                                                                        backgroundImage:
                                                                          "url('images/img_group15.png')",
                                                                      }}
                                                                    >
                                                                      <div
                                                                        className="bg-cover bg-no-repeat flex h-[83px] items-center justify-start mb-[322px] mr-[19px] p-[9px] w-[83px]"
                                                                        style={{
                                                                          backgroundImage:
                                                                            "url('images/img_group4.png')",
                                                                        }}
                                                                      >
                                                                        <div className="flex flex-col items-start justify-start w-4/5 md:w-full">
                                                                          <div className="flex flex-row gap-[37px] items-center justify-between w-full">
                                                                            <Img
                                                                              src="images/img_location.svg"
                                                                              className="h-[7px] w-[7px]"
                                                                              alt="location"
                                                                            />
                                                                            <Img
                                                                              src="images/img_location.svg"
                                                                              className="h-[7px] w-[7px]"
                                                                              alt="location_One"
                                                                            />
                                                                          </div>
                                                                          <div className="flex flex-row items-start justify-evenly ml-1 md:ml-[0] mt-[5px] w-[85%] md:w-full">
                                                                            <Img
                                                                              src="images/img_alarm.svg"
                                                                              className="h-[15px] w-auto"
                                                                              alt="alarm"
                                                                            />
                                                                            <Img
                                                                              src="images/img_music.svg"
                                                                              className="h-[11px] mt-1 w-[11px]"
                                                                              alt="music"
                                                                            />
                                                                            <Line className="bg-blue_400 h-[15px] w-[5px]" />
                                                                            <Img
                                                                              src="images/img_vector.svg"
                                                                              className="h-[11px] mt-1 w-[11px]"
                                                                              alt="vector_Eight"
                                                                            />
                                                                          </div>
                                                                          <div className="flex flex-row gap-[37px] items-center justify-between mt-[7px] w-full">
                                                                            <Img
                                                                              src="images/img_location.svg"
                                                                              className="h-[7px] w-[7px]"
                                                                              alt="location_Two"
                                                                            />
                                                                            <Img
                                                                              src="images/img_location.svg"
                                                                              className="h-[7px] w-[7px]"
                                                                              alt="location_Three"
                                                                            />
                                                                          </div>
                                                                          <div className="bg-blue_400 h-0.5 md:ml-[0] ml-[3px] mt-2.5 w-[37%]"></div>
                                                                          <div className="bg-blue_400 h-0.5 md:ml-[0] ml-[3px] mt-[3px] w-[54%]"></div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  className="absolute bg-cover bg-no-repeat md:h-[163px] h-[204px] p-3 right-[0] top-1/4 w-[204px]"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_group5.png')",
                                                                  }}
                                                                >
                                                                  <div className="absolute flex inset-x-[0] items-center justify-start mx-auto top-[7%] w-[71%]">
                                                                    <div className="flex flex-col gap-2 items-center justify-start w-full">
                                                                      <div className="flex flex-col gap-[13px] h-24 items-center justify-start w-24">
                                                                        <div className="flex flex-row items-start justify-between w-full">
                                                                          <Img
                                                                            src="images/img_location.svg"
                                                                            className="h-[13px] w-[13px]"
                                                                            alt="location_Four"
                                                                          />
                                                                          <Img
                                                                            src="images/img_television.svg"
                                                                            className="h-[59px] mt-2.5 w-auto"
                                                                            alt="television"
                                                                          />
                                                                          <Img
                                                                            src="images/img_location.svg"
                                                                            className="h-[13px] w-[13px]"
                                                                            alt="location_Five"
                                                                          />
                                                                        </div>
                                                                        <div className="flex flex-row items-center justify-between w-full">
                                                                          <Img
                                                                            src="images/img_location.svg"
                                                                            className="h-[13px] w-[13px]"
                                                                            alt="location_Six"
                                                                          />
                                                                          <Img
                                                                            src="images/img_location.svg"
                                                                            className="h-[13px] w-[13px]"
                                                                            alt="location_Seven"
                                                                          />
                                                                        </div>
                                                                      </div>
                                                                      <div className="flex flex-row gap-[19px] items-start justify-between w-full">
                                                                        <div className="flex flex-col gap-[26px] items-end justify-start mb-3.5 w-[56%]">
                                                                          <div className="bg-blue_400 h-0.5 w-[17%]"></div>
                                                                          <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                                                                            <Line className="bg-blue_400 h-1 w-full" />
                                                                            <div className="bg-blue_400 h-1 w-[48%]"></div>
                                                                          </div>
                                                                        </div>
                                                                        <div
                                                                          className="bg-cover bg-no-repeat flex h-[45px] items-center justify-start mt-3.5 p-2.5 w-[45px]"
                                                                          style={{
                                                                            backgroundImage:
                                                                              "url('images/img_group17.svg')",
                                                                          }}
                                                                        >
                                                                          <Img
                                                                            src="images/img_location.svg"
                                                                            className="h-4 my-[3px] w-auto"
                                                                            alt="location_Eight"
                                                                          />
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <Img
                                                                    src="images/img_menu.svg"
                                                                    className="absolute h-[11px] inset-x-[0] mx-auto top-[43%] w-auto"
                                                                    alt="menu"
                                                                  />
                                                                  <Img
                                                                    src="images/img_location_deep_orange_201.svg"
                                                                    className="absolute h-[22px] right-[37%] top-[6%] w-auto"
                                                                    alt="location_Nine"
                                                                  />
                                                                </div>
                                                                <div
                                                                  className="absolute bg-cover bg-no-repeat flex h-[127px] items-center justify-start left-[15%] p-[13px] top-[15%] w-[127px]"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_group6.png')",
                                                                  }}
                                                                >
                                                                  <div className="flex flex-col items-center justify-start mb-0.5 w-[79%] md:w-full">
                                                                    <div className="flex flex-row items-center justify-between w-full">
                                                                      <Img
                                                                        src="images/img_location.svg"
                                                                        className="h-[11px] w-[11px]"
                                                                        alt="location_Ten"
                                                                      />
                                                                      <Img
                                                                        src="images/img_location.svg"
                                                                        className="h-[11px] w-[11px]"
                                                                        alt="location_Eleven"
                                                                      />
                                                                    </div>
                                                                    <Text
                                                                      className="mt-0.5 not-italic text-left text-light_blue_800 w-auto"
                                                                      variant="body1"
                                                                    >
                                                                      Book
                                                                    </Text>
                                                                    <div className="flex flex-row items-center justify-start mt-[5px] w-[79%] md:w-full">
                                                                      <Img
                                                                        src="images/img_signal_blue_400.svg"
                                                                        className="h-2.5 w-[9px]"
                                                                        alt="signal_One"
                                                                      />
                                                                      <div className="bg-blue_400 h-2.5 w-[4%]"></div>
                                                                      <Img
                                                                        src="images/img_settings.svg"
                                                                        className="h-[11px] w-auto"
                                                                        alt="settings"
                                                                      />
                                                                      <Img
                                                                        src="images/img_airplane.svg"
                                                                        className="h-2.5 w-[9px]"
                                                                        alt="airplane"
                                                                      />
                                                                      <Img
                                                                        src="images/img_airplane.svg"
                                                                        className="h-2.5 w-auto"
                                                                        alt="airplane_One"
                                                                      />
                                                                      <Img
                                                                        src="images/img_signal_blue_400.svg"
                                                                        className="h-2.5 w-[9px]"
                                                                        alt="signal_Two"
                                                                      />
                                                                      <Img
                                                                        src="images/img_alarm_blue_400.svg"
                                                                        className="h-[11px] w-auto"
                                                                        alt="alarm_One"
                                                                      />
                                                                    </div>
                                                                    <div className="flex flex-row items-center justify-between mt-2.5 w-full">
                                                                      <Img
                                                                        src="images/img_location.svg"
                                                                        className="h-[11px] w-[11px]"
                                                                        alt="location_Twelve"
                                                                      />
                                                                      <Img
                                                                        src="images/img_location.svg"
                                                                        className="h-[11px] w-[11px]"
                                                                        alt="location_Thirteen"
                                                                      />
                                                                    </div>
                                                                    <Line className="bg-blue_400 h-1 mt-[13px] w-[74%]" />
                                                                    <div className="bg-blue_400 h-1 mt-[5px] w-[51%]"></div>
                                                                  </div>
                                                                </div>
                                                                <Img
                                                                  src="images/img_vector_lime_900_211x68.svg"
                                                                  className="absolute bottom-[0] h-[211px] left-[0] w-auto"
                                                                  alt="vector_Seventeen"
                                                                />
                                                              </div>
                                                              <Img
                                                                src="images/img_vector_lime_900_206x57.svg"
                                                                className="absolute bottom-[2%] h-[206px] left-[6%] w-auto"
                                                                alt="vector_Eighteen"
                                                              />
                                                            </div>
                                                            <Img
                                                              src="images/img_volume.svg"
                                                              className="h-9 ml-[3px] mt-[-8.37px] w-auto z-[1]"
                                                              alt="volume"
                                                            />
                                                          </div>
                                                          <Img
                                                            src="images/img_vector_gray_903.svg"
                                                            className="absolute bottom-[0] h-[19px] left-[1%] w-auto"
                                                            alt="vector_Nineteen"
                                                          />
                                                          <Img
                                                            src="images/img_close.svg"
                                                            className="absolute bottom-[3%] h-[29px] left-[17%] w-auto"
                                                            alt="close"
                                                          />
                                                        </div>
                                                        <div className="absolute bottom-[5%] flex flex-col md:gap-10 gap-[90px] justify-start left-[1%] w-[24%]">
                                                          <Img
                                                            src="images/img_vector_orange_a200.svg"
                                                            className="h-[105px] mr-[23px] w-auto"
                                                            alt="vector_Twenty"
                                                          />
                                                          <Img
                                                            src="images/img_volume_lime_900.svg"
                                                            className="h-5 md:ml-[0] ml-[65px] w-auto"
                                                            alt="volume_One"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <Img
                                                    src="images/img_vector_lime_900.svg"
                                                    className="absolute bottom-[39%] h-[25px] left-[0] w-auto"
                                                    alt="vector_TwentyOne"
                                                  />
                                                </div>
                                                <Img
                                                  src="images/img_vector_bluegray_801.svg"
                                                  className="absolute bottom-[38%] h-[13px] left-[2%] w-auto"
                                                  alt="vector_TwentyTwo"
                                                />
                                              </div>
                                              <Img
                                                src="images/img_computer.svg"
                                                className="absolute bottom-[27%] h-[61px] left-[0] w-auto"
                                                alt="computer"
                                              />
                                            </div>
                                            <Img
                                              src="images/img_cursor.svg"
                                              className="absolute bottom-[27%] h-[61px] left-[0] w-auto"
                                              alt="cursor"
                                            />
                                            <div className="absolute flex flex-col items-end justify-start left-[10%] top-[22%] w-[15%]">
                                              <Img
                                                src="images/img_location_lime_900.svg"
                                                className="h-[50px] w-auto"
                                                alt="location_Fourteen"
                                              />
                                              <Img
                                                src="images/img_location_orange_a200.svg"
                                                className="h-[95px] mt-0.5 w-auto"
                                                alt="location_Fifteen"
                                              />
                                            </div>
                                          </div>
                                          <div className="absolute flex flex-row gap-3.5 items-start justify-between left-[3%] top-[29%] w-[17%]">
                                            <div
                                              className="bg-cover bg-no-repeat flex h-[114px] items-end justify-start mt-[22px] p-[7px] w-auto"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group7.svg')",
                                              }}
                                            >
                                              <Line className="bg-yellow_900 h-[17px] mb-16 mt-[18px] w-1" />
                                            </div>
                                            <Img
                                              src="images/img_volume_lime_900_32x13.svg"
                                              className="h-8 w-auto"
                                              alt="volume_Two"
                                            />
                                          </div>
                                        </div>
                                        <div
                                          className="absolute bg-cover bg-no-repeat flex h-[34px] items-start justify-end left-[16%] p-0.5 top-[22%] w-[9%]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group10.svg')",
                                          }}
                                        >
                                          <Img
                                            src="images/img_vector_lime_900_11x5.svg"
                                            className="h-[11px] ml-0.5 md:ml-[0] mt-[18px] w-auto"
                                            alt="vector_TwentyFour"
                                          />
                                        </div>
                                      </div>
                                      <div className="absolute flex flex-col gap-[39px] items-start justify-start left-[15%] top-[21%] w-[5%]">
                                        <Img
                                          src="images/img_globe.svg"
                                          className="h-5 w-5"
                                          alt="globe"
                                        />
                                        <Img
                                          src="images/img_eye_lime_900.svg"
                                          className="h-[18px] w-auto"
                                          alt="eye_One"
                                        />
                                      </div>
                                      <Img
                                        src="images/img_forward.svg"
                                        className="absolute h-[17px] left-[21%] top-[45%] w-auto"
                                        alt="forward"
                                      />
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex md:h-[45px] h-[63px] justify-end left-[22%] p-0.5 top-[34%] w-[13%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group8.svg')",
                                      }}
                                    >
                                      <div className="flex flex-col gap-[25px] h-full justify-start ml-1.5 mt-auto w-[26%]">
                                        <Img
                                          src="images/img_location_yellow_900.svg"
                                          className="h-3.5 mr-[5px] w-auto"
                                          alt="location_Sixteen"
                                        />
                                        <Img
                                          src="images/img_vector_gray_301.svg"
                                          className="h-1.5 md:ml-[0] ml-[9px] w-auto"
                                          alt="vector_TwentyFive"
                                        />
                                      </div>
                                      <Img
                                        src="images/img_vector_bluegray_902.svg"
                                        className="absolute bottom-[10%] h-0.5 left-[33%] w-[3px]"
                                        alt="vector_TwentySix"
                                      />
                                    </div>
                                    <Img
                                      src="images/img_vector_gray_800.svg"
                                      className="absolute h-[11px] left-[17%] top-[31%] w-auto"
                                      alt="vector_TwentySeven"
                                    />
                                  </div>
                                  <Img
                                    src="images/img_notification.svg"
                                    className="h-[30px] sm:mt-0 mt-[303px] w-auto"
                                    alt="notification"
                                  />
                                </div>
                                <Img
                                  src="images/img_vector_red_200.svg"
                                  className="absolute bottom-[32%] h-3.5 right-[0] w-auto"
                                  alt="vector_TwentyEight"
                                />
                                <Img
                                  src="images/img_vector_deep_orange_500.svg"
                                  className="absolute h-32 inset-y-[0] my-auto right-[0] w-auto"
                                  alt="vector_TwentyNine"
                                />
                                <Img
                                  src="images/img_folder.svg"
                                  className="absolute bottom-[0] h-2.5 right-[2%] w-auto"
                                  alt="folder"
                                />
                              </div>
                              <Img
                                src="images/img_notification_bluegray_903.svg"
                                className="h-5 ml-auto mr-[11px] mt-[-3.42px] w-auto z-[1]"
                                alt="notification_One"
                              />
                              <Img
                                src="images/img_folder.svg"
                                className="h-2.5 mb-[18px] ml-auto mr-[101px] mt-[-NaNpx] w-auto z-[1]"
                                alt="folder_One"
                              />
                            </div>
                            <Img
                              src="images/img_notification_bluegray_903.svg"
                              className="absolute bottom-[0] h-5 right-[19%] w-auto"
                              alt="notification_Two"
                            />
                            <Img
                              src="images/img_vector_bluegray_905.svg"
                              className="absolute bottom-[4%] h-[205px] right-[2%] w-auto"
                              alt="vector_Thirty"
                            />
                          </div>
                          <div className="absolute bottom-[4%] flex flex-col md:gap-10 gap-[105px] justify-start right-[6%] w-[17%]">
                            <Img
                              src="images/img_volume_deep_orange_203.svg"
                              className="h-[46px] md:ml-[0] ml-[33px] w-auto"
                              alt="volume_Three"
                            />
                            <Img
                              src="images/img_vector_bluegray_906.svg"
                              className="h-52 w-auto"
                              alt="vector_ThirtyOne"
                            />
                          </div>
                        </div>
                        <Img
                          src="images/img_eye_deep_orange_204.svg"
                          className="absolute h-[22px] right-[10%] top-[31%] w-auto"
                          alt="eye_Two"
                        />
                      </div>
                      <div
                        className="absolute bg-cover bg-no-repeat flex h-[37px] items-start justify-start p-1.5 right-[9%] top-1/4 w-[37px]"
                        style={{
                          backgroundImage: "url('images/img_group9.svg')",
                        }}
                      >
                        <Img
                          src="images/img_volume_deep_orange_205.svg"
                          className="h-[11px] mt-3 w-auto"
                          alt="volume_Four"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_contrast.svg"
                      className="absolute h-1.5 right-[10%] top-[34%] w-auto"
                      alt="contrast"
                    />
                    <Img
                      src="images/img_vector_deep_orange_500_186x160.svg"
                      className="absolute h-[186px] right-[4%] top-[28%] w-auto"
                      alt="vector_ThirtyTwo"
                    />
                  </div>
                  <Img
                    src="images/img_location_gray_900.svg"
                    className="absolute h-[31px] right-[17%] top-1/4 w-auto"
                    alt="location_Seventeen"
                  />
                  <div className="absolute flex flex-col gap-3.5 items-center justify-start right-[22%] top-[2%] w-[6%]">
                    <div
                      className="bg-cover bg-no-repeat flex h-[31px] items-center justify-start p-[5px] w-[31px]"
                      style={{
                        backgroundImage: "url('images/img_group12.svg')",
                      }}
                    >
                      <Img
                        src="images/img_checkmark_blue_a200.svg"
                        className="h-[15px] my-0.5 w-auto"
                        alt="checkmark_Two"
                      />
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex h-[31px] items-center justify-start p-[5px] w-[31px]"
                      style={{
                        backgroundImage: "url('images/img_group12.svg')",
                      }}
                    >
                      <Img
                        src="images/img_checkmark_blue_a200.svg"
                        className="h-[15px] my-0.5 w-auto"
                        alt="checkmark_Three"
                      />
                    </div>
                  </div>
                  <Img
                    src="images/img_group12.svg"
                    className="absolute h-[9px] right-[6%] top-[3%] w-auto"
                    alt="user"
                  />
                  <Img
                    src="images/img_vector_bluegray_100.svg"
                    className="absolute h-[9px] right-[3%] top-[6%] w-auto"
                    alt="vector_ThirtyThree"
                  />
                  <Img
                    src="images/img_vector_bluegray_100.svg"
                    className="absolute h-[9px] right-[0] top-[11%] w-auto"
                    alt="vector_ThirtyFour"
                  />
                  <Img
                    src="images/img_vector_bluegray_100.svg"
                    className="absolute h-[9px] right-[2%] top-[15%] w-auto"
                    alt="vector_ThirtyFive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPagePage;
