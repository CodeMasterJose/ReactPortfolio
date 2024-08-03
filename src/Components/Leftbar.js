import imgSrc from "../Assets/photo.jpeg";
const Leftbar = () => {
  return (
    <div>
      <div className="p-6 pt-10">
        <img src={imgSrc} className="rounded-full p-6" alt="Profile" />
      </div>
      <div className="flex pl-10 text-white text-4xl">
        <h1>Jose Sanabria</h1>
      </div>
      <h2 className="flex pl-10 pt-0.5 text-slate-500 text-xl">
        CodeMasterJose
      </h2>
    </div>
  );
};

export default Leftbar;
