// importing modules
import JoogleHeader from "./JoogleHeader/JoogleHeader";
import ExploreHeader from "./ExploreHeader/ExploreHeader";
const Header = ({headType}) => {
  return (
    <>
      {
        headType === "JoogleHeader" 
        ? 
        <JoogleHeader /> 
        :
        (
          headType === "ExploreHeader"
          ?
          <ExploreHeader />
          :
          ""  
        )
      }
    </> 
  )
};

export default Header;