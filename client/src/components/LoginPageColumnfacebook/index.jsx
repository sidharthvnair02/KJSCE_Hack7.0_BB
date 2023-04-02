import React from "react";

import { Img } from "components";

const LoginPageColumnfacebook = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-center justify-center w-full">
          <div className="bg-gray_50 flex flex-1 items-center justify-center rounded-lg w-12">
            <div className="flex items-center justify-center p-2.5 rounded-lg w-12">
              <div className="flex items-center justify-center w-7">
                <div className="flex h-7 items-center justify-start px-[3px] w-7">
                  <Img
                    src="images/img_google.svg"
                    className="h-[21px] w-5"
                    alt="google"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray_50 flex flex-1 items-center justify-center rounded-lg w-12">
            <div className="flex items-center justify-center p-2.5 rounded-lg w-12">
              <div className="flex items-center justify-center w-7">
                <div className="flex h-7 items-center justify-start px-[3px] w-7">
                  <Img
                    src="images/img_google.svg"
                    className="h-[21px] w-5"
                    alt="google"
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

LoginPageColumnfacebook.defaultProps = {};

export default LoginPageColumnfacebook;
