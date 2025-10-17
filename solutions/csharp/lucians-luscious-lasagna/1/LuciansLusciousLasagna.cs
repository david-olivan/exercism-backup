class Lasagna
{
    public int ExpectedMinutesInOven() => 40;

    public int RemainingMinutesInOven(int actualMinutes) => new Lasagna().ExpectedMinutesInOven() - actualMinutes;

    public int PreparationTimeInMinutes(int layers) => layers * 2;

    public int ElapsedTimeInMinutes(int layers, int timeInOven) => new Lasagna().PreparationTimeInMinutes(layers) + timeInOven;
}
