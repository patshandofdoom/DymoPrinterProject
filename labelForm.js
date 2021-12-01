    //target label style = 30256
    //physical size = ~2-5/16"x4"
    //listed label style = 30252
    //listed label size = 1-1/8" x 3-1/2"
    //############################

(function()
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
              //if (!label)
              //    return;
  
              var pngData = label.render();
              var labelImage = document.getElementById('labelImage');
              console.log(pngData)
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
  
  
          var testAddressLabelXml = '<?xml version="1.0" encoding="utf-8"?>\
      <DieCutLabel Version="8.0" Units="twips">\
          <PaperOrientation>Landscape</PaperOrientation>\
          <Id>Address</Id>\
          <PaperName>30252 Address</PaperName>\
          <DrawCommands>\
              <RoundRectangle X="0" Y="0" Width="3331" Height="5715" Rx="270" Ry="270" />\
          </DrawCommands>\
          <ObjectInfo>\
              <AddressObject>\
                  <Name>Address</Name>\
                  <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                  <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
                  <LinkedObjectName></LinkedObjectName>\
                  <Rotation>Rotation0</Rotation>\
                  <IsMirrored>False</IsMirrored>\
                  <IsVariable>True</IsVariable>\
                  <HorizontalAlignment>Left</HorizontalAlignment>\
                  <VerticalAlignment>Top</VerticalAlignment>\
                  <TextFitMode>ShrinkToFit</TextFitMode>\
                  <UseFullFontHeight>False</UseFullFontHeight>\
                  <Verticalized>False</Verticalized>\
                  <StyledText>\
                      <Element>\
                          <String>DYMO\n3 Glenlake Parkway\nAtlanta, GA 30328</String>\
                          <Attributes>\
                              <Font Family="Arial" Size="8" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                              <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                          </Attributes>\
                      </Element>\
                  </StyledText>\
                  <ShowBarcodeFor9DigitZipOnly>False</ShowBarcodeFor9DigitZipOnly>\
                  <BarcodePosition>AboveAddress</BarcodePosition>\
                  <LineFonts>\
                      <Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                      <Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                      <Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
                  </LineFonts>\
              </AddressObject>\
              <Bounds X="332" Y="150" Width="4455" Height="1260" />\
          </ObjectInfo>\
      </DieCutLabel>';
          label = dymo.label.framework.openLabelXml(testAddressLabelXml);
  
  
          var A = document.getElementById('A').value;
          var B = document.getElementById('B').value;
          var C = document.getElementById('C').value;
          var D = document.getElementById('D').value;
          var E = document.getElementById('E').value;
          var F = document.getElementById('F').value;
          var G = document.getElementById('G').value;
          var H = document.getElementById('H').value;
          
          labelText = A + "\n" + B + "\n" + C + "\n" + D + "\n" + E + "\n" + F + "\n" + G + "\n" + H;
          console.log(labelText);
          setAddress(labelText);
          updatePreview();
          // load printers list on startup
          //loadPrinters();
          //label.print(printer);
          //google.script.host.close();
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
