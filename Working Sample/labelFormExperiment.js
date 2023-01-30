//target label style = 30256
//physical size = ~2-5/16"x4"
//############################
const imagebase64 = "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Dt1Kch5vK1V1s4ftpSQlVlVSRnZcQKRoo0WKujTkDYrVpHTI6VDUFUq0qEkHUq0sPeEFFUXf8aFp1FjRAzY4xYFBQxf0ilSQMlbPWAoGZUnDgKt8Y7u7m/IbP5K227hITyyrV58+nePcr4Lvec+0mVrbsMUPPGqpJeN6pmT1mKdn0msKRvzA+321DetzyA+ts7eF4dZEyZn26ZVNbljBDS62elpu+fRkHWkXkZuDV571N6HmboOPz4n2G3FGyNJb4trEYNhmclQNqEqhpKYko6xkxKCyikElZVvVDBtRV/V8uI/dThQryUiLdMmrq/p6iznHY6gqOUA68NclNTVFWb8LNmtscdiWPCMyKK8uK21AIxgLKaPG3rAWha12hzVC7l/dr33Ip2fkxEc95AnMN09aVUanWCq8YTcvjyH3WO3Siex6WsP93uNLznGyA/Q1ceVqnnW7K/yopZyCUd90o9Oc48UWT+NoFjzpJ67x07Yr0goud6NXO8eKGc71634048i/NjJBm7eOoUQX9CcJVT+bJal/OjzrSoeIsYvlnpj01xF1RWM7J5WVlVXEImkVKdkQHct6SkHBYKIWlilI61fTCNUk8z01LcM/HZ6zSYdIWWxQOaT+9IRfaYhEhsXq5snYGl6RnAlu2zyF8DqNjFGRXnWxhhFb3Odaa1oo46h63JNusJ8VXmChvMXmqeqwxdMiD7jZLTZN9oCica35VjjSCx2o164yeNZzHnKH//GbtivH8vbzEi9xoKXmW4CiDUY96gF3usf6HdpTs9/hjrHSfuZZKlKz3mYPutOtLZxrt2ODKLWHyDrfC9M641ynynjEN9rSfuOxwFu8SMpD/nWcDfxCp2jYrKEkVhWpKamoyagYVheJlZTV1A0pqYjUQi5Kh72lpVUJ7ECPdX7R9sYwCx3meQ27eFjKfE/o0JFM3T7LjSjbzRYLpAzZQ0GHnA2Wig3Y1bC8DpssEimbp+4Rj3my7f1bInnzZHVYrixl2EaDBpvLz/8HV8qg7UiCNgkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMTItMThUMTc6MjM6MzcrMDA6MDDm3bcIAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTEyLTE4VDE3OjIzOjM3KzAwOjAwl4APtAAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGXRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAAxMTc0m5NGzwAAABh0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA4OTE0q5sjYgAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNjM5ODQ4MjE3QYRBnQAAAA90RVh0VGh1bWI6OlNpemUAMEJClKI+7AAAADJ0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL3RtcC90bXBfMzU0NTk5MzY1MTEwNDQzOTU4My5wbmfCtA9FAAAAAElFTkSuQmCC"

function updateXML(){
  return '<?xml version="1.0" encoding="utf-8"?>\
  <DieCutLabel Version="8.0" Units="twips" MediaType="Default">\
    <PaperOrientation>Landscape</PaperOrientation>\
    <Id>ReturnAddress</Id>\
    <PaperName>30256 Shipping</PaperName>\
    <DrawCommands>\
      <RoundRectangle X="0" Y="0" Width="3331" Height="5715" Rx="270" Ry="270"/>\
    </DrawCommands>\
    \
    <ObjectInfo>\
    <TextObject>\
      <Name>TEXT_3</Name>\
      <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
      <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>\
      <LinkedObjectName></LinkedObjectName>\
      <Rotation>Rotation0</Rotation>\
      <IsMirrored>False</IsMirrored>\
      <IsVariable>False</IsVariable>\
      <HorizontalAlignment>Center</HorizontalAlignment>\
      <VerticalAlignment>Top</VerticalAlignment>\
      <TextFitMode>None</TextFitMode>\
      <UseFullFontHeight>True</UseFullFontHeight>\
      <Verticalized>False</Verticalized>\
      <StyledText>\
        <Element>\
        <String>'+document.getElementById('B').value+'\n'+
        '</String>\
          <Attributes>\
            <Font Family="Arial" Size="18" Bold="true" Italic="False" Underline="False" Strikeout="False"/>\
            <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
          </Attributes>\
        </Element>\
      </StyledText>\
    </TextObject>\
    <Bounds X="0" Y="300" Width="5715" Height="3500"/>\
    </ObjectInfo>\
    \
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
      <Bounds X="350" Y="690" Width="1500" Height="3500"/>\
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
      <Bounds X="2000" Y="690" Width="3550" Height="3500"/>\
    </ObjectInfo>\
    <ObjectInfo>\
      <ImageObject>\
          <Name>GoogleLogo</Name>\
          <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
          <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
          <LinkedObjectName></LinkedObjectName>\
          <Rotation>Rotation0</Rotation>\
          <IsMirrored>False</IsMirrored>\
          <IsVariable>False</IsVariable>\
          <Image>'+imagebase64+'</Image>\
          <ScaleMode>Uniform</ScaleMode>\
          <BorderWidth>0</BorderWidth>\
          <BorderColor Alpha="255" Red="0" Green="0" Blue="0" />\
          <HorizontalAlignment>Center</HorizontalAlignment>\
          <VerticalAlignment>Center</VerticalAlignment>\
      </ImageObject>\
      <Bounds X="2225" Y="2800" Width="1500" Height="1000" />\
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

