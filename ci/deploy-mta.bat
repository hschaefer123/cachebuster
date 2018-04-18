echo "(CIDeploy)"

REM execute MTA build
echo "Build MTA..."
java -jar ./tools/mta.jar --mtar tmp/cachebuster.mtar --build-target=NEO build

REM deploy to SAP Cloud Platform
echo "Deploy MTA..."
./tools/neo-java-web-sdk/tools/neo deploy-mta deploy-mta.properties
REM ./tools/neo-java-web-sdk/tools/neo deploy-mta deploy-mta.properties --password SUSER_SCP_PASSWORD
