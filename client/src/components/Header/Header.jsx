// importing modules
import InfoHeader from "./InfoHeader/InfoHeader";
import JoogleHeader from "./JoogleHeader/JoogleHeader";

const Header = ({headType}) => {
  return (
    <>
      {
        headType === "JoogleHeader" 
        ? 
        <JoogleHeader /> 
        :
        (
          headType === "InfoHeader"
          ?
          <InfoHeader />
          :
          ""  
        )
      }
    </> 
  )
};

export default Header;