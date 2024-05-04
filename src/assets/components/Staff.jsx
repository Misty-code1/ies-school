/* eslint-disable react/no-unescaped-entities */
import raymondImg from "../images/raymondImg.jpg";
import florenceImg from "../images/funmiImg.jpg";
import teacher1 from "../images/teacher1.jpg";
import teacher4 from "../images/teacher4.jpg";

const Staff = () => {
  return (
    <>
      <div className="staff py-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-24 gap-y-10 md:gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our HOD's
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={raymondImg}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Joy Ekene Anyasi
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Founder
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={florenceImg}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Divine Anyasi
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Co-Founder / MD
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={teacher1} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Alicia Benson
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Principal
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={teacher4} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Leslie Orji
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Vice Principal
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Staff;
