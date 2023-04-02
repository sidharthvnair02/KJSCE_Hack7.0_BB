import React from "react";

import { Img, Input, Text, Button } from "components";

const LoginPageLoginform = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <div className="flex items-start justify-start w-full">
            <div className="border border-gray_900_7a border-solid flex flex-row gap-2 items-center justify-start px-2 py-3 rounded-lg w-full">
              <Img src="images/img_lock.svg" className="h-9 w-9" alt="lock" />
              <div className="flex flex-1 items-start justify-start py-1.5 w-full">
                <div className="flex items-end justify-start w-full">
                  <div className="flex items-start justify-start w-full">
                    <div className="flex items-start justify-start w-full">
                      <Input
                        wrapClassName="w-[99%]"
                        className="font-dmsans font-normal not-italic p-0 placeholder:text-gray_900_b7 text-base text-gray_900_b7 text-left w-full"
                        name="groupTwenty"
                        placeholder="Enter Your Email Address"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-start w-full">
            <div className="border border-gray_900_7a border-solid flex flex-row gap-2 items-center justify-start px-2 py-3 rounded-lg w-full">
              <Img src="images/img_lock.svg" className="h-9 w-9" alt="lock" />
              <div className="flex flex-1 items-start justify-start py-1.5 w-full">
                <div className="flex flex-row gap-2 items-end justify-start w-full">
                  <div className="flex flex-1 items-start justify-start w-full">
                    <div className="flex items-start justify-start w-full">
                      <Text
                        className="font-dmsans font-normal not-italic text-gray_900_b7 text-left w-auto"
                        variant="body4"
                      >
                        {props?.labelOne}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1 items-start justify-start self-stretch w-auto">
                    <Img
                      src="images/img_signal.svg"
                      className="h-6 w-6"
                      alt="signal"
                    />
                    <Img
                      src="images/img_warning.svg"
                      className="h-6 w-6"
                      alt="warning"
                    />
                    <Img
                      src="images/img_eye.svg"
                      className="h-6 w-6"
                      alt="eye"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center justify-center w-full">
            <div className="flex flex-1 flex-row items-center justify-start w-full">
              <Img
                src="images/img_checkmark.svg"
                className="h-[42px] w-[42px]"
                alt="checkmark"
              />
              <Text
                className="font-dmsans font-normal not-italic text-gray_902 text-left w-auto"
                variant="body4"
              >
                {props?.labelTwo}
              </Text>
            </div>
            <div className="flex items-center justify-center rounded-lg">
              <div className="flex items-center justify-center px-3 py-1.5 rounded-lg self-stretch w-auto">
                <div className="flex items-center justify-center self-stretch w-auto">
                  <Text
                    className="capitalize font-dmsans not-italic text-blue_A700 text-left tracking-[0.36px] w-auto"
                    variant="body3"
                  >
                    {props?.button}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button className="bg-blue_A700 capitalize cursor-pointer font-outfit font-semibold rounded-lg text-center text-lg text-white_A700 tracking-[0.36px] w-full">
          {props?.loginOne}
        </Button>
      </div>
    </>
  );
};

LoginPageLoginform.defaultProps = {
  labelOne: "Enter your Password",
  labelTwo: "Remember Me",
  button: "Forget Password?",
};

export default LoginPageLoginform;
