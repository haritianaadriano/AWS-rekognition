import { RekognitionClient, CompareFacesCommand } from "@aws-sdk/client-rekognition";

// a client can be shared by different commands.
const client = new RekognitionClient({ region: "REGION" });

const params = {
  /** input parameters */
  "Attributes": [ "string" ],
  "Image": { 
     "Bytes": Blob,
     "S3Object": { 
        "Bucket": "string",
        "Name": "img.detect",
        "Version": "1.0"
     }
  }
};

const command = new CompareFacesCommand(params);