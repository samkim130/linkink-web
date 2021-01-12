import React from "react";
import { Link } from "react-router-dom";
import "foundation-sites/dist/css/foundation.min.css";
import "./MenuButtons.css";

const WIDTH = 35;
const B_WID = 44;

const MenuButtons = ({ icon, id, onClick }) => {
  const ButtonComp =
    icon.name === "Home"
      ? Home
      : icon.name === "Search"
      ? Search
      : icon.name === "Favorites"
      ? Inspirations
      : icon.name === "Schedule"
      ? Appointments
      : icon.name === "Community"
      ? Community
      : null;
  try {
    if (ButtonComp === null)
      throw Object.assign(
        new Error("unidentified button name : " + icon.name)
      );
  } catch (err) {
    console.log(err);
  }

  const gClassName = icon.isActive ? "active" : "default";

  return (
    <li className={`menuicon`} onClick={(id) => onClick(id)}>
      <Link to={icon.link}>
        <ButtonComp gClassName={gClassName} />
      </Link>
    </li>
  );
};

const Home = ({ gClassName }) => {
  const w = (44 / B_WID) * WIDTH;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height="100%"
      viewBox="0 0 44 55"
    >
      <g>
        <rect
          className="b"
          width="44"
          height="44"
          transform="translate(0 0.441)"
        />
        <g className="c" transform="translate(2 3.441)">
          <path
            className="k"
            d="M15.893,40H5.565V22.058H0L21,0,42,22.058H36.19V40h-9.8V24.929H15.893V40Z"
          />
          <path
            className={`l ${gClassName}`}
            d="M 12.89293003082275 36.99979782104492 L 12.89293003082275 24.92873954772949 L 12.89293003082275 21.92873954772949 L 15.89293003082275 21.92873954772949 L 26.38615989685059 21.92873954772949 L 29.38615989685059 21.92873954772949 L 29.38615989685059 24.92873954772949 L 29.38615989685059 36.99908447265625 L 33.19017028808594 36.99881362915039 L 33.19017028808594 22.05761909484863 L 33.19017028808594 19.05761909484863 L 35.0015869140625 19.05761909484863 L 20.99971771240234 4.350791931152344 L 6.998260498046875 19.05761909484863 L 8.565389633178711 19.05761909484863 L 8.565389633178711 22.05761909484863 L 8.565389633178711 36.99950408935547 L 12.89293003082275 36.99979782104492 M 15.89293003082275 40 L 15.89223003387451 40 L 5.565390110015869 39.99929809570312 L 5.565390110015869 22.05761909484863 L 0 22.05761909484863 L 20.99968910217285 0 L 42 22.05761909484863 L 36.19017028808594 22.05761909484863 L 36.19017028808594 39.99860000610352 L 26.38615989685059 39.99929809570312 L 26.38615989685059 24.92873954772949 L 15.89293003082275 24.92873954772949 L 15.89293003082275 39.99929809570312 L 15.89293003082275 40 Z"
          />
        </g>
        <text className={`d ${gClassName}`} transform="translate(11 53.441)">
          <tspan x="0" y="0">
            Home
          </tspan>
        </text>
      </g>
    </svg>
  );
};

const Search = ({ gClassName }) => {
  const w = (49 / B_WID) * WIDTH;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height="100%"
      viewBox="0 0 49 53"
    >
      <g>
        <rect
          className="b"
          width="49"
          height="48"
          transform="translate(0 0.444)"
        />
        <g transform="translate(3 5)">
          <g className={`e ${gClassName}`} transform="translate(0 0.444)">
            <circle className="k" cx="13.5" cy="13.5" r="13.5" />
            <circle className="b" cx="13.5" cy="13.5" r="12" />
          </g>
          <g
            className={`f ${gClassName}`}
            transform="translate(23.9 19.173) rotate(40)"
          >
            <rect className="k" width="23.83" height="5.06" />
            <rect className="b" x="2" y="2" width="19.83" height="1.06" />
          </g>
        </g>
        <text className={`g ${gClassName}`} transform="translate(11 51.444)">
          <tspan x="0" y="0">
            Search
          </tspan>
        </text>
      </g>
    </svg>
  );
};

