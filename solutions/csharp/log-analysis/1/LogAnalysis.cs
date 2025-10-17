using System.Text.RegularExpressions;

public static class LogAnalysis 
{
    public static string SubstringAfter(this string str, string delimiter) {
        string pattern = $"{delimiter}(.+)";
        
        Regex reg = new Regex(pattern);
        Match match = reg.Match(str);
        
        return match.Success ? match.Groups[1].Value : string.Empty;
    }

    public static string SubstringBetween(this string str, string deli1, string deli2) {
        string pattern = $@"\{deli1}(.+)\{deli2}";

        Regex reg = new Regex(pattern);
        Match match = reg.Match(str);

        return match.Success ? match.Groups[1].Value : string.Empty;
    }
    
    public static string Message(this string str) => str.SubstringAfter(": ");

    public static string LogLevel(this string str) => str.SubstringBetween("[", "]");
}