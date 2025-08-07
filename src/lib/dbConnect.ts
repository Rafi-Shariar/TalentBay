import { MongoClient, ServerApiVersion } from "mongodb";


export const collectionNames = {
    userCollection : 'users',

}

export default function dbConnect(collectionName : string) {
  const uri = process.env.MONGODB_URI as string;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(process.env.DB_NAME).collection(collectionName);
}
