public class Lasagna {
    private static final int MINUTES_IN_OVEN = 40;
    private static final int MINUTES_PER_LAYER = 2;
    
    public int expectedMinutesInOven() {
        return MINUTES_IN_OVEN;
    }

    public int remainingMinutesInOven(int actualMinutes) {
        return expectedMinutesInOven() - actualMinutes;
    }

    public int preparationTimeInMinutes(int layers) {
        return layers * MINUTES_PER_LAYER;
    }

    public int totalTimeInMinutes(int layers, int minutesInOven) {
        return preparationTimeInMinutes(layers) + minutesInOven;
    }
}
