//target label style = 30256
//physical size = ~2-5/16"x4"
//############################
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
          <String>'+document.getElementById('A').value+'\n'
          +document.getElementById('B').value+'\n'
          +document.getElementById('C').value+'\n'
          +document.getElementById('D').value+'\n'
          +document.getElementById('E').value+'\n'
          +document.getElementById('F').value+'\n'
          +document.getElementById('G').value+'\n'
          +document.getElementById('H').value+'</String>\
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


function printupdate(){
  testAddressLabelXml = updateXML();
  label = dymo.label.framework.openLabelXml(testAddressLabelXml)
  var pngData = label.render();
  var labelImage = document.getElementById('labelImage');
  labelImage.src = "data:image/png;base64," + pngData;
}


(function all(printVariable)
  {
      // stores loaded label info
      var label;
  
      // called when the document completly loaded
      function onload()
      {
          var labelText = "";// = document.getElementById('addressTextArea');
          var printer = ""; //sSelect = document.getElementById('printersSelect');
          //var printButton = document.getElementById('printButton');
  
  
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
  
          // loads all supported printers into a combo box 
          function loadPrinters()
          {
              var printers = dymo.label.framework.getPrinters();
              if (printers.length == 0)
              {
                  alert("No DYMO printers are installed. Install DYMO printers.");
                  return;
              }
              printer = printers[0].name;
          }
  
  
          // set current address on the label 
          function setAddress(address)
          {
              if (!label || label.getAddressObjectCount() == 0)
                  return;
  
              return label.setAddressText(0, address);
          }
  
          // // prints the label
          // printButton.onclick = function()
          // {
          //     try
          //     {               
          //         label.print(printer);
          //     }
          //     catch(e)
          //     {
          //         alert(e.message || e);
          //     }
          // }
          testAddressLabelXml = updateXML();

          label = dymo.label.framework.openLabelXml(testAddressLabelXml);
          console.log(label.getObjectNames());
          console.log(labelText);
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
  
      // register onload event
      if (window.addEventListener)
          window.addEventListener("load", initTests, false);
      else if (window.attachEvent)
          window.attachEvent("onload", initTests);
      else
          window.onload = initTests;
  
  } ());
