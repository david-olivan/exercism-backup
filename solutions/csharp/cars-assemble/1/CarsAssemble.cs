static class AssemblyLine
{
    public static double SuccessRate(int speed)
    {
        return speed switch {
                10 => 0.77,
                9 => 0.8,
                > 4 => 0.9,
                > 0 => 1.0,
                _ => 0.0
        };
    }
    
    public static double ProductionRatePerHour(int speed) => 221 * speed * AssemblyLine.SuccessRate(speed);

    public static int WorkingItemsPerMinute(int speed) => (int)(AssemblyLine.ProductionRatePerHour(speed) / 60);
}
