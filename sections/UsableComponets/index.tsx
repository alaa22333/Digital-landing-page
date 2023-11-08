import React from 'react'
 
type Titles={
    title:String,subTitle:String
}
const Heading = ({ title, subTitle }:Titles) => {
  return (
    <h1 className="text-h2 md:text-h1 center flex-col  text-primary2 ">
      {title} 
      <span className="text-white  md:text-h4  text-lg">{subTitle}</span>
    </h1>
  );
};

export default Heading
