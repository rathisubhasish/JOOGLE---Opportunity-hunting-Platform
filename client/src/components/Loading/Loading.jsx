import React from 'react';
import ReactLoading from 'react-loading';
import "./Loading.css";

const Loading = ({loadType}) => {
  return ( 
    <> 
        <div className={`${loadType === 'screenLoad' ? 'screenLoading' : (loadType === 'pageLoad' ? 'loading-container pageLoad' : 'loading-container dataLoad' )}`}>
            <ReactLoading 
                type={loadType === 'screenLoad' ? 'spokes' : (loadType === 'pageLoad'? 'spinningBubbles' : '')}
                
                color={loadType === 'screenLoad' ? '#242526' : '#696969'}
                
                width={loadType === 'screenLoad' ? '35px' : '40px'}
                
                height={loadType === 'screenLoad' ? '35px' : '40px'}
            />
        </div>
    </>
  )
};

export default Loading;