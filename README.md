# CacheBuster

> This demo shows the usage of the UI5 CacheBuster in conjunction with the relevant build process to generate **sap-ui-cachebuster-info.json**.

> Futhermore you will get a local development project that mimiks the SAP SCP plattform to run/build/deploy SCP projects locally or in CI / CD pipelines instead inside [WebIDE](https://www.sap.com/developer/tutorials/webide-grunt-basic.html).

## [OpenUI5 Developer Blog](http://openui5.blogspot.com/2018/04/cachebuster.html)

### [Online Demo (SAP HCP)](https://cachebuster-p1940953245trial.dispatcher.hanatrial.ondemand.com/index.html)

![Screenshot](CacheBuster.jpg)

### Highlights

> - app showing usage of UI5 [CacheBuster](https://openui5nightly.hana.ondemand.com/#/topic/ff7aceda0bd24039beb9bca8e882825d.html)
> - SCP destination pointing out to northwind v4 example service [Northwind](http://services.odata.org/V4/Northwind/Northwind.svc/) 
> - fix/workaround for linux post process bug [Fix #2312](https://github.com/SAPDocuments/Tutorials/issues/2312) inside Gruntfile.js

### CI Process 
> - **develop** using your favorised IDE and test/preview using [localneo](https://www.npmjs.com/package/@uniorg/localneo) to have a local server proxy supporting neo-app.json and destinations 
> - **build** using [grunt-sapui5-bestpractice-build](https://help.sap.com/viewer/825270ffffe74d9f988a0f0066ad59f0/CF/en-US/47045080ddaf414ba520d77353fc9441.html) plugin updated to version 1.3.50 with relevant task for generation of the **sap-ui-cachebuster-info.json** file 
> - **deploy** to SCP by creating MTA using [MTA Archive builder](https://help.sap.com/viewer/58746c584026430a890170ac4d87d03b/Cloud/en-US/9f778dba93934a80a51166da3ec64a05.html) and deploy as described in the [CI Best Practices Guide](https://www.sap.com/developer/tutorials/ci-best-practices-fiori-sapcp.html)

## License

Released under the [Apache license](http://www.apache.org/licenses/). Have at it.
