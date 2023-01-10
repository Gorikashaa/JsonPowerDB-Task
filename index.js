
var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL="/api/irl";
var jpdbIML="/api/iml";
var shipDBName = "DELIVERY-DB";
var shipRelationName= "SHIPMENT_TABLE";
var connToken = "90932439|-31949270328045526|90955767";

$("#shipno").focus();

function saveRecNo2LS(jsonObj) {
    var lvData = JSON.parse(jsonObj.data);
    localStorage.setItem("recno", lvData.rec_no);
}

function getShipNoAsJsonObj() {
    var shipno= $("#shipno").val();
    var jsonStr = {
        shipment_no: shipno
    };
    return JSON.stringify(jsonStr);
}

function fillData(jsonObj) {
    saveRecNo2LS(jsonObj);
    var record = JSON.parse(jsonObj.data).record;
        $("#description").val(record.description);
        $("#source").val(record.source);
        $("#destination").val(record.destination);
        $("#shipdate").val(record.shipping_date);
        $("#expdate").val(record.expected_delivery_date);
}

function resetform() {
    $("#shipno").val("");
    $("#description").val("");
    $("#source").val("");
    $("#destination").val("");
    $("#shipdate").val("");
    $("#expdate").val("");
    $("#shipno").prop("disabled", false);
    $("#save").prop ("disabled", true);
    $("#update").prop("disabled", true);
    $("#reset").prop("disabled", true);
    $("#shipno").focus();
}

 

function validateData() {
    var shipno, description, source, destination, shipdate, expdate;
        shipno = $("#shipno").val();
        description = $("#description").val();
        source = $("#source").val();
        destination = $("#destination").val();
        shipdate = $("#shipdate").val();
        expdate = $("#expdate").val();
        
            if (shipno === "" ){
                alert("Shipment Number missing");
                    $("#shipno").focus();
                return "";
            }

            if (description === "") {
                alert("Description missing");
                    $("#description").focus();
                return "";
            }

            if (source === "") {
                alert("Source Field missing");
                    $("#source").focus();
                return "";
            }

            if (destination === ""){
                alert("Destination Field missing");
                    $("#destination").focus();
                return "";
            }

            if (shipdate === "") {
                alert("Shipping Date is missing");
                    $("#shipdate").focus();
                return "";
            }
        
            if (expdate === "") {
                alert("Expected Delivery Date is missing");
                    $("#expdate").focus();
                return "";
            }

        var jsonStrObj = {
            shipment_no: shipno,
            description: description,
            source: source,
            destination: destination,
            shipping_date: shipdate,
            expected_delivery_date: expdate
        };

        return JSON.stringify(jsonStrObj);
    }

function getShip() {
    var shipNoJsonObj = getShipNoAsJsonObj();
    var getRequest = createGET_BY_KEYRequest(connToken, shipDBName, shipRelationName, shipNoJsonObj);
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);
    jQuery.ajaxSetup ({async: true});
        
        if (resJsonObj.status === 400) {
            $("#save").prop ("disabled", false);
            $("#reset").prop("disabled", false);
            $("#description").focus();
        
        } else if (resJsonObj.status === 200) {
            $("#shipno").prop("disabled", true);
            fillData(resJsonObj);

            $("#update").prop("disabled", false);
            $("#reset").prop("disabled", false);
            $("#description").focus();
        }
}

function saveData(){
    var jsonStrObj = validateData();
        if (jsonStrObj === "" ){
            return "";
        }
    var putRequest = createPUTRequest(connToken, jsonStrObj, shipDBName, shipRelationName);
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(putRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    resetform();
    $('#shipno').focus();
}

function updateData() {
    $('#update').prop("disabled", true);
    jsonChg = validateData();
    var updateRequest = createUPDATERecordRequest(connToken, jsonChg, shipDBName, shipRelationName, localStorage.getItem("recno"));
    jQuery.ajaxSetup({async: false });
    var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    console.log(resJsonObj);
    resetform();
    $("#shipno").focus();
}

 