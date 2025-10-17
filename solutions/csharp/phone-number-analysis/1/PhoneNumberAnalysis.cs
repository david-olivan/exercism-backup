using System.Text.RegularExpressions;

public static class PhoneNumber
{
    public static (bool IsNewYork, bool IsFake, string LocalNumber) Analyze(string phoneNumber)
    {
        Regex reg = new Regex(@"([0-9]{3})-([0-9]{3})-([0-9]{4})");
        Match match = reg.Match(phoneNumber);

        return (
            "212" == match.Groups[1].Value, 
            "555" == match.Groups[2].Value, 
            match.Groups[3].Value
        );
    }

    public static bool IsFake((bool IsNewYork, bool IsFake, string LocalNumber) phoneNumberInfo) => phoneNumberInfo.IsFake;
}
