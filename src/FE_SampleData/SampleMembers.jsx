import JaneDoeImage from "../images/Ellipse 12@3x.png";
import JaneSmithImage from "../images/Ellipse 13@3x.png";
import TracySmithImage from "../images/photo-1586243287039-23f4c8e2e7ab@3x.png";
import NatalieJonesImage from "../images/photo-1590104872666-01ac8796ab87@3x.png";
/**
 * searching for profileID in the profile table would result in a sample row of this
 * a get request to backend with search profileID of 433244
 */
const JaneDoeProfile={
    profileID: 433244,
    firstName: "Jane",
    lastName: "Doe",
    company: "Tattoohead Studio",
    address: {
        street1:"",
        street2:"",
        city: "Philadelphia",
        state:"PA",
        zip: null
    },
    profileImg: JaneDoeImage,
    TBD:null
};
const JaneSmithProfile={
    profileID: 134554,
    firstName: "Jane",
    lastName: "Smith",
    company: "Fun Art Studio",
    address: {
        street1:"",
        street2:"",
        city: "Philadelphia",
        state:"PA",
        zip: null
    },
    profileImg: JaneSmithImage,
    TBD:null
};
const TracySmithProfile={
    profileID: 864323,
    firstName: "Jane",
    lastName: "Smith",
    company: "XY Tattoo Shops",
    address: {
        street1:"",
        street2:"",
        city: "Boston",
        state:"MA",
        zip: null
    },
    profileImg: TracySmithImage,
    TBD:null
};
const NatalieJonesProfile={
    profileID: 342532,
    firstName: "Natalie",
    lastName: "Jones",
    company: "ABC Studio",
    address: {
        street1:"",
        street2:"",
        city: "Chicago",
        state:"IL",
        zip: null
    },
    profileImg: NatalieJonesImage,
    TBD:null
};

const SampleMembers = new Map();
SampleMembers.set(433244,JaneDoeProfile);
SampleMembers.set(134554,JaneSmithProfile);
SampleMembers.set(864323,TracySmithProfile);
SampleMembers.set(342532,NatalieJonesProfile);

export default SampleMembers;
export {JaneDoeProfile, JaneSmithProfile,TracySmithProfile ,NatalieJonesProfile};