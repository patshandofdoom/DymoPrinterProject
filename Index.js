function printupdate(){
    testAddressLabelXml = updateXML();
    label = dymo.label.framework.openLabelXml(testAddressLabelXml)
    var pngData = label.render();
    var labelImage = document.getElementById('labelImage');
    labelImage.src = "data:image/png;base64," + pngData;
}

function desciprtionTooLong(){
    if(document.getElementById('lab_description').value.length>25){
        return "Refer to Google Sheet"
    }else{
        return document.getElementById('lab_description').value.toUpperCase()
    }
}

//this function updates the XML by grabbing all the info from the form and re-formatting
function updateXML(){
    return '<?xml version="1.0" encoding="utf-8"?>\
    <DieCutLabel Version="8.0" Units="twips" MediaType="Default">\
        <PaperOrientation>Landscape</PaperOrientation>\
        <Id>ReturnAddress</Id>\
        <PaperName>30256 Shipping</PaperName>\
        <DrawCommands>\
        <RoundRectangle X="0" Y="0" Width="3331" Height="5715" Rx="270" Ry="270"/>\
        </DrawCommands>\
        <ObjectInfo>\
            <TextObject>\
                <Name>TEXT_1</Name>\
                <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
                <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>\
                <LinkedObjectName></LinkedObjectName>\
                <Rotation>Rotation0</Rotation>\
                <IsMirrored>False</IsMirrored>\
                <IsVariable>False</IsVariable>\
                <HorizontalAlignment>Right</HorizontalAlignment>\
                <VerticalAlignment>Top</VerticalAlignment>\
                <TextFitMode>None</TextFitMode>\
                <UseFullFontHeight>True</UseFullFontHeight>\
                <Verticalized>False</Verticalized>\
                <StyledText>\
                <Element>\
                        <String>Time Stamp:\n\
                        Patient:\n\
                        Appl. Type:\n\
                        Description:\n\
                        Scan Date:\n\
                        Insert Date:\n\
                        Doctor:\n\
                        Asst:</String>\
                    <Attributes>\
                    <Font Family="Arial" Size="12" Bold="True" Italic="False" Underline="False" Strikeout="False"/>\
                    <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
                    </Attributes>\
                </Element>\
                </StyledText>\
            </TextObject>\
            <Bounds X="350" Y="600" Width="1500" Height="3500"/>\
        </ObjectInfo>\
        <ObjectInfo>\
            <TextObject>\
                <Name>TEXT_2</Name>\
                <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
                <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>\
                <LinkedObjectName></LinkedObjectName>\
                <Rotation>Rotation0</Rotation>\
                <IsMirrored>False</IsMirrored>\
                <IsVariable>False</IsVariable>\
                <HorizontalAlignment>Left</HorizontalAlignment>\
                <VerticalAlignment>Top</VerticalAlignment>\
                <TextFitMode>None</TextFitMode>\
                <UseFullFontHeight>True</UseFullFontHeight>\
                <Verticalized>False</Verticalized>\
                <StyledText>\
                <Element>\
                <String>'+dateConstructor()+'\n'
                +document.getElementById('patient_name').value.toUpperCase()+'\n'
                +document.getElementById('appliance_type').value.toUpperCase()+'\n'
                +desciprtionTooLong()+'\n'
                +dateToNA(document.getElementById('scan_date').value)+'\n'
                +dateToNA(document.getElementById('insert_date').value)+'\n'
                +document.getElementById('doctor').value.toUpperCase()+'\n'
                +document.getElementById('staff_initials').value.toUpperCase()+'</String>\
                    <Attributes>\
                    <Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False"/>\
                    <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
                    </Attributes>\
                </Element>\
                </StyledText>\
            </TextObject>\
            <Bounds X="2000" Y="600" Width="3550" Height="3500"/>\
        </ObjectInfo>\
    </DieCutLabel>';
}

//A short function to check if the dates are defined or not. If they are not, returns "na"
//This function specifically for the "insert date" and "scan date" fields, which are allowed to be left blank
function dateToNA(passedInValue){
    if(passedInValue==""){
        return "N/A"
    }
    return passedInValue
}

