import React, {useState} from 'react';
import "./App.css";
import { MdPrint } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import upper from "./Images/upper.png";
// import dp from "./Images/dp.png";
import admin from "./Images/admin.png";
import lower from "./Images/lower.png";
import QR from "./Images/QR.png";
import english from "./Images/english.png";
import contact from "./Images/contact.png";
import moment from "moment";
import { FaLanguage } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import adhar from "./Images/adhar.svg";
import satyamev from "./Images/satyamev.svg";


function App() {



  const [show, setShow] = useState(false);

  const [image, setImage] = useState();

  const [fName, setFName] = useState("");
  const [fNameH, setFNameH] = useState("");
  
  const [nameH, setNameH] = useState("");
  const [name, setName] = useState("");

  const [dateValue, setDateValue] = useState(moment());

  const [hNo, setHNo] = useState("");

  const [pin, setPin] = useState("");

  const [bo, setBo] = useState(""); 

  const [gender, setGender] = useState("");

  const [aadharNumber, setAadharNumber] = useState("");

  const [village, setVillage] = useState("");
  const [villageH, setVillageH] = useState("");

  const [tehsil, setTehsil] = useState("");
  const [tehsilH, setTehsilH] = useState("");

  const [postOffice, setPostOffice] = useState("");
  const [postOfficeH, setPostOfficeH] = useState("");

  const [district, setDistrict] = useState("");
  const [districtH, setDistrictH] = useState("");

  const [state, setState] = useState("");
  const [stateH, setStateH] = useState("");


  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };



  const handleDateUpdate = (e) => {
    const dateValue = e.target.value;
    setDateValue(moment(dateValue));
  };


  return (
    <>










{show ? (
        <div className="popUp">
          <div className="frame">
            <div className="head">
              <img src={upper} alt="" width="100%" height="100%" />
            </div>
            <div className="content">
              <div className="photo-content">

                <div className="photo">
            <img src={!image?admin:URL.createObjectURL(image)} alt="user pic" height="100%" width="100%" />
                </div>

                <div className="name">
                  {nameH}
                  <br />
                  <div>{name}</div>
                  <div className="dob">जन्म तिथि/ DOB:&nbsp;  {dateValue.format("DD/MM/YYYY")} </div>
                  <div className="gender"> {gender}</div>
                </div>
              </div>
              <div className="adhar-number">{aadharNumber}</div>
            </div>
            <div className="foot">
              <img
                src={lower}
                alt="mera addhar meri pahchan"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <br />

          <div className="frame">
            <div className="head-2">
              <img src={english} alt="" width="100%" height="100%" />
            </div>
            <div className="content-2">
              <div className="data">
                <div style={{ fontWeight: "bold", fontSize: "14px" }}>पता:</div>
                S/O: {fNameH}, {hNo}, गाँव- {villageH}, {tehsilH}, {postOfficeH}, ({bo}), {districtH},
                <br />
                {stateH}- {pin}
                <br />
                <div
                  style={{
                    fontWeight: "bold",
                    marginTop: "10px",
                    fontSize: "14px",
                  }}
                >
                  Address:
                </div>
                S/O: {fName}, {hNo}, Vill-{village}, {tehsil}, {postOffice} ({bo}), {district},
                <br />
                {state}- {pin}
              </div>

              <div className="bar-code">
                <img src={QR} alt="" width="100%" height="100%" />
              </div>
            </div>
            <div className="adhar-number-2">{aadharNumber}</div>
            <div className="foot">
              <img
                src={contact}
                alt="mera addhar meri pahchan"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <br />

 <div>

 <button className="close" onClick={() => setShow(false)}>
            Edit <CiEdit />
          </button>
          <button className="close" onClick={() => window.print(false)}>
            Print <MdPrint />
          </button>
 </div>
        </div>
      ) 
      : null
      }



{/* inputs start */}




<div className="heading">
        <img src={satyamev} alt="satyamev logo" />
        <> Unique Identification Authority of India</>
        <img src={adhar} alt="adhar logo" />
      </div>

      <div className="header">
        <h3>
          <BsFillGridFill /> myAadhar
        </h3>
        <h3>
          <FaLanguage />{" "}
        </h3>
      </div>







<div className='mainBox'>


<input type="file" accept="image/*" onChange={handleImageChange} />

<input type="text" placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)}  required  />
<input type="text" placeholder="Name Hindi..." value={nameH} onChange={(e) => setNameH(e.target.value)}  required  />

<input type="date" onChange={(e) => handleDateUpdate(e)} />

<select onChange={(e)=>setGender(e.target.value)}>
  <option selected disabled value="Select Gender">Select Gender</option>
  <option value="पुरुष/ Male">पुरुष/ Male</option>
  <option value="महिला/ Female">महिला/ Female</option>
</select>

<input type="text" placeholder="Aadhar Number..." value={aadharNumber} onChange={(e) => setAadharNumber(e.target.value)} required />
<input type="text" placeholder="House Number" value={hNo} onChange={(e) => setHNo(e.target.value)} required />
<input type="text" placeholder="Pin Code" value={pin} onChange={(e) => setPin(e.target.value)} required />
<input type="text" placeholder="BO Code" value={bo} onChange={(e) => setBo(e.target.value)} required />

<input type="text" placeholder="Father Name" value={fName} onChange={(e) => setFName(e.target.value)} required />
<input type="text" placeholder="Father Name Hindi" value={fNameH} onChange={(e) => setFNameH(e.target.value)} required />

<input type="text" placeholder="Village" value={village} onChange={(e) => setVillage(e.target.value)} required />
<input type="text" placeholder="Village Hindi" value={villageH} onChange={(e) => setVillageH(e.target.value)} required />

<input type="text" placeholder="tehsil" value={tehsil} onChange={(e) => setTehsil(e.target.value)} required />
<input type="text" placeholder="tehsil Hindi" value={tehsilH} onChange={(e) => setTehsilH(e.target.value)} required />

<input type="text" placeholder="postOffice" value={postOffice} onChange={(e) => setPostOffice(e.target.value)} required />
<input type="text" placeholder="postOffice Hindi" value={postOfficeH} onChange={(e) => setPostOfficeH(e.target.value)} required />

<input type="text" placeholder="district" value={district} onChange={(e) => setDistrict(e.target.value)} required />
<input type="text" placeholder="district Hindi" value={districtH} onChange={(e) => setDistrictH(e.target.value)} required />

<input type="text" placeholder="state" value={state} onChange={(e) => setState(e.target.value)} required />
<input type="text" placeholder="state Hindi" value={stateH} onChange={(e) => setStateH(e.target.value)} required />


<button type="submit" onClick={() => setShow(true)}> Submit </button>




</div>

    
    </>
  );
}

export default App;
