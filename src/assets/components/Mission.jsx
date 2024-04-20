const Mission = () => {
  return (
    <div className="text-center py-4">
      <div className="md:grid grid-cols-2 gap-4">
        <div className="mission-div">
          <h1>
            <span className="text-2xl font-bold ">OUR MISSION</span>
          </h1>
          <p className="mission-sub-title">Empowering Leaders</p>
          <p className="mission">
            At Ivan Elite School, we empower future leaders through
            transformative education that sparks curiosity, fosters community,
            and fuels ambition.
          </p>
        </div>
        <div className="vision-div">
          <h1>
            <span className="text-2xl font-bold ">OUR VISION</span>
          </h1>
          <p className="mission-sub-title">Redefining Excellence</p>
          <p className="mission">
            Ivan Elite School envisions holistic education that nurtures
            well-rounded individuals, blending innovation with tradition, to
            shape compassionate leaders for a better world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