const Inspirations = ({ gClassName }) => {
  const w = (49.02 / B_WID) * WIDTH;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height="100%"
      viewBox="0 0 49.02 57"
    >
      <g>
        <g className="c" transform="translate(3.884 7.542)">
          <path
            className="k"
            d="M3.145,18.56a10.887,10.887,0,1,1,17-13.374A10.883,10.883,0,1,1,37.975,17.609H38L21.941,36.395l-1.776,2.078Z"
          />
          <path
            className={`l ${gClassName}`}
            d="M 10.87641334533691 2.999996185302734 C 6.533344268798828 2.999996185302734 3.000003814697266 6.542533874511719 3.000003814697266 10.89691543579102 C 3.000003814697266 12.99087524414062 3.809513092041016 14.9638843536377 5.279422760009766 16.45248413085938 L 5.355171203613281 16.52920532226562 L 5.425224304199219 16.61116409301758 L 20.16450119018555 33.85565185546875 L 35.42006683349609 16.00644874572754 L 35.6114616394043 15.76151466369629 C 36.70520401000977 14.36182403564453 37.28332138061523 12.67966461181641 37.28332138061523 10.89691543579102 C 37.28332138061523 6.542533874511719 33.74965286254883 2.999996185302734 29.40618133544922 2.999996185302734 C 26.65300369262695 2.999996185302734 24.1447925567627 4.404994964599609 22.69671249389648 6.75837516784668 L 20.14215278625488 10.90998458862305 L 17.58688354492188 6.758804321289062 C 16.13808250427246 4.405155181884766 13.62949180603027 2.999996185302734 10.87641334533691 2.999996185302734 M 10.87641334533691 -3.814697265625e-06 C 14.79264259338379 -3.814697265625e-06 18.22596168518066 2.074043273925781 20.14166259765625 5.186203002929688 C 22.05663299560547 2.074043273925781 25.48995208740234 -3.814697265625e-06 29.40618133544922 -3.814697265625e-06 C 35.41359329223633 -3.814697265625e-06 40.28332138061523 4.878185272216797 40.28332138061523 10.89691543579102 C 40.28332138061523 13.42863464355469 39.42119216918945 15.75839424133301 37.9753532409668 17.60868453979492 L 37.99710083007812 17.60868453979492 L 21.94062232971191 36.39496612548828 L 20.16486167907715 38.47336578369141 L 3.144733428955078 18.56035423278809 C 1.200752258300781 16.59164428710938 3.814697265625e-06 13.88484573364258 3.814697265625e-06 10.89691543579102 C 3.814697265625e-06 4.878185272216797 4.869731903076172 -3.814697265625e-06 10.87641334533691 -3.814697265625e-06 Z"
          />
        </g>
        <rect
          className="b"
          width="49"
          height="48"
          transform="translate(0 0.5)"
        />
        <text className={`d ${gClassName}`} transform="translate(2 55.5)">
          <tspan x="0" y="0">
            Inspirations
          </tspan>
        </text>
      </g>
    </svg>
  );
};

