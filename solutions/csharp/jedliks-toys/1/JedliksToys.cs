class RemoteControlCar
{
    private int _distanceDriven;
    private int _batteryLevel = 100;
    
    public static RemoteControlCar Buy() => new();

    public string DistanceDisplay() => $"Driven {_distanceDriven} meters";

    public string BatteryDisplay() => $"Battery {(_batteryLevel > 0 ? $"at {_batteryLevel}%" : "empty")}";

    public void Drive()
    {
        if (_batteryLevel > 0) {
            _distanceDriven += 20;
            _batteryLevel--;
        }
    }
}