//construct a basic date using either the passed in date or today's date
function dateConstructor(date){
    if(!date){
        date = new Date();
    }
    let day = date.getDate();
    if (day.length=1){
        day = "0"+day;
    }
    let month = date.getMonth();
    month++
    if (month<10){
        month = "0"+month;
    }
    let year = date.getFullYear();
    let hour = date.getHours();

    let ampm = "am";
    if(hour>12){
        hour = hour-12;
        ampm = "pm";
    }
    minutes = date.getMinutes();
    if (minutes<10){
        minutes = "0"+minutes;
    }
    return year+"-"+month+"-"+day+" "+hour+":"+minutes+" "+ampm;
}

//some function here to save the form data to the google sheet
function saveDataToSheet(){
    let storageObject = convertDataToObject();
    //function added here in google that calls the server and writes to the sheet
    //google.script.run.submitTheData(storageObject);
    console.log(storageObject);
}

function convertDataToObject(){
    let storageDate = dateConstructor();
    let patientName = document.getElementById('patient_name').value.toUpperCase();
    let applianceType = document.getElementById('appliance_type').value.toUpperCase();
    let labDescription = document.getElementById('lab_description').value.toUpperCase();
    let scanDate = dateToNA(document.getElementById('scan_date').value);
    let insertDate = dateToNA(document.getElementById('insert_date').value);
    let doctorInitials = document.getElementById('doctor').value.toUpperCase();
    let staffInitials = document.getElementById('staff_initials').value.toUpperCase();
    if(patientName==""||staff_initials==""||patient_name==""||doctorInitials==""){
        console.log("missing data")
    }

    let infoToStore={"storageDate":storageDate,"patientName":patientName,"applianceType":applianceType,"labDescription":labDescription,
        "scanDate":scanDate,"insertDate":insertDate,"doctorInitials":doctorInitials,"staffInitials":staffInitials};

    return infoToStore
}

//The submit function compiles all the info into an object that will be sent to the google sheet to be stored.
$("#patientData").submit(function(e) {
    e.preventDefault(); // <==stop page refresh==>
    saveDataToSheet();
    console.log("Submitted");
});

//this function is for the print button, it first saves the data, then prints it on the printer
function printAndSave(){
    if(rejectIfBlanks()=="incomplete"){
        alert("Some required fields not filled out");
        return;
    };
    //some function here to save the data 
    saveDataToSheet();

    var printer = loadPrinters();
    if (!printer){return}
    testAddressLabelXml = updateXML();
    label = dymo.label.framework.openLabelXml(testAddressLabelXml);
     try
    {               
        label.print(printer);
    }
    catch(e)
    {
        alert(e.message || e);
        console.log(e.message)
    }
}

function rejectIfBlanks(){
    var jsonObject = convertDataToObject();
    if(jsonObject.patientName==""||jsonObject.staffInitials==""||jsonObject.labDescription==""){
        return "incomplete"
    }
    return "complete"
}

//This function updates the preview on the page, allowing the user to get a view of what their label will look like
function updatePreview()
{
    if(printVariable=="yes"){
    if (!label)
        return;
    }

    var pngData = label.render();
    var labelImage = document.getElementById('labelImage');
    labelImage.src = "data:image/png;base64," + pngData;
}

// Loads the first supported printer and save its to a global variable so that we can call it from the printAndSave function
function loadPrinters()
{
    var printers = dymo.label.framework.getPrinters();
    if (printers.length == 0)
    {
        alert("No DYMO printers are installed. Install DYMO printers.");
        return;
    }
    return printers[0].name;
}

(function()
  {
      // stores loaded label info
      var label;
  
      // called when the document completly loaded
      function onload(printVariable)
      {

        var printer = ""; //sSelect = document.getElementById('printersSelect');
        //var printButton = document.getElementById('printButton');

        //#############

        //#############

        testAddressLabelXml = updateXML();

        label = dymo.label.framework.openLabelXml(testAddressLabelXml);
        console.log(label.getObjectNames());
        updatePreview();

        if(printVariable=="yes"){
        // load printers list if we are looking to print
        loadPrinters();
        label.print(printer);
        }

      };
  
      function initTests()
      {
          if(dymo.label.framework.init)
          {
              dymo.label.framework.init(onload);
          } else {
              onload();
          }
      }
  

  } ());
