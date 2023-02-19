// importing modules
import JoogleHeader from "./JoogleHeader/JoogleHeader";
import ExploreHeader from "./ExploreHeader/ExploreHeader";
import DetailHeader from "./Detailheader/DetailHeader";
const Header = ({headType, headText}) => {
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
          (
            headType === "DetailHeader"
            ?
            <DetailHeader text={headText}/>
            :
            ''
          )  
        )
      }
    </> 
  )
};

export default Header;