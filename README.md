# DymoPrinterProject

For this project, I was tasked with creating an app that could take info from a form and send it to a DYMO printer using a google sheet to store the form info and the Dymo SDK to format and print the label. I was not familiar with the Dymo software so I spent a few days compiling information from several sources the two most helpful of which were:

https://www.defproc.co.uk/tutorial/labelin-made-easy/ and http://labelwriter.com/software/dls/sdk/docs/DYMOLabelFrameworkJavaScriptHelp/symbols/dymo.label.framework.ILabel.html

Using this info, I was able to sus out the XML structure for the Dymo label and work out how to use the SDK to preview the results. With this methodology, I was able to optimize the software for my purposes and make the final product. It is currently built for the "30256 Shipping" shipping label but that can easily be changed. 

The form was built out using materialize for simplicity. This is one of my first projcets using materialize so there was a big learning curve, but I'm pleased with how well it turned out. The final product will be based in a google apps script and will serve the form data directly to a google sheet in addition to being able to print from the form. 

I also included a simple version of a working copy ("Working Sample" folder) of a simpler version of the Dymo web interface so that anyone stumbling on this in the future would have a good and easy place to start their work since I couldnt find one when I started.
