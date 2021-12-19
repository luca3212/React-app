import { Link } from "react-router-dom";
import "./country.css";

import MGT from "../../picture/flags/MGT.png";
import MHN from "../../picture/flags/MHN.png";
import MCO from "../../picture/flags/MCO.png";
import MPA from "../../picture/flags/MPA.png";
import MEC from "../../picture/flags/MEC.png";
import MLB from "../../picture/flags/MLB.png";
import MCU from "../../picture/flags/MCU.png";
import MSV from "../../picture/flags/MSV.png";
import MLU from "../../picture/flags/MLU.png";
import MLM from "../../picture/flags/MLM.png";
import MCR from "../../picture/flags/MCR.png";
import MRD from "../../picture/flags/MRD.png";
import MBO from "../../picture/flags/MBO.png";
import MPY from "../../picture/flags/MPY.png";
import MLC from "../../picture/flags/MLC.png";
import MLV from "../../picture/flags/MLV.png";
import MLA from "../../picture/flags/MLA.png";
import MPE from "../../picture/flags/MPE.png";
import MNI from "../../picture/flags/MNI.png";

function Country(props) {
  const { nameCountry, idCountry } = props;
  const LATAM = [
    {
      name: "Guatemala",
      imgid: MGT,
    },
    {
      name: "Honduras",
      imgid: MHN,
    },
    {
      name: "Colombia",
      imgid: MCO,
    },
    {
      name: "Panamá",
      imgid: MPA,
    },
    {
      name: "Ecuador",
      imgid: MEC,
    },
    {
      name: "Brasil",
      imgid: MLB,
    },
    {
      name: "Cuba",
      imgid: MCU,
    },
    {
      name: "El Salvador",
      imgid: MSV,
    },
    {
      name: "Uruguay",
      imgid: MLU,
    },
    {
      name: "Mexico",
      imgid: MLM,
    },
    {
      name: "Costa Rica",
      imgid: MCR,
    },
    {
      name: "Dominicana",
      imgid: MRD,
    },
    {
      name: "Bolivia",
      imgid: MBO,
    },
    {
      name: "Paraguay",
      imgid: MPY,
    },
    {
      name: "Chile",
      imgid: MLC,
    },
    {
      name: "Venezuela",
      imgid: MLV,
    },
    {
      name: "Argentina",
      imgid: MLA,
    },
    {
      name: "Perú",
      imgid: MPE,
    },
    {
      name: "Nicaragua",
      imgid: MNI,
    },
  ];

  const picURL = LATAM.find((dato) => dato.name === nameCountry);

  return (
    <>
      <li className="listLi">
        <img src={picURL.imgid} alt="" width="28px" height="20px" />
        <Link to={`/carousel/${idCountry}`}>{nameCountry}</Link>
      </li>
    </>
  );
}

export default Country;
