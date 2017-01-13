public static  void PPTToHtml(string path, string savePath, string wordFileName)
{
	Microsoft.Office.Interop.PowerPoint.Application ppApp = new Microsoft.Office.Interop.PowerPoint.Application();
	string strSourceFile = path;
	string strDestinationFile = savePath+wordFileName+".html";
	Microsoft.Office.Interop.PowerPoint.Presentation prsPres = ppApp.Presentations.Open(strSourceFile, MsoTriState.msoTrue, MsoTriState.msoFalse, MsoTriState.msoFalse);
	prsPres.SaveAs(strDestinationFile, Microsoft.Office.Interop.PowerPoint.PpSaveAsFileType.ppSaveAsHTML, MsoTriState.msoTrue);
	prsPres.Close();
	ppApp.Quit();

}