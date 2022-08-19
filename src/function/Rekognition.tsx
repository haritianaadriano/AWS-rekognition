import { DetectFacesCommand, RekognitionClient } from "@aws-sdk/client-rekognition";
import {fromCognitoIdentityPool} from '@aws-sdk/credential-providers';
import { Buffer } from "buffer";
import React, { useEffect } from "react";

const credentials = fromCognitoIdentityPool({
                        identityPoolId: "eu-west-2:371cdf1c-657e-4e3f-a6a0-3cdcf905bfdc",
                        clientConfig: {region: "eu-west-2"},
                    });

interface Props {
    img: string;
    result: (e: any) => void;
    count: number
}

const FaceRekognition: React.FC<Props> = (Props) => {
    useEffect(() => {
        if(Props.count !== 0){
            facedetails();
        }
    }, [(Props.count && Props.img)]);

    const facedetails = async () => {
        const client = new RekognitionClient({region: "eu-west-2", credentials });
        let imgToSend = Buffer.from(Props.img, "base64");

        const params = {
            Image: {
                Bytes: imgToSend,
            },
            Attributes: ["ALL"],
        };

        const detectFacesCommand = new DetectFacesCommand(params);
        try {
            const data = await client.send(detectFacesCommand);
            Props.result(data);
            return data
        }catch (error){
            console.log(error)
        }
    }
    return (
        <div>
        </div>
    )
}
         
export default FaceRekognition;