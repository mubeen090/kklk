import Image from "next/image";
import bg from "../../../public/assets/mobileApp/bg.svg";
import PlayStore from "../../../public/assets/mobileApp/playStore.svg";
import AppStore from "../../../public/assets/mobileApp/appStore.svg";
import Devices from "../../../public/assets/mobileApp/devices.png";

const MobileApp = () => {
  return (
    <>
      <div
        className="h-full bg-right bg-cover"
        style={{
          backgroundImage: "url(public/assets/mobileApp/bg.svg)",
        }}
      >
        <div className="container pt-8 md:pt-12 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
              Elevate Your Career with Our Cutting-Edge App!
            </h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
              Our Pay After Placement course, offered across multiple domains,
              is designed to provide you with the skills, confidence, and
              hands-on experience you need to secure your place in the
              ever-evolving job market.
            </p>

            <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">
              Download our app:
            </p>
            <div className="flex w-full justify-center md:items-start md:justify-start pb-0 lg:pb-0 fade-in">
              {/* <AppStore /> */}
              <a
                href="https://play.google.com/store/apps/details?id=co.diaz.bwzzr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PlayStore />
              </a>
            </div>
          </div>

          <div className="w-full xl:w-3/5 py-0 overflow-y-hidden">
            <Image
              className="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
              src={Devices}
            />
          </div>

          {/* <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
            <a
              className="text-gray-500 no-underline hover:no-underline"
              href="#"
            >
              &copy; App 2023
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MobileApp;
