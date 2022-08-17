import React, { useState } from "react";
import Base64Convertion from "../function/Base64Convertion";


interface Img {
  fileName: string;
  base64: string
}

interface Props {
  data: (value: Img) => void
}

const InterfaceUi: React.FC<Props> = (Props) => {

  const [file, setFile] = useState<Img>();
  const fileImported = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      const file = e.target.files[0];
      const tempFileList: Img = {
        fileName: file.name,
        base64: file.type.indexOf("image") > -1 ? await Base64Convertion(file) : ""
      ,}
      setFile(tempFileList);
      Props.data(tempFileList);
    }
  };

  return(
    <>
        <h1>Face Authentification</h1>
        <input type="file" multiple onChange={fileImported}/>
        <img src={file ?.base64}/>
    </>
   );
}
export default InterfaceUi;