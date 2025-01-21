const ContentDisplay = () => {
  return (
    <>
      <div className="inside-content mt-4 rounded-lg text-white">
        <h1>About Me:</h1>
        <p>
          I am a Computer Enthusiast on their junior year of computer science. I
          have always had a passion for computers and electronics. Since
          middle-school I attempted to install Arch-Linux because I wanted to
          "customize" my desktop environment. Now I experiment in web
          development, reverse engineering, and network engineering. My main
          tools being C, Java, JavaScript, Python, React, postgres, and my
          homelab. I am currently working on many projects at once, one of them
          being a Smart device using custom C code to control the display via
          SPI. <br />
          <br /> I am aiming for one day conducting research and working on
          operating systems, reverse engineering, and contributing to
          open-source projects. Though these are great heights to achieve I am
          not deterred.
        </p>
      </div>
      <div className="inside-content mt-4 rounded-lg text-white">
        <h1>Purpose of this site:</h1>
        <p>
          I will be making periodic posts about my journey in the world of
          computers. My current interests are low-level programming, 3D
          modeling, homelab, and web.
        </p>
      </div>
    </>
  );
};

export default ContentDisplay;
