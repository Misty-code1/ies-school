/* eslint-disable react/no-unescaped-entities */
import raymondImg from '../images/raymondImg.jpg'
import florenceImg from '../images/funmiImg.jpg'
import teacher1 from '../images/teacher1.jpg'
import teacher4 from '../images/teacher4.jpg'

const Staff = () => {
  return (
    <>
<div className="staff py-8">
  <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
    </div>
    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src={raymondImg} alt="" /> 
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Joy Ekene Anyasi</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">Founder</p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src={florenceImg} alt="" /> 
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Divine Anyasi</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / MD</p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src={teacher1} alt="" /> 
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Alicia Benson</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">Principal</p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src={teacher4} alt="" /> 
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Orji</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">Vice Principal</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>





      {/* <div className="staff w-full px-3 md:px-24 pt-6 md:pt-12 md:pb-12 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold">Meet Our HOD's</h2>
        <div className="md:flex pt-5 md:pt-10 md:gap-8">
          <div className="rounded-md md:w-1/3 mb-10 md:mb-0 relative">
            <img src={teacher1} alt="Mrs Campbell" className="rounded-md w-full h-60 md:h-72" />
            <div className="staff-div absolute top-56 md:top-64 left-28 md:left-16 px-6 md:px-10 py-2 md:py-4 rounded-md md:rounded-lg">
              <p>
                <span className="text-white font-semibold">Mrs Campbell</span>
              </p>
            </div>
          </div>
          <div className="rounded-md md:w-1/3 mb-10 md:mb-0 relative">
            <img src={raymondImg} alt="Mr Stevens" className="rounded-md w-full h-60 md:h-72" />
            <div className="staff-div absolute top-56 md:top-64 left-28 md:left-16 px-6 md:px-10 py-2 md:py-4 rounded-md md:rounded-lg">
              <p>
                <span className="text-white font-semibold">Mr Stevens</span>
              </p>
            </div>
          </div>
          <div className="rounded-md md:w-1/3 mb-10 md:mb-0 relative">
            <img src={florenceImg} alt="Mrs Felisha" className="rounded-md w-full h-60 md:h-72" />
            <div className="staff-div absolute top-56 md:top-64 left-28 md:left-16 px-6 md:px-10 py-2 md:py-4 rounded-md md:rounded-lg">
              <p>
                <span className="text-white font-semibold">Mrs Felisha</span>
              </p>
            </div>
          </div>
          <div className="rounded-md md:w-1/3 mb-10 md:mb-0 relative">
            <img src={teacher4} alt="Ms Chloe" className="rounded-md w-full h-60 md:h-72" />
            <div className="staff-div absolute top-56 md:top-64 left-28 md:left-16 px-6 md:px-10 py-2 md:py-4 rounded-md md:rounded-lg">
              <p>
                <span className="text-white font-semibold">Mrs Chloe</span>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Staff;
