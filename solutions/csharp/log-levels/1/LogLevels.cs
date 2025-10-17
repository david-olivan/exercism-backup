using System.Text.RegularExpressions;

static class LogLine
{
    public static string Message(string logLine)
    {
        Regex reg = new Regex(@"\]: (.+)");
        Match match = reg.Match(logLine);

        return match.Success ? match.Groups[1].Value.Trim() : string.Empty;
    }

    public static string LogLevel(string logLine)
    {
        Regex reg = new Regex(@"\[(.+)\]:");
        Match match = reg.Match(logLine);

        return match.Success ? match.Groups[1].Value.ToLower() : string.Empty;
    }

    public static string Reformat(string logLine)
    {
        string message = LogLine.Message(logLine);
        string level = LogLine.LogLevel(logLine);

        return $"{message} ({level})";
    }
}
