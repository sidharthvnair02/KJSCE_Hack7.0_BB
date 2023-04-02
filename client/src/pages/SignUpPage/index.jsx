import React from "react";

import { Text, Img, CheckBox, Button } from "components";
import { useNavigate } from "react-router-dom";

const SignUpPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_100 font-dmsans h-[1024px] mx-auto md:pl-10 sm:pl-5 pl-[110px] pt-[110px] relative w-full">
        <div className="absolute bg-gray_50 flex flex-col gap-[35px] h-max inset-y-[0] justify-center left-[11%] my-auto p-[19px] md:px-5 rounded-[24px] shadow-bs2 w-[42%]">
          <Text
            className="ml-1.5 md:ml-[0] mr-[264px] mt-[57px] text-gray_900 text-left tracking-[-0.80px] w-auto"
            as="h4"
            variant="h4"
          >
            Create account
          </Text>
          <div className="flex items-center justify-start mb-[54px] mr-[22px] w-[96%] md:w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
                <div className="flex items-center justify-start w-[99%] md:w-full">
                  <div className="flex items-center justify-start w-full">
                    <div className="sm:gap-5 gap-[22px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                      <div className="flex flex-1 flex-col gap-[2.82px] items-start justify-start self-stretch w-full">
                        <Text
                          className="not-italic text-gray_900 text-left tracking-[-0.30px] w-auto"
                          variant="body5"
                        >
                          {" "}
                          First Name
                        </Text>
                        <Img
                          src="images/img_group16.svg"
                          className="h-[33px] w-[252px]"
                          alt="groupSixteen"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-[2.82px] items-start justify-start self-stretch w-full">
                        <Text
                          className="not-italic text-gray_900 text-left tracking-[-0.30px] w-auto"
                          variant="body5"
                        >
                          Last Name
                        </Text>
                        <Img
                          src="images/img_group16.svg"
                          className="h-[33px] w-[252px]"
                          alt="groupSixteen"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-[2.82px] items-start justify-start self-stretch w-full">
                        <Text
                          className="not-italic text-gray_900 text-left tracking-[-0.30px] w-auto"
                          variant="body5"
                        >
                          Phone Number
                        </Text>
                        <Img
                          src="images/img_group16.svg"
                          className="h-[33px] w-[252px]"
                          alt="groupSixteen"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-[2.82px] items-start justify-start self-stretch w-full">
                        <Text
                          className="not-italic text-gray_900 text-left tracking-[-0.30px] w-auto"
                          variant="body5"
                        >
                          Email ID
                        </Text>
                        <Img
                          src="images/img_group16.svg"
                          className="h-[33px] w-[252px]"
                          alt="groupSixteen"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-[2.82px] items-start justify-start self-stretch w-full">
                        <Text
                          className="not-italic text-gray_900 text-left tracking-[-0.30px] w-auto"
                          variant="body5"
                        >
                          Password
                        </Text>
                        <Img
                          src="images/img_group16.svg"
                          className="h-[33px] w-[252px]"
                          alt="groupSixteen"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-[2.82px] items-start justify-start self-stretch w-full">
                        <Text
                          className="not-italic text-gray_907 text-left tracking-[-0.30px] w-auto"
                          variant="body5"
                        >
                          Confirm password
                        </Text>
                        <Img
                          src="images/img_group16.svg"
                          className="h-[33px] w-[252px]"
                          alt="groupSixteen"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <CheckBox
                  className="font-normal mt-[41px] not-italic text-[15px] text-gray_900 text-left tracking-[-0.30px]"
                  inputClassName="border border-gray_900 border-solid h-3.5 mr-[5px] rounded-[1px] w-3.5"
                  name="rememberme"
                  id="rememberme"
                  label="Remember me"
                ></CheckBox>
                <div className="flex sm:flex-col flex-row font-poppins sm:gap-10 items-start justify-between mt-[18px] w-full">
                  <CheckBox
                    className="font-normal not-italic text-[15px] text-gray-800 text-left tracking-[-0.30px]"
                    inputClassName="border border-gray_900 border-solid h-3.5 mr-[5px] rounded-[1px] w-3.5"
                    name="iagreetoallthe"
                    id="iagreetoallthe"
                    label="I agree to all the Terms and Privacy policy "
                  ></CheckBox>
                  <Text
                    className="font-normal sm:mt-0 mt-[3px] not-italic text-gray_50 text-right tracking-[-0.20px] w-auto"
                    as="h1"
                    variant="h1"
                  >
                    Forgot password?
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row font-poppins gap-[29px] items-center justify-between w-[99%] md:w-full">
                <Button
                  className="common-pointer bg-light_blue_A700 cursor-pointer font-semibold leading-[normal] min-w-[252px] py-[9px] rounded-[3px] text-[9.88px] text-center text-white_A700 tracking-[-0.20px] w-auto"
                  onClick={() => navigate("/loginpage")}
                >
                  Create account
                </Button>
                <div className="bg-gray-800 flex flex-row gap-2 items-center justify-center p-2 rounded-[3px] w-auto sm:w-full">
                  <Img
                    src="images/img_iconfindergoogle1298745.png"
                    className="h-3.5 md:h-auto ml-[57px] object-cover w-3.5"
                    alt="iconfindergoogl"
                  />
                  <Text
                    className="font-semibold mr-[60px] text-left text-white_A700 tracking-[-0.20px] w-auto"
                    as="h1"
                    variant="h1"
                  >
                    Sign-in with google
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Img
          src="images/img_signuppagevector.svg"
          className="absolute bottom-[0] h-[768px] right-[0] w-auto"
          alt="signuppagevecto"
        />
      </div>
    </>
  );
};

export default SignUpPagePage;
