import { CustomAuthorizerEvent, CustomAuthorizerResult } from "aws-lambda";
import "source-map-support/register";

import { verify } from "jsonwebtoken";
import { JwtPayload } from "../../auth/JwtPayload";
import { createLogger } from "../../utils/logger";

const cert = `-----BEGIN CERTIFICATE-----
MIIDJTCCAg2gAwIBAgIJMM7OaxlpGyZ8MA0GCSqGSIb3DQEBCwUAMDAxLjAsBgNV
BAMTJWd6YW1vcmEtdWRhY2l0eS1jYXBzdG9uZS51cy5hdXRoMC5jb20wHhcNMjEw
MzAyMjMxNDUzWhcNMzQxMTA5MjMxNDUzWjAwMS4wLAYDVQQDEyVnemFtb3JhLXVk
YWNpdHktY2Fwc3RvbmUudXMuYXV0aDAuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOC
AQ8AMIIBCgKCAQEA1C81LafHsHCcZn+k5f/DXaGyMjg6G3o3c+ofkfl34HNm/fO9
NKEwsjrET0rLflbfRHZ0VcZq2FXQI2/daW75SeDKMKhWdBbzpCpkFlD8bWHiEQx0
0wHkEsnEVLtWmyr2ojc2wGNbBSEprLS1rR+YHX8mIGpgg341wPFBScGM7sLwOMNs
Dc5BvDXpOMgEtdc7Ok8A4b8IQmW+tZxX3ujcvr/yCdSXWpaNzMZ7w0eAU9MfKqGX
d6cDD62l/NaL29EihjZto7DqU81GUlKnHnmhIUWwoLwWBeQGBFpl2Wc/6dwjgreX
hIERu8o8xJy6L02wkbhzGC2fT39hUttszYTMwwIDAQABo0IwQDAPBgNVHRMBAf8E
BTADAQH/MB0GA1UdDgQWBBQaM56MXnNQHLM4LOcqsdU1VYQXQTAOBgNVHQ8BAf8E
BAMCAoQwDQYJKoZIhvcNAQELBQADggEBAL+vWsMLxoxx/C33uZkSLhtIcOM1WRRh
ys2NzLI1Ovc8KDoqMfSMRshPW3nsekpuRv/1KrJLSppxMlr2QLYZw46x1mdl+Yhq
iuuWxwE8/iRHREN3t47xtz/02BHyO3MGcrhtM/wPHPNe7jHQ33/zGPuMEsMAmUtq
LlFwrWGEozjfQP4s46CRtNJvbvMP6g8SB4NpoXfX2EtxZM2ML739AIfcJPKCgIoz
AL2bejroowznGMQVotjOY9a7Af0Im/4OQ9C9LUg2FLliumll9sOSKPhxGbGCdWpc
sxFRdRTHrS2iwYjh2WmvMmqpyfQ+fkhHBckSBRybXghOa04WTmdyybY=
-----END CERTIFICATE-----`;

const logger = createLogger("todosAccess");

export const handler = async (
  event: CustomAuthorizerEvent
): Promise<CustomAuthorizerResult> => {
  try {
    const jwtPayload = verifyToken(event.authorizationToken);
    logger.info("User was authorized", jwtPayload);

    return {
      principalId: jwtPayload.sub,
      policyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Action: "execute-api:Invoke",
            Effect: "Allow",
            Resource: "*",
          },
        ],
      },
    };
  } catch (e) {
    logger.info("User authorized", e.message);

    return {
      principalId: "user",
      policyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Action: "execute-api:Invoke",
            Effect: "Deny",
            Resource: "*",
          },
        ],
      },
    };
  }
};

function verifyToken(authHeader: string): JwtPayload {
  if (!authHeader) throw new Error("No authentication header");

  if (!authHeader.toLowerCase().startsWith("bearer "))
    throw new Error("Invalid authentication header");

  const split = authHeader.split(" ");
  const token = split[1];

  return verify(token, cert, { algorithms: ["RS256"] }) as JwtPayload;
}
