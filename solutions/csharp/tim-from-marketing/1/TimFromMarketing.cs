static class Badge
{
    public static string Print(int? id, string name, string? department)
    {
        department ??= "OWNER";
        var idPart = id is not null ? $"[{id}] - " : "";
        return $"{idPart}{name} - {department.ToUpper()}";
    }
}
