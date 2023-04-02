import React from "react";

import { Slider, Img, PagerIndicator } from "components";

const HomePageCarousel = (props) => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className={props.className}>
        <Slider
          activeIndex={sliderState}
          responsive={{
            0: { items: 1 },
            550: { items: 1 },
            1050: { items: 1 },
          }}
          onSlideChanged={(e) => {
            setsliderState(e?.item);
          }}
          ref={sliderRef}
          className="w-full"
          items={[...Array(3)].map(() => (
            <React.Fragment key={Math.random()}>
              <div className="mx-2.5">
                <div className="bg-white_A700 flex items-center justify-start mx-2.5 rounded-[40px]">
                  <Img
                    src="images/img_unsplashcqblg3lzepk.png"
                    className="h-[400px] md:h-auto object-cover rounded-[40px] w-full"
                    alt="unsplashcqblg3l"
                  />
                </div>
                <div className="bg-white_A700 flex items-center justify-start mx-2.5 rounded-[40px]">
                  <Img
                    src="images/img_unsplashcqblg3lzepk.png"
                    className="h-[400px] md:h-auto object-cover rounded-[40px] w-full"
                    alt="unsplashcqblg3l"
                  />
                </div>
                <div className="bg-white_A700 flex items-center justify-start mx-2.5 rounded-[40px]">
                  <Img
                    src="images/img_unsplashcqblg3lzepk.png"
                    className="h-[400px] md:h-auto object-cover rounded-[40px] w-full"
                    alt="unsplashcqblg3l"
                  />
                </div>
                <div className="bg-white_A700 flex items-center justify-start mx-2.5 rounded-[40px]">
                  <Img
                    src="images/img_unsplashcqblg3lzepk.png"
                    className="h-[400px] md:h-auto object-cover rounded-[40px] w-full"
                    alt="unsplashcqblg3l"
                  />
                </div>
                <div className="bg-white_A700 flex items-center justify-start mx-2.5 rounded-[40px]">
                  <Img
                    src="images/img_unsplashcqblg3lzepk.png"
                    className="h-[400px] md:h-auto object-cover rounded-[40px] w-full"
                    alt="unsplashcqblg3l"
                  />
                </div>
              </div>
            </React.Fragment>
          ))}
          renderDotsItem={({ isActive }) => {
            if (isActive) {
              return <div className="" />;
            }
            return <div className="" role="button" tabIndex={0} />;
          }}
        />
        <div className="flex flex-row gap-2 items-center justify-center p-2 self-stretch w-auto">
          <div className="flex items-start justify-start p-2 w-10">
            <Img
              src="images/img_arrowleft.svg"
              className="cursor-pointer h-6 w-6"
              onClick={() => sliderRef.current?.slidePrev?.()}
              alt="arrowleft"
            />
          </div>
          <PagerIndicator
            className="flex gap-2.5 h-8 items-center justify-start p-2 self-stretch w-[120px]"
            count={5}
            activeCss="inline-block cursor-pointer rounded-[50%] h-4 bg-deep_purple_A200 w-4"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-3 bg-gray_501 w-3"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block"
            unselectedWrapperCss="inline-block"
          />
          <div className="flex items-start justify-start p-2 w-10">
            <Img
              src="images/img_arrowright.svg"
              className="cursor-pointer h-6 w-6"
              onClick={() => sliderRef.current?.slideNext?.()}
              alt="arrowright"
            />
          </div>
        </div>
      </div>
    </>
  );
};

HomePageCarousel.defaultProps = {};

export default HomePageCarousel;
