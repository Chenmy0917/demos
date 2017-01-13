 public static string WordToHtml(string path, string savePath, string wordFileName){

              //在此处放置用户代码以初始化页面
              Microsoft.Office.Interop.Word.Application word = new Word.Application();

              Type wordType = word.GetType();

              Word.Documents docs = word.Documents;

             //打开文件
             Type docsType = docs.GetType();
             Word.Document doc = (Word.Document)docsType.InvokeMember("Open", System.Reflection.BindingFlags.InvokeMethod, null, docs, new Object[] { path, true, true });

             //转换格式，另存为
             Type docType = doc.GetType();

             string wordSaveFileName = savePath;

             string strSaveFileName = savePath+wordFileName + ".html";

             object saveFileName = (object)strSaveFileName;

             docType.InvokeMember("SaveAs", System.Reflection.BindingFlags.InvokeMethod, null, doc, new object[] { saveFileName, Word.WdSaveFormat.wdFormatFilteredHTML });

             docType.InvokeMember("Close", System.Reflection.BindingFlags.InvokeMethod, null, doc, null);

             //退出 Word
             wordType.InvokeMember("Quit", System.Reflection.BindingFlags.InvokeMethod, null, word, null);

             return saveFileName.ToString();
}