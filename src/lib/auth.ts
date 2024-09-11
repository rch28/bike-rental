import { jwtVerify, JWTPayload } from "jose";

interface UserPayload extends JWTPayload {
  user_id?: string;
}

// Helper function to convert a string to Uint8Array
const toUint8Array = (secret: string): Uint8Array => new TextEncoder().encode(secret);





// Define the function with typed parameters and return type
export const verifyUser = async (
  access_token: string,
  SECRET_KEY: string 
): Promise<UserPayload | null> => {  
  try {
    // Convert SECRET_KEY to Uint8Array
    const secretKeyUint8 = toUint8Array(SECRET_KEY);

    // Use Uint8Array directly as the key
    const { payload } = await jwtVerify(access_token, secretKeyUint8, {
      algorithms: ["HS256"],
    });

    if (payload && payload.user_id) {
      return payload ; // Cast the payload to the defined UserPayload type
    }

    // Return null if payload exists but doesn't contain user_id
    return null;
  } catch (err) {
    if (err instanceof Error) {
        console.error("Invalid access token:", err.message);
      } else {
        console.error("Unknown error during token verification:", err);
      }
      return null;  // Return null if verification fails
  }
};