const Appointments = ({ gClassName }) => {
  const w = (55.69 / B_WID) * WIDTH;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height="100%"
      viewBox="0 0 55.69 52"
    >
      <g>
        <g transform="translate(4)">
          <rect
            className="b"
            width="47"
            height="47"
            transform="translate(0 0.459)"
          />
          <g transform="translate(4 5)">
            <g className={`h ${gClassName}`} transform="translate(0 0.459)">
              <rect className="k" width="39" height="35" rx="8" />
              <rect
                className="b"
                x="1.5"
                y="1.5"
                width="36"
                height="32"
                rx="6.5"
              />
            </g>
            <path
              className={`h ${gClassName}`}
              d="M0,0H36.282"
              transform="translate(1.256 9.875)"
            />
            <g className={`h ${gClassName}`} transform="translate(11 13.459)">
              <ellipse className="k" cx="9" cy="8.5" rx="9" ry="8.5" />
              <ellipse className="b" cx="9" cy="8.5" rx="7.5" ry="7" />
            </g>
          </g>
          <g
            className={`i ${gClassName}`}
            transform="translate(13 3.459) rotate(90)"
          >
            <rect className="k" width="8" height="2" />
            <rect className="b" x="0.5" y="0.5" width="7" height="1" />
          </g>
          <g
            className={`i ${gClassName}`}
            transform="translate(16 3.459) rotate(90)"
          >
            <rect className="k" width="8" height="2" />
            <rect className="b" x="0.5" y="0.5" width="7" height="1" />
          </g>
          <g className="j" transform="translate(27.948 25.273) rotate(129)">
            <path
              className="k"
              d="M 5.723838329315186 4.82127046585083 L 4.841462135314941 4.730022430419922 L 5.002970695495605 2.147046804428101 L 5.035080909729004 1.633376955986023 L 4.520700931549072 1.616126894950867 L 0.5302503705024719 1.482298016548157 L 0.588523268699646 0.523542046546936 L 6.163458824157715 0.7962853312492371 L 5.723838329315186 4.82127046585083 Z"
            />
            <path
              className={`l ${gClassName}`}
              d="M 5.558951854705811 1.267316341400146 L 5.501990795135498 2.178256988525391 L 5.491887092590332 2.339844226837158 L 5.608765602111816 1.269752979278564 L 5.558951854705811 1.267316341400146 M 0.1194210052490234 -2.86102294921875e-06 L 6.718140602111816 0.3228268623352051 L 6.166900634765625 5.369756698608398 L 4.312470436096191 5.177987098693848 L 4.503940582275391 2.115846872329712 L 9.5367431640625e-07 1.964797019958496 L 0.1194210052490234 -2.86102294921875e-06 Z"
            />
          </g>
          <g
            className={`i ${gClassName}`}
            transform="translate(32 3.459) rotate(90)"
          >
            <rect className="k" width="8" height="2" />
            <rect className="b" x="0.5" y="0.5" width="7" height="1" />
          </g>
          <g
            className={`i ${gClassName}`}
            transform="translate(35 3.459) rotate(90)"
          >
            <rect className="k" width="8" height="2" />
            <rect className="b" x="0.5" y="0.5" width="7" height="1" />
          </g>
        </g>
        <text className={`d ${gClassName}`} transform="translate(0 50.459)">
          <tspan x="0" y="0">
            Appointments
          </tspan>
        </text>
      </g>
    </svg>
  );
};

const Community = ({ gClassName }) => {
  const w = (46.84 / B_WID) * WIDTH;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height="100%"
      viewBox="0 0 46.84 55"
    >
      <g>
        <rect
          className="b"
          width="44"
          height="44"
          transform="translate(0 0.5)"
        />
        <g transform="translate(3.176 3.934)">
          <circle
            className={`h ${gClassName}`}
            cx="18.228"
            cy="18.228"
            r="18.228"
            transform="translate(0.701 0.254)"
          />
          <line
            className={`h ${gClassName}`}
            x2="37.858"
            transform="translate(0 18.482)"
          />
          <path
            className={`h ${gClassName}`}
            d="M0,0C4.812,3.4,9.471,6.732,18.53,6.732S32.373,2.677,36.234,0"
            transform="matrix(0.017, -1, 1, 0.017, 22.138, 36.711)"
          />
          <path
            className={`h ${gClassName}`}
            d="M0,0C4.751,3.648,9.35,7.223,18.293,7.223S31.96,2.872,35.772,0"
            transform="matrix(-0.017, 1, -1, -0.017, 15.985, 0.608)"
          />
          <path
            className={`h ${gClassName}`}
            d="M0,0C3.348,1.805,6.6,3.577,12.537,3.907c.415.024,1.046.041,1.707.041,6.963,0,10.641-2.378,13.61-3.949"
            transform="translate(33.469 30.519) rotate(180)"
          />
          <path
            className={`h ${gClassName}`}
            d="M0,0C3.348,1.913,6.6,3.791,12.537,4.142c.415.025,1.046.044,1.707.044,6.963,0,10.641-2.521,13.61-4.185"
            transform="translate(4.914 6.225)"
          />
          <path
            className={`h ${gClassName}`}
            d="M0,0H37.123"
            transform="matrix(-0.017, 1, -1, -0.017, 19.472, 0)"
          />
        </g>
        <text className={`d ${gClassName}`} transform="translate(0 53.5)">
          <tspan x="0" y="0">
            Community
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default MenuButtons;
